import { useState } from 'react';

import { RouterProvider } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Router } from '../routes/Router';
import './App.css'
import Float from '../components/FloatButton/Float';
import { PageContext } from '../hooks/PageContext';

function App() {

  const [page, setPage] = useState<string | null>("")

  return (
    <PageContext.Provider value={{ page, setPage }}>
      <Header />
      <RouterProvider router={Router} />
      <Float />
    </PageContext.Provider>
  )
}

export default App
