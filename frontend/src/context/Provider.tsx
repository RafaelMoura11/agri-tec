import { useEffect, useState } from 'react';
import Context from './Context';
import api from '../api';
import LostInterface from '../interfaces/LostInterface';
import { useNavigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode
}

function Provider({ children }: Props) {
  const navigate = useNavigate()
  const [losts, setLosts] = useState<LostInterface[]>([])
  useEffect(() => {
    const fetchLosts = async () => {
      const { data } = await api.get('/api/losts')
      setLosts(data)
    }
    fetchLosts()
  }, [])

  const editLost = async (lost: LostInterface) => {
    try {
      await api.put(`/api/losts/${lost.id}`, lost)
      return navigate('/')
    } catch (e) {
      console.log(e)
    }
  }


  const deleteLost = async (id: number | string) => {
    try {
      await api.delete(`/api/losts/${id}`)
      return navigate('/')
    } catch (e) {
      console.log(e)
    }
  }

  const contextValue = {
    losts,
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
