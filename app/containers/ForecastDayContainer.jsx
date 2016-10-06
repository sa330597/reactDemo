import React, { PropTypes, Component } from 'react';
import ForecastDay from '../components/ForecastDay';
import utils from '../helpers/utils';

class ForecastDayContainer extends Component {
  constructor() {
    super();
    this.state = {
      containerClass: '',
      iconClass: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount() {
    let containerClass = 'text-center ';
    if (this.props.index === 0) {
      containerClass += 'col-sm-2 col-xs-6 col-xs-offset-0 col-sm-offset-1';
    } else if (this.props.index > 0) {
      containerClass += 'col-sm-2 col-xs-6';
    } else { // no index
      containerClass += 'col-xs-12';
    }
    const day = `${utils.formatDateString(this.props.day.dt)}`;
    const caption = this.props.index >= 0 ?
                       `${utils.formatDateString(this.props.day.dt)}` :
                       `${this.props.day.temperature} \u{2109}`;
   
    const caption2 = caption+ " - " + this.props.day.weatherDescription;
    this.setState({
      containerClass,
      caption2,
      iconClass: utils.getWeatherIconClass(this.props.day.weatherCode),
    });
  }
  handleClick() {
    this.context.router.push({
      pathname: `/detail/${this.props.city}`,
      state: {
        day: this.props.day,
        city: this.props.city,
        index: this.props.index,
      },
    });
  }
  render() {
    return (
       <div>
            <ForecastDay
              onClick={this.handleClick}
              containerClass={this.state.containerClass}
              iconClass={this.state.iconClass}
              caption={this.state.caption2}
            />
      </div>
    );
  }
}

ForecastDayContainer.propTypes = {
  day: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired,
  index: PropTypes.number,
};

ForecastDayContainer.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default ForecastDayContainer;
