import React, { Component } from 'react';
import InputField from '../../components/inputfield/InputField'
import { login, getUser, googleLogin, twitterLogin } from '../../redux/actions/UserActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';

// #endregion

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }

  componentWillMount() {
    if (this.props.user !== null) {
      this.props.history.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== null) {
      nextProps.history.push('/');
    }
  }

  submitLogin(event) {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password).catch(err => {
      this.setState({
        error: err
      });
    });
  }

  render() {

    const { googleLogin, twitterLogin } = this.props;


    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <div className="loginView">

        <div className="middle-box text-center loginscreen animated fadeInDown">
          <div>
            <div>
              <h1 className="logo-name">CK+</h1>
            </div>
            <h3>Welcome to CK+</h3>
            <p>Your nursury management app</p>
            <p>Login in. To see it in action.</p>

            <form onSubmit={event => { this.submitLogin(event);}}>
              <InputField id="email"
                type="text"
                label="Email"
                inputAction={(event) => this.setState({
                  email: event.target.value
                }) } />
              <InputField id="password"
                type="password"
                label="Password"
                inputAction={(event) => this.setState({
                  password: event.target.value
                }) } />
              <button type="submit" className="btn btn-primary block full-width m-b">Login</button>

              <p className="text-muted text-center"><small>Do not have an account?</small></p>
              <Link to={'/register'} className="btn btn-sm btn-white btn-block">Create an account</Link>
              <br />
              <p className="text-muted text-center"><small>Do have social media account?</small></p>
            </form>
            <button type="button" className="btn btn-danger block full-width m-b" onClick={googleLogin}>Google</button>

            <p className="m-t"> <small>Crafted with love at Chroma Kids © 2018</small> </p>
          </div>
        </div>
      </div>

    );
  }
}

function mapStateToProps(state, ownProps) {
  return { user: state.user };
}

export default connect(mapStateToProps, { login, getUser, googleLogin, twitterLogin })(Login);
