import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth from './redux/reducers/auth';
import music from './redux/reducers/music';

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    music
  });
