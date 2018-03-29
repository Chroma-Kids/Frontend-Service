import { database } from '../../firebase'
import * as types from './ActionTypes';

export function getClassrooms() {
  return dispatch => {
    dispatch({
      type: types.CLASSROOM_STATUS,
      payload: true
    });
    database.ref('classrooms/').on('value', snapshot => {
      dispatch({
        type: types.FETCH_CLASSROOMS,
        payload: snapshot.val()
      });
      dispatch({
        type: types.CLASSROOM_STATUS,
        payload: false
      });
    }, () => {
      dispatch({
        type: types.CLASSROOM_STATUS,
        payload: -1
      });
    });
  };
}

export function fetchClassroom(uid) {
  return {
    type: types.FETCH_CLASSROOM,
    payload: new Promise((resolve, reject) => {
          try {
              database.ref('classrooms/').child(uid).on('value', function (snapshot) {
                  resolve(snapshot.val());
              });
          }
          catch (e) {
              reject(e.message);
          }
      })
  };
}


export function createClassroom(classroom) {

  classroom.created_at = new Date().getTime()/1000;

  return {
    type: types.CREATE_CLASSROOM,
    payload: database.ref('classrooms/').push({ ...classroom }),
  };
}

export function updateClassroom(classroom, uid) {

  classroom.updated_at = new Date().getTime()/1000;

  return {
    type: types.SAVE_CLASSROOM,
    payload: new Promise((resolve, reject) => {
      try{
        database.ref(`classrooms/${uid}`).set({...classroom}, function () {
            resolve(classroom);
        });
      }
      catch(e){
        reject(e.message);
      }
    })
  };
}

/*
* To delete a classroom we need to:
* 1) move the teachers of the classroom to break
* 2) delete the classroom itself
**/
export function deleteClassroom(classroomId) {
  return {
    type: types.DELETE_CLASSROOM,
    payload: (() => {
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
    }),
  };
}
