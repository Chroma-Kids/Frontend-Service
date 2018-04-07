import { deleteStudent } from '../../../../redux/actions/StudentActions';
import * as types from '../../../../redux/actions/ActionTypes';

var jest = require('jest');

jest.mock('../../../../firebase', () => {
	const firebasemock = require('firebase-mock');

	const mockdatabase = new firebasemock.MockFirebase();
	const mockauth = new firebasemock.MockFirebase();
	const mocksdk = new firebasemock.MockFirebaseSdk(path => {
		return path ? mockdatabase.child(path) : mockdatabase;
	}, () => {
		return mockauth;
	});

	const firebaseApp = mocksdk.initializeApp(); // can take a path arg to database url

	// return the mock to match your export signature
	return {
		isMock: true,
		database: firebaseApp.database(),
		auth: firebaseApp.auth(),
    mocksdk: mocksdk
	}
});

describe('Students Module', () => {
  test(types.DELETE_STUDENT_FULFILLED, () => {
    const expectedAction = {
      type: types.DELETE_STUDENT_FULFILLED
    }
    expect(deleteStudent("asdasdasd")).
    toEqual(expectedAction)
  })
});
