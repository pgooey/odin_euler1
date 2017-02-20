/*:::Largest Prime Factor:::
Problem 3: The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143? */

var problem3 = function() {

	var limit3 = document.getElementById('num3');

 	// IMPORTANT !!! add ".value" otherwise to generate number. Otherwise will be zero
 	var fOne = 2, fTwo = 0, nQ = num3.value;

	while (fOne < nQ) {
	    fTwo = nQ / fOne;
	    if (fTwo % 1 === 0) {
	        nQ = fTwo;
	        fOne = 2;
	        console.log(nQ);
	    } else {
	        fOne++;
	    }
	}
	document.getElementById('final_result3').innerHTML = nQ;
}