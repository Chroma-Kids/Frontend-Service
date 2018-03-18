import { database } from '../../firebase'

export const FETCH_TEACHERS = 'fetch_teachers';
export const TEACHER_STATUS = 'post_status';

export function getTeachers() {
  return dispatch => {
    dispatch({
      type: TEACHER_STATUS,
      payload: true
    });
    database.on('value', snapshot => {
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

export function saveTeacher(post, uid) {
  return dispatch => database.push({ ...post, uid });
}

export function deleteTeacher(id) {
  return dispatch => database.child(id).remove();
}

// export function saveComment(comment, id, uid) {
//   return dispatch => database.child(id).child('comments').push({ content: comment.content, uid })
// }
//
// export function deleteComment(postId, commentId) {
//   return dispatch => database.child(postId).child('comments').child(commentId).remove();
// }
