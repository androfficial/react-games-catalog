import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found'>
      <p className='not-found__text'>
        <strong>Ошибка:</strong>Невозможно показать запрашиваемую страницу.
        <br />
        Пожалуйста, попробуйте еще раз позже.
      </p>
      <Link to='/games' className='not-found__link btn'>
        Games Catalog
      </Link>
    </div>
  );
};

export default NotFound;
