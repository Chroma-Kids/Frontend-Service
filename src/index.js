import React from 'react';
import ReactDOM from 'react-dom';
import ListTeachers from './views/home';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './views/login';
import Register from './views/register';
import App from './components/app/App';
import LoadingComponent from './components/loading/Loading';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <LoadingComponent>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <App>
            <Route exact path="/" component={ListTeachers}/>
          </App>
        </Switch>
      </LoadingComponent>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
