import logo from '../images/logo.svg';
import {socialLink} from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="nav-logo" alt="backroads"/>
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                {/* <!-- left this comment on purpose -->*/}
                <PageLinks parentClass='nav-links' itemClass='nav-link'/>
                {/*<ul className="nav-links" id="nav-links">*/}
                {/*    {pageLink.map((link) => {*/}
                {/*        const {id, herf, text} = link;*/}
                {/*        return (*/}
                {/*            <li key={id}>*/}
                {/*                <a href={herf} className="nav-link"> {text} </a>*/}
                {/*            </li>*/}
                {/*        )*/}
                {/*    })}*/}
                {/*</ul>*/}

                <ul className="nav-icons">
                    {
                        socialLink.map((item) => {
                            return <SocialLink key={item.id} {...item} itemClass='nav-icon'/>
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}