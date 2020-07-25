import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import { EmptyProps } from '../util';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignOut } from '@aws-amplify/ui-react';
import { Storage, API } from 'aws-amplify';
import * as query from '../graphql/queries';
import * as mutation from '../graphql/mutations';
import { GRAPHQL_AUTH_MODE, GraphQLResult } from '@aws-amplify/api/lib/types';
import { CreatePostInput, ListPostsQuery } from '../API';
import './Admin.scss';

interface State {
  editorState: EditorState | string
  title: string;
  date: string;
  previewImage: string;
  listPosts: NonNullable<ListPostsQuery['listPosts']>['items'];
  selected: string;
  tag: string;
  tags: Array<string | null>;
  status: string;
}

class Admin extends React.Component<EmptyProps, State> {

  constructor(props: EmptyProps) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      title: '',
      date: '',
      previewImage: '',
      listPosts: [],
      selected: 'none',
      tag: '',
      tags: [],
      status: 'unlisted'
    }

    this.getPosts();
  }

  componentDidUpdate(_prevProps: EmptyProps, prevState: State): void {
    if (prevState.selected !== this.state.selected) {
      this.handleSelectPost();
    }
  }

  onChange = (editorState: EditorState): void => {
    this.setState({ editorState })
  }

  handleSelectPost(): void {
    if (this.state.selected !== 'none') {
      const temp = this.state.listPosts?.filter(item => item?.title === this.state.selected)[0];
      console.log(temp)
      if (temp) {
        const editor = this.convertFromHTML(temp.content)
        this.setState({ title: temp.title, date: temp.date, previewImage: temp.previewImage, editorState: editor, tags: temp.tags ?? [], status: temp.status ?? 'unlisted' })
      }

    }
  }

  addTag(): void {
    if (this.state.tag) {
      const tags = this.state.tags;
      tags.push(this.state.tag.toLowerCase());
      this.setState({ tags, tag: '' })
    }
  }

  removeTag(index: number): void {
    const tags = this.state.tags;
    tags.splice(index, 1);
    this.setState({ tags })
  }

  async getPosts(): Promise<void> {
    try {
      const json = await API.graphql({
        query: query.listPosts,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      }) as GraphQLResult<ListPostsQuery>

      if (json.data?.listPosts?.items)
        this.setState({ listPosts: json.data.listPosts.items })
    } catch (e) {
      console.error(e)
    }
  }

  async save(): Promise<void> {
    const html = this.convertToHTML(this.state.editorState as EditorState);
    const post: CreatePostInput = { id: this.state.title.replace('.', ''), title: this.state.title, date: this.state.date, previewImage: this.state.previewImage, content: html, status: this.state.status, tags: this.state.tags };
    try {
      const res = await API.graphql({
        query: mutation.createPost,
        variables: { input: post },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
      console.log(res)
    } catch (e) {
      console.error(e)
    }
  }

  async update(): Promise<void> {
    const html = this.convertToHTML(this.state.editorState as EditorState);
    const post: CreatePostInput = { id: this.state.title.replace('.', ''), title: this.state.title, date: this.state.date, previewImage: this.state.previewImage, content: html, status: this.state.status, tags: this.state.tags };
    try {
      const res = await API.graphql({
        query: mutation.updatePost,
        variables: { input: post },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
      console.log(res)
    } catch (e) {
      console.error(e)
    }
  }

  async handleImageUpload(event: React.ChangeEvent<HTMLInputElement>): Promise<void> {
    const temp = event?.target?.files;
    if (temp) {
      try {
        const file = temp[0]
        const filename = +new Date() + file.name;
        const upload = await Storage.put(filename, file, {
          contentType: "image/*",
          acl: "public-read"
        })

        console.log(upload)

        const previewImage = "https://jonweb65cef38d4e0542d187d7fd8936c1eb11222929-prod.s3.us-east-2.amazonaws.com/public/" + filename
        this.setState({ previewImage })
      } catch (err) {
        console.error(err)
      }
    }
  }

  convertFromHTML(item: string): EditorState {
    const { contentBlocks, entityMap } = htmlToDraft(item);
    const newEditorState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    return EditorState.createWithContent(newEditorState)
  }

  convertToHTML(item: EditorState): string {
    const contentState = item.getCurrentContent();
    const html = draftToHtml(convertToRaw(contentState));
    return html;
  }

  render() {
    return (
      <AmplifyAuthenticator>
        <AmplifySignIn slot="sign-in">
          <div slot="secondary-footer-content"></div>
        </AmplifySignIn>
        <AmplifySignOut />
        <div className="AdminContainer">
          <input placeholder="title" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })}></input>
          <input placeholder="date" type="date" value={this.state.date} onChange={(e) => this.setState({ date: e.target.value })}></input>
          <label>preview image</label>
          <input type="file" accept="image/*" onChange={(e) => this.handleImageUpload(e)}
          ></input>
          {this.state.previewImage ? <img src={this.state.previewImage} alt='' style={{ width: 100 }}></img> : null}
          <select value={this.state.selected} onChange={(e) => this.setState({ selected: e.target.value })}>
            <option value={'none'}>none selected</option>
            {this.state.listPosts?.map((item, index) => { return <option key={index} value={item?.title}>{item?.title}</option> })}
          </select>
          <Editor
            editorClassName="jon-editor"
            editorState={this.state.editorState as EditorState}
            onEditorStateChange={this.onChange}
            spellCheck
            toolbar={{
              options: ['inline', 'blockType', 'fontSize', 'list', 'link', 'textAlign', 'image', 'history'],
              inline: {
                options: ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript'],
              },
              list: {
                options: ['unordered', 'ordered'],
              },
              image: {
                uploadEnabled: true,
                uploadCallback: async (file: any) => {
                  const filename = +new Date() + file.name;
                  await Storage.put(filename, file, {
                    contentType: "image/*",
                    acl: "public-read"
                  })
                  const download = "https://jonweb65cef38d4e0542d187d7fd8936c1eb11222929-prod.s3.us-east-2.amazonaws.com/public/" + filename;
                  return { data: { link: download } }
                },
                previewImage: true,
                alt: {
                  present: true,
                  mandatory: true
                },
                defaultSize: {
                  height: 'auto',
                  width: '100%',
                },
                alignmentEnabled: false
              }
            }}
          />

          <input value={this.state.tag} onChange={(e) => this.setState({ tag: e.target.value })}></input>
          <button className="TagsButton" onClick={() => this.addTag()}>
            + ADD
            </button>
          <div>
            {this.state.tags.map((tag, index) => {
              return (
                <span
                  key={index}
                  className="Tag"
                  onClick={() => this.removeTag(index)}
                >
                  {tag}
                </span>
              );
            })}
          </div>
          <select value={this.state.status} onChange={(e) => this.setState({ status: e.target.value })}>
            <option value={'unlisted'}>unlisted</option>
            <option value={'private'}>private</option>
          </select>
          <br />

          <button onClick={() => this.save()}>save</button>
          <button onClick={() => this.update()}>update</button>
        </div>
      </AmplifyAuthenticator >
    )
  }
}

export default Admin;
