//without 0 all veriable show true
const age = 4;
if (age > 0) {
    console.log("condition is true");
}
else {
    console.log("condition is false");
}

//0, "", undefined, null, NaN, false all veriable show false
//"0", " ", [], {} all veriable show true
//if we set any value it will show true otherwise false undefined value show false
const name = "Buffy khan";
if (name.length > 0) {
    console.log("condition is true");
}
else {
    console.log("condition is false");
}

let name1 = "Buffy khan";
if (name1 || name1 == 0) {
    console.log("condition is true");
}
else {
    console.log("condition is false");
}
