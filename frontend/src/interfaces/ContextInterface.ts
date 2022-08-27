import LostInterface from "./LostInterface";

interface ContextInterface {
    losts: LostInterface[];
    getLosts: () => Promise<void>;
    createLost: (lost: LostInterface) => Promise<void>;
    editLost: (lost: LostInterface) => Promise<void>;
    deleteLost: (id: number | string) => Promise<void>;
    searchByCPF: string;
    setSearchByCPF: React.Dispatch<React.SetStateAction<string>>
}

export default ContextInterface;
