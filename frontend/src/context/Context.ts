import { createContext } from 'react';
import ContextInterface from '../interfaces/ContextInterface';
import LostInterface from '../interfaces/LostInterface';

const Context = createContext<ContextInterface>({
    losts: [],
    getLosts: async () => {},
    createLost: async (lost: LostInterface) => {},
    editLost: async (lost: LostInterface) => {},
    deleteLost: async (id: number | string) => {},
    searchByCPF: '',
    setSearchByCPF: () => {}
});

export default Context
