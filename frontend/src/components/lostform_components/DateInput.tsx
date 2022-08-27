import LostInterface from "../../interfaces/LostInterface"

type Props = {
    lost: LostInterface;
    onChangeHandler: (name: string, value: string | number) => void;
}

const DateInput: React.FC<Props> = ({ lost, onChangeHandler }) => {
    return (
        <div className="col-md-6">
            <label className="small mb-1" htmlFor="date">Data do ocorrido</label>
            <input
                className="form-control"
                id="date"
                type="text"
                placeholder="Digite a data do ocorrido"
                value={ lost.date }
                name="date"
                onChange={ ({ target: { name, value } }) => onChangeHandler(name, value) }
            />
        </div>
    )
}

export default DateInput;
