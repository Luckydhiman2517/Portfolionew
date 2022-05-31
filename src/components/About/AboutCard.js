import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
const AboutCard =() => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Lucky Kumar </span>
            from <span className="purple">Saharanpur India.</span>
            <br />
            Software Engineer who loves to transform ideas into reality using
            code.
            <br />
            Motivated designer and developer with experience creating
            custom websites with ReactJs, JavaScript, HTML5, CSS3, Bootstrap.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listining Song
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
