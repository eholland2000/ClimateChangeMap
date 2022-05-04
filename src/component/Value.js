import React from "react";
import PropTypes from "prop-types";
import "./Value.css";

export default class Value extends React.Component {
    static propTypes = {
        variable: PropTypes.string,
        variableState: PropTypes.number,
        variableValue: PropTypes.string,
        variableLabel: PropTypes.string,
    };

    render() {
        if (this.props.variableState === 0) {
            return (
                <div className="Value">
                    <label className="value-label" htmlFor={this.props.variable}>{this.props.variableLabel}</label>
                    <p id={this.props.variable} className="value-value empty-state">--</p>
                </div>
            );
        } else if (this.props.variableState === 1) {
            return (
                <div className="Value">
                    <label className="value-label" htmlFor={this.props.variable}>{this.props.variableLabel}</label>
                    <p id={this.props.variable} className="value-value history-state">{this.props.variableValue}</p>
                </div>
            );
        } else {
            return (
                <div className="Value">
                    <label className="value-label" htmlFor={this.props.variable}>{this.props.variableLabel}</label>
                    <p id={this.props.variable} className="value-value predict-state">{this.props.variableValue}</p>
                </div>
            );
        }
    }
}
