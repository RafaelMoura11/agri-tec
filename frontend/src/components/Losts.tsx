import LostCard from './LostCard';
import TBody from './TBody';
import THead from './THead';

const Losts: React.FC = () => {
    return (
        <div className="container">
            <div className="col-12 col-sm-12 col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h4>Project Team</h4>
                    </div>
                    <div className="card-body">
                        <div className="media-list position-relative">
                            <div className="table-responsive" id="project-team-scroll" tabIndex={ 1 }>
                                <table className="table table-hover table-xl mb-0">
                                    <THead />
                                    <TBody />
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Losts;
