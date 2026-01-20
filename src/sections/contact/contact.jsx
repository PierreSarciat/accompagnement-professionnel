import React, { useState } from 'react';
import './contact.scss';

const Contact = () => {
    // État pour gérer les champs du formulaire
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Fonction pour gérer les changements dans les champs du formulaire
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique pour envoyer les données du formulaire (ex: API, email, etc.)
        console.log('Données du formulaire soumises :', formData);
        alert('Votre message a été envoyé avec succès !');
        // Réinitialiser le formulaire
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <section className="section">
            <h2 className="contact__title">Contactez-moi</h2>
            <p className="contact__subtitle">
                Vous avez une question ou souhaitez en savoir plus sur mes programmes ?
                N'hésitez pas à me contacter.
            </p>

            <div className="contact__content">
                {/* Formulaire de contact */}
                <div className="contact__form-container">
                    <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="contact__form-group">
                            <label htmlFor="name" className="contact__form-label">Nom</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="contact__form-input"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="contact__form-group">
                            <label htmlFor="email" className="contact__form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="contact__form-input"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="contact__form-group">
                            <label htmlFor="message" className="contact__form-label">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="contact__form-textarea"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="contact__form-button">Envoyer</button>
                    </form>
                </div>

                {/* Informations de contact */}
                <div className="contact__info">
                    <h3 className="contact__info-title">Mes coordonnées</h3>
                    <address className="contact__info-address">
                        <p><strong>Email :</strong> contact@pierre-henri-sarciat.fr</p>
                        <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
                        <p><strong>Adresse :</strong> 123 Rue de Paris, 75000 Paris, France</p>
                    </address>

                    <h3 className="contact__info-title">Horaires</h3>
                    <p className="contact__info-schedule">Lundi - Vendredi : 9h - 18h</p>
                    <p className="contact__info-schedule">Samedi : 10h - 14h</p>
                </div>
            </div>

        </section>
    );
};

export default Contact;
