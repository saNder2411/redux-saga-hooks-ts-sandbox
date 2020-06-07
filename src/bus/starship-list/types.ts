export type Starship = {
  name: string;
};

export type Starships = {
  results: Starship[];
};

export type ErrorHttpAction = {
  status: number;
};

// Sync
export const STARSHIPS_START_FETCHING = 'STARSHIPS_START_FETCHING';
type StarshipsStartFetchingAction = {
  type: typeof STARSHIPS_START_FETCHING;
};

export const STARSHIPS_STOP_FETCHING = 'STARSHIPS_STOP_FETCHING';
type StarshipsStopFetchingAction = {
  type: typeof STARSHIPS_STOP_FETCHING;
};

export const STARSHIPS_SACCESS = 'STARSHIPS_SACCESS';
export type StarshipsSaccessAction = {
  type: typeof STARSHIPS_SACCESS;
  payload: Starships;
};

export const STARSHIPS_FAILURE = 'STARSHIPS_FAILURE';
export type StarshipsFailureAction = {
  type: typeof STARSHIPS_FAILURE;
  error: true;
  payload: ErrorHttpAction;
};

// Async
export const STARSHIPS_FETCH_ASYNC = 'STARSHIPS_FETCH_ASYNC';
type StarshipsFetchAsyncAction = {
  type: typeof STARSHIPS_FETCH_ASYNC;
};

export type StarshipsActionTypes =
  | StarshipsStartFetchingAction
  | StarshipsStopFetchingAction
  | StarshipsSaccessAction
  | StarshipsFailureAction
  | StarshipsFetchAsyncAction;
