import React, { useState, useEffect, useRef } from 'react';
import ContactForm from '@components/contact/contactForm.jsx';
import './contact.scss';



const Contact = ({ contactEmail, contactPhone, contactLocalisation }) => {
    const [isMerged, setIsMerged] = useState(false);
    const contactRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsMerged(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (contactRef.current) {
            observer.observe(contactRef.current);
        }

        return () => {
            if (contactRef.current) {
                observer.unobserve(contactRef.current);
            }
        };
    }, []);

    return (
        <div className='contact__background'>
            <section className='section'>
                <div className={`Contact ${isMerged ? 'merged' : ''}`} ref={contactRef} >
                    <div className='contact__content'>
                        <div className="information">
                            <h3>Informations de contact</h3>
                            <div className='info'>
                                <i className="fa-solid fa-envelope"></i>
                                <p><span className='item'>E-mail</span><br />{contactEmail}</p>
                            </div>
                            <div className='info'>
                                <i className="fa-solid fa-phone"></i>
                                <p><span className='item'>Téléphone</span><br />{contactPhone}</p>
                            </div>
                            <div className='info'>
                                <i className="fa-solid fa-location-dot"></i>
                                <p><span className='item'>Localisation</span><br />{contactLocalisation}</p>
                            </div>
                        </div>
                        <div className="contact__form">
                            <ContactForm />
                        </div>
                    </div>
                    <div className='contact'>
                        <h2>Contactez-moi</h2>
                        <p >
                            Vous avez une question ou souhaitez en savoir plus sur mes programmes ?
                            N'hésitez pas à me contacter.
                        </p>
                    </div>


                </div>
            </section>
        </div>
    );
};

export default Contact;