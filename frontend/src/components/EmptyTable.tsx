import RegisterButton from "./RegisterButton";

const EmptyTable: React.FC = () => {
    return (
        <div className="card-body cart">
                <div className="col-sm-12 empty-cart-cls text-center">
                    <h3><strong>Aparentemente não há nenhuma chamada</strong></h3>
                    <h4>Clique no botão abaixo para registrar uma nova chamada de perda</h4>
                    <br />
                    <RegisterButton />
                </div>
        </div>
    )
}

export default EmptyTable;
