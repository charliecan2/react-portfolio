import React from 'react';
import '../Home/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faNode, faReact, faSass } from '@fortawesome/free-brands-svg-icons';

function About(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <div className="jumbotron">
                        <h1 className="display-4 about-heading">About</h1>
                        <hr className="my-4" />
                        <img src="https://raw.githubusercontent.com/charliecan2/charliecan2.github.io/main/images/IMG_2453.JPG" className="img-fluid self-image" alt="placeholder" />
                        <p className="about-paragraph">Hello, world! My name is Carlos Cantu Jr. I'm a 26 year
                            old guy that lives in Texas' southern-most point, the Rio Grande Valley. Before taking up coding, I was an Industrial Electrician
                            working for the family business. My past work sites were mainly power plants, with SpaceX being the last place I worked at. 
                            Here, you'll find some of the projects I've worked on as my skills have progressed. It's my hope that this page can be a showcase of what I'm
                            capable of, and will continue to build upon going forward.
                        </p>
                        <p className="about-paragraph"> Some sites I'm looking to build are
                            sites that promote small businesses, like my father's electrical contracting company, that want to showcase themselves
                            on the web. No matter what, any small business should have access to a good website of their own to stand out.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h3 className="techHeader">Technologies</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-2 faIcon">
                    <a type="button" href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank">
                        <FontAwesomeIcon icon={faHtml5} className="htmlIcon"/>
                    </a>
                </div>
                <div className="col-sm-2 faIcon">
                    <a type="button" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                        <FontAwesomeIcon icon={faCss3} className="cssIcon"/>
                    </a>
                </div>
                <div className="col-sm-2 faIcon">
                    <a type="button" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                        <FontAwesomeIcon icon={faJs} className="jsIcon"/>
                    </a>
                </div>
                <div className="col-sm-2 faIcon">
                    <a type="button" href="https://nodejs.org/en/about/" target="_blank">
                        <FontAwesomeIcon icon={faNode} className="nodeIcon"/>
                    </a>
                </div>
                <div className="col-sm-2 faIcon">
                    <a type="button" href="https://reactjs.org/" target="_blank">
                        <FontAwesomeIcon icon={faReact} className="reactIcon"/>
                    </a>
                </div>
                <div className="col-sm-2 faIcon">
                    <a type="button" href="https://sass-lang.com/" target="_blank">
                        <FontAwesomeIcon icon={faSass} className="sassIcon"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About;