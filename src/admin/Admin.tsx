import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import { EmptyProps } from '../util';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignOut } from '@aws-amplify/ui-react';
import { Storage } from 'aws-amplify';
import './Admin.scss';

interface State {
  editorState: EditorState | string
  title: string;
  date: string;
  previewImage: string;
}

class Admin extends React.Component<EmptyProps, State> {

  constructor(props: EmptyProps) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      title: '',
      date: '',
      previewImage: '',
    }
  }

  onChange = (editorState: EditorState) => {
    this.setState({ editorState })
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

        const down = await Storage.get(filename)

        console.log(down, upload)
        const previewImage = "" + filename
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
          <Editor
            editorClassName="jon-editor"
            editorState={this.state.editorState as EditorState}
            onEditorStateChange={this.onChange}
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
                  const download = "https://jonweb57de4f1ecfbb4d6caf3580e93fd53c39222929-prod.s3.us-east-2.amazonaws.com/public/" + filename;
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
        </div>
      </AmplifyAuthenticator >
    )
  }
}

export default Admin;
