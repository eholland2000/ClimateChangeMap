export default function computeInvestment(years) {
    let W0 = 9.311076
    let W1 = 6.7985163
    let W2 = 1.4097325

    return (W0 + (W1 * years) + (W2 * (years * years)))
}
