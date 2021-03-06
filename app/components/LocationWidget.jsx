import React, { PropTypes } from 'react';

function LocationWidget({ location, onSubmitLocation, onUpdateLocation }) {
  return (
    <div className="row">
        <div className="col-md-6">
            <h4 className="text-right">Enter a city</h4>
        </div>
        <div className="col-md-6">
            <form className="navbar-form" onSubmit={onSubmitLocation} role="search">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Locattion"
                    value={location}
                    autoFocus="on"
                    onChange={onUpdateLocation}
                  />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        </div>
    </div>
  );
}

LocationWidget.propTypes = {
  location: PropTypes.string.isRequired,
  onUpdateLocation: PropTypes.func.isRequired,
  onSubmitLocation: PropTypes.func.isRequired,
};

export default LocationWidget;
