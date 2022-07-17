//  array helper method are used for manipilation array easily in the javascript
// foreach method

const arr = [2, 6, 7, 1];
let sum = 0;
  arr.forEach((item) => {
    sum += item;
  });
console.log(sum)

//map method 
//This method returns a new array with the results of a function that is passed to it. 
//map() calls the function for every element of the array in particular order.

const arrr = [2 ,6 ,7 ,1];
const multiply = arr.map((item) => {
    return item * 2
  });
console.log(multiply);
//ogininal array
console.log(arr);

//filter method 
//This method takes a function along with it and this function contains a boolean condition. 
//filter() returns an array consisting of all the elements that fall in the condition stated. 
//filter() does not make any changes to the original array

const arry = [3, 5, 6, 1];
const req = arr.filter((item) => {
    return item > 4
  });
console.log(req);
console.log(arr);

//find method 
//The find() method returns the value of the first element in an array that pass a test
//The find() method executes the function once for each element present in the array:

let array = [10, 20, 30, 40];
let found = array.find((elem) => {
  return elem > 20;
});
console.log(found);



let array1=[1,2,3,4,5,6];
const final=[];
let res=array1.forEach((i)=>{
  return final.push(i*2) 
})
console.log(array1)
console.log(final)


