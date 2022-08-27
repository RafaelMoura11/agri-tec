import Props from "../../interfaces/LostFormInputProps"

const NameInput: React.FC<Props> = ({ lost, onChangeHandler, invalidFields }) => {
    return (
        <div className="mb-3">
            <label className="small mb-1" htmlFor="name">Nome</label>
            <input
                className={ invalidFields.includes('name') ? 'form-control invalid-field' :  'form-control' }
                id="name"
                type="text"
                placeholder="Digite o nome do(a) Agricultor(a)"
                value={ lost.name }
                name="name"
                onChange={ ({ target: { name, value } }) => onChangeHandler(name, value) }
            />
            { invalidFields.includes('name') && (
                <small id="name" className="form-text text-muted">Este campo é obrigatório</small>
            ) }
        </div>
    )
}

export default NameInput;
