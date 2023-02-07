import { useState, useEffect, useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getTrendingMovies } from '../../shared/services/api';
import css from './home.module.css';
import Paginator from 'components/Paginator/Paginator';

import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const page = Number(params.page || 1);

  const [totalPages, settotalPages] = useState(0);

  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getTrendingMovies(page);
        setMovies(data.results);
        settotalPages(data.total_pages);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [page]);

  return (
    <>
      <h2 className={css.title}>Trending movies:</h2>

      {loading ? (
        'Loading...'
      ) : (
        <>
          <MovieList movies={movies} location={location} />
        </>
      )}

      <Paginator
        totalPages={totalPages}
        setSearchParams={setSearchParams}
        params={params}
        currentPage={Number(params?.page - 1) || 0}
      />
    </>
  );
};

export default Home;
