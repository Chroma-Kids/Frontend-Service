const PENDING = '_PENDING';
const FULFILLED = '_FULFILLED';
const REJECTED = '_REJECTED';

// User
export const GET_USER = 'GET_USER';
export const USER_STATUS = 'USER_STATUS';
export const GOOGLE_LOGIN = 'GOOGLE_LOGIN';
export const GOOGLE_LOGIN_PENDING = GOOGLE_LOGIN + PENDING;
export const GOOGLE_LOGIN_FULFILLED = GOOGLE_LOGIN + FULFILLED;
export const GOOGLE_LOGIN_REJECTED = GOOGLE_LOGIN + REJECTED;
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_PENDING = LOGOUT + PENDING;
export const LOGOUT_FULFILLED = LOGOUT + FULFILLED;
export const LOGOUT_REJECTED = LOGOUT + REJECTED;
export const LOGIN = 'LOGIN';
export const CREATE_USER = 'CREATE_USER';

// Teacher not assigned
export const FETCH_TEACHERS_NOT_ASSIGNED = 'FETCH_TEACHERS_NOT_ASSIGNED';
export const TEACHER_NOT_ASSIGNED_STATUS = 'TEACHER_NOT_ASSIGNED_STATUS';

// Teacher
export const FETCH_TEACHERS = 'FETCH_TEACHERS';
export const TEACHER_STATUS = 'TEACHER_STATUS';
export const CREATE_TEACHER = 'CREATE_TEACHER';
export const SAVE_TEACHER = 'SAVE_TEACHER';
export const SAVE_TEACHER_PENDING = SAVE_TEACHER + PENDING;
export const SAVE_TEACHER_FULFILLED = SAVE_TEACHER + FULFILLED;
export const SAVE_TEACHER_REJECTED = SAVE_TEACHER + REJECTED;
export const DELETE_TEACHER = 'DELETE_TEACHER';
export const MOVE_TEACHER_TO_CLASSROOM = 'MOVE_TEACHER_TO_CLASSROOM';
export const FETCH_TEACHER = 'FETCH_TEACHER';
export const FETCH_TEACHER_PENDING = FETCH_TEACHER + PENDING;
export const FETCH_TEACHER_FULFILLED = FETCH_TEACHER + FULFILLED;
export const FETCH_TEACHER_REJECTED = FETCH_TEACHER + REJECTED;
export const ADD_TRAJECTORY_TEACHER = 'ADD_TRAJECTORY_TEACHER';

// Classroom
export const FETCH_CLASSROOMS = 'FETCH_CLASSROOMS';
export const FETCH_CLASSROOMS_PENDING = FETCH_CLASSROOMS + PENDING;
export const FETCH_CLASSROOMS_FULFILLED = FETCH_CLASSROOMS + FULFILLED;
export const FETCH_CLASSROOMS_REJECTED = FETCH_CLASSROOMS + REJECTED;
export const CLASSROOM_STATUS = 'CLASSROOM_STATUS';
export const CREATE_CLASSROOM = 'CREATE_CLASSROOM';
export const CREATE_CLASSROOM_PENDING = CREATE_CLASSROOM + PENDING;
export const CREATE_CLASSROOM_FULFILLED = CREATE_CLASSROOM + FULFILLED;
export const CREATE_CLASSROOM_REJECTED = CREATE_CLASSROOM + REJECTED;
export const SAVE_CLASSROOM = 'SAVE_CLASSROOM';
export const SAVE_CLASSROOM_PENDING = SAVE_CLASSROOM + PENDING;
export const SAVE_CLASSROOM_FULFILLED = SAVE_CLASSROOM + FULFILLED;
export const SAVE_CLASSROOM_REJECTED = SAVE_CLASSROOM + REJECTED;
export const DELETE_CLASSROOM = 'DELETE_CLASSROOM';
export const FETCH_CLASSROOM = 'FETCH_CLASSROOM';
export const FETCH_CLASSROOM_PENDING = FETCH_CLASSROOM + PENDING;
export const FETCH_CLASSROOM_FULFILLED = FETCH_CLASSROOM + FULFILLED;
export const FETCH_CLASSROOM_REJECTED = FETCH_CLASSROOM + REJECTED;

// Students
export const FETCH_STUDENTS = 'FETCH_STUDENTS';
export const STUDENT_STATUS = 'STUDENT_STATUS';
export const CREATE_STUDENT = 'CREATE_STUDENT';
export const SAVE_STUDENT = 'SAVE_STUDENT';
export const SAVE_STUDENT_PENDING = SAVE_STUDENT + PENDING;
export const SAVE_STUDENT_FULFILLED = SAVE_STUDENT + FULFILLED;
export const SAVE_STUDENT_REJECTED = SAVE_STUDENT + REJECTED;
export const DELETE_STUDENT = 'DELETE_STUDENT';
export const FETCH_STUDENT = 'FETCH_STUDENT';
export const FETCH_STUDENT_PENDING = FETCH_STUDENT + PENDING;
export const FETCH_STUDENT_FULFILLED = FETCH_STUDENT + FULFILLED;
export const FETCH_STUDENT_REJECTED = FETCH_STUDENT + REJECTED;
export const STUDENT_RESET = 'STUDENT_RESET';
