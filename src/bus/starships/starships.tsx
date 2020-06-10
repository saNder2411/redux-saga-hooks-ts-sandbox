import React, { ReactElement, FC } from 'react';
import { useFetchStarships } from './index';
import { Title } from '../../components/title/title';
import { Starship } from './types';


export const Starships: FC = () => {
  const { isLoading, data, error } = useFetchStarships();

  const loaderJSX = isLoading && <p>Loading data ...</p>;
  let errorMessageJSX = null;

  if (error?.status) {
    errorMessageJSX = error.status === 404 ? <p>Not found!</p> : null;
  }

  let starshipItemsJSX = null;

  if (!isLoading && data?.results) {
    starshipItemsJSX = data
      .results
      .map(({ name }: Starship, index: number): ReactElement => <li key={Number(index)}>{name}</li>);
  }

  return (
    <>
      <Title>Starships</Title>
      {loaderJSX}
      {errorMessageJSX}
      <ul>
        {starshipItemsJSX}
      </ul>
    </>
  );
};
