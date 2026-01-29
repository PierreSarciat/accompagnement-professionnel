import React from 'react';
import './about.scss';

const About = () => {
    return (
        <div className='about__background'>
            <section className="section" id="about">
                <div className="about__content">
                    <div className='about__title'>
                        <h2>Qui suis-je ?</h2>
                        <h1>Delphine Rivier</h1>
                    </div>
                    <div className='about__description'>
                        <p>
                            Experte en accompagnement professionnel.
                            Mon objectif est de vous aider à atteindre vos ambitions professionnelles
                            grâce à des programmes personnalisés et adaptés à vos besoins.
                        </p>
                        <p>
                            Avec plus de 10 ans d'expérience, j'ai accompagné des centaines de
                            professionnels dans leur transition de carrière, leur développement de compétences,
                            et leur quête d'épanouissement au travail.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default About;
