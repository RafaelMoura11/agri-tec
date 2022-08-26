import LostInterface from "../interfaces/LostInterface";

type Props = {
    lost: LostInterface;
    setLost: React.Dispatch<React.SetStateAction<LostInterface>>;
}

const LostForm: React.FC<Props> = ({ lost, setLost }) => {
    const onChangeHandler = (name: string, value: string | number) => {
        setLost({ ...lost, [name]: value, })
    }

    return (
        <form>
            <div className="mb-3">
                <label className="small mb-1" htmlFor="name">Nome</label>
                <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Digite o nome do(a) Agricultor(a)"
                    value={ lost.name }
                    onChange={ ({ target: { name, value } }) => onChangeHandler(name, value) }
                />
            </div>
            <div className="row gx-3 mb-3">
                <div className="col-md-6">
                    <label className="small mb-1" htmlFor="latitude">Latitude</label>
                    <input
                        className="form-control"
                        id="latitude"
                        type="text"
                        placeholder="Digite a Latitude da localização"
                        value={ lost.latitude }
                        onChange={ ({ target: { name, value } }) => onChangeHandler(name, Number(value)) }
                    />
                </div>
                <div className="col-md-6">
                    <label className="small mb-1" htmlFor="longitude">Longitude</label>
                    <input
                        className="form-control"
                        id="longitude"
                        type="text"
                        placeholder="Digite a Longitude da localização"
                        value={ lost.longitude }
                        onChange={ ({ target: { name, value } }) => onChangeHandler(name, Number(value)) }
                    />
                </div>
            </div>
            <div className="row gx-3 mb-3">
                <div className="col-md-6">
                    <label className="small mb-1" htmlFor="type">Tipo da lavoura</label>
                    <input
                        className="form-control"
                        id="type"
                        type="text"
                        placeholder="Digite o tipo de lavoura do(a) Agricultor(a)"
                        value={ lost.type }
                        onChange={ ({ target: { name, value } }) => onChangeHandler(name, value) }
                    />
                </div>
                <div className="col-md-6">
                    <label className="small mb-1" htmlFor="event">Evento causador</label>
                    <input
                    className="form-control"
                    id="event"
                    type="text"
                    placeholder="Digite o Evento Causador da Perda"
                    value={ lost.event }
                    onChange={ ({ target: { name, value } }) => onChangeHandler(name, value) }
                    />
                </div>
            </div>
            <div className="mb-3">
                <label className="small mb-1" htmlFor="email">Email</label>
                <input
                className="form-control"
                id="email"
                type="email"
                placeholder="Digite o email do(a) Agricultor(a)"
                value={ lost.email }
                onChange={ ({ target: { name, value } }) => onChangeHandler(name, value) }
                />
            </div>
            <div className="row gx-3 mb-3">
                <div className="col-md-6">
                    <label className="small mb-1" htmlFor="cpf">CPF</label>
                    <input
                        className="form-control"
                        id="cpf"
                        type="tel"
                        placeholder="Digite o CPF do(a) Agricultor(a)"
                        value={ lost.cpf }
                        onChange={ ({ target: { name, value } }) => onChangeHandler(name, value) }
                    />
                </div>
                <div className="col-md-6">
                    <label className="small mb-1" htmlFor="date">Data do ocorrido</label>
                    <input
                        className="form-control"
                        id="date"
                        type="text"
                        name="birthday"
                        placeholder="Digite a data do ocorrido"
                        value={ lost.date }
                        onChange={ ({ target: { name, value } }) => onChangeHandler(name, value) }
                    />
                </div>
            </div>
            <button className="btn btn-primary" type="button">Salvar</button>
            <button type="button" className="btn btn-danger">Deletar</button>
        </form>
    )
}

export default LostForm;
