export type SuccesActionType<T> = (payload: T) => ({
  type: string;
  payload: T;
});

export type FailureActionType<T> = (payload: T) => ({
  type: string;
  error: true;
  payload: T;
});
