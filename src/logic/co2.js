export default function computeCo2(years) {
    let W0 = 2.4052184
    let W1 = 0.34092337
    let W2 = 0.0012459754

    return (W0 + (W1 * years) + (W2 * (years * years)))
}
