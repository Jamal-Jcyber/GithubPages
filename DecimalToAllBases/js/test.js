var X = prompt("Choose your number");
var Y = prompt("Choose your base");
var Z = [];
var M = -1;
var A = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var B = function() {
    for (i = X; 0 < i; i = Math.floor(i / Y)) { 
        if(i % Y >= 10) { 
            Z.push(A[i % Y - 10]);
        } else { 
            Z.push(i % Y);
        } 
        M = M + 1;
    } 
    for (j = M; j >= 0; j--) {
        document.write(Z[j]);
    } 
};

B(); // Call function