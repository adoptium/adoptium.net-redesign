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
<div class="container">
  <footer class="row row-cols-4 py-5 my-5 border-top">

    <div class="col">
      <h5>Eclipse Foundation</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="https://www.eclipse.org/org/" class="nav-link p-0 text-muted">About Us</a></li>
        <li class="nav-item mb-2"><a href="https://www.eclipse.org/org/foundation/contact.php" class="nav-link p-0 text-muted">Contact Us</a></li>
        <li class="nav-item mb-2"><a href="https://www.eclipse.org/donate" class="nav-link p-0 text-muted">Donate</a></li>
        <li class="nav-item mb-2"><a href="https://www.eclipse.org/membership" class="nav-link p-0 text-muted">Members</a></li>
        <li class="nav-item mb-2"><a href="https://www.eclipse.org/org/documents/" class="nav-link p-0 text-muted">Governance</a></li>
        <li class="nav-item mb-2"><a href="https://www.eclipse.org/org/documents/Community_Code_of_Conduct.php" class="nav-link p-0 text-muted">Code of Conduct</a></li>
        <li class="nav-item mb-2"><a href="https://www.eclipse.org/artwork/" class="nav-link p-0 text-muted">Logo and Artwork</a></li>
        <li class="nav-item mb-2"><a href="https://www.eclipse.org/org/foundation/directors.php" class="nav-link p-0 text-muted">Board of Directors</a></li>
      </ul>
    </div>

    <div class="col">
      <h5>Legal</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="https://www.eclipse.org/legal/privacy.php" class="nav-link p-0 text-muted">Privacy Policy</a></li>
        <li class="nav-item mb-2"><a href="https://www.eclipse.org/legal/termsofuse.php" class="nav-link p-0 text-muted">Terms of Use</a></li>
        <li class="nav-item mb-2"><a href="https://www.eclipse.org/legal/copyright.php" class="nav-link p-0 text-muted">Copyright Agent</a></li>
        <li class="nav-item mb-2"><a href="https://www.eclipse.org/legal/epl-2.0/" class="nav-link p-0 text-muted">Eclipse Public License</a></li>
        <li class="nav-item mb-2"><a href="https://www.eclipse.org/legal/" class="nav-link p-0 text-muted">Legal Resources</a></li>
      </ul>
    </div>

    <div class="col">
      <h5>Useful Links</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="https://bugs.eclipse.org/bugs/" class="nav-link p-0 text-muted">Report a Bug</a></li>
        <li class="nav-item mb-2"><a href="https://help.eclipse.org/" class="nav-link p-0 text-muted">Documentation</a></li>
        <li class="nav-item mb-2"><a href="https://www.eclipse.org/contribute/" class="nav-link p-0 text-muted">How to Contribute</a></li>
        <li class="nav-item mb-2"><a href="https://www.eclipse.org/mail/" class="nav-link p-0 text-muted">Mailing Lists</a></li>
        <li class="nav-item mb-2"><a href="https://www.eclipse.org/forums/" class="nav-link p-0 text-muted">Forums</a></li>
        <li class="nav-item mb-2"><a href="https://marketplace.eclipse.org/" class="nav-link p-0 text-muted">Marketplace</a></li>
      </ul>
    </div>

    <div class="col">
      <h5>Other</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="https://www.eclipse.org/ide/" class="nav-link p-0 text-muted">IDE and Tools</a></li>
        <li class="nav-item mb-2"><a href="https://www.eclipse.org/projects" class="nav-link p-0 text-muted">Projects</a></li>
        <li class="nav-item mb-2"><a href="https://www.eclipse.org/org/workinggroups/" class="nav-link p-0 text-muted">Working Groups</a></li>
        <li class="nav-item mb-2"><a href="https://www.eclipse.org/org/research/" class="nav-link p-0 text-muted">Research@Eclipse</a></li>
        <li class="nav-item mb-2"><a href="https://www.eclipse.org/security/" class="nav-link p-0 text-muted">Report a Vulnerability</a></li>
        <li class="nav-item mb-2"><a href="https://status.eclipse.org/" class="nav-link p-0 text-muted">Service Status</a></li>
      </ul>
    </div>
    
    <div class="col-md-6 py-2 d-flex align-items-center">
      <span class="text-muted">Copyright © Eclipse Foundation. All Rights Reserved.</span>
    </div>
    <ul class="nav col-md-4 pb-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-muted" href="#"><FontAwesomeIcon icon={faTwitter} size="2x"/></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><FontAwesomeIcon icon={faYoutube} size="2x"/></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><FontAwesomeIcon icon={faGithub} size="2x"/></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><FontAwesomeIcon icon={faSlack} size="2x"/></a></li>
    </ul>
    <div class="col-md-12 d-flex align-items-center">
        <span class="text-muted">Java and OpenJDK are trademarks or registered trademarks of Oracle and/or its affiliates. Other names may be trademarks of their respective owners.</span>
    </div>
  </footer>
</div>
    </>
  );
};

export default Footer;