import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteMoviesList from '../../app/InfiniteMoviesList';
import { searchMovies } from './searchMoviesSlice';
import { RootState } from '../../app/store';
import DefaultMovieCard from '../../app/DefaultMovieCard';

const SearchMoviesResult = () => {
  const movieIds = useSelector((state: RootState) => state.searchMovies.items);
  const hasMore = useSelector(
    (state: RootState) =>
      !state.searchMovies.allFetched && state.searchMovies.query !== ''
  );
  const isFetching = useSelector(
    (state: RootState) => state.searchMovies.isFetching
  );
  const reset = useSelector((state: RootState) => state.searchMovies.reset);
  const dispatch = useDispatch();

  return (
    <InfiniteMoviesList
      items={movieIds}
      hasMore={hasMore}
      isFetching={isFetching}
      reset={reset}
      fetchItems={() => {
        dispatch(searchMovies());
      }}
    >
      {(movieId) => <DefaultMovieCard movieId={movieId} />}
    </InfiniteMoviesList>
  );
};

export default SearchMoviesResult;
