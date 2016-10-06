import React from 'react';
import * as styles from '../styles/styles';
import LocationWidgetContainer from '../containers/LocationWidgetContainer';
function Navbar() {
  return (
        <LocationWidgetContainer />
  );
}
function Main({ children }) {
  return (
    <div className="main-container">
      {children}
    </div>
  );
}

Main.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default Main;
