import DeleteButton from './DeleteButton';
import SaveButton from './SaveButton';

type Props = {
    pathname: string;
    onDeleteHandler: () => Promise<void>;
    onCancelHandler: () => void;
    onSubmitHandler: (e: any) => Promise<void>;
    shouldSave: boolean;
}

const FormButtons: React.FC<Props> = ({ pathname, onCancelHandler, onDeleteHandler, onSubmitHandler, shouldSave }) => {
    return (
        <>
            {
                pathname.includes('details') ? (
                    <>
                        {
                            shouldSave ? <SaveButton onSubmitHandler={ onSubmitHandler } /> : (
                                <button className="btn btn-primary" id="save-btn" type="submit">Salvar</button>
                            )
                        }
                        <DeleteButton onDeleteHandler={ onDeleteHandler } />
                    </> ) : (
                    <button className="btn btn-primary" id="save-btn" type="submit">Registrar</button>
                    )
            }
            <button type="button" className="btn btn-secondary" id="cancel-btn" onClick={ onCancelHandler }>Voltar</button>
        </>
    )
}

export default FormButtons;
