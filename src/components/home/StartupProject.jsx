import React, {useState} from "react";
import "./StartupProjects.scss";
import { Jumbotron, Container } from "react-bootstrap";
import {Fade} from "react-reveal";
import ModalDisplay from "../modal/modal"
import { Button} from 'react-bootstrap';

export default function StartupProject({bigProjects}) {

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(bigProjects.projects[0]);

  const handleConfirmation = (event) => {
    console.log("confirmed");
    setShowModal(false);
  };

  const handleDecline = (event) => {
    console.log("declined");
    setShowModal(false);
  };

  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  if (!bigProjects.show) {
    return null;
  }
  return (
    <section id = "experience" className="section bg-light">
      <Container>
        <Jumbotron fluid className="bg-light m-0" id="projects">
          <Fade bottom duration={1000} distance="20px">
            <div className="main" id="projects">
              <div>
                <h1 className="display-4 pb-5 text-center">{bigProjects.title}</h1>
                <div className="projects-container">
                  {bigProjects.projects.map((project, i) => {
                    return (
                      <div
                        key={i}
                        className={"project-card project-card-light"}
                      >
                        {project.image ? (
                          <div className="project-image">
                            <img
                              src={project.image}
                              alt={project.projectName}
                              className="card-image"
                            ></img>
                          </div>
                        ) : null}
                        <div className="project-detail">
                          <h5
                            className={"card-title"}
                          >
                            {project.projectName}
                          </h5>
                          <p
                            className={
                              "card-subtitle"
                            }
                          >
                            {project.projectDesc}
                          </p>
                          <br></br>
                          <div className="project-card-footer">
                            <p className="lead text-center">
                            <a
                              className="btn btn-outline-dark btn-lg"
                              target="_blank"
                              rel="noreferrer noopener"
                              role="button"
                              onClick={ () => {
                                setShowModal(true);
                                setModalData(project);
                              } }
                            >
                                view project
                              </a>
                              </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <ModalDisplay
                                onConfirm={handleConfirmation}
                                onHide={handleDecline}
                                show={showModal}
                                key={modalData.projectName}
                                project={modalData}
                              />
                </div>
              </div>
            </div>
          </Fade>
        </Jumbotron>
      </Container>
    </section>
  );
}
