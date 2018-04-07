// #region imports
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import InputField from '../../components/inputfield/InputField'
import { createAccount, createUser } from '../../redux/actions/UserActions';

// #region imports

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
};

class Register extends PureComponent<Props, State> {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  isValid() {
    const { email, password, confirmPassword } = this.state;

    if (email === '' || password === '' || confirmPassword === '') {
      this.setState({
        error: 'Please enter in all fields'
      });
      return false;
    }

    if (password !== confirmPassword) {
      this.setState({
        error: 'Please make sure your passwords match'
      });
      return false;
    }

    return true;
  }

  submitAccount(event) {
    event.preventDefault();
    if (!this.isValid()) {
      return;
    }
    this.props.createAccount(this.state.email, this.state.password).then((accountCreated) => {

      this.props.createUser(accountCreated.uid, this.state.name, this.state.email)
        .then(() => {
          this.setState(() => ({ ...INITIAL_STATE }));
          this.props.history.replace('/');
        })
        .catch(error => {
          // this.setState(updateByPropertyName('error', error));
        });
    }).catch(err => {
      this.setState({
        error: err.message
      });
    });
  }

  render() {

    // const { handleSubmit } = this.props;

    return (
      <div className="registerView">
        <div className="middle-box text-center loginscreen   animated fadeInDown">
          <div>
              <div>
                  <h1 className="logo-name">CK+</h1>
              </div>
              <h3>Register to CK+</h3>
              <p>Create account to see it in action.</p>
              <form className="m-t" onSubmit={(event) => this.submitAccount(event)}>
                  <InputField
                    id="name"
                    type="text"
                    label="name"
                    inputAction={(event) => this.setState({
                      name: event.target.value
                    }) } />

                  <InputField
                    id="email"
                    type="text"
                    label="email"
                    inputAction={(event) => this.setState({
                      email: event.target.value
                    }) } />

                  <InputField
                    id="password"
                    type="password"
                    label="password"
                    inputAction={(event) => this.setState({
                      password: event.target.value
                    }) } />

                  <InputField
                    id="confirm-password"
                    type="password"
                    label="password again"
                    inputAction={(event) => this.setState({
                      confirmPassword: event.target.value
                    }) } />

                  <button type="submit" className="btn btn-primary block full-width m-b">Register</button>

                  <p className="text-muted text-center"><small>Already have an account?</small></p>

                  <Link to={'/login'} className="btn btn-sm btn-white btn-block">Login</Link>
              </form>
              <p className="m-t"> <small>Crafted with love at Chroma Kids © 2018</small> </p>
          </div>
        </div>
      </div>
    );
  }
  // #endregion
}

export default connect(null, { createAccount, createUser })(Register);
