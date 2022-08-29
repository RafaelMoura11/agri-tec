import { createContext } from 'react';
import ContextInterface from '../interfaces/ContextInterface';
import LostInterface from '../interfaces/LostInterface';
import lostInstance from '../instances/LostInstance';

const Context = createContext<ContextInterface>({
    losts: [],
    getLosts: async () => [],
    getLostById: async (id: number | string) => lostInstance,
    createLost: async (lost: LostInterface) => {},
    editLost: async (lost: LostInterface) => {},
    deleteLost: async (id: number | string) => {},
    searchByCPF: '',
    setSearchByCPF: () => {},
    setLosts: () => {}
});

export default Context
