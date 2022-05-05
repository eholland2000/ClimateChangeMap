export default function computeCo2(years) {
    let W0 = 1.8558285
    let W1 = 0.3550435
    let W2 = 0.00094071974

    return (W0 + (W1 * years) + (W2 * (years * years)))
}
