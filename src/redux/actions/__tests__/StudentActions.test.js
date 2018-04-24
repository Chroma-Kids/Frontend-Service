import configureMockStore from 'redux-mock-store'
import * as firebase from 'firebase';
import firebaseTest from '../../../firebase/firebaseTestConfig';
import { database } from '../../../firebase/firebase';
import thunk from 'redux-thunk';
import { exampleData } from '../../../../__test__/mockData'

import { deleteStudent, createStudent } from '../StudentActions';

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

describe('Delete a student', () => {
  it('remove him/her from the list of students', async () => {

    await ref.set(exampleData);
    const expected_value = {
      "-L8me9SLVbZM7OZHqlu7" : {
        "classrooms" : {
          "-L8qcB1PlvlViNVjRP28" : true
        },
        "created_at" : 1.522342078676E9,
        "name" : "Antonio",
        "surname" : "Machado",
        "updated_at" : 1.523389046409E9
      },
      "-L9bROFNpP4RgEP8YiAh" : {
        "classrooms" : {
          "-L8qcB1PlvlViNVjRP28" : true,
          "-L9bR7ld-_m2IRA5V-jb" : true
        },
        "created_at" : 1.523227661384E9,
        "name" : "Maira",
        "surname" : "Kempes"
      },
      "-LA9moXsXvSHf3iNDR8Q" : {
        "classrooms" : {
          "-L8qcB1PlvlViNVjRP28" : true,
          "-L9MdAxhmB7pXyXa7eQs" : true
        },
        "created_at" : 1.523820742902E9,
        "name" : "Miguel",
        "surname" : "De Unamuno"
      }
    };

    global.store.dispatch(deleteStudent("-L8mfM0RSKdKqwWB6qtz"));

    const db = await ref.child('/students').once('value');
    expect(db.val()).toEqual(expected_value);

  })

  it('remove him/her from the classrooms', async () => {

    await ref.set(exampleData);

    const classrooms_ref = await ref.child('/students').child("-L8mfM0RSKdKqwWB6qtz").child('/classrooms').once('value');

    const classrooms = Object.keys(classrooms_ref.val() || {});

    global.store.dispatch(deleteStudent("-L8mfM0RSKdKqwWB6qtz"));

    const db1 = await ref.child('/classrooms').child("-L8nQ8kBCYfZizh2cshQ").child('/students').once('value');
    expect(db1.val()).toBeNull();

    const db2 = await ref.child('/classrooms').child("-L8qcB1PlvlViNVjRP28").child('/students').once('value');
    const db2_values = Object.keys(db2.val() || {});
    expect(db2_values).toHaveLength(3);

    const db3 = await ref.child('/classrooms').child("-L9bR7ld-_m2IRA5V-jb").child('/students').once('value');
    const db3_values = Object.keys(db3.val() || {});
    expect(db3_values).toHaveLength(1);

  })

  it('it cant be found in the list anymore', async () => {
    const db = await ref.child('/students').child("-L8mfM0RSKdKqwWB6qtz").once('value');
    expect(db.val()).toBeNull();
  })
})
