import { database } from '../../firebase'

export const FETCH_TEACHERS = 'fetch_teachers';
export const TEACHER_STATUS = 'teacher_status';

export function getTeachers() {
  return dispatch => {
    dispatch({
      type: TEACHER_STATUS,
      payload: true
    });
    database.ref('teachers/').on('value', snapshot => {
      dispatch({
        type: FETCH_TEACHERS,
        payload: snapshot.val()
      });
      dispatch({
        type: TEACHER_STATUS,
        payload: false
      });
    }, () => {
      dispatch({
        type: TEACHER_STATUS,
        payload: -1
      });
    });
  };
}

export function createTeacher(teacher, uid) {
  return dispatch => database.ref('teachers/').push({ ...teacher });
}

export function saveTeacher(teacher, uid) {
  return dispatch => database.ref('teachers/').push({ ...teacher, uid });
}

export function deleteTeacher(id) {
  return dispatch => database.ref('teachers/').child(id).remove();
}

// export function saveComment(comment, id, uid) {
//   return dispatch => database.child(id).child('comments').push({ content: comment.content, uid })
// }
//
// export function deleteComment(teacherId, commentId) {
//   return dispatch => database.child(teacherId).child('comments').child(commentId).remove();
// }
