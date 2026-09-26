import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found'>
      <p className='not-found__text'>
        <strong>Error:</strong>Unable to display the requested page.
        <br />
        Please try again later.
      </p>
      <Link to='/games' className='not-found__link btn'>
        Games Catalog
      </Link>
    </div>
  );
};

export default NotFound;
