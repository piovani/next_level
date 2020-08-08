import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/29814652?s=460&u=3f12ae5a7abaf6bdfce470875e685b0ed3adc4a5&v=4" alt="Allison Piovani" />
                <div>
                    <strong>Allison Piovani</strong>
                    <span>Física</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de física avançada.
                <br/><br/>
                Apaixonado por explodir as linhas temporais das realidades auternativas do nosso universo.

            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong> R$ 70,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;