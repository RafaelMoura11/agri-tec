import LostInterface from "./LostInterface";

interface ContextInterface {
    losts: LostInterface[];
    editLost: (lost: LostInterface) => Promise<void>;
}

export default ContextInterface;
