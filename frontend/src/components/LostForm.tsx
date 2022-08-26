import LostInterface from "../interfaces/LostInterface";

type Props = {
    lost: LostInterface;
    setLost: React.Dispatch<React.SetStateAction<LostInterface>>;
}

const LostForm: React.FC<Props> = () => {
    return (
        <form>
            <div className="mb-3">
                <label className="small mb-1" htmlFor="name">Nome</label>
                <input className="form-control" id="name" type="text" placeholder="Digite o nome do(a) Agricultor(a)" value="name" />
            </div>
            <div className="row gx-3 mb-3">
                <div className="col-md-6">
                    <label className="small mb-1" htmlFor="latitude">Latitude</label>
                    <input className="form-control" id="latitude" type="text" placeholder="Digite a Latitude da localização" value="Valerie" />
                </div>
                <div className="col-md-6">
                    <label className="small mb-1" htmlFor="longitude">Longitude</label>
                    <input className="form-control" id="longitude" type="text" placeholder="Digite a Longitude da localização" value="Luna" />
                </div>
            </div>
            <div className="row gx-3 mb-3">
                <div className="col-md-6">
                    <label className="small mb-1" htmlFor="type">Tipo da lavoura</label>
                    <input className="form-control" id="type" type="text" placeholder="Digite o tipo de lavoura do(a) Agricultor(a)" value="Start Bootstrap" />
                </div>
                <div className="col-md-6">
                    <label className="small mb-1" htmlFor="event">Evento causador</label>
                    <input className="form-control" id="event" type="text" placeholder="Digite o Evento Causador da Perda" value="San Francisco, CA" />
                </div>
            </div>
            <div className="mb-3">
                <label className="small mb-1" htmlFor="email">Email</label>
                <input className="form-control" id="email" type="email" placeholder="Digite o email do(a) Agricultor(a)" value="name@example.com" />
            </div>
            <div className="row gx-3 mb-3">
                <div className="col-md-6">
                    <label className="small mb-1" htmlFor="cpf">CPF</label>
                    <input className="form-control" id="cpf" type="tel" placeholder="Digite o CPF do(a) Agricultor(a)" value="555-123-4567" />
                </div>
                <div className="col-md-6">
                    <label className="small mb-1" htmlFor="date">Data do ocorrido</label>
                    <input className="form-control" id="date" type="text" name="birthday" placeholder="Digite a data do ocorrido" value="DD/MM/AAAA" />
                </div>
            </div>
            <button className="btn btn-primary" type="button">Save changes</button>
        </form>
    )
}

export default LostForm;
