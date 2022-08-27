import Props from "../../interfaces/LostFormInputProps"

const NameInput: React.FC<Props> = ({ lost, onChangeHandler }) => {
    return (
        <div className="mb-3">
            <label className="small mb-1" htmlFor="name">Nome</label>
            <input
                className="form-control"
                id="name"
                type="text"
                placeholder="Digite o nome do(a) Agricultor(a)"
                value={ lost.name }
                name="name"
                onChange={ ({ target: { name, value } }) => onChangeHandler(name, value) }
            />
        </div>
    )
}

export default NameInput;
