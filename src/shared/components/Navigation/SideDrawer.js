import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = ({ children, show, onClick }) => {
  const content = <CSSTransition 
      in = {show} /* in prop tels when to show the component */
      timeout = {250} 
      classNames = "slide-in-left"
      mountOnEnter /* After the first enter transition the component will stay mounted, */
      unmountOnExit /* to unmount the component after it finishes exiting. */
    > 
      <aside 
        className = "side-drawer"
        onClick = {onClick}
      >
        {children}
      </aside> 
    </CSSTransition>;

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
