// Types
import {
  StarshipsActionTypes,
  STARSHIPS_START_FETCHING,
  STARSHIPS_STOP_FETCHING,
  Starships,
  STARSHIPS_SACCESS,
  ErrorHttpAction,
  STARSHIPS_FAILURE,
  STARSHIPS_FETCH_ASYNC,
  StarshipsSaccessAction,
  StarshipsFailureAction,
} from './types';

// Sync
export const starshipsStartFetching = (): StarshipsActionTypes => (
  { type: STARSHIPS_START_FETCHING }
);

export const starshipsStopFetching = (): StarshipsActionTypes => (
  { type: STARSHIPS_STOP_FETCHING }
);

export const starshipsSaccess = (payload: Starships): StarshipsSaccessAction => (
  { type: STARSHIPS_SACCESS, payload }
);

export const starshipsFailure = (payload: ErrorHttpAction): StarshipsFailureAction => (
  {
    type: STARSHIPS_FAILURE,
    error: true,
    payload,
  }
);

// Async
export const starshipsFetchAsync = (): StarshipsActionTypes => (
  { type: STARSHIPS_FETCH_ASYNC }
);
