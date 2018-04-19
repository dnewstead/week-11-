
var numArray = [2, 5, 7, 10, 12, 13, 47, 48, 32, 6, 31, 94, 17, 30]

var testEven  = a => a.filter ( num => num%2 === 0 );
testEven(numArray);

var numArray = [2, 5, 7, 10, 12, 13, 47, 48, 32, 6, 31, 94, 17, 30]

var fizzBuzz = a => {
	return a.map(num => {
		if(num % 3 === 0 && num % 5 === 0 ){
			return "FizzBuzz";
		}else{
			if(num % 3 === 0){
				return "Fizz";
		} else if (num % 5 === 0) {
			return "Buzz";
		} else {
			return num;
		}
	}
});
}
fizzBuzz(numArray);

var sentences = [
	"The quick brown fox jumped over the lazt dog.",
	"To be or not to be.",
	"Como estas!",
	"Yo quiero el bano. "
]
