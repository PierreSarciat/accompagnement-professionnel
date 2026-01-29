import React, { useState } from 'react';
import './programs.scss';
import Button from "@components/button/button.jsx";
import ButtonP from "@components/button/button-programs.jsx";

const programsData = [
    {
        id: 1,
        title: "Compétence1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget lacus vitae nulla varius feugiat id non est.",
        duration: "durée",
        price: "prix",
    },
    {
        id: 2,
        title: "Compétence2",
        description: "consectetur adipiscing elit. Vivamus eget lacus vitae nulla varius feugiat id non est.",
        duration: "durée",
        price: "prix",
    },
    {
        id: 3,
        title: "Compétence3",
        description: "Lorem ipsum dolor sit  Vivamus eget lacus vitae nulla varius feugiat id non est.",
        duration: "durée",
        price: "prix",
    },
];

const Programs = () => {
    const [selectedProgramId, setSelectedProgramId] = useState(1);

    const handleButtonClick = (programId) => {
        setSelectedProgramId(programId);
    };

    const selectedProgram = programsData.find(program => program.id === selectedProgramId);

    return (
        <div className='programs__background' id="programs">
            <section className="section">
                <div className='programs__content'>
                    <div className='programs'>
                        <h2 className="programs__title">Nos Programmes</h2>
                        <p className="programs__subtitle">
                            Découvrez nos programmes conçus pour répondre à vos besoins spécifiques.
                        </p>
                    </div>
                    <div className='programs__buttons__content'>
                        <div className="programs__buttons">
                            {programsData.map((program) => (
                                <ButtonP
                                    key={program.id}
                                    text={program.title}
                                    href=""
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleButtonClick(program.id);
                                    }}
                                />
                            ))}
                        </div>

                        {selectedProgram && (
                            <div className="programs__description-container">
                                <p className="programs__item-description">{selectedProgram.description}</p>

                            </div>
                        )}
                        <Button text="En savoir plus" />
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Programs;
