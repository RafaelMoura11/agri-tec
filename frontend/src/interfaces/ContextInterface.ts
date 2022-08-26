import LostInterface from "./LostInterface";

interface ContextInterface {
    losts: LostInterface[];
    editLost: (lost: LostInterface) => Promise<void>;
    deleteLost: (id: number | string) => Promise<void>;
}

export default ContextInterface;
