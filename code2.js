/*:::Even Fibonacci Numbers:::
Problem 2: Each new term in the Fibonacci sequence is generated by adding the previous 
two terms. By starting with 1 and 2, the first 10 terms will be: 1, 2, 3, 5, 8, 13, 
21, 34, 55, 89, ... By considering the terms in the Fibonacci sequence whose values do 
not exceed four million, find the sum of the even-valued terms.*/

var problem2 = function() {

	var total = 0;
	var limit2 = document.getElementById('num2');

 	// IMPORTANT !!! add ".value" otherwise to generate number. Otherwise will be zero
	for (i = 1, j = 1, k = 1; i < num2.value; i = j+k) { 
	  if (i % 2 === 0) {
	    total += i;
	  }
	  k=j;
	  j=i;
	}
	document.getElementById('final_result2').innerHTML = total;
}