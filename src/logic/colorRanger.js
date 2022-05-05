export default function colorRanger(temp) {
    let percentage = (temp - 35) / (60 - 35);
    return (percentage * (0 - 225)) + 225;
}
