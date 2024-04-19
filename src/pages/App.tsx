import { RouterProvider } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Router } from '../routes/Router';
import './App.css'

function App() {

  return (
    <div >
      <Header />
      <RouterProvider router={Router} />
    </div>
  )
}

export default App
