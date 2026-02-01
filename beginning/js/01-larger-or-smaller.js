let x1 = parseInt(prompt("First integer:"));
let x2 = parseInt(prompt("Second integer:"));
if (x1 > x2) {
    document.write("The larger number is: " + x1);
} else if (x2 > x1) {
    document.write("The larger number is: " + x2);
} else {
    document.write("Both numbers are equal.");
}