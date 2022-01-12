import cn from 'classnames';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { IPagination } from '../../types/games';

const Pagination = ({ gamesCount, pageSize, currentPage }: IPagination) => {
  const navigate = useNavigate();
  const pages = [];

  const totalPages = Math.ceil(gamesCount / pageSize);

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const onHandlePage = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: number
  ) => {
    e.preventDefault();

    if (currentPage !== page) {
      navigate(`/games/?page=${page}`);
    }
  };

  return (
    <div className='games__pagination pagination'>
      <ul className='pagination__list'>
        {pages &&
          pages.map((page) => (
            <li key={page} className='pagination__item'>
              <Link
                to={`/games/?page=${page}`}
                onClick={(e) => onHandlePage(e, page)}
                className={cn(
                  'pagination__link',
                  currentPage === page && '_active'
                )}
              >
                {page}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Pagination;
