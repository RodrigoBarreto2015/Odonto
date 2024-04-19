import { createContext } from "react"

type PageContextType = {
    page: string | null,
    setPage: React.Dispatch<React.SetStateAction<string | null>>
  }
  
  const iPageContextState = {
    page: null,
    setPage: () => {}
  }
  
  export const PageContext = createContext<PageContextType>(iPageContextState)