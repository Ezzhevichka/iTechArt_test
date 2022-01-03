function getSums(x) {
    let arr = [];
    for (let i = 0; i < x.length; i++) {
        arr.push(x[i].cases)
    }
    arr = arr.flat();
    arr.sort((a, b) => a.category - b.category);
    const points = [];
    for (let i = 1; i <= 12; i++) {
        points.push(arr.filter(el => el.category === i).map(el => el.points));
    }
    return points;
}

export { getSums }