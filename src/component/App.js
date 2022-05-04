import React from "react";
import './App.css';
import Map from "./Map";
import Slider from "./Slider";
import computeAll from "../logic/model";
import Value from "./Value";
import colorRanger from "../logic/colorRanger";

export default class App extends React.Component {
    variables = {
        years: "years",
        co2: "co2",
        population: "population",
        clean_invest: "clean-invest"
    };

    constructor(props) {
        super(props);

        this.state = {
            co2: "--",
            co2_state: 0,
            population: "--",
            population_state: 0,
            clean_invest: "--",
            clean_invest_state: 0,
            averageTemp: "--",
            averageTemp_state: 0,
            style: {
                fill: "hsl(" + colorRanger(51.89) + ", 100%, 50%)",
                maxWidth: '95vmin'
            }
        }
    }

    handleChange = (yearsVal) => {
        let result = computeAll(yearsVal);
        this.setState({
            co2: result.co2,
            co2_state: result.co2_state,
            population: result.population,
            population_state: result.population_state,
            clean_invest: result.clean_invest,
            clean_invest_state: result.clean_invest_state,
            averageTemp: result.averageTemp,
            averageTemp_state: result.averageTemp_state,
            style: {
                fill: "hsl(" + colorRanger(result.averageTemp) + ", 100%, 50%)",
                maxWidth: '95vmin'
            }
        });
    };

    render() {
        return (
            <div className="App">
                <header className="main-page">
                    <h1>Average Temperature Prediction Models</h1>
                    <p>The following was generated based on historical CO2 emissions, human population, investments
                        in clean energy, and historical temperature data.</p>
                    <Map sliderValue="1.0" style={this.state.style}/>
                    <h2 className={"temp-state-" + this.state.averageTemp_state}>Average Temperature: {this.state.averageTemp}</h2>
                    <Slider sliderValue="2021" sliderMax="2031" sliderMin="1940" variable={this.variables.years}
                            sliderLabel="Year" handleChange={this.handleChange}/>
                    <Value variableValue={this.state.population} variableState={this.state.population_state}
                           variable={this.variables.population} variableLabel="Human Population"/>
                    <Value variableValue={this.state.clean_invest} variableState={this.state.clean_invest_state}
                           variable={this.variables.clean_invest} variableLabel="Clean Energy Investment"/>
                    <Value variableValue={this.state.co2} variableState={this.state.co2_state}
                           variable={this.variables.co2} variableLabel="CO2 Emissions"/>
                </header>
            </div>
        );
    }
}
