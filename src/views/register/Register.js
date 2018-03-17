// #region imports
import React, { PureComponent } from 'react';
import { type Match, type Location, type RouterHistory } from 'react-router';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Field, reset } from 'redux-form';
// import InputField from '../../components/inputfield/InputField'
// #region imports

class Register extends PureComponent<Props, State> {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
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
              <form className="m-t" role="form" action="login.html">
                  <div className="form-group">
                      <input type="text" className="form-control" placeholder="Name" required=""/>
                  </div>
                  <div className="form-group">
                      <input type="email" className="form-control" placeholder="Email" required=""/>
                  </div>
                  <div className="form-group">
                      <input type="password" className="form-control" placeholder="Password" required=""/>
                  </div>

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

export default Register;


// import React, { Component } from 'react';
// import InputField from '../../components/inputfield/InputField'
// // import FooterFormButton from '../Components/FooterFormButton';
// // import SimpleBox from '../Components/SimpleBox';
// import { createAccount } from '../../redux/actions/UserActions';
// import { connect } from 'react-redux';
// // import ErrorAlert from '../Components/ErrorAlert';
//
// class Register extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//       confirmPassword: '',
//       error: ''
//     };
//   }
//
//   isValid() {
//     const { email, password, confirmPassword } = this.state;
//
//     if (email === '' || password === '' || confirmPassword === '') {
//       this.setState({
//         error: 'Please enter in all fields'
//       });
//       return false;
//     }
//
//     if (password !== confirmPassword) {
//       this.setState({
//         error: 'Please make sure your passwords match'
//       });
//       return false;
//     }
//
//     return true;
//   }
//
//   submitAccount(event) {
//     event.preventDefault();
//     if (!this.isValid()) {
//       return;
//     }
//     this.props.createAccount(this.state.email, this.state.password).then(() => {
//       this.props.history.replace('/home');
//     }).catch(err => {
//       this.setState({
//         error: err.message
//       });
//     });
//   }
//
//
//
//   render() {
//     return (
//       <div>
//         <form onSubmit={(event) => this.submitAccount(event)}>
//           <InputField id="email" type="text" label="Email"
//                       inputAction={(event) => this.setState({ email: event.target.value })}
//                       />
//           <InputField id="password" type="password" label="Password"
//                       inputAction={(event) => this.setState({ password: event.target.value })}
//                       />
//           <InputField id="confirm-password" type="password" label="Confirm Password"
//                       inputAction={(event) => this.setState({ confirmPassword: event.target.value })}
//                       />
//           <button type="submit" >Create</button>
//         </form>
//       </div>
//     );
//   }
// }
//
// export default connect(null, { createAccount })(Register);
