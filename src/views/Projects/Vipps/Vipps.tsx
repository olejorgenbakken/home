import { Component } from "react";
import { Link } from "react-router-dom";

import './vipps.css';

import Hero from "../../../components/hero/hero";

class Vipps extends Component {
    render() {
        console.log(true)
        return (
            <main id="vipps">
                <Hero headingLevel="h1" headingTitle="Vipps" />
                <Link to={"/prosjekter"}>Til alle prosjekter</Link>
            </main>
        )
    }
}

export default Vipps;