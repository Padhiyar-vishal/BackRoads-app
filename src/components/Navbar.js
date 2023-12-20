import logo from '../images/logo.svg'
import PageLinks from './PageLink';
import SocialLink from './SocialLink';
import { socialLinks } from './data';

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* <!-- left this comment on purpose --> */}
        <PageLinks parentClass='nav-links' itemClass='nav-link'/>
        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return (
              <SocialLink key={link.id} {...link} classType='nav-icon'/>
            )})
          }
        </ul>
      </div>
    </nav>
    </>
  );
}
export default Navbar
