export default function computeInvestment(years) {
    let W0 = 9.216919
    let W1 = 6.26869
    let W2 = 1.4244825

    return (W0 + (W1 * years) + (W2 * (years * years)))
}
