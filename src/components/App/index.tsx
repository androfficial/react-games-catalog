/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import ArrowDown from '../../assets/images/arrow-down.svg';
import Svg2 from '../../assets/images/browser.svg';
import Image from '../../assets/images/test.jpg';
import Svg1 from '../../assets/images/windows.svg';

const App = () => {
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
              <article className='games__item item-game'>
                <a href='#' className='item-game__picture'>
                  <img src={Image} alt='' />
                </a>
                <div className='item-game__content'>
                  <a href='#' className='item-game__title-link'>
                    <h2 className='item-game__title'>
                      Phantasy Star Online 2 New Genesis
                    </h2>
                    <div className='item-game__label item-label item-label--free'>
                      <span className='item-label__text'>Free</span>
                    </div>
                  </a>
                  <p className='item-game__text'>
                    The legacy of Phantasy Star Online 2 continues a thousand
                    years later!
                  </p>
                  <div className='item-game__bottom'>
                    <div className='item-game__icons'>
                      <img src={Svg1} alt='' />
                      <img src={Svg2} alt='' />
                    </div>
                    <div className='item-game__genre'>
                      <p className='item-game__genre-name'>MMORPG</p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className='games__pagination pagination'>
            <ul className='pagination__list'>
              <li className='pagination__item'>
                <a href='#' className='pagination__link'>
                  1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
