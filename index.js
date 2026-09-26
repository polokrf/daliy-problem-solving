// var isPalindrome = function(x) {
//     const number = x
//   const convertString = number.toString()
//   const convertArray = convertString.split('');

//   const palindromeNumberStore = []

  

//   for (let i = 0; i < convertArray.length; i++){
//     palindromeNumberStore.unshift(convertArray[i]);
//   }

//   const palindromeNumber = palindromeNumberStore.join('');
  
  
  

//     if(convertString === palindromeNumber ){
//         return true
//     }else{
//         return false
//     }

// };

// const isResult = isPalindrome(121);

// console.log(isResult);



//  problem 2

// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// var romanToInt = function (s) {
//   const romanString = s.toUpperCase()

//   const convertArray = romanString.split('')

//  const romanNumber = convertArray.map(s => {
//     if (s === "I") {
//       return 1
//    }
//     else if (s === 'V') {
//       return 5
//     } else if (s === 'X') {
//       return 10
//     } else if (s === 'L') {
//       return 50
//     } else if (s === 'C') {
//       return 100
//     } else if (s === 'D') {
//       return 500
//     } else if (s === 'M') {
//       return 1000
//    }
      
//  })
  
//   let current;
//  let next;
//   let counter=0;
  
//   for (let i = 0; i < romanNumber.length; i++){
    
//     current = romanNumber[i]
//     next =romanNumber[i + 1]

//      if (next === undefined) {
//        counter = counter + current;
//      } else if (current >= next) {
//        counter = counter + current;
//      } else {
//        counter = counter - current;
//      }
    
//   }
 
  

 
  
//   return counter

// };

// const romanResult = romanToInt('MCMXCIV');

// console.log(romanResult);




// var longestCommonPrefix = function (strs) {
//   const stringArray = strs
//    let prefix = stringArray[0];
//   let currentString = ''
 
 
//   for (let i = 1; i < stringArray.length; i++) {
   
//     currentString = stringArray[i]
//       let common = '';
//     for (let j = 0; j < prefix.length; j++){
    
//       if (prefix[j] === currentString[j]) {
       
        
//        common = common + prefix[j]
        
//       } else {
//         break
//       }

      
  
//     }
      
//     prefix = common;
//   }
//  return prefix

// };

// const longestResult = longestCommonPrefix(['flower', 'flow', 'flight']);

// console.log(longestResult);


// var isValid = function (s) {
//   const isValue = s
//   const opening = ['(', '{', '[']
//   const closing = [')', '}', ']'];
//   let tag =[]
  
  
  
//   for (let i = 0; i < isValue.length; i++) {
    
//     if (opening.includes(isValue[i])) {
//      tag.push(isValue[i])
       
//     } else if (closing.includes(isValue[i])) {


      
//       if (tag.length === 0) {
//        return false
//       }

//       const last = tag[tag.length - 1];
      
//       if (
//         (isValue[i] === ')' && last === '(') ||
//         (isValue[i] === '}' && last === '{') ||
//         (isValue[i] === ']' && last === '[')) {
//         tag.pop()
//       } else {
//         return false
//       }


      
      
 
//     }


    
  
    
//   };
//   return tag.length === 0
// }


//   const isValidResult = isValid('({})')

// console.log(isValidResult);





// const removeDuplicates = function (nums) {
//  let index=0
//   let counter=0
//   for (let i = 0; i < nums.length; i++){
//     if (nums[index] !== nums[i]) {
//       index = index + 1
      
//        nums[index]= nums[i]
//        counter = counter + 1
//      }

    
//   }


//  return counter + 1;
// };


// const removeDuplicatesResult = removeDuplicates([1, 1, 2, 3, 3, 4]);

// console.log(removeDuplicatesResult)




const removeElement = function (nums, val) {
  
  let k = 0
  
  for (let i = 0; i < nums.length; i++){
    if (val !== nums[i]) {
    nums[k] = nums[i]
       k = k + 1;
    } 
  }
    
 
  return k
};

const removeElementResult = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);

console.log(removeElementResult)