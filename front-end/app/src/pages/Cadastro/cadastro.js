import React, { useState } from 'react';
import './style.css';

import { useHistory } from 'react-router-dom';

import {MdEmail, MdLock} from 'react-icons/md';
import { HiEye, HiEyeOff } from 'react-icons/hi';

import api from '../../services/api';

function Cadastro() {

    const history = useHistory();
    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            email,
            password,
        };

        try {
            // eslint-disable-next-line
            const response = await api.post('register', data);

            alert('Cadastro efetuado com sucesso!');
            history.push('/');
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }

    return (
        <div className="cadastro-container">
            <div className="content">
               
                <form onSubmit={handleRegister}>
                    <h1>Cadastro</h1>
                        <p>Faça seu cadastro, entre na plataforma"</p>

                    <div className="cadastroInputEmail">
                        <MdEmail />
                        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className="cadastroInputPassword">
                        <MdLock />
                        <input placeholder="Senha" type={show ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} />
                    <div className="login-eye">
                        {show ? (
                            <HiEye size={20} onClick={handleClick} />
                        ) : (
                            <HiEyeOff 
                                size={20} onClick={handleClick} />
                        )}
                    </div>
                 </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
               
            </div>
        </div>
    )
}

export default Cadastro;