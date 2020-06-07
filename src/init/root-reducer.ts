import { combineReducers } from 'redux';

// Reducers
import { starshipsReducer as starships } from '../bus/starship-list/reducer';


export const rootReducer = combineReducers({
  starships,
});

export type AppState = ReturnType<typeof rootReducer>;
