import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import LoginContainer from './views/login/LoginContainer';
import Register from './views/register';
import App from './components/app/App';
import LoadingComponent from './components/loading/Loading';

import { DashboardViewContainer } from './redux/containers/dashboard/index';
import { ClassroomsListContainer, ClassroomViewContainer, ClassroomEditContainer } from './redux/containers/classrooms/index';
import { TeachersListContainer, TeacherViewContainer, TeacherEditContainer } from './redux/containers/teachers/index';
import { StudentsListContainer, StudentViewContainer, StudentEditContainer } from './redux/containers/students/index';

import configureStore from './redux/store/configureStore';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <LoadingComponent>
        <Switch>
          <Route path="/login" component={LoginContainer}/>
          <Route path="/register" component={Register}/>
          <App>
            <Route exact path="/dashboard" component={DashboardViewContainer}/>

            <Route exact path="/teachers" component={TeachersListContainer}/>
            <Route exact path="/teacher/:id" component={TeacherViewContainer}/>
            <Route exact path="/teacher/:id/edit" component={TeacherEditContainer}/>

            <Route exact path="/classrooms" component={ClassroomsListContainer}/>
            <Route exact path="/classroom/:id" component={ClassroomViewContainer}/>
            <Route exact path="/classroom/:id/edit" component={ClassroomEditContainer}/>

            <Route exact path="/students" component={StudentsListContainer}/>
            <Route exact path="/student/:id" component={StudentViewContainer}/>
            <Route exact path="/student/:id/edit" component={StudentEditContainer}/>
          </App>
        </Switch>
      </LoadingComponent>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
