import React, {useEffect, useState} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  navBar,
  splashScreen,
  mainBody,
  about,
  repos,
  leadership,
  skills,
  bigProjects,
  getInTouch,
  experiences,
  achievementSection
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
// import { Blog } from "./components/blog/Blog";
// import BlogPost from "./components/blog/BlogPost";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Leadership from "./components/home/Leadership.jsx";

import Experience from "./components/home/Experience";
import StartupProject from "./components/home/StartupProject";
import Achievement from "./components/home/Certification";
import SplashScreen from "./components/home/SplahScreen.jsx";

const Home = React.forwardRef((props, ref) => {
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}
      {
        experiences.show && (
          <Experience experiences={experiences}/>
        )
      }
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}
      {
        bigProjects.show && (
          <StartupProject bigProjects={bigProjects}/>
        )
      }
      {leadership.show && (
        <Leadership
          heading={leadership.heading}
          message={leadership.message}
          img={leadership.images}
          imageSize={leadership.imageSize}
        />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}
      {achievementSection.show && (
        <Achievement
            achievementSection={achievementSection}
        />
      )}
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  return (
    <>
    {isShowingSplashAnimation ? (
      <SplashScreen />
    ) : (
      <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
        {navBar.show && <Navbar ref={titleRef} />}
        <Route path="/" exact component={() => <Home ref={titleRef} />} />
        {/* {false && <Route path="/blog" exact component={Blog} />}
        {false && <Route path="/blog/:id" component={BlogPost} />} */}
        <Footer>
          {getInTouch.show && (
            <GetInTouch
              heading={getInTouch.heading}
              message={getInTouch.message}
              email={getInTouch.email}
            />
          )}
        </Footer>
      </BrowserRouter>
    )}
    </>
  );
};

export default App;