// Types
import {
  StarshipsActionTypes,
  FETCH_STARSHIPS_START_REQUEST,
  FETCH_STARSHIPS_FINISH_REQUEST,
  Starships,
  FETCH_STARSHIPS_SUCCESS,
  ErrorHttpAction,
  FETCH_STARSHIPS_FAILURE,
  FETCH_STARSHIPS_ASYNC,
  StarshipsFetchActionSuccess,
  StarshipsFetchActionFailure,
} from './types';

// Sync
export const startRequest = (): StarshipsActionTypes => (
  { type: FETCH_STARSHIPS_START_REQUEST }
);

export const finishRequest = (): StarshipsActionTypes => (
  { type: FETCH_STARSHIPS_FINISH_REQUEST }
);

export const successRequest = (payload: Starships): StarshipsFetchActionSuccess => (
  { type: FETCH_STARSHIPS_SUCCESS, payload }
);

export const failureRequest = (payload: ErrorHttpAction): StarshipsFetchActionFailure => (
  {
    type: FETCH_STARSHIPS_FAILURE,
    error: true,
    payload,
  }
);

// Async
export const starshipsFetchAsync = (): StarshipsActionTypes => (
  { type: FETCH_STARSHIPS_ASYNC }
);
