import React from 'react';
import ReactDOM from 'react-dom';

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

import ListTeachers from './views/teachers';
import Teacher from './views/teacher';
import ListClassrooms from './views/classrooms';
import Classroom from './views/classroom';
import Dashboard from './views/dashboard';

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
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/teachers" component={ListTeachers}/>
            <Route exact path="/teacher/:teacherId" component={Teacher}/>
            <Route exact path="/classrooms" component={ListClassrooms}/>
            <Route exact path="/classroom/:classroomId" component={Classroom}/>
          </App>
        </Switch>
      </LoadingComponent>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
