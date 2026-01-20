import React from 'react';
import './hero.scss';


const Hero = () => {
    return (
        <section className='section'>
            <div className="hero__content">
                <h1 className="hero__title">
                    Votre avenir professionnel commence ici. Transformez votre vie dès maintenant !
                </h1>
                <p className="hero__subtitle">
                    Avec un accompagnement personnalisé, atteignez vos objectifs professionnels plus vite que vous ne l’imaginez.
                </p>

            </div>
        </section>
    );
};

export default Hero;
