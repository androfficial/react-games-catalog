import { Navigate, Route, Routes } from 'react-router-dom';

import { Game, Games } from '../../pages';
import { NotFound } from '..';

const App = () => {
  return (
    <main className='page'>
      <Routes>
        <Route path='/' element={<Navigate to='/games' />} />
        <Route path='/games' element={<Games />} />
        <Route path='/games/:id' element={<Game />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default App;
