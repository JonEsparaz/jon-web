import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import { EmptyProps } from '../util';
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignOut } from '@aws-amplify/ui-react';
import './Admin.scss';

interface State {
  editorState: EditorState
  title: string;
  date: string;
  image: string;
  toSave: { id: string, title: string, content: string, previewImage: string }
}

class Admin extends React.Component<EmptyProps, State> {

  constructor(props: EmptyProps) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      title: '',
      date: '',
      image: '',
      toSave: { id: '', title: '', content: '', previewImage: '' },
    }
  }

  onChange = (editorState: EditorState) => {
    this.setState({ editorState })
  }

  render() {
    return (
      <AmplifyAuthenticator>
        <AmplifySignIn slot="sign-in">
          <div slot="secondary-footer-content"></div>
        </AmplifySignIn>
        <div className="AdminContainer">
          <AmplifySignOut />
          <input placeholder="title"></input>
          <input placeholder="date" type="date"></input>
          <label>preview image</label>
          <input type="file"></input>
          <Editor
            editorClassName="jon-editor"
            editorState={this.state.editorState}
            onEditorStateChange={this.onChange}
          />
        </div>
      </AmplifyAuthenticator >
    )
  }
}

export default Admin;
