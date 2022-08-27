import Props from "../../interfaces/LostFormInputProps"

const CPFInput: React.FC<Props> = ({ lost, onChangeHandler }) => {
    return (
        <div className="col-md-6">
            <label className="small mb-1" htmlFor="cpf">CPF</label>
            <input
                className="form-control"
                id="cpf"
                type="tel"
                placeholder="Digite o CPF do(a) Agricultor(a)"
                value={ lost.cpf }
                name="cpf"
                onChange={ ({ target: { name, value } }) => onChangeHandler(name, value) }
            />
        </div>
    )
}

export default CPFInput;
