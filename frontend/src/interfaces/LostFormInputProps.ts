import LostInterface from "./LostInterface"

type Props = {
    lost: LostInterface;
    onChangeHandler: (name: string, value: string | number) => void;
    invalidFields: string[];
}

export default Props;
