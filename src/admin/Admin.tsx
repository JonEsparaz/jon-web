import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import { EmptyProps } from '../util';
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignOut } from '@aws-amplify/ui-react';
import './Admin.scss';

interface State {
  editorState: EditorState
}

class Admin extends React.Component<EmptyProps, State> {

  constructor(props: EmptyProps) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
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
          <div style={{ color: 'white' }}>Title</div>
          <input></input>
          <div style={{ color: 'white' }}>Date</div>
          <input></input>
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
