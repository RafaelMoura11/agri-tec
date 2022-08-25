import LostInterface from "../interfaces/LostInterface";

type Props = {
    lost: LostInterface;
}

const LostCard: React.FC<Props> = ({ lost }) => {
    return (
        <div>
            {
                lost.name
            }
        </div>
    )
}

export default LostCard;
