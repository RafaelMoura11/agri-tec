import { createContext } from 'react';
import ContextInterface from '../interfaces/ContextInterface';
import LostInterface from '../interfaces/LostInterface';

const Context = createContext<ContextInterface>({
    losts: [],
    editLost: async (lost: LostInterface) => {},
    deleteLost: async (id: number | string) => {},
});

export default Context
