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
export const FETCH_STARSHIPS_START_REQUEST = 'FETCH_STARSHIPS_START_REQUEST';
type StarshipsFetchActionStartOfRequest = {
  type: typeof FETCH_STARSHIPS_START_REQUEST;
};

export const FETCH_STARSHIPS_FINISH_REQUEST = 'FETCH_STARSHIPS_FINISH_REQUEST';
type StarshipsFetchActionFinishOfRequest = {
  type: typeof FETCH_STARSHIPS_FINISH_REQUEST;
};

export const FETCH_STARSHIPS_SUCCESS = 'FETCH_STARSHIPS_SUCCESS';
export type StarshipsFetchActionSuccess = {
  type: typeof FETCH_STARSHIPS_SUCCESS;
  payload: Starships;
};

export const FETCH_STARSHIPS_FAILURE = 'FETCH_STARSHIPS_FAILURE';
export type StarshipsFetchActionFailure = {
  type: typeof FETCH_STARSHIPS_FAILURE;
  error: true;
  payload: ErrorHttpAction;
};

// Async
export const FETCH_STARSHIPS_ASYNC = 'FETCH_STARSHIPS_ASYNC';
type StarshipsFetchActionAsync = {
  type: typeof FETCH_STARSHIPS_ASYNC;
};

export type StarshipsActionTypes =
  | StarshipsFetchActionStartOfRequest
  | StarshipsFetchActionFinishOfRequest
  | StarshipsFetchActionSuccess
  | StarshipsFetchActionFailure
  | StarshipsFetchActionAsync;
