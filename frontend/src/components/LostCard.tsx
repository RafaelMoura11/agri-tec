import LostInterface from "../interfaces/LostInterface";

type Props = {
    lost: LostInterface;
}

const LostCard: React.FC<Props> = ({ lost }) => {
    return (
        <li className="lost">
            <a href={ `/details/${lost.id}` } className="lost-link">
                {
                    lost.name
                }
            </a>
        </li>
    )
}

export default LostCard;
