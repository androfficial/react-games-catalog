/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchGame } from '../../store/actions/game';

const Game = () => {
  const { id } = useParams() as { id: string };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGame(id));
  }, [dispatch, id]);

  return (
    <section className='page__game game'>
      <div className='game__container _container'>
        <div className='game__wrapper'>
          <aside className='game__aside aside-game'>
            <div className='aside-game__box'>
              <div className='aside-game__picture'>
                <img src='' alt='' />
              </div>
              <div className='aside-game__body'>
                <div className='aside-game__btns'>
                  <span className='aside-game__btn-label btn'>FREE</span>
                  <a href='#' className='aside-game__play-now btn'>
                    PLAY NOW
                  </a>
                </div>
                <div className='aside-game__stats'>
                  <a href='#' className='aside-game__stats-wrapper'>
                    {/* svg */}
                    <span className='aside-game__stats-count'>0</span>
                    <span className='aside-game__text'>LIKE</span>
                  </a>
                </div>
              </div>
            </div>
          </aside>
          <div className='game__content' />
        </div>
      </div>
    </section>
  );
};

export default Game;
