import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import LoginContainer from './views/login/LoginContainer';
import Register from './views/register';
import App from './components/app/App';
import LoadingComponent from './components/loading/Loading';
import configureStore from './redux/store/configureStore';
import AuthenticatedRoutes from './components/Router/AuthenticatedRoutes';
import UnauthenticatedRoutes from './components/Router/UnauthenticatedRoutes';
import Session from './components/Router/Session';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';
import 'react-select/dist/react-select.css';

import { DashboardViewContainer } from './redux/containers/dashboard/index';
import { ClassroomsListContainer, ClassroomViewContainer, ClassroomEditContainer } from './redux/containers/classrooms/index';
import { TeachersListContainer, TeacherViewContainer, TeacherEditContainer } from './redux/containers/teachers/index';
import { StudentsListContainer, StudentViewContainer, StudentEditContainer } from './redux/containers/students/index';

export const ROUTES = {
  NO_AUTHENTICATED: {
    LOGIN: '/login',
    REGISTER: '/register',
  },
  AUTHENTICATED: {
    DASHBOARD: '/dashboard',
    TEACHERS: '/teachers',
    TEACHER: (teacherId) => `${ROUTES.AUTHENTICATED.TEACHERS}/${teacherId}`,
    TEACHER_EDIT: (teacherId) => `${ROUTES.AUTHENTICATED.TEACHER(teacherId)}/edit`,
    CLASSROOMS: '/classrooms',
    CLASSROOM: (classroomId) => `${ROUTES.AUTHENTICATED.CLASSROOMS}/${classroomId}`,
    CLASSROOM_EDIT: (classroomId) => `${ROUTES.AUTHENTICATED.CLASSROOM(classroomId)}/edit`,
    STUDENTS: 'students',
    STUDENT: (studentId) => `${ROUTES.AUTHENTICATED.STUDENTS}/${studentId}`,
    STUDENT_EDIT: (studentId) => `${ROUTES.AUTHENTICATED.STUDENT(studentId)}/edit`,
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
              <Route exact path={ROUTES.AUTHENTICATED.DASHBOARD} component={DashboardViewContainer}/>

              <Route exact path={ROUTES.AUTHENTICATED.TEACHERS} component={TeachersListContainer}/>
              <Route exact path={ROUTES.AUTHENTICATED.TEACHER(':teacherId')} component={TeacherViewContainer}/>
              <Route exact path={ROUTES.AUTHENTICATED.TEACHER_EDIT(':teacherId')} component={TeacherEditContainer}/>

              <Route exact path={ROUTES.AUTHENTICATED.CLASSROOMS} component={ClassroomsListContainer}/>
              <Route exact path={ROUTES.AUTHENTICATED.CLASSROOM(':classroomId')} component={ClassroomViewContainer}/>
              <Route exact path={ROUTES.AUTHENTICATED.CLASSROOM_EDIT(':classroomId')} component={ClassroomEditContainer}/>

              <Route exact path={ROUTES.AUTHENTICATED.STUDENTS} component={StudentsListContainer}/>
              <Route exact path={ROUTES.AUTHENTICATED.STUDENT(':studentId')} component={StudentViewContainer}/>
              <Route exact path={ROUTES.AUTHENTICATED.STUDENT_EDIT(':studentId')} component={StudentEditContainer}/>
            </App>
          </AuthenticatedRoutes>
        </LoadingComponent>
      </Session>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
