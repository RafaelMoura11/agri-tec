import { useEffect, useState } from 'react';
import Context from './Context';
import api from '../api';
import LostInterface from '../interfaces/LostInterface';

type Props = {
  children: React.ReactNode
}

function Provider({ children }: Props) {
  const [losts, setLosts] = useState<LostInterface[]>([])
  useEffect(() => {
    const fetchLosts = async () => {
      const { data } = await api.get('/api/losts')
      setLosts(data)
    }
    fetchLosts()
  }, [])

  const contextValue = {
    losts,
  }

  return (
      <Context.Provider value={ contextValue }>
        {children}
      </Context.Provider>
  );
}

export { Context, Provider };
