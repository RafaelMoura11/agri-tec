import { useEffect, useState } from 'react';
import Context from './Context';
import api from '../api';
import LostInterface from '../interfaces/LostInterface';


type Props = {
  children: React.ReactNode
}

function Provider({ children }: Props) {
  const [losts, setLosts] = useState<LostInterface[]>([])


  const getLosts = async () => {
    const { data } = await api.get('/api/losts')
    setLosts(data)
  }


  const createLost = async (lost: LostInterface) => {
    try {
      await api.post(`/api/losts`, lost)
    } catch (e) {
      console.log(e)
    }
  }


  const editLost = async (lost: LostInterface) => {
    try {
      await api.put(`/api/losts/${lost.id}`, lost)
    } catch (e) {
      console.log(e)
    }
  }


  const deleteLost = async (id: number | string) => {
    try {
      await api.delete(`/api/losts/${id}`)
    } catch (e) {
      console.log(e)
    }
  }


  useEffect(() => {
    getLosts()
  }, [])


  const contextValue = {
    losts,
    getLosts,
    createLost,
    editLost,
    deleteLost,
  }

  return (
      <Context.Provider value={ contextValue }>
        {children}
      </Context.Provider>
  );
}

export { Context, Provider };
