//Test.Utils

//will unit test this properly but for now build and chuck
var expect = require('chai').expect;
module.exports = function(){
//Leche-ish
//Pass test case as arg to enclosing function
	it.withCases = function(cases,callback){
		cases.forEach(function(item){
			callback(item);
		});
	}
}

//TODOS:
//1.
//Node does not support ES6 so 'import' & 'export' keywords are not allowed
//When build properly as separate package will need to use Babel (cli) to transpile
//2.
//Check 

//IDEAS
//If find have need for other leche bits will just import Leche
//JavaScript 'automocker'
