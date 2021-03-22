import React from 'react';
import '../Home/style.css';

function Contact(){
    return(
        <div className="container">
        <div className="row">
            <div className="col-md-6 card-column">
                <div className="card contact-card">
                    <div className="card-header">Contact</div>
                    <div className="card-body">
                      <h5 className="card-title">Phone Number</h5>
                      <p className="card-text">(956) 263-2453</p>
                      <h5 className="card-title">Email</h5>
                      <p className="card-text"><a href="mailto:carloscq920@gmail.com" type="email">carloscq920@gmail.com</a></p>
                      <hr />
                      <p className="card-text">Got a website you need built? Or an exciting project you'd like to collaborate on? Feel free to reach out to me with the
                        contact info provided on this card!</p>
                    </div>
                  </div>
            </div>
            <div className="col-lg-6 gif-column">
                <div className="ed-gif"><iframe src="https://giphy.com/embed/l3vRmVv5P01I5NDAA" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/funimation-computer-l3vRmVv5P01I5NDAA">via GIPHY</a></p>
            </div>
        </div>
    </div>
    )
}

export default Contact;