import React from "react";
import HomeInitial from "../components/HomeInitial";
import Sidebar from "../components/Sidebar";
import Logo from "../../img/logos/logo-text.svg";

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                < HomeInitial/>
                <div className="row py-5" id="learn-more">
                    <div className="col-sm-6 order-sm-2">
                        <img className="pb-3" src={Logo} alt="CSSA @ UCSD"></img>
                        <p>Cognitive Science Student Association at UC San Diego</p>
                        <p>We are a pre-professional and social student organization 
                            that aims to unite and grow the diverse cognitive science community.
                        </p>
                        <p>As students of one of the first cognitive science departments 
                            in the nation, our mission is to highlight the intersectional 
                            nature of our industry through a space that connects 
                            renowned professors with the growing student body.
                        </p>
                        <h2>Why?</h2>
                        <p> We exist because, well, let’s face it: college is impossible to do 
                            alone. We recognize the value of learning not just by ourselves, 
                            but with and from each other.
                        </p>
                        <h2>How?</h2>
                        <p>We are breaking down the definition of cognitive science 
                            piece by piece through workshops, internship and research 
                            opportunities, career-based speaker series, and a yearly 
                            university-wide conference.
                        </p>
                    </div>
                    <div className="col-sm-6 order-sm-1">
                        < Sidebar/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;