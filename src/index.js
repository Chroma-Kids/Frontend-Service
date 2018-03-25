import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import LoginContainer from './views/login/LoginContainer';
import Register from './views/register';
import App from './components/app/App';
import LoadingComponent from './components/loading/Loading';
import TeachersContainer from './views/teachers/TeachersContainer';
import Teacher from './views/teacher';
import ListClassrooms from './views/classrooms';
import ListStudents from './views/students';
import Classroom from './views/classroom';
import Dashboard from './views/dashboard';
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
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/teachers" component={TeachersContainer}/>
            <Route exact path="/teacher/:teacherId" component={Teacher}/>
            <Route exact path="/classrooms" component={ListClassrooms}/>
            <Route exact path="/classroom/:classroomId" component={Classroom}/>
            <Route exact path="/students" component={ListStudents}/>
          </App>
        </Switch>
      </LoadingComponent>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
