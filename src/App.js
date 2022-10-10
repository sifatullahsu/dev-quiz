import { RouterProvider } from 'react-router-dom';
import { route } from './routes/Route';
import './App.css';

function App() {

  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
