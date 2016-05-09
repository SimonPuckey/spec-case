import chai from 'chai';
import specCase from '../src/index';
var expect = chai.expect;

//TODO: try to use es6 syntax in tests where possible eg. ()=>{}, let etc
describe('when testing specCase',() => {
	it('it should append withCases function to spec defintion',() => {
		specCase();
		expect(it).to.have.property('withCases');
	});
})

//test that for each cases the callback is called with the case
//do as seperate test fro now
describe('when testing withCases', () => {
	//set up test cases
	//set up a callback
	var FAKE_CASES, FAKE_CALLBACK, CALLED_WITH = [];

	before(()=>{
		specCase();
	});

	beforeEach(()=>{
		FAKE_CASES = [
			{name: 'case 1'},
			{name: 'case 2'}
		];
		//good candidate for sinon or mocking framework but for now manually verify
		FAKE_CALLBACK = function(fakeCase){
			CALLED_WITH.push(fakeCase);
		}
	});

	afterEach(function(){
		CALLED_WITH = [];
	});

	it('it should execute callback once for each case',function(){
		//when
		it.withCases(FAKE_CASES, FAKE_CALLBACK);
		//then
		//called with array matches Fake_cases
		expect(CALLED_WITH).to.have.length(FAKE_CASES.length);

	});

	it('it should pass the case to the callback',function(){
		it.withCases(FAKE_CASES, FAKE_CALLBACK);
		expect(CALLED_WITH).to.deep.equal(FAKE_CASES);

	});
});
