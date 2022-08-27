import LostInterface from "./LostInterface"

type Props = {
    lost: LostInterface;
    onChangeHandler: (name: string, value: string | number) => void;
}

export default Props;
