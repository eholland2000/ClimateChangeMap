import React from "react";
import PropTypes from "prop-types";
import "./Slider.css";

export default class Slider extends React.Component {
    static propTypes = {
        variable: PropTypes.string,
        sliderMax: PropTypes.string,
        sliderMin: PropTypes.string,
        sliderValue: PropTypes.string,
        sliderLabel: PropTypes.string,
        handleChange: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            sliderValue: props.sliderValue,
            sliderState: 1
        }
    }

    changeSliderValue = (event) => {
        if (event.target.value > 2021) {
            this.setState({
                sliderValue: event.target.value,
                sliderState: 2
            });
        } else {
            this.setState({
                sliderValue: event.target.value,
                sliderState: 1
            });
        }
        this.props.handleChange(event.target.value);
    }

    render() {
        if (this.state.sliderState === 1) {
            return (
                <div>
                    <label className="slider-label" htmlFor={this.props.variable}>{this.props.sliderLabel}</label>
                    <p className="slider-value-text slider-state-normal">{this.state.sliderValue}</p>
                    <input className="Slider" type="range" id={this.props.variable} min={this.props.sliderMin} max={this.props.sliderMax} value={this.state.sliderValue} onChange={this.changeSliderValue}/>
                </div>
            );
        } else {
            return (
                <div>
                    <label className="slider-label" htmlFor={this.props.variable}>{this.props.sliderLabel}</label>
                    <p className="slider-value-text  slider-state-predict">{this.state.sliderValue}</p>
                    <input className="Slider" type="range" id={this.props.variable} min={this.props.sliderMin}
                           max={this.props.sliderMax} value={this.state.sliderValue} onChange={this.changeSliderValue}/>
                </div>
            );
        }
    }
}
