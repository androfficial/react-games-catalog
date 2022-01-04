/* eslint-disable camelcase */

import { Link } from 'react-router-dom';

import BrowserSvg from '../../assets/images/browser.svg';
import WindowsSvg from '../../assets/images/windows.svg';
import { IGame } from '../../types/games';

const ItemGame = ({
  id,
  title,
  thumbnail,
  short_description,
  genre,
  platform,
}: IGame) => {
  return (
    <article className='games__item item-game'>
      <Link to={String(id)} className='item-game__picture'>
        <img src={thumbnail} alt={title} />
      </Link>
      <div className='item-game__content'>
        <Link to={String(id)} className='item-game__title-link'>
          <h2 className='item-game__title'>{title}</h2>
          <div className='item-game__label item-label item-label--free'>
            <span className='item-label__text'>Free</span>
          </div>
        </Link>
        <p className='item-game__text'>{short_description}</p>
        <div className='item-game__bottom'>
          <div className='item-game__icons'>
            {platform.includes('Windows') ? (
              <img src={WindowsSvg} alt={platform} />
            ) : (
              <img src={BrowserSvg} alt={platform} />
            )}
          </div>
          <div className='item-game__genre'>
            <p className='item-game__genre-name'>{genre}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ItemGame;
