export default function colorRanger(temp) {
    let percentage = (temp - 35) / (70 - 35);
    let hue = (percentage * (0 - 225)) + 225;
    return hue;
}
