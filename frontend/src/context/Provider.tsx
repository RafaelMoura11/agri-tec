import { useEffect, useState } from 'react';
import Context from './Context';
import api from '../api';
import LostInterface from '../interfaces/LostInterface';


type Props = {
  children: React.ReactNode
}

function Provider({ children }: Props) {
  const [losts, setLosts] = useState<LostInterface[]>([])
  const [searchByCPF, setSearchByCPF] = useState<string>('')


  const getLosts = async () => {
    const { data } = await api.get('/api/losts')
    return data
  }


  const createLost = async (lost: LostInterface) => {
    try {
      const { id, ...lostWithoutId } = lost
      await api.post(`/api/losts`, lostWithoutId)
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
    setLosts
  }

  return (
      <Context.Provider value={ contextValue }>
        {children}
      </Context.Provider>
  );
}

export { Context, Provider };
