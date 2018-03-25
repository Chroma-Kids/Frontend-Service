import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import LoginContainer from './views/login/LoginContainer';
import Register from './views/register';
import App from './components/app/App';
import LoadingComponent from './components/loading/Loading';
import TeachersContainer from './views/teachers/TeachersContainer';
import Teacher from './views/teacher';
import ListClassrooms from './views/classrooms';
import Classroom from './views/classroom';
import Dashboard from './views/dashboard';
import configureStore from './redux/store/configureStore';
import AuthenticatedRoutes from './components/Router/AuthenticatedRoutes';
import UnauthenticatedRoutes from './components/Router/UnauthenticatedRoutes';
import Session from './components/Router/Session';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';

export const ROUTES = {
  NO_AUTHENTICATED: {
    LOGIN: '/login',
    REGISTER: '/register',
  },
  AUTHENTICATED: {
    DASHBOARD: '/dashboard',
    TEACHERS: '/teachers',
    TEACHER: (teacherId) => `${ROUTES.AUTHENTICATED.TEACHERS}/${teacherId}`,
    CLASSROOMS: '/classrooms',
    CLASSROOM: (classroomId) => `${ROUTES.AUTHENTICATED.CLASSROOMS}/${classroomId}`,
  },
};

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <Session>
        <LoadingComponent>
          <UnauthenticatedRoutes>
            <Route path={ROUTES.NO_AUTHENTICATED.LOGIN} component={LoginContainer}/>
            <Route path={ROUTES.NO_AUTHENTICATED.REGISTER} component={Register}/>
          </UnauthenticatedRoutes>
          <AuthenticatedRoutes>
            <App>
              <Route exact path={ROUTES.AUTHENTICATED.DASHBOARD} component={Dashboard}/>
              <Route exact path={ROUTES.AUTHENTICATED.TEACHERS} component={TeachersContainer}/>
              <Route exact path={ROUTES.AUTHENTICATED.TEACHER(':teacherId')} component={Teacher}/>
              <Route exact path={ROUTES.AUTHENTICATED.CLASSROOMS} component={ListClassrooms}/>
              <Route exact path={ROUTES.AUTHENTICATED.CLASSROOM(':classroomId')} component={Classroom}/>
            </App>
          </AuthenticatedRoutes>
        </LoadingComponent>
      </Session>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
