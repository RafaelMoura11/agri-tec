import Props from "../../interfaces/LostFormInputProps"

const LatitudeInput: React.FC<Props> = ({ lost, onChangeHandler, invalidFields }) => {
    return (
        <div className="col-md-6">
            <label className="small mb-1" htmlFor="latitude">Latitude</label>
            <input
                className={ invalidFields.includes('latitude') ? 'form-control invalid-field' :  'form-control' }
                id="latitude"
                type="text"
                placeholder="Digite a Latitude da localização"
                value={ lost.latitude }
                name="latitude"
                onChange={ ({ target: { name, value } }) => onChangeHandler(name, Number(value)) }
            />
            { invalidFields.includes('latitude') && (
                <small id="latitude" className="form-text text-muted">Latitude inválida</small>
            ) }
        </div>
    )
}

export default LatitudeInput;
