import configureMockStore from 'redux-mock-store'
import * as firebase from 'firebase';
import firebaseTest from '../../../firebase/firebaseTestConfig';
import { database } from '../../../firebase/firebase';
import thunk from 'redux-thunk';
import { exampleData } from '../../../../__test__/mockData'

import { moveTeacherToClassroom } from '../TeacherActions';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

beforeAll(() => {
  global.testRef = 'TestingPath';
  global.ref = firebase.database().ref('TestingPath');
  global.store = mockStore(exampleData);
});

afterAll(async (done) => {
  delete global.testRef;
  await ref.remove();
  delete global.ref;
  done();
});

describe('Move teacher from break to classroom', () => {
  // 1) Remove from teachers not assigned
  // 2) Add teacher to the list of teachers in the classroom
  // 3) Add up one to num_teachers in the classroom
  // 4) Add classroom to the list of classrooms in the teacher
  // TODO 5) Handle test for trajectories (NOT a priority now)

  it('Remove from teachers_not_assigned list', async () => {

    await ref.set(exampleData);

    global.store.dispatch(moveTeacherToClassroom("-L8n0MHItGqhXmbHRRcP", undefined ,"-L8nQ8kBCYfZizh2cshQ"));

    const db = await ref.child('/teachers-non-assigned/').child("-L8n0MHItGqhXmbHRRcP").once('value');
    expect(db.val()).toBeNull();
  })

  it('Add teacher to the list of teachers in the classroom', async () => {
    const db = await ref.child('/classrooms').child('-L8nQ8kBCYfZizh2cshQ').child('teachers').once('value');
    const teachers = Object.keys(db.val() || {});
    expect(teachers).toContainEqual("-L8n0MHItGqhXmbHRRcP");
  })

  it('The number of teachers in the classroom is 2', async () => {
    const db = await ref.child('/classrooms').child('-L8nQ8kBCYfZizh2cshQ').child('num_teachers').once('value');
    expect(db.val()).toEqual(2);
  })

  it('Add classroom to the list of classrooms in the teacher', async () => {
    const db = await ref.child('/teachers').child('-L8n0MHItGqhXmbHRRcP').child('classrooms').once('value');
    const classrooms = Object.keys(db.val() || {});
    expect(classrooms).toContainEqual("-L8nQ8kBCYfZizh2cshQ");
  })
})
