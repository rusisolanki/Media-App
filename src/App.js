import Login from './components/Login'
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Main from './components/Main';
import AddSongDialog from './components/AddSongDialog';

const router = createBrowserRouter([
  {path: '/', element: <Login/>},
  {path: '/main', element: <Main/>},
  {path: '/addSong', element: <AddSongDialog/>},

])
function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
