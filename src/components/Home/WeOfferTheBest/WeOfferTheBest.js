import React, { useEffect } from 'react';
import './WeOfferTheBest.css';
import photo from '../../../images/our-offer.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
const WeOfferTheBest = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div style={{ margin: "0 !important", maxWidth: "100%", overflowX: "hidden" }} className="m-0 p-0" data-aos="fade-left" data-aos-delay="500">
            <h3 className="text-center section-title mt-5">WE OFFER THE BEST</h3>
            <div className="row mt-4">
                <div className="col-md-6 p-0 h-100">
                    <img className="w-100 img-fluid" src={photo} alt="" />
                </div>
                <div className="col-md-6 why-choose-us p-0">
                    <div className="why-choose-us-content">
                        <div className="icon-content my-2">
                            <div>
                                <h4><i class="fas fa-mountain"></i></h4>
                            </div>
                            <div>
                                <h4>Various Adventures</h4>
                                <p>This may include activities such as mountaineering, trekking, bungee jumping, mountain biking, cycling, canoeing, scuba diving, rafting, kayaking, zip-lining, paragliding, hiking, exploring,</p>
                            </div>
                        </div>
                        <div className="icon-content my-2">
                            <div>
                                <h4><i class="fas fa-trailer"></i></h4>
                            </div>
                            <div>
                                <h4>Adventurous Trails</h4>
                                <p>It is recognized that trails play an important role in the environment because they: Help to protect habitat for native plants and animals.</p>
                            </div>
                        </div>
                        <div className="icon-content my-2">
                            <div>
                                <h4><i class="fab fa-guilded"></i></h4>
                            </div>
                            <div>
                                <h4>Trained Guides</h4>
                                <p>We are proud to make Guide Training available through its AdventureEDU program. This program has been developed by the professional guides, trainers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeOfferTheBest;