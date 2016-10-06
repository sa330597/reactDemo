import React from 'react';
import * as styles from '../styles/styles';
import LocationWidgetContainer from '../containers/LocationWidgetContainer';

function Home() {
  return (
    <div className="row" style={styles.HomePageContent}>
      <div className="col-xs-12 text-center">
        <h2 style={styles.HomePageContentHeading}>Weather Report Demo Application</h2>
        <div className="row">
            <div className="col-md-7 col-md-offset-2">
                <LocationWidgetContainer />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
