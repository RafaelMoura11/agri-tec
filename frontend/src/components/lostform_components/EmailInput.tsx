import Props from "../../interfaces/LostFormInputProps"

const EmailInput: React.FC<Props> = ({ lost, onChangeHandler }) => {
    return (
        <div className="mb-3">
            <label className="small mb-1" htmlFor="email">Email</label>
            <input
            className="form-control"
            id="email"
            type="email"
            placeholder="Digite o email do(a) Agricultor(a)"
            value={ lost.email }
            name="email"
            onChange={ ({ target: { name, value } }) => onChangeHandler(name, value) }
            />
        </div>
    )   
}

export default EmailInput;
