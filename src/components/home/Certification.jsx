import React, {useContext} from "react";
import "./Certification.scss";
import AchievementCard from "../achievementCard/AchievementCard";
import { Jumbotron, Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import {Fade} from "react-reveal";

export default function Achievement({achievementSection}) {
    if (!achievementSection.show) {
      return null;
    }
    return (
      <section id = "achievement" className="section">
        <Container>
          <Jumbotron fluid className="bg-white m-0" id="achievement">
            <Fade bottom duration={1000} distance="20px">
              <div className="main" id="achievements">
                <div className="achievement-main-div">
                  <div className="achievement-header">
                    <h2 className="display-4 pb-5 text-center">
                      {achievementSection.title}
                    </h2>
                  </div>
                  <div className="achievement-cards-div">
                    {achievementSection.achievementsCards.map((card, i) => {
                      return (
                        <AchievementCard
                          key={i}
                          isDark={false}
                          cardInfo={{
                            title: card.title,
                            description: card.subtitle,
                            image: card.image,
                            footer: card.footerLink
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </Fade>
          </Jumbotron>
        </Container>
      </section>
    );
  }