import Props from "../../interfaces/LostFormInputProps"

const LongitudeInput: React.FC<Props> = ({ lost, onChangeHandler, invalidFields }) => {
    return (
        <div className="col-md-6">
            <label className="small mb-1" htmlFor="longitude">Longitude</label>
            <input
                className={ invalidFields.includes('longitude') ? 'form-control invalid-field' :  'form-control' }
                id="longitude"
                type="text"
                placeholder="Digite a Longitude da localização"
                value={ lost.longitude }
                name="longitude"
                onChange={ ({ target: { name, value } }) => onChangeHandler(name, Number(value)) }
            />
            { invalidFields.includes('longitude') && (
                <small id="longitude" className="form-text text-muted">Longitude inválida</small>
            ) }
        </div>
    )
}

export default LongitudeInput;
