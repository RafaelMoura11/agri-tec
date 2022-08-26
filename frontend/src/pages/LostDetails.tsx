import LostForm from "../components/LostForm";
import { Navigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import LostInterface from "../interfaces/LostInterface";
import api from '../api';

const LostDetails: React.FC = () => {
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
        const fetchLostById = async () => {
          const { data } = await api.get(`/api/losts/${id}`)
          console.log(data)
          setLost(data)
        }
        fetchLostById()
    }, [])
    
    if (!id) return <Navigate to="/" />
    return (
        <div className="container-xl px-4 mt-4">
            <hr className="mt-0 mb-4" />
            <div className="row">
                <div className="col-xl">
                    <div className="card mb-4">
                        <div className="card-header">Account Details</div>
                        <div className="card-body">
                            <LostForm lost={ lost } setLost={ setLost } />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LostDetails;
