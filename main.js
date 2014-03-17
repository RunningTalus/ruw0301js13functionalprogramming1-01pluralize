//http://winter2014.refactoru.com/exercises/js/functional-short-answer

// var pluralize = function (word, number) {
//  if(number === 1) {
//   return word;
//  }
//  else {
//   return word + "s";
//  }
// };

var pluralize = function (word, number) {
	return number===1 ? word : word + "s";
};

var newVar = pluralize('dog', 6);
console.log(pluralize('dog', 6));