import React from 'react';
import Button from "@components/button/button.jsx";
import { Link } from 'react-router-dom';
import './ContactLink.scss';

const ContactLink = () => {
    return (
        <section>
            <div className='ContactLink__content' id="contact">
                <h1>Vous préparer seul est possible.
                    Être accompagné change tout.</h1>
                <p>Discutons ensemble de votre projet et de vos objectifs lors d'un premier entretien gratuit.</p>
                <Link to="/contact">
                    <Button text="Contactez-moi" />
                </Link>
            </div>
        </section>

    );
};

export default ContactLink;