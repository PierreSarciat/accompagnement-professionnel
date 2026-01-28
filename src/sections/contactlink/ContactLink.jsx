import React from 'react';
import Button from "@components/button/button.jsx";
import { Link } from 'react-router-dom';

const ContactLink = () => {
    return (
        <div className=''>
            <p>Vous préparer seul est possible.
                Être accompagné change tout.</p>

            <p>Discutons ensemble de votre projet et de vos objectifs lors d'un premier entretien gratuit.</p>
            <Link to="/contact">
                <Button text="Contactez-moi" href="" />
            </Link>
        </div>

    );
};

export default ContactLink;