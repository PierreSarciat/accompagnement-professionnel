import React from 'react';
/*import './about.scss';*/

const About = () => {
    return (
        <section className="section">
            <div className="about__content">
                <h2 className="about__title">À propos de moi</h2>
                <p className="about__description">
                    Je suis Delphine Rivier, expert en accompagnement professionnel.
                    Mon objectif est de vous aider à atteindre vos ambitions professionnelles
                    grâce à des programmes personnalisés et adaptés à vos besoins.
                </p>
                <p className="about__description">
                    Avec plus de 10 ans d'expérience, j'ai accompagné des centaines de
                    professionnels dans leur transition de carrière, leur développement de compétences,
                    et leur quête d'épanouissement au travail.
                </p>
            </div>
        </section>
    );
};

export default About;
