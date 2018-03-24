import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import promiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createHashHistory';
import rootReducer from '../reducers/RootReducer';

const loggerMiddleware = createLogger(
  {
    level: 'info',
    collapsed: true,
  });

const history = createHistory();

// createStore : enhancer
// NOTE: use now https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
const enhancer = composeWithDevTools(
  applyMiddleware(promiseMiddleware(), thunkMiddleware, routerMiddleware(history), loggerMiddleware),
);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
