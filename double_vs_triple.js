// == means only value is compared or check
const first = 2;
const second = "2";
if (first == second) {
    console.log("equal");
}
else {
    console.log("not equal");
}
//equal


// === means value and type is compared or check
const first1 = 2;
const second1 = "2";
if (first1 === second1) {
    console.log("equal");
}
else {
    console.log("not equal");
}
//not equal


const first2 = 0;
const second2 = true;
if (first2 == second2) {
    console.log("condition is true");
}
else {
    console.log("condition is false ");
}
//condition is false cause 0 is false and true is true (false*true/0*1=0)


const first3 = 0;
const second3 = true;
if (first3 === second3) {
    console.log("condition is true");
}
else {
    console.log("condition is false ");
}

//=== is better than == so we use ===