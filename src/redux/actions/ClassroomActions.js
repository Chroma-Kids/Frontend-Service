import { database } from '../../firebase'

export const FETCH_CLASSROOMS = 'fetch_classrooms';
export const CLASSROOM_STATUS = 'classroom_status';

export function getClassrooms() {
  return dispatch => {
    dispatch({
      type: CLASSROOM_STATUS,
      payload: true
    });
    database.ref('classrooms/').on('value', snapshot => {
      dispatch({
        type: FETCH_CLASSROOMS,
        payload: snapshot.val()
      });
      dispatch({
        type: CLASSROOM_STATUS,
        payload: false
      });
    }, () => {
      dispatch({
        type: CLASSROOM_STATUS,
        payload: -1
      });
    });
  };
}

export function createClassroom(classroom, uid) {
  return dispatch => database.ref('classrooms/').push({ ...classroom });
}

export function saveClassroom(classroom, uid) {
  return dispatch => database.ref('classrooms/').push({ ...classroom, uid });
}

/*
* To delete a classroom we need to:
* 1) move the teachers of the classroom to break
* 2) delete the classroom itself
**/
export function deleteClassroom(classroomId) {
  return dispatch => {
    database.ref(`classrooms/${classroomId}/teachers`).once('value', (snapshot) => {
      const teachers = Object.keys(snapshot.val() || {});
      teachers.forEach((teacherId) => {
        database.ref('classrooms/').child(classroomId).child('teachers').child(teacherId).remove();
        database.ref('teachers-non-assigned/').child(teacherId).set(true);

        database.ref('teachers/').child(teacherId).child('classrooms').child(classroomId).remove();
      });
    }).then(() => {
      database.ref('classrooms/').child(classroomId).remove();
    });
  }
}
