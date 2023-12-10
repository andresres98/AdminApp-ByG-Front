import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import usuario from "../../assets/usuarioLogin.png"; 
import "../../../src/styles.css";


const initialLoginForm = {
    username: '',
    password: '',
}

export const LoginPage = () => {

    const {handlerLogin} = useContext(AuthContext);

    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const {username, password} = loginForm;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setLoginForm({
            ...loginForm,
            [name] : value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(!username || !password) {
            Swal.fire('Error de validación',
                'Usario y contraseña requeridos',
                'error');
        }
        //aca se implementa el log in
        handlerLogin({username, password});
        setLoginForm(initialLoginForm);
    }

    return(
        <div className="modal d-flex align-items-center justify-content-center background-image " style={{ display: "block", minHeight: "100vh", }} tabIndex="-1">
            <div className="modal-dialog" style={{ width: "80%", maxWidth: "600px", }}>
                <div className="modal-content">
                <img src={usuario} alt="login" className="img-fluid mx-auto d-block" style={{ marginBottom: "2px", marginTop: "20px" }}/>
                    <div className="modal-header">
                        <h5 className="modal-title" style={{ textAlign: "center", width: "100%" }}>Brownies Y Galletas - Administrador</h5>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="modal-body">
                            <input 
                                className="form-control my-3 w-100"
                                placeholder="Usuario"
                                name="username" 
                                value={username}
                                onChange={onInputChange}
                                />
                            <input 
                                className="form-control my-3 w-100"
                                placeholder="Contraseña"
                                name="password"
                                type="password"
                                value={password} 
                                onChange={onInputChange}/>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button
                                type="submit"
                                className="btn btn-btn-login">
                                LogIn
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

}