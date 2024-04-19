import { RouterProvider } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Router } from '../routes/Router';
import './App.css'
import Float from '../components/FloatButton/Float';

function App() {

  return (
    <div >
      <Header />
      <RouterProvider router={Router} />
      <Float />
    </div>
  )
}

export default App
