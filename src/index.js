// #region imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers/index';

// import Login from './Containers/Login';
// import CreateAccount from './Containers/CreateAccount';
import LoadingComponent from './components/loading/Loading';
import App from './components/app/App';
// import PostDetail from './Containers/PostDetail';
import ListTeachers from './views/home';
import Login from './views/login';
import Register from './views/register';
// import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import './style/style.css';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

// #region constants
const ELEMENT_TO_BOOTSTRAP = 'root';
// #endregion

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <LoadingComponent>
        <Switch>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <App>
            {/*<Route path="/teacher/:id" component={TeacherDetail}/>*/}
            <Route exact path="/home" component={ListTeachers}/>
          </App>
        </Switch>
      </LoadingComponent>
    </BrowserRouter>
  </Provider>,
  document.getElementById(ELEMENT_TO_BOOTSTRAP));
registerServiceWorker();
