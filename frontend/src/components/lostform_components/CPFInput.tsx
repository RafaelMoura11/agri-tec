import Props from "../../interfaces/LostFormInputProps"

const CPFInput: React.FC<Props> = ({ lost, onChangeHandler, invalidFields }) => {
    return (
        <div className="col-md-6">
            <label className="small mb-1" htmlFor="cpf">CPF (Digite apenas os números)</label>
            <input
                className={ invalidFields.includes('cpf') ? 'form-control invalid-field' :  'form-control' }
                id="cpf"
                type="text"
                placeholder="Digite o CPF do(a) Agricultor(a)"
                value={ lost.cpf }
                name="cpf"
                onChange={ ({ target: { name, value } }) => onChangeHandler(name, value) }
                maxLength={ 11 }
            />
            { invalidFields.includes('cpf') && (
                <small id="cpf" className="form-text text-muted">CPF inválido</small>
            ) }
        </div>
    )
}

export default CPFInput;
