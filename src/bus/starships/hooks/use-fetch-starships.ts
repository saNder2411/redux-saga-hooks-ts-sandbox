import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../init/root-reducer';

import { starshipsFetchAsync } from '../actions';
import { StarshipsState } from '../reducer';


export const useFetchStarships = (): StarshipsState => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector<RootState, StarshipsState>((state) => state.starships);

  useEffect(() => {
    dispatch(starshipsFetchAsync());
  }, [dispatch]);

  return { isLoading, data, error };
};
