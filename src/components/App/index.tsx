/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ArrowDown from '../../assets/images/arrow-down.svg';
import useTypesSelector from '../../hooks/useTypesSelector';
import { fetchGames } from '../../store/actions/games';
import ItemGame from '../ItemGame';

const App = () => {
  const dispatch = useDispatch();
  const [listOfGames, gamesCount, pageSize, currentPage, isLoaded] =
    useTypesSelector(({ games }) => [
      games.listOfGames,
      games.gamesCount,
      games.pageSize,
      games.currentPage,
      games.isLoaded,
    ]);

  const pages = [];
  const totalPages = Math.ceil(gamesCount / pageSize);

  for (
    let i = Math.max(currentPage - 4, 1);
    i <= Math.max(1, Math.min(currentPage + 4, totalPages));
    i++
  ) {
    pages.push(i);
  }

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  return (
    <main className='page'>
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
              {listOfGames &&
                listOfGames.map((obj, i) => (
                  <ItemGame key={`${obj.id}: ${i}`} {...obj} />
                ))}
            </div>
          </div>
          <div className='games__pagination pagination'>
            <ul className='pagination__list'>
              {pages &&
                pages.map((page) => (
                  <li key={page} className='pagination__item'>
                    <a href='#' className='pagination__link'>
                      {page}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
