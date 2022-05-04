export default function computePopulation(years) {
    let W0 = 8.354441
    let W1 = 7.1039186
    let W2 = -0.03387097

    return (W0 + (W1 * years) + (W2 * (years * years)))
}
