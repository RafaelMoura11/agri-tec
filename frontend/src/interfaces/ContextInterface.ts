import LostInterface from "./LostInterface";

interface ContextInterface {
    losts: LostInterface[];
    getLosts: () => Promise<void>;
    createLost: (lost: LostInterface) => Promise<void>;
    editLost: (lost: LostInterface) => Promise<void>;
    deleteLost: (id: number | string) => Promise<void>;
}

export default ContextInterface;
