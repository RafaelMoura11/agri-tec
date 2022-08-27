import Props from "../../interfaces/LostFormInputProps"

const DateInput: React.FC<Props> = ({ lost, onChangeHandler, invalidFields }) => {
    return (
        <div className="col-md-6">
            <label className="small mb-1" htmlFor="date">Data do ocorrido</label>
            <input
                className={ invalidFields.includes('date') ? 'form-control invalid-field' :  'form-control' }
                id="date"
                type="text"
                placeholder="Digite a data do ocorrido (mm/dd/yyyy)"
                value={ lost.date }
                name="date"
                onChange={ ({ target: { name, value } }) => onChangeHandler(name, value) }
            />
            { invalidFields.includes('date') && (
                <small id="date" className="form-text text-muted">Formato da data inválido</small>
            ) }
        </div>
    )
}

export default DateInput;
