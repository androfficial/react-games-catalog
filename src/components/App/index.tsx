import { Route, Routes } from 'react-router-dom';

import { Game, Games } from '../../pages';
import { NotFound } from '..';

const App = () => {
  return (
    <main className='page'>
      <Routes>
        <Route path='/' element={<Games />} />
        <Route path='/:id' element={<Game />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default App;
