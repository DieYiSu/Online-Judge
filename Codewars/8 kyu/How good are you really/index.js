function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints);
    return (classPoints.reduce((a, b) => a + b)) / classPoints.length > yourPoints ? false : true;
}