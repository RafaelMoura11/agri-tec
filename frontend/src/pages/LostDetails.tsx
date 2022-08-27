import Navbar from "../components/Navbar";
import LostForm from "../components/LostForm";
import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import LostInterface from "../interfaces/LostInterface";
import api from '../api';

const LostDetails: React.FC = () => {
    const { pathname } = useLocation();
    const { id } = useParams();
    const [lost, setLost] = useState<LostInterface>({
        id: 0,
        cpf: '',
        date: '',
        email: '',
        event: '',
        latitude: 0,
        longitude: 0,
        name: '',
        type: ''
    })

    useEffect(() => {
        if (id) {
            const fetchLostById = async () => {
              const { data } = await api.get(`/api/losts/${id}`)
              setLost(data)
            }
            fetchLostById()
        }
    }, [])

    return (
        <div>
            <Navbar />
            <div className="container-xl px-4 mt-4">
                <div className="row">
                    <div className="col-xl">
                        <div className="card mb-4">
                            <div className="card-header">
                                <h3 className="title">{ pathname.includes('details') ? 'Detalhes da perda' : 'Nova perda' }</h3>
                            </div>
                            <div className="card-body">
                                <LostForm lost={ lost } setLost={ setLost } />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LostDetails;
