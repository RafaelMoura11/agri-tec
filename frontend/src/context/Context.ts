import { createContext } from 'react';
import ContextInterface from '../interfaces/ContextInterface';

const Context = createContext<ContextInterface>({});

export default Context
