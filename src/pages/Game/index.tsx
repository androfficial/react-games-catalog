import { useParams } from 'react-router-dom';

const Game = () => {
  const { id } = useParams();
  return <strong>{id}</strong>;
};

export default Game;
