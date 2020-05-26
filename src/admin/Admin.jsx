import React from 'react';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import './Admin.scss';
Amplify.configure(awsconfig);

class Admin extends React.Component {

  render() {
    return (
        <div>
            <AmplifySignOut />
        </div>
    )
  }

}

export default withAuthenticator(Admin);
