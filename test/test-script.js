/*jshint esversion: 6 */

const chai = require('chai');

chai.should();

const selectionSort = require('../selection-sort.js');

describe('The Cases of Edge', ()=>{

  it('should be a function', ()=>{
    selectionSort.should.be.a('function');
  });

  it('shoud be not be an array', () => {
    selectionSort.should.not.be.an('array');
  });

  it('should not be a boolean',()=>{
    selectionSort.should.not.be.a('boolean');
  });

  it('should not be a string', ()=>{
    selectionSort.should.not.be.a('string');
  });

  it('should not be null', ()=>{
    selectionSort.should.not.equal('null');
  });

  it('should return an array', ()=>{
    selectionSort([9,2,5,6,4,3,7,10,1,8]).should.be.deep.equal([1,2,3,4,5,6,7,8,9,10]);
  });

  it('should not return an object', ()=>{
    selectionSort([{}, {}, {},{}]).should.not.deep.equal([1,2,3,4,5,6,7,8,9,10]);
  });

  it('should not return the same numbers', ()=>{
    selectionSort([1,1,1,1,1,1,1]).should.not.deep.equal([1,2,3,4,5,6,7,8,9,10]);
  });
});