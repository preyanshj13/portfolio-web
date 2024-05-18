import React from "react";
import "./Home.css";
import myImage from "../../images/Self.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Typewriter from "../../Typewriter";

function Home() {
  return (
    <>
      <div className="containers">
        <div className="col1 pb-5">
          <img
            className="myImage mx-auto mt-5"
            src={myImage}
            alt="Hi, this is me!"
          />
        </div>
        <div className="col2 mb-5">
          {/* <p className='hello'>HELLO WORLD! <br/> My name is Preyansh Jain <br/> and I'm a web developer</p> */}
          <h1 className="hello">
            <Typewriter
              text={`HELLO WORLD!\nMy name is Preyansh Jain\nand I'm a web developer`}
              delay={130}
            />
          </h1>
          {/* <h2 className="name">
            <Typewriter text="My name is Preyansh Jain" delay={100} />
          </h2>
          <h2 className="web">
            <Typewriter text="and I'm a web developer" delay={100} />
          </h2> */}

          <div className="socials mt-5">
            <a
              href="mailto:preyansh.jain13@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="mailto"
            >
              <FontAwesomeIcon
                className="mail"
                icon={faEnvelope}
                size="3x"
                color="white"
                title="Mail"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/preyansh-jain-a4b929a1/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="linkedin"
                icon={faLinkedin}
                size="3x"
                color="white"
                title="LinkedIn"
              />
            </a>
            <a
              href="https://github.com/preyanshj13"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="github"
                icon={faGithub}
                size="3x"
                color="white"
                title="Github"
              />
            </a>
            <a
              href="https://www.hackerrank.com/profile/preyansh_jain13"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="hackerrank"
                icon={faHackerrank}
                size="3x"
                color="white"
                title="HackerRank"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="back pb-5">
        <div className="container aboutMe">
              <div className="aboutMeHead pb-3">About Me</div>
          <div class="card aboutCard mx-auto">
            <div class="card-body">
              {/* <h5 class="card-title">Card title</h5> */}
              <p className="card-text">
                Welcome to my corner of the web! I'm a passionate front-end web
                developer on a mission to craft engaging digital experiences.
                With around 2 years of dedicated experience in the ever-evolving
                landscape of web development, I thrive on the intersection of
                creativity and technology.
              </p>
              <p className="card-text">
                My journey began with an insatiable curiosity for coding,
                leading me to explore the intricate world of web development.
                Over time, I've honed my skills in HTML, CSS, and JavaScript,
                alongside venturing into MongoDB, NodeJS and Redux in order to
                enrich my toolkit.
              </p>
              <p className="card-text">
                I prioritize clean code, intuitive design, and optimized
                performance. I thrive in team environments, fostering synergy to
                transform ideas into reality. As technology continues to evolve,
                I remain committed to staying at the forefront of innovation,
                eagerly embracing new technologies to deliver forward-thinking
                solutions.
              </p>
              <p className="card-text">
                <em>
                  <strong>
                    Let's embark on a journey of innovation together. Reach out,
                    and let's bring your vision to life!
                  </strong>
                </em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
