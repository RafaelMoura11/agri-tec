import Props from "../../interfaces/LostFormInputProps"

const TypeInput: React.FC<Props> = ({ lost, onChangeHandler }) => {
    return (
        <div className="col-md-6">
            <label className="small mb-1" htmlFor="type">Tipo da lavoura</label>
            <input
            className="form-control"
            id="type"
            type="text"
            placeholder="Digite o tipo da lavoura"
            value={ lost.type }
            name="type"
            onChange={ ({ target: { name, value } }) => onChangeHandler(name, value) }
            />
        </div>
    )
}

export default TypeInput;
