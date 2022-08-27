import Props from "../../interfaces/LostFormInputProps"

const TypeInput: React.FC<Props> = ({ lost, onChangeHandler, invalidFields }) => {
    return (
        <div className="col-md-6">
            <label className="small mb-1" htmlFor="type">Tipo da lavoura</label>
            <input
            className={ invalidFields.includes('type') ? 'form-control invalid-field' :  'form-control' }
            id="type"
            type="text"
            placeholder="Digite o tipo da lavoura"
            value={ lost.type }
            name="type"
            onChange={ ({ target: { name, value } }) => onChangeHandler(name, value) }
            />
            { invalidFields.includes('type') && (
                <small id="type" className="form-text text-muted">Este campo é obrigatório</small>
            ) }
        </div>
    )
}

export default TypeInput;
