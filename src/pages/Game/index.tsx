/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import useTypesSelector from '../../hooks/useTypesSelector';
import { fetchGame, setIsLoaded } from '../../store/actions/game';

const Game = () => {
  const { id } = useParams() as { id: string };
  const dispatch = useDispatch();
  const [gameDetails, isLoaded] = useTypesSelector(({ game }) => [
    game.gameDetails,
    game.isLoaded,
  ]);

  const { title, thumbnail, game_url, screenshots } = gameDetails;
  const bgImage = screenshots && screenshots[0].image;

  useEffect(() => {
    dispatch(fetchGame(id));

    return () => {
      dispatch(setIsLoaded(false));
    };
  }, [dispatch, id]);

  return (
    <section
      className='page__game game'
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className='game__container _container'>
        <div className='game__wrapper'>
          <aside className='game__aside aside-game'>
            <div className='aside-game__box'>
              <div className='aside-game__picture'>
                <img src={thumbnail} alt={title} />
              </div>
              <div className='aside-game__body'>
                <div className='aside-game__btns'>
                  <span className='aside-game__btn-label btn'>FREE</span>
                  <a href={`${game_url}`} className='aside-game__play-now btn'>
                    PLAY NOW
                  </a>
                </div>
                <div className='aside-game__stats'>
                  <button className='aside-game__stats-wrapper' type='button'>
                    {/* svg */}
                    <span className='aside-game__stats-count'>0</span>
                    <span className='aside-game__text'>LIKE</span>
                  </button>
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
