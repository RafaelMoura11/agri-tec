import { useContext } from 'react';
import { Context } from '../context/Provider';
import TBody from './TBody';
import THead from './THead';
import EmptyTable from './EmptyTable';

const Losts: React.FC = () => {
    const { losts } = useContext(Context);
    return (
        <div className="container">
            <div className="col-12 col-sm-12 col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h4>Comunicações de perda</h4>
                    </div>
                    <div className="card-body">
                        <div className="media-list position-relative">
                            <div className="table-responsive" id="project-team-scroll" tabIndex={ 1 }>
                                {
                                    losts.length ? (
                                        <table className="table table-hover table-xl mb-0">
                                            <THead />
                                            <TBody />
                                        </table>
                                    ) : (
                                        <EmptyTable />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Losts;
