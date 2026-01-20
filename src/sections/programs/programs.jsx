import React from 'react';
/*import './programs.scss';*/


const programsData = [
    {
        id: 1,
        title: "Coaching Individuel",
        description: "Un accompagnement personnalisé pour clarifier vos objectifs, développer vos compétences et booster votre carrière.",
        duration: "3 à 6 mois",
        price: "À partir de 1200€",
    },
    {
        id: 2,
        title: "Ateliers Collectifs",
        description: "Des ateliers en petit groupe pour travailler sur des thèmes spécifiques comme la prise de parole ou la gestion du stress.",
        duration: "2 jours",
        price: "450€ par atelier",
    },
    {
        id: 3,
        title: "Préparation aux Concours",
        description: "Une préparation intensive pour réussir les concours administratifs ou professionnels.",
        duration: "2 à 4 mois",
        price: "1800€",
    },
];

const Programs = () => {
    return (
        <section className="section">
            <h2 className="programs__title">Nos Programmes</h2>
            <p className="programs__subtitle">
                Découvrez nos programmes conçus pour répondre à vos besoins spécifiques.
            </p>

            <div className="programs__list">
                {programsData.map((program) => (
                    <div key={program.id} className="programs__item">
                        <h3 className="programs__item-title">{program.title}</h3>
                        <p className="programs__item-description">{program.description}</p>
                        <div className="programs__item-details">
                            <span className="programs__item-duration">{program.duration}</span>
                            <span className="programs__item-price">{program.price}</span>
                        </div>
                        <button className="programs__item-button">En savoir plus</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Programs;
