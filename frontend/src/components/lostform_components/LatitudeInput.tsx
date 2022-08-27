import LostInterface from "../../interfaces/LostInterface"

type Props = {
    lost: LostInterface;
    onChangeHandler: (name: string, value: string | number) => void;
}

const LatitudeInput: React.FC<Props> = ({ lost, onChangeHandler }) => {
    return (
        <div className="col-md-6">
            <label className="small mb-1" htmlFor="latitude">Latitude</label>
            <input
                className="form-control"
                id="latitude"
                type="text"
                placeholder="Digite a Latitude da localização"
                value={ lost.latitude }
                name="latitude"
                onChange={ ({ target: { name, value } }) => onChangeHandler(name, Number(value)) }
            />
        </div>
    )
}

export default LatitudeInput;
