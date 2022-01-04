function getSums(x) {
    let arr = [];
    for (let i = 0; i < x.length; i++) {
        let sum = 0;
        arr.push(x[i].cases);
        for (let j = 0; j < x[i].cases.length; j++) {
            sum += x[i].cases[j].points;
        }
        if (sum > 11) {
            alert(`Сумма вопроса ${i + 1} больше 11. Проверьте свои значения!`)
        }
    }
    arr = arr.flat();
    arr.sort((a, b) => a.category - b.category);
    const points = [];
    for (let i = 1; i <= 12; i++) {
        points.push(arr.filter(el => el.category === i).map(el => el.points));
    }
    if (points.flat().includes(undefined)) {
        alert('Вы ввели не все значения на странице!');
    } else {
        return points;
    }
}

export { getSums }