import { combineReducers } from 'redux';
import userReducer from './userReducer';
import noteReducer from './noteReducer';
import delReducer from './delReducer';

const rootReducer = combineReducers({
    user: userReducer,
    note: noteReducer,
    delete: delReducer
});

export default rootReducer;