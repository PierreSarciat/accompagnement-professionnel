import React from 'react';
/*import './benefits.scss';*/

// Exemple de données pour les avantages
const benefitsData = [
    {
        id: 1,
        icon: "🎯", // Remplacez par une icône ou un composant SVG si nécessaire
        title: "Accompagnement personnalisé",
        description: "Un suivi sur mesure adapté à vos besoins et objectifs professionnels.",
    },
    {
        id: 2,
        icon: "📈",
        title: "Résultats concrets",
        description: "Des méthodes éprouvées pour atteindre vos objectifs rapidement et efficacement.",
    },
    {
        id: 3,
        icon: "💡",
        title: "Expertise reconnue",
        description: "Plus de 10 ans d'expérience dans l'accompagnement des professionnels.",
    },
    {
        id: 4,
        icon: "🤝",
        title: "Réseau professionnel",
        description: "Accès à un réseau d'experts et de professionnels pour élargir vos opportunités.",
    },
    {
        id: 5,
        icon: "📅",
        title: "Flexibilité",
        description: "Des programmes adaptés à votre emploi du temps et vos contraintes.",
    },
    {
        id: 6,
        icon: "💬",
        title: "Support continu",
        description: "Un soutien constant tout au long de votre parcours pour maximiser vos chances de réussite.",
    },
];

const Benefits = () => {
    return (
        <section className="benefits">
            <h2 className="benefits__title">Nos Avantages</h2>
            <p className="benefits__subtitle">
                Découvrez pourquoi nos programmes font la différence pour votre carrière.
            </p>

            <div className="benefits__list">
                {benefitsData.map((benefit) => (
                    <div key={benefit.id} className="benefits__item">
                        <div className="benefits__item-icon">{benefit.icon}</div>
                        <h3 className="benefits__item-title">{benefit.title}</h3>
                        <p className="benefits__item-description">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Benefits;
