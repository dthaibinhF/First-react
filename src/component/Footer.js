import {socialLink} from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

export const Footer = () => {
    return <footer className="section footer">
        <PageLinks parentClass='footer-links' itemClass='footer-link'/>
        <ul className="footer-icons">
            {
                socialLink.map((item) => {
                    return (
                        <SocialLink key={item.id} {...item} itemClass='footer-icon'/>
                    )
                })
            }
        </ul>
        <p className="copyright">
            copyright &copy; Backroads travel tours company
            <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
    </footer>
}