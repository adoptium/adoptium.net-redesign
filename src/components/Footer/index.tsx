import { Link } from 'gatsby';
import React from 'react';
import RandomContributor from '../RandomContributor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faYoutube,
  faGithub,
  faSlack
} from '@fortawesome/free-brands-svg-icons'
import './Footer.scss';

export interface DropDownState {
  active: number;
  isOpen: boolean;
  shouldDropDownBlur: boolean;
}

const Footer = (): JSX.Element => {
  return (
    <>
    <section className="bottom-info">
        <RandomContributor />
    </section>
<div class="container my-5">
  <footer class="row row-cols-4 py-5 border-top">

    <div class="col-sm-3 col-12">
      <h5>Eclipse Foundation</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><Link to="https://www.eclipse.org/org/" className="nav-link p-0 text-muted">About Us</Link></li>
        <li class="nav-item mb-2"><Link to="https://www.eclipse.org/org/foundation/contact.php" className="nav-link p-0 text-muted">Contact Us</Link></li>
        <li class="nav-item mb-2"><Link to="https://www.eclipse.org/donate" className="nav-link p-0 text-muted">Donate</Link></li>
        <li class="nav-item mb-2"><Link to="https://www.eclipse.org/membership" className="nav-link p-0 text-muted">Members</Link></li>
        <li class="nav-item mb-2"><Link to="https://www.eclipse.org/org/documents/" className="nav-link p-0 text-muted">Governance</Link></li>
        <li class="nav-item mb-2"><Link to="https://www.eclipse.org/org/documents/Community_Code_of_Conduct.php" className="nav-link p-0 text-muted">Code of Conduct</Link></li>
        <li class="nav-item mb-2"><Link to="https://www.eclipse.org/artwork/" className="nav-link p-0 text-muted">Logo and Artwork</Link></li>
        <li class="nav-item mb-2"><Link to="https://www.eclipse.org/org/foundation/directors.php" className="nav-link p-0 text-muted">Board of Directors</Link></li>
      </ul>
    </div>

    <div class="col-sm-3 col-12">
      <h5>Legal</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><Link to="https://www.eclipse.org/legal/privacy.php" className="nav-link p-0 text-muted">Privacy Policy</Link></li>
        <li class="nav-item mb-2"><Link to="https://www.eclipse.org/legal/termsofuse.php" className="nav-link p-0 text-muted">Terms of Use</Link></li>
        <li class="nav-item mb-2"><Link to="https://www.eclipse.org/legal/copyright.php" className="nav-link p-0 text-muted">Copyright Agent</Link></li>
        <li class="nav-item mb-2"><Link to="https://www.eclipse.org/legal/epl-2.0/" className="nav-link p-0 text-muted">Eclipse Public License</Link></li>
        <li class="nav-item mb-2"><Link to="https://www.eclipse.org/legal/" className="nav-link p-0 text-muted">Legal Resources</Link></li>
      </ul>
    </div>

    <div class="col-sm-3 col-12">
      <h5>Useful Links</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><Link to="https://bugs.eclipse.org/bugs/" className="nav-link p-0 text-muted">Report a Bug</Link></li>
        <li class="nav-item mb-2"><Link to="https://help.eclipse.org/" className="nav-link p-0 text-muted">Documentation</Link></li>
        <li class="nav-item mb-2"><Link to="https://www.eclipse.org/contribute/" className="nav-link p-0 text-muted">How to Contribute</Link></li>
        <li class="nav-item mb-2"><Link to="https://www.eclipse.org/mail/" className="nav-link p-0 text-muted">Mailing Lists</Link></li>
        <li class="nav-item mb-2"><Link to="https://www.eclipse.org/forums/" className="nav-link p-0 text-muted">Forums</Link></li>
        <li class="nav-item mb-2"><Link to="https://marketplace.eclipse.org/" className="nav-link p-0 text-muted">Marketplace</Link></li>
      </ul>
    </div>

    <div class="col-sm-3 col-12">
      <h5>Other</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><Link to="https://www.eclipse.org/ide/" className="nav-link p-0 text-muted">IDE and Tools</Link></li>
        <li class="nav-item mb-2"><Link to="https://www.eclipse.org/projects" className="nav-link p-0 text-muted">Projects</Link></li>
        <li class="nav-item mb-2"><Link to="https://www.eclipse.org/org/workinggroups/" className="nav-link p-0 text-muted">Working Groups</Link></li>
        <li class="nav-item mb-2"><Link to="https://www.eclipse.org/org/research/" className="nav-link p-0 text-muted">Research@Eclipse</Link></li>
        <li class="nav-item mb-2"><Link to="https://www.eclipse.org/security/" className="nav-link p-0 text-muted">Report a Vulnerability</Link></li>
        <li class="nav-item mb-2"><Link to="https://status.eclipse.org/" className="nav-link p-0 text-muted">Service Status</Link></li>
      </ul>
    </div>
    
    <div class="col-sm-6 col-12 py-2 d-flex">
      <span class="text-muted">Copyright © Eclipse Foundation. All Rights Reserved.</span>
    </div>
    <ul class="nav col-md-5 col-9 pb-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><Link className="text-muted" to="https://twitter.com/adoptium"><FontAwesomeIcon icon={faTwitter} size="2x"/></Link></li>
      <li class="ms-3"><Link className="text-muted" to="https://www.youtube.com/c/EclipseAdoptium"><FontAwesomeIcon icon={faYoutube} size="2x"/></Link></li>
      <li class="ms-3"><Link className="text-muted" to="https://github.com/adoptium"><FontAwesomeIcon icon={faGithub} size="2x"/></Link></li>
      <li class="ms-3"><Link className="text-muted" to="https://adoptium.net/slack.html"><FontAwesomeIcon icon={faSlack} size="2x"/></Link></li>
    </ul>
    <div class="col-12 d-flex ">
        <span class="text-muted">Java and OpenJDK are trademarks or registered trademarks of Oracle and/or its affiliates. Other names may be trademarks of their respective owners.</span>
    </div>
  </footer>
</div>
    </>
  );
};

export default Footer;