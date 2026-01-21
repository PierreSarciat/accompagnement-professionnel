import React from 'react';
import './hero.scss';



const Hero = () => {
    return (
        <div className="herobackground">
            <section className='section hero'>
                <div className="hero__content">
                    <div className='colonne1'>
                        <h1 className="hero__title">
                            Votre avenir professionnel commence ici. Transformez votre vie dès maintenant !
                        </h1>
                        <p className="hero__subtitle">
                            Avec un accompagnement personnalisé, atteignez vos objectifs professionnels plus vite que vous ne l’imaginez.
                        </p>
                    </div>
                    <div className='colonne2'></div>
                    <div className='colonne3'></div>

                </div>
            </section>
        </div>

    );
};

export default Hero;
