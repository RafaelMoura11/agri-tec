import LostInterface from "../../interfaces/LostInterface"

type Props = {
    lost: LostInterface;
    onChangeHandler: (name: string, value: string | number) => void;
}

const LongitudeInput: React.FC<Props> = ({ lost, onChangeHandler }) => {
    return (
        <div className="col-md-6">
                <label className="small mb-1" htmlFor="longitude">Longitude</label>
                <input
                    className="form-control"
                    id="longitude"
                    type="text"
                    placeholder="Digite a Longitude da localização"
                    value={ lost.longitude }
                    name="longitude"
                    onChange={ ({ target: { name, value } }) => onChangeHandler(name, Number(value)) }
                />
            </div>
    )
}

export default LongitudeInput;
