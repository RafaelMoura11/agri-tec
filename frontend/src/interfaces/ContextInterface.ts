import LostInterface from "./LostInterface";

interface ContextInterface {
    losts: LostInterface[];
    getLosts: () => Promise<LostInterface[]>;
    createLost: (lost: LostInterface) => Promise<void>;
    editLost: (lost: LostInterface) => Promise<void>;
    deleteLost: (id: number | string) => Promise<void>;
    searchByCPF: string;
    setSearchByCPF: React.Dispatch<React.SetStateAction<string>>;
    setLosts: React.Dispatch<React.SetStateAction<LostInterface[]>>;
}

export default ContextInterface;
