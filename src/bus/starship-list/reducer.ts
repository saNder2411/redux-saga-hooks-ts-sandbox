// Types
import {
  ErrorHttpAction,
  Starships,
  FETCH_STARSHIPS_ASYNC,
  FETCH_STARSHIPS_SUCCESS,
  FETCH_STARSHIPS_FAILURE,
  FETCH_STARSHIPS_START_REQUEST,
  FETCH_STARSHIPS_FINISH_REQUEST,
  StarshipsActionTypes,
} from './types';

export type StarshipListState = {
  isLoading: boolean;
  data: null | Starships;
  error: null | ErrorHttpAction;
};

const initialState: StarshipListState = {
  isLoading: false,
  data: null,
  error: null,
};

const neverAction = (action: never): StarshipsActionTypes => action;

export const starshipListReducer = (state = initialState, action: StarshipsActionTypes): StarshipListState => {
  switch (action.type) {
    case FETCH_STARSHIPS_START_REQUEST:
      return {
        ...state,
        isLoading: true,
        data: null,
        error: null,
      };

    case FETCH_STARSHIPS_FINISH_REQUEST:
      return {
        ...state,
        isLoading: false,
      };

    case FETCH_STARSHIPS_SUCCESS:
      return {
        ...state,
        data: { ...action.payload },
        error: null,
      };

    case FETCH_STARSHIPS_FAILURE:
      return {
        ...state,
        data: null,
        error: action.payload,
      };

    case FETCH_STARSHIPS_ASYNC:
      return state;

    default:
      neverAction(action);
  }

  return state;
};
