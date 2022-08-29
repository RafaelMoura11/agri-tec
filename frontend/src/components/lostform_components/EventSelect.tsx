import Props from "../../interfaces/LostFormInputProps";

const EventSelect: React.FC<Props> = ({ onChangeHandler, lost, invalidFields }) => {
    const options = ['Chuva excessiva', 'Geada', 'Granizo', 'Seca', 'Vendaval', 'Raio'];

    return (
        <div className="col-md-6">
            <label className="small mb-1" htmlFor="event">Evento causador</label>
            <br />
            <select
                className={ invalidFields.includes('event') ? 'form-select invalid-field' :  'form-select' }
                id="event"
                name="event"
                onChange={ ({ target: { name, value } }) => onChangeHandler(name, value) }
                aria-label="Default select example"
                value={ lost.event }
            >
                <option value='' key="default">Escolha o evento causador</option>
                {
                    options.map((option, index) => (
                        <option value={ option } key={ index }>{ option }</option>
                    ))
                }
            </select>
            { invalidFields.includes('event') && (
                <small id="event" className="form-text text-muted">Selecione um evento</small>
            ) }
        </div>
    )
}

export default EventSelect;
