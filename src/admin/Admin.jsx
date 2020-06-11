import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import './Admin.scss';

class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    }
  }

  onChange = (editorState) => {
    this.setState({ editorState })
  }

  render() {
    return (
        <div className="AdminContainer">
            <div style={{color: 'white'}}>Title</div>
            <input></input>
            <div style={{color: 'white'}}>Date</div>
            <input></input>
            <Editor
              editorClassName="jon-editor"
              editorState={this.state.editorState}
              onEditorStateChange={this.onChange}
            />
            <AmplifySignOut />
        </div>
    )
  }

}

export default withAuthenticator(Admin);
