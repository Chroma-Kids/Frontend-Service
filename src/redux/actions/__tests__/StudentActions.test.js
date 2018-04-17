import { deleteStudent, createStudent } from '../StudentActions';
import * as types from '../ActionTypes';

var jest = require('jest');

jest.mock('../../../firebase', () => {
	const firebasemock = require('firebase-mock');

	const mockdatabase = new firebasemock.MockFirebase();
	const mockauth = new firebasemock.MockFirebase();
	const mocksdk = new firebasemock.MockFirebaseSdk(path => {
		return path ? mockdatabase.child(path) : mockdatabase;
	}, () => {
		return mockauth;
	});

	const firebaseApp = mocksdk.initializeApp(); // can take a path arg to database url
  global.database = firebaseApp.database();
	// return the mock to match your export signature
	return {
		isMock: true,
		database: firebaseApp.database(),
		auth: firebaseApp.auth(),
    mocksdk: mocksdk
	}
});

describe('actions', () => {
  it('should create an action to add a todo', () => {

    const student = {
      name: "Antonio",
      surname: "Machado"
    };
    
    // const expectedAction = {
    //   type: types.CREATE_STUDENT_FULFILLED
    // };
    //
    // expect().toEqual(expectedAction);
    //

    var newPersonRef = database.ref('/students/').push(student);
    database.ref('/students/').flush();
    var autoId = newPersonRef.key();
    var data = database.ref('/students/').getData();
    console.assert(data[autoId].name === 'Antonio', 'Antonio was created');

  })
})

//
// describe('Students Module', () => {
//
//   it('should work', function() {
//     expect(null).toBeNull()
//   })
//
//
//
//
//   test('it should delete a student', () => {
//
//     // expect(BadgeStore.badges.arr.length).toBe(0)
//
//     database.ref('/students/').child('-L8me9SLVbZe7OZHqlu7').set({
//       created_at: 1522342078.676,
//       name: "Antonio",
//       surname: "Machado",
//       updated_at: 1523389046.409
//      });
//
//      // const can = {
//      //   name: 'pamplemousse',
//      //   ounces: 12,
//      // };
//      //
//      // describe('the can', () => {
//      //   test('has 12 ounces', () => {
//      //     expect(can.ounces).toBe(12);
//      //   });
//      //
//      //   test('has a sophisticated name', () => {
//      //     expect(can.name).toBe('pamplemousse');
//      //   });
//      // });
//
//     const expectedAction = {}
//     console.log(deleteStudent('-L8me9SLVbZM7OZHqlu7'));
//
//     expect(deleteStudent('-L8me9SLVbZM7OZHqlu7')).toEqual(expectedAction)
//
//
//     function forEach(items, callback) {
//       for (let index = 0; index < items.length; index++) {
//         callback(items[index]);
//       }
//     }
//
//     const mockCallback = jest.fn();
//     forEach([0, 1], mockCallback);
//
//   })
// });
//

// var firebasemock    = require('firebase-mock');
//
// var mockauth = new firebasemock.MockAuthentication();
// var mockdatabase = new firebasemock.MockFirebase();
// var mockfirestore = new firebasemock.MockFirestore();
// var mockstorage = new firebasemock.MockStorage();
// var mockmessaging = new firebasemock.MockMessaging();
// var mocksdk = new firebasemock.MockFirebaseSdk(
//   // use null if your code does not use RTDB
//   (path) => {
//     return path ? mockdatabase.child(path) : mockdatabase;
//   }
// );
//
// mockdatabase.child('/students').child('-L8me9SLVbZM7OZHqlu7').set({
//   created_at: 1522342078.676,
//   name: "Antonio",
//   surname: "Machado",
//   updated_at: 1523389046.409
//  });
//
//  mockdatabase.flush();
//
//  describe('Students Module', () => {
//    test(types.DELETE_STUDENT_FULFILLED, () => {
//      const expectedAction = {
//        type: types.DELETE_STUDENT_FULFILLED
//      }
//      expect(deleteStudent("asdasdasd")).
//      toEqual(expectedAction)
//    })
//  });
