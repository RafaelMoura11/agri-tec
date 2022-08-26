import LostForm from "../components/LostForm";

const LostDetails: React.FC = () => {
    return (
        <div className="container-xl px-4 mt-4">
            <hr className="mt-0 mb-4" />
            <div className="row">
                <div className="col-xl">
                    <div className="card mb-4">
                        <div className="card-header">Account Details</div>
                        <div className="card-body">
                            <LostForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LostDetails;
