export default function computePopulation(years) {
    let W0 = 9.759582
    let W1 = 7.104858
    let W2 = -0.034694005

    return (W0 + (W1 * years) + (W2 * (years * years)))
}
