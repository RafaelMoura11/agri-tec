import LostInterface from "../interfaces/LostInterface";

type Props = {
    lost: LostInterface;
}

const LostCard: React.FC<Props> = ({ lost }) => {
    return (
        <li>
            {
                lost.name
            }
        </li>
    )
}

export default LostCard;
