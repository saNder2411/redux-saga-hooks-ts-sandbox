import { root } from './config';
import { Starships } from '../bus/starships/types';

export type FetchDataType<T> = () => Promise<T>

type APIServiceType = {
  starships: {
    getStarships: FetchDataType<Starships>;
  };
};
export const apiService: APIServiceType = {
  starships: {
    getStarships: (): Promise<Starships> => fetch(`${root}/starships/`, { method: 'GET' })
      .then((response) => response.json())
      .then(({ results }) => ({ results })),
  },
};
