import { useContext, useState } from 'react';
import LostInterface from "../interfaces/LostInterface";
import { useNavigate, useLocation } from 'react-router-dom';
import { Context } from '../context/Provider';
import { checkFields } from '../utils/checkFields'


import EventSelect from './lostform_components/EventSelect';
import DeleteButton from './lostform_components/DeleteButton';
import NameInput from './lostform_components/NameInput';
import LatitudeInput from './lostform_components/LatitudeInput';
import LongitudeInput from './lostform_components/LongitudeInput';
import TypeInput from './lostform_components/TypeInput';
import EmailInput from './lostform_components/EmailInput';
import CPFInput from './lostform_components/CPFInput';
import DateInput from './lostform_components/DateInput';

type Props = {
    lost: LostInterface;
    setLost: React.Dispatch<React.SetStateAction<LostInterface>>;
}

const LostForm: React.FC<Props> = ({ lost, setLost }) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [invalidFields, setInvalidFields] = useState<string[]>([])
    const { getLosts, createLost, editLost, deleteLost } = useContext(Context);
    const onChangeHandler = (name: string, value: string | number) => {
        setLost({ ...lost, [name]: value, })
    }


    const alertInvalidFields = () => {
        setInvalidFields(checkFields(lost))
        setTimeout(() => {
            setInvalidFields([])
        }, 4000)
    }


    const onSubmitHandler = async (e: any) => {
        e.preventDefault()
        if (checkFields(lost).length) return alertInvalidFields()
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
            <NameInput lost={ lost } onChangeHandler={ onChangeHandler } invalidFields={ invalidFields } />
            <div className="row gx-3 mb-3">
                <LatitudeInput lost={ lost } onChangeHandler={ onChangeHandler } invalidFields={ invalidFields } />
                <LongitudeInput lost={ lost } onChangeHandler={ onChangeHandler } invalidFields={ invalidFields } />
            </div>
            <div className="row gx-3 mb-3">
                <EventSelect lost={ lost } onChangeHandler={ onChangeHandler } invalidFields={ invalidFields } />
                <TypeInput lost={ lost } onChangeHandler={ onChangeHandler } invalidFields={ invalidFields } />
            </div>
            <EmailInput lost={ lost } onChangeHandler={ onChangeHandler } invalidFields={ invalidFields } />
            <div className="row gx-3 mb-3">
                <CPFInput lost={ lost } onChangeHandler={ onChangeHandler } invalidFields={ invalidFields } />
                <DateInput lost={ lost } onChangeHandler={ onChangeHandler } invalidFields={ invalidFields } />
            </div>
            <button className="btn btn-primary" id="save-btn" type="submit">Salvar</button>
            {
                pathname.includes('details') && (
                <DeleteButton onDeleteHandler={ onDeleteHandler } />
                )
            }
            <button type="button" className="btn btn-secondary" id="cancel-btn" onClick={ onCancelHandler }>Cancelar</button>
        </form>
    )
}

export default LostForm;
