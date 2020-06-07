import React, { ReactElement, FC } from 'react';
import { useStarshipsFetch } from './.hooks/useStarshipsFetch';
import { Title } from '../../components/title/title';
import { Starship } from './types';


export const Starships: FC = () => {
  const [{ isLoading, data, error }] = useStarshipsFetch();

  const loaderJSX = isLoading && <p>Loading data ...</p>;
  const errorMessageJSX = typeof error === 'object' && error.status === 404 && <p>Not found!</p>;
  const starshipItemsJSX = isLoading || data
    .results
    .map(({ name }: Starship, index: number): ReactElement => <li key={Number(index)}>{name}</li>);

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
