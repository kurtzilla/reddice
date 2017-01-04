import React, { Component } from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux'; 
import { userSignupRequest } from '../../actions/SignupActions';

class SignupPage extends Component {
  render() {
    const userSignupRequest = this.props;

    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm userSignupRequest={userSignupRequest} />
        </div>
      </div>
    );
  }
}

// here we rely on thunk to provide component - via connect
SignupPage.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
};

// params are mapStateToProps and mapDispatchToProps
export default connect(null, { userSignupRequest })(SignupPage);