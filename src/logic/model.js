import computePopulation from "./population";
import computeCo2 from "./co2";
import computeInvestment from "./invest";
import {History} from "./history";

export default function computeAll(year) {
    let W0 = 8.319679;
    let W1 = 0.6181373;
    let W2 = 0.009784827;
    let W3 = 0.29477036;
    let W4 = -0.002647009;
    let W5 = 0.09695971;
    let W6 = -7.0605194e-05;
    let W7 = -1.3561362;
    let W8 = 0.024422545;
    const EMPTY = 0;
    const HISTORY = 1;
    const PREDICTION = 2;

    var co2 = 0;
    var co2_state = EMPTY;
    if (year >= 1940 && year <= 2021) {
        co2_state = HISTORY;
        co2 = History[year - 1895].co2;
    } else if (year > 2021) {
        co2_state = PREDICTION;
        co2 = computeCo2(year - 1940);
    }

    var population = 0;
    var population_state = EMPTY;
    if (year >= 1950 && year <= 2021) {
        population_state = HISTORY;
        population = History[year - 1895].population;
    } else if (year > 2021) {
        population_state = PREDICTION;
        population = computePopulation(year - 1950) * 1000;
    }

    var clean_invest = 0;
    var clean_invest_state = EMPTY;
    if (year >= 2004 && year <= 2019) {
        clean_invest_state = HISTORY;
        clean_invest = History[year - 1895].invest;
    } else if (year > 2019) {
        clean_invest_state = PREDICTION;
        clean_invest = computeInvestment(year - 2004);
    }

    var averageTemp = 0;
    var averageTemp_state = EMPTY;
    if (year >= 1895 && year <= 2021) {
        averageTemp_state = HISTORY;
        averageTemp = History[year - 1895].temp;
    } else if (year > 2021) {
        averageTemp_state = PREDICTION;
        averageTemp = W0 + (W1 * (year - 1895)) + (W2 * ((year - 1895) * (year - 1895))) +
            (W3 * (population / 1000.0)) + (W4 * ((population / 1000.0) * (population / 1000.0))) +
            (W5 * clean_invest) + (W6 * (clean_invest * clean_invest)) +
            (W7 * co2) + (W8 * (co2 * co2));
    }

    return {
        co2: parseFloat(co2).toFixed(2),
        co2_state: co2_state,
        population: parseFloat(population).toFixed(0),
        population_state: population_state,
        clean_invest: parseFloat(clean_invest).toFixed(1),
        clean_invest_state: clean_invest_state,
        averageTemp: parseFloat(averageTemp).toFixed(2),
        averageTemp_state: averageTemp_state
    };
}
