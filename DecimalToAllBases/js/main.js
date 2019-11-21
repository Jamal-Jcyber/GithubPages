function decimalToBinary(decimal) {
	// The >>> 0 operator has no effect in the number but give you the binary equivalent.
  return (decimal >>> 0).toString(2);
}
console.log(decimalToBinary(200 ));




function decimalToHexa(decimal) {
	// The >>> 0 operator has no effect in the number but give you the binary equivalent.
  return (decimal >>> 0).toString(16);
}
console.log(decimalToHexa(200 ));



function decimalToOcta(decimal) {
	// The >>> 0 operator has no effect in the number but give you the binary equivalent.
  return (decimal >>> 0).toString(8);
}
console.log(decimalToOcta(200 ));


// In JavaScript, we have the parseInt() method by using that we can make conversions.

// Converting binary to decimal
//To convert a binary to decimal we need to pass base 2 as a second argument to the parseInt method.

const binaryNumber = "1100";
console.log(parseInt(binaryNumber,2)); // base 2
//output--> 12


//To convert a hexadecimal to decimal we need to pass base 16 as a second argument to the parseInt method.

const hex = "c";
console.log(parseInt(hex,16));  //hex base-16
//output --> 12


//To convert a octal to decimal we need to pass base 8 as a second argument to the parseInt method.
const octal = "14";
console.log(parseInt(octal,8));  //octal base-8
//output --> 12