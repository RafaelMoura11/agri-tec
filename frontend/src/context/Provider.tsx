import { useEffect, useState } from 'react';
import Context from './Context';
import LostInterface from '../interfaces/LostInterface';
import { getLosts, getLostById, createLost, editLost, deleteLost } from '../utils/apiFunctions'


type Props = {
  children: React.ReactNode
}

function Provider({ children }: Props) {
  const [losts, setLosts] = useState<LostInterface[]>([])
  const [searchByCPF, setSearchByCPF] = useState<string>('')


  useEffect(() => {
    const fetchLosts = async () => {
      const data = await getLosts()
      setLosts(data)
    }
    fetchLosts()
  }, [])


  const contextValue = {
    losts,
    getLosts,
    createLost,
    editLost,
    deleteLost,
    searchByCPF,
    setSearchByCPF,
    setLosts,
    getLostById
  }

  return (
      <Context.Provider value={ contextValue }>
        {children}
      </Context.Provider>
  );
}

export { Context, Provider };
