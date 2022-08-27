import { useContext } from "react";
import { Context } from '../context/Provider'

const SearchByCPF: React.FC = () => {
    const { searchByCPF, setSearchByCPF } = useContext(Context);
    return (
        <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
            <i className="fas fa-search" aria-hidden="true"></i>
            <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Busque por nome"
            aria-label="Search" defaultValue={ searchByCPF } onChange={ (e: any) => setSearchByCPF(e.target.value) } />
        </form>
    )
}

export default SearchByCPF;
