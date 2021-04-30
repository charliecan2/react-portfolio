import React from 'react';
import '../Home/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faNode, faReact, faSass } from '@fortawesome/free-brands-svg-icons';

function About() {
    return (
        <div className="container">
            <div className="card about-card">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="profile-sidebar">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/IMG_2453.JPG`} className="self-image" alt="self-image"/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="profile-main">
                            <h2 className="profile-name">Carlos Cantu</h2>
                            <hr className ="line-dash"/>
                            <p className="profile-position">Full-Stack Web Developer</p>
                            <p className="profile-body">Hello, and welcome to my page! My name is Carlos Cantu, and I’m a Full-Stack Web Developer that is passionate about creating intuitive and user-friendly applications for the modern web.
                            I enjoy working with progressive front-end technologies like React and Sass, and am always eager to learn new tools to better UI experiences.</p>
                            <p className="profile-body">Here you’ll find the projects I’ve worked on in the past and continue to build on. Most of the technologies used in these projects are crucial to building standard full-stack applications in today's web environment, and were utilized in an efficient way. It's my hope that this page will showcase all the skills I've aquired and will continue build off of as I add more and more technologies under my belt.</p>
                        </div>
                    </div>
                </div>
            </div>
                    {/* <div className="jumbotron">
                        <h1 className="display-4 about-heading">About</h1>
                        <hr className="my-4" />
                        <img src="https://raw.githubusercontent.com/charliecan2/charliecan2.github.io/main/images/IMG_2453.JPG" className="img-fluid self-image" alt="placeholder" />
                        <p className="about-paragraph">
                        </p>
                        <p className="about-paragraph">
                        
                        </p>
                    </div> */}
            <br />
            <div className="row">
                <div className="col-md-12">
                    <h3 className="techHeader">Technologies</h3>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-sm-2 faIcon">
                    <a type="button" href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank">
                        <FontAwesomeIcon icon={faHtml5} className="htmlIcon" />
                    </a>
                </div>
                <div className="col-sm-2 faIcon">
                    <a type="button" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                        <FontAwesomeIcon icon={faCss3} className="cssIcon" />
                    </a>
                </div>
                <div className="col-sm-2 faIcon">
                    <a type="button" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                        <FontAwesomeIcon icon={faJs} className="jsIcon" />
                    </a>
                </div>
                <div className="col-sm-2 faIcon">
                    <a type="button" href="https://nodejs.org/en/about/" target="_blank">
                        <FontAwesomeIcon icon={faNode} className="nodeIcon" />
                    </a>
                </div>
                <div className="col-sm-2 faIcon">
                    <a type="button" href="https://reactjs.org/" target="_blank">
                        <FontAwesomeIcon icon={faReact} className="reactIcon" />
                    </a>
                </div>
                <div className="col-sm-2 faIcon">
                    <a type="button" href="https://sass-lang.com/" target="_blank">
                        <FontAwesomeIcon icon={faSass} className="sassIcon" />
                    </a>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default About;