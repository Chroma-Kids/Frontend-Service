import { database } from '../../firebase'

// export teacher-not-assigned
export const FETCH_TEACHERS_NOT_ASSIGNED = 'fetch_teachers-not-assigned';
export const TEACHER_NOT_ASSIGNED_STATUS = 'teacher-not-assigned-status';

// Actions for teachers not assigned to classrooms
export function getTeachersNotAssigned() {
  return dispatch => {
    dispatch({
      type: TEACHER_NOT_ASSIGNED_STATUS,
      payload: true
    });
    database.ref('teachers-non-assigned/').on('value', snapshot => {
      console.log(snapshot.val())
      dispatch({
        type: FETCH_TEACHERS_NOT_ASSIGNED,
        payload: snapshot.val()
      });
      dispatch({
        type: TEACHER_NOT_ASSIGNED_STATUS,
        payload: false
      });
    }, () => {
      dispatch({
        type: TEACHER_NOT_ASSIGNED_STATUS,
        payload: -1
      });
    });
  };
}
