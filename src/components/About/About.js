import React from 'react';
import '../Home/style.css';

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
        </div>
    )
}

export default About;