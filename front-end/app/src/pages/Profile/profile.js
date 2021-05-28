import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './style.css';

function Inicio() {
    return (
        <div className="inicio-container">
            <header>
                <span>Bem Vindo!</span>

                <Link className="button" to="/inicio/favorito">Adicionar novo favorito</Link>
                <button>
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Lista de Favoritos</h1>

            <ul>
                <li>
                    <strong>Favorito</strong>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>

        </div>
    )
}

export default Inicio;