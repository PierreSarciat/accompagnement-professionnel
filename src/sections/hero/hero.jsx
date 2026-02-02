import React from 'react';
import { Link } from 'react-router-dom';
import './hero.scss';

import Button from "@components/button/button.jsx";



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
                        <div className='button-container'>
                            <Button text="A propos" href="" />
                            <Link to="/contact">
                                <Button text="Contactez-moi" href="" />
                            </Link>
                        </div>

                    </div>
                    <div className='colonne2 animation-slide-left'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget lacus vitae nulla varius feugiat id non est. Ut ut velit dignissim, maximus massa eget, luctus velit. Cras vel odio non orci maximus scelerisque. In lobortis lacus lectus, sed ultricies odio maximus sit amet. Aliquam id facilisis arcu, vel iaculis urna. Cras aliquam arcu ex, mattis mattis nisl porta dapibus. </p>
                    </div>


                </div>
            </section>
        </div>

    );
};

export default Hero;
