// Put your solution here
function divideArray(numbers) {
    const evenNums = [];
    const oddNums = [];
  
    for (let number of numbers) {
      if (number % 2 === 0) {
        evenNums.push(number);
      } else {
        oddNums.push(number);
      }
    }
  
    evenNums.sort(function(a, b) {
      return a - b;
    });
  
    oddNums.sort(function(a, b) {
      return a - b;
    });
  
    console.log("Even numbers:");
    if (evenNums.length > 0) {
      for (let even of evenNums) {
        console.log(even);
      }
    } else {
      console.log("None");
    }
  
    console.log("Odd numbers:");
    if (oddNums.length > 0) {
      for (let odd of oddNums) {
        console.log(odd);
      }
    } else {
      console.log("None");
    }
  }
  
  // Example calls to divideArray():
  let nums1 = [4, 2, 9, 1, 8];
  divideArray(nums1);
  
  let nums2 = [4, 2, 8];
  divideArray(nums2);
  