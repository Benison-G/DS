const recurs = (num) => {
    if (num === 0) return 0;

    console.log(num);
    num -= 1;
    recurs(num);
}

recurs(1000);