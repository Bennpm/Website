import Asteroid from '../assets/asteroid.png';
import Planet from "../assets/planet.png";
import Satellite from "../assets/satellite.png";

export interface Skill {
    src: string;
    alt: string;
    rotate: string;
    top: string;
    left: string;
    skill: string;
}

export const skills: Skill[] = [{
    src: Satellite,
        alt: 'Example image',
        rotate: "6deg",
        top: "20%",
        left: "25%",
        skill: "HTML"},
    {
        src: Asteroid,
        alt: "Example image",
        rotate: "12deg",
        top: "45%",
        left: "60%",
        skill: "PLAYWRIGHT",
    }, {
        src: Planet,
        alt: "Example image",
        rotate: "-6deg",
        top: "10%",
        left: "10%",
        skill: "REACT",
    }, {
        src: Satellite,
        alt: "Example image",
        rotate: "8deg",
        top: "50%",
        left: "40%",
        skill: "CSS",
    }, {
        src: Planet,
        alt: "Example image",
        rotate: "18deg",
        top: "25%",
        left: "55%",
        skill: "TYPESCRIPT",
    }, {
        src: Asteroid,
        alt: "Example image",
        rotate: "-3deg",
        top: "10%",
        left: "55%",
        skill: "GRAPHQL",
    }];