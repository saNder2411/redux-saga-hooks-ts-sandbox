import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { starshipsFetchAsync } from '../actions';
import { StarshipsState } from '../reducer';


export const useFetchStarships = (): StarshipsState => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.starships);

  useEffect(() => {
    dispatch(starshipsFetchAsync());
  }, []);

  return { isLoading, data, error };
};
