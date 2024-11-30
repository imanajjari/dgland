import './App.css';
import routes from './routes';
import { useRoutes } from 'react-router-dom';

function App() {
  let router = useRoutes(routes)
  return (
    <div>
      <h1>hello word !</h1>
      {router}
    </div>
  );
}

export default App;
