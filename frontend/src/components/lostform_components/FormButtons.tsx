import DeleteButton from './DeleteButton';

type Props = {
    pathname: string;
    onDeleteHandler: () => Promise<void>;
    onCancelHandler: () => void;
}

const FormButtons: React.FC<Props> = ({ pathname, onCancelHandler, onDeleteHandler }) => {
    return (
        <>
            <button className="btn btn-primary" id="save-btn" type="submit">Salvar</button>
                {
                    pathname.includes('details') && (
                        <DeleteButton onDeleteHandler={ onDeleteHandler } />
                        )
                    }
            <button type="button" className="btn btn-secondary" id="cancel-btn" onClick={ onCancelHandler }>Voltar</button>
        </>
    )
}

export default FormButtons;
