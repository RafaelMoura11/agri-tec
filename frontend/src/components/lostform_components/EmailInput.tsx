import Props from "../../interfaces/LostFormInputProps"

const EmailInput: React.FC<Props> = ({ lost, onChangeHandler, invalidFields }) => {
    return (
        <div className="mb-3">
            <label className="small mb-1" htmlFor="email">Email</label>
            <input
            className={ invalidFields.includes('email') ? 'form-control invalid-field' :  'form-control' }
            id="email"
            type="text"
            placeholder="Digite o email do(a) Agricultor(a)"
            value={ lost.email }
            name="email"
            onChange={ ({ target: { name, value } }) => onChangeHandler(name, value) }
            />
            { invalidFields.includes('email') && (
                <small id="email" className="form-text text-muted">Email inválido</small>
            ) }
        </div>
    )   
}

export default EmailInput;
