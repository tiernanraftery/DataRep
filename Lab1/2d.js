const ages = [25, 31, 42, 77];

//arrow function takes an array to multiply numbers below 70
let d = ages.map((x) => {
    if (x < 70)
        return x * 2
    else if (x > 70)
        return x
});

//print multiplied array
console.log(d);