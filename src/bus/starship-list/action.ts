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
export const starshipsStartFetching = (): StarshipsActionTypes => (
  { type: FETCH_STARSHIPS_START_REQUEST }
);

export const starshipsStopFetching = (): StarshipsActionTypes => (
  { type: FETCH_STARSHIPS_FINISH_REQUEST }
);

export const starshipsSaccess = (payload: Starships): StarshipsFetchActionSuccess => (
  { type: FETCH_STARSHIPS_SUCCESS, payload }
);

export const starshipsFailure = (payload: ErrorHttpAction): StarshipsFetchActionFailure => (
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
