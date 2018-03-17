// #region imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
// import { getLogin } from '../../redux/actions/LoginActions';
// import Login from './Login';
import { reduxForm } from 'redux-form';
import { login, getUser } from '../../redux/actions/UserActions';
import InputField from '../../components/inputfield/InputField'
import { Link } from 'react-router-dom';

// #endregion

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class Login extends Component {

    constructor(props) {
      super(props);
      this.state = { ...INITIAL_STATE };
    }

    submitLogin(event) {
      event.preventDefault();
      this.props.login(this.state.email, this.state.password);

      // this.props.login({ email, password }).then((data) => {
      //     if (data.payload.errorCode) {
      //         this.setState({ message: data.payload.errorMessage });
      //     } else {
      //         browserHistory.push('/profile');
      //     }
      // }
    }



  render() {

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
            </form>

            <p className="m-t"> <small>Crafted with love at Chroma Kids © 2018</small> </p>
          </div>
        </div>
      </div>

    );
  }
}

// #region Redux
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        login
    }, dispatch);
};

// #endregion

export default connect(mapStateToProps, mapDispatchToProps)(Login);
