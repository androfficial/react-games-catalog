import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import ArrowDown from '../../assets/images/arrow-down.svg';
import { ItemGame, Pagination } from '../../components';
import useTypesSelector from '../../hooks/useTypesSelector';
import {
  fetchGames,
  setCurrentPage,
  setIsLoaded,
} from '../../store/actions/games';

const Games = () => {
  const [searchParams] = useSearchParams();
  const queryPage = Number(searchParams.get('page'));

  const dispatch = useDispatch();
  const [listOfGames, gamesCount, pageSize, currentPage, isLoaded] =
    useTypesSelector(({ games }) => [
      games.listOfGames,
      games.gamesCount,
      games.pageSize,
      games.currentPage,
      games.isLoaded,
    ]);

  const displayGap = useMemo(() => {
    const lastPageIndex = currentPage * pageSize;
    const firstPageIndex = lastPageIndex - pageSize;
    return listOfGames.slice(firstPageIndex, lastPageIndex);
  }, [listOfGames, pageSize, currentPage]);

  useEffect(() => {
    (async () => {
      await dispatch(fetchGames());
      if (queryPage) {
        dispatch(setCurrentPage(queryPage));
      }
    })();

    return () => {
      dispatch(setIsLoaded(false));
    };
  }, [dispatch, queryPage]);

  return (
    <div className='page__games games'>
      <div className='games__container _container'>
        <div className='games__top'>
          <div className='games__category category'>
            <div className='category__wrapper'>
              <span className='category__text'>Platform:</span>
              <div className='category__list'>
                All Platforms:
                <img src={ArrowDown} alt='' className='category__arrow' />
              </div>
              <ul className='category__submenu submenu-list'>
                <li className='submenu-list__item'>
                  <a href='#' className='submenu-list__link'>
                    Windows (PC)
                  </a>
                </li>
              </ul>
            </div>
            <div className='category__wrapper'>
              <span className='category__text'>Genre/Tag:</span>
              <div className='category__list'>
                All Genres:
                <img src={ArrowDown} alt='' className='category__arrow' />
              </div>
              <ul className='category__submenu submenu-list'>
                <li className='submenu-list__item'>
                  <a href='#' className='submenu-list__link'>
                    Windows (PC)
                  </a>
                </li>
              </ul>
            </div>
            <div className='category__wrapper'>
              <span className='category__text'>Sort By:</span>
              <div className='category__list'>
                Relevance:
                <img src={ArrowDown} alt='' className='category__arrow' />
              </div>
              <ul className='category__submenu submenu-list'>
                <li className='submenu-list__item'>
                  <a href='#' className='submenu-list__link'>
                    Windows (PC)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='games__content'>
          <div className='games__items'>
            {displayGap &&
              displayGap.map((obj, i) => (
                <ItemGame key={`${obj.id}: ${i}`} {...obj} />
              ))}
          </div>
        </div>
        <Pagination
          pageSize={pageSize}
          gamesCount={gamesCount}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Games;
