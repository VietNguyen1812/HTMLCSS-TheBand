const solution = (x, y) => {
    let check = true;
    let current = 0;
    let i = 0;

    while (current < y.length) {
        const index = x.indexOf(y[current], i);

        if (index === -1) { check = false; break; }
        else i = index

        current++;
    }

    return check;
}

console.log(solution("ABCD","AA"));