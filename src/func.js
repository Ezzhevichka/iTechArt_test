function getSums(x) {
    const arr1 = [];
    const arr2 = [];
    const arr3 = [];
    const arr4 = [];
    const arr5 = [];
    const arr6 = [];
    const arr7 = [];
    const arr8 = [];
    const arr9 = [];
    const arr10 = [];
    const arr11 = [];
    const arr12 = [];

    for (let i = 0; i < x.length; i++) {
        for (let k = 0; k < x[i].cases.length; k++) {
            switch (x[i].cases[k].category) {
                case 1:
                    arr1.push(x[i].cases[k].points);
                    arr1.reduce((i, j) => i + j)
                    break;
                case 2:
                    arr2.push(x[i].cases[k].points);
                    arr2.reduce((i, j) => i + j)
                    break;
                case 3:
                    arr3.push(x[i].cases[k].points);
                    arr3.reduce((i, j) => i + j)
                    break;
                case 4:
                    arr4.push(x[i].cases[k].points);
                    arr4.reduce((i, j) => i + j)
                    break;
                case 5:
                    arr5.push(x[i].cases[k].points);
                    arr5.reduce((i, j) => i + j)
                    break;
                case 6:
                    arr6.push(x[i].cases[k].points);
                    arr6.reduce((i, j) => i + j)
                    break;
                case 7:
                    arr7.push(x[i].cases[k].points);
                    arr7.reduce((i, j) => i + j)
                    break;
                case 8:
                    arr8.push(x[i].cases[k].points);
                    arr8.reduce((i, j) => i + j)
                    break;
                case 9:
                    arr9.push(x[i].cases[k].points);
                    arr9.reduce((i, j) => i + j)
                    break;
                case 10:
                    arr10.push(x[i].cases[k].points);
                    arr10.reduce((i, j) => i + j)
                    break;
                case 11:
                    arr11.push(x[i].cases[k].points);
                    arr11.reduce((i, j) => i + j)
                    break;
                case 12:
                    arr12.push(x[i].cases[k].points);
                    arr12.reduce((i, j) => i + j)
                    break;
                default: console.log('nothing to do');
            }
        }
    }
}

export { getSums }