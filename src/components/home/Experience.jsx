import React from 'react';
import ExperienceCard from "./ExperienceCard";
import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const Experience = ({experiences}) => {
    return (  
        <section className="section">
            <Container>
                <Jumbotron fluid className="bg-white" id="experience">
                    <h2 className="display-4 mb-5 text-center">
                        {experiences.heading}
                    </h2>
                    {
                        experiences.data.map(data => {
                            return <ExperienceCard key={data.company} data={data} />
                        })
                    }
                </Jumbotron>
            </Container>
        </section>
    );
}
 
export default Experience;