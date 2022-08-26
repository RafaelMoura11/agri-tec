import LostInterface from "../interfaces/LostInterface";

type Props = {
    onChangeHandler: (name: string, value: string | number) => void;
    lost: LostInterface
}

const EventSelect: React.FC<Props> = ({ onChangeHandler, lost }) => {
    const options = ['Chuva excessiva', 'Geada', 'Granizo', 'Seca', 'Vendaval', 'Raio'];

    return (
        <div className="col-md-6">
            <label className="small mb-1" htmlFor="event">Evento causador</label>
            <br />
            <select
                className="form-select"
                id="event"
                name="event"
                onChange={ ({ target: { name, value } }) => onChangeHandler(name, value) }
                aria-label="Default select example"
                value={ lost.event }
            >
                <option value='' key="default">Escolha o evento causador</option>
                {
                    options.map((option, index) => (
                        <option value={ option.toLowerCase() } key={ index }>{ option }</option>
                    ))
                }
            </select>
        </div>
    )
}

export default EventSelect;
