import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import App from "../App";
import {Navbar} from "../component/Navbar";
import {Footer} from "../component/Footer";
import {About} from "../component/About";
import {Hero} from "../component/Hero";
import {Services} from "../component/Services";
import {Tours} from "../component/Tours";
import PageLinks from "../component/PageLinks";
import SocialLink from "../component/SocialLink";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/Navbar">
                <Navbar/>
            </ComponentPreview>
            <ComponentPreview path="/Footer">
                <Footer/>
            </ComponentPreview>
            <ComponentPreview path="/About">
                <About/>
            </ComponentPreview>
            <ComponentPreview path="/Hero">
                <Hero/>
            </ComponentPreview>
            <ComponentPreview path="/Services">
                <Services/>
            </ComponentPreview>
            <ComponentPreview path="/Tours">
                <Tours/>
            </ComponentPreview>
            <ComponentPreview path="/PageLinks">
                <PageLinks/>
            </ComponentPreview>
            <ComponentPreview path="/SocialLink">
                <SocialLink/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews