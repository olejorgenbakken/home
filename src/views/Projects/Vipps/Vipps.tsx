import { Component } from "react";

import './vipps.css';

import Hero from "../../../components/hero/hero";
import Button from "../../../components/button/Button";

class Vipps extends Component {
    render() {
        console.log(true)
        return (
            <main id="vipps">
                <Hero headingLevel="h1" headingTitle="Vipps" />
                <Button text={"Til alle prosjekter"} link="/prosjekter" />
            </main>
        )
    }
}

export default Vipps;