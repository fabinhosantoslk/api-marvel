import React, { useState } from 'react';
import './style-login.css';
import { useHistory } from 'react-router-dom';

import {MdEmail, MdLock} from 'react-icons/md';
import { HiEye, HiEyeOff } from 'react-icons/hi';

import api from '../../services/api'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)
    const history = useHistory()

    async function handleClick(e) {
        e.preventDefault()
        setShow(!show);

    try {
        const response = await api.post('login', { email, password });
        localStorage.setItem('emailLogin', email);
        localStorage.setItem('password.Login', response.data.email);

    history.push('/profile');
    } catch (err) {
        alert('Falha no login, tente novamente')
        }
    }
    return (
       <div className="login">
          
           <div className="login">
               <h1>Faça seu login</h1>

            <form>
               <div className="loginInputEmail">
                <MdEmail />
                <input type="text" placeholder="Digite um email" value={email} onChange={e => setEmail(e.target.value)} />
               </div>

               <div className="loginInputPassword">
                   <MdLock />
                   <input placeholder="Digite uma senha" type={show ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} />
                    <div className="login-eye">
                        {show ? (
                            <HiEye size={20} onClick={handleClick} />
                        ) : (
                            <HiEyeOff 
                                size={20} onClick={handleClick} />
                        )}
                    </div>
               </div>

               <button type="submit">
                Entrar
               </button>

               <button type="submit">
                Cadastrar-se
               </button>

                <h4><strong>Não tenho conta!</strong></h4>
            
            </form>
           </div>

       </div>
    );
}

export default Login;