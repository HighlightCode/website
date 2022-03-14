import React from 'react';
import {
    Popover,
    Tooltip,
    Button,
    Modal,
    OverlayTrigger
} from "react-bootstrap";
import { Slide } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css"
import "./modal.scss";

const ModalDisplay = ({onConfirm, onHide, show, project}) => {
    return (
      <Modal
        onConfirm={onConfirm}
        onHide={onHide}
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {project.projectName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Slide easing="ease">
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${project.detailedImage.one})`}}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${project.detailedImage.two})`}}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${project.detailedImage.three})`}}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${project.detailedImage.four})`}}>
                    </div>
                </div>
            </Slide>
            <p>
                {project.projectDetailed}
            </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default ModalDisplay;