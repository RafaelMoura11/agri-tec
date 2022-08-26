const LostForm: React.FC = () => {
    return (
        <form>
            <div className="mb-3">
                <label className="small mb-1" htmlFor="inputUsername">Nome</label>
                <input className="form-control" id="inputUsername" type="text" placeholder="Enter your username" value="username" />
            </div>
            <div className="row gx-3 mb-3">
                <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputFirstName">Latitude</label>
                    <input className="form-control" id="inputFirstName" type="text" placeholder="Digite o Latitude" value="Valerie" />
                </div>
                <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputLastName">Longitude</label>
                    <input className="form-control" id="inputLastName" type="text" placeholder="Enter your Longitude" value="Luna" />
                </div>
            </div>
            <div className="row gx-3 mb-3">
                <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputOrgName">Tipo da lavoura</label>
                    <input className="form-control" id="inputOrgName" type="text" placeholder="Enter your Tipo da lavoura" value="Start Bootstrap" />
                </div>
                <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputLocation">Evento causador</label>
                    <input className="form-control" id="inputLocation" type="text" placeholder="Enter your Evento causador" value="San Francisco, CA" />
                </div>
            </div>
            <div className="mb-3">
                <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value="name@example.com" />
            </div>
            <div className="row gx-3 mb-3">
                <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
                    <input className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value="555-123-4567" />
                </div>
                <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputBirthday">Birthday (DD/MM/AAAA)</label>
                    <input className="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday" value="DD/MM/AAAA" />
                </div>
            </div>
            <button className="btn btn-primary" type="button">Save changes</button>
        </form>
    )
}

export default LostForm;
