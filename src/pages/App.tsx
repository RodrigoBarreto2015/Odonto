import { createContext, useContext, useEffect, useState } from 'react';

import { RouterProvider } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Router } from '../routes/Router';
import './App.css'
import Float from '../components/FloatButton/Float';


export const PageContext = createContext({})

function App() {

  const [page, setPage] = useState("");

  return (
    <PageContext.Provider value={{page, setPage}}>
      <Header />
      <RouterProvider router={Router} />
      <Float />
    </PageContext.Provider>
  )
}

export default App
