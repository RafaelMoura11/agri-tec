import { useContext } from 'react';
import LostInterface from "../interfaces/LostInterface";
import EventSelect from "./EventSelect";
import { useNavigate, useLocation } from 'react-router-dom';

import { Context } from '../context/Provider';

type Props = {
    lost: LostInterface;
    setLost: React.Dispatch<React.SetStateAction<LostInterface>>;
}

const LostForm: React.FC<Props> = ({ lost, setLost }) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { getLosts, createLost, editLost, deleteLost } = useContext(Context);
    const onChangeHandler = (name: string, value: string | number) => {
        setLost({ ...lost, [name]: value, })
    }

    const onSubmitHandler = async (e: any) => {
        e.preventDefault()
        if (pathname.includes('details')) {
            await editLost(lost)
        } else {
            await createLost(lost)
        }
        await getLosts()
        return navigate('/')
    }

    const onDeleteHandler = async () => {
        if (lost.id) {
            await deleteLost(lost.id)
            await getLosts()
            return navigate('/')
        }
    }

    const onCancelHandler = () => navigate('/')

    return (
        <form onSubmit={ (e: any) => onSubmitHandler(e) }>
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
            <div className="row gx-3 mb-3">
                <div className="col-md-6">
                    <label className="small mb-1" htmlFor="latitude">Latitude</label>
                    <input
                        className="form-control"
                        id="latitude"
                        type="text"
                        placeholder="Digite a Latitude da localização"
                        value={ lost.latitude }
                        name="latitude"
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
                        name="longitude"
                        onChange={ ({ target: { name, value } }) => onChangeHandler(name, Number(value)) }
                    />
                </div>
            </div>
            <div className="row gx-3 mb-3">
                <EventSelect lost={ lost } onChangeHandler={ onChangeHandler } />
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
            </div>
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
            <div className="row gx-3 mb-3">
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
                <div className="col-md-6">
                    <label className="small mb-1" htmlFor="date">Data do ocorrido</label>
                    <input
                        className="form-control"
                        id="date"
                        type="text"
                        placeholder="Digite a data do ocorrido"
                        value={ lost.date }
                        name="date"
                        onChange={ ({ target: { name, value } }) => onChangeHandler(name, value) }
                    />
                </div>
            </div>
            <button className="btn btn-primary" id="save-btn" type="submit">Salvar</button>
            {
                pathname.includes('details') && (
                <button type="button" className="btn btn-danger" id="delete-btn" onClick={ onDeleteHandler } >Deletar</button>
                )
            }
            <button type="button" className="btn btn-secondary" id="cancel-btn" onClick={ onCancelHandler }>Cancelar</button>
        </form>
    )
}

export default LostForm;
