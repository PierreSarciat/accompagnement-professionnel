import React from 'react';
import './about.scss';
import aboutImg from "@images/about__img.jpg";
import { useInView } from '@hooks/useInView';

const About = () => {
    const [titleRef, titleVisible] = useInView({ threshold: 0.3 });
    const [descRef, descVisible] = useInView({ threshold: 0.3 });

    return (
        <div className="about__background">
            <section className="section" id="about">
                <div className="about__content">

                    <div
                        ref={titleRef}
                        className={`about__title ${titleVisible ? 'is-visible' : ''}`}
                    >
                        <h2>Qui suis-je ?</h2>
                        <h1>Delphine Rivier</h1>
                        <img src={aboutImg} alt="Delphine Rivier" className="about__image" />
                    </div>

                    <div
                        ref={descRef}
                        className={`about__description ${descVisible ? 'is-visible' : ''}`}
                    >
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
