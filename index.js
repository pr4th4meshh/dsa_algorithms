// Linear Search
// function linearSearch(arr, target) {
// for(let i=0; i<=arr.length;i++) {
//   if(target === arr[i]) {
//     return i;
//   }
// }
//   return -1
// }

// console.log(linearSearch([-5, 2, 10, 4, 6], 10))//2
// console.log(linearSearch([-5, 2, 10, 4, 6], 6)) //4
// console.log(linearSearch([-5, 2, 10, 4, 6], 20)) //-1

// Binary Search
// function binarySearch(arr, target) {
//   let leftIndex = 0;
//   let rightIndex = arr.length - 1;
//   while(leftIndex <= rightIndex) {
//     let middleIndex = Math.floor((rightIndex + leftIndex) / 2)
//     if(target == arr[middleIndex]){
//       return middleIndex;
//     }
//     else if(target < arr[middleIndex]){
//       rightIndex = middleIndex - 1
//     }else {
//       leftIndex = middleIndex + 1 
//     }
//   }
//   return -1
// }

// console.log(binarySearch([-5, 2, 4, 6, 10], 10)) // 4
// console.log(binarySearch([-5, 2, 4, 6, 10], 2)) // 1
// console.log(binarySearch([-5, 2, 4, 6, 10], 20)) //-1

// Recursive Binary Search
// function recursiveBinarySearch(arr, target) {
//  return search(arr, target, 0 ,arr.length - 1)
// }

// function search(arr, target, leftIndex, rightIndex) {
//   if(leftIndex > rightIndex) {
//     return -1
//   }
//   let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//   if(target === arr[middleIndex]) {
//     return middleIndex;
//   }
//   if(target < arr[middleIndex]){
//     return search(arr, target, leftIndex, middleIndex - 1)
//   }else{
//     return search(arr,target, middleIndex + 1, rightIndex)
//   }
// }

// function recursiveBinarySearch(arr,target) {
//   return search(arr, target, 0 ,arr.length - 1)
// }

// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)) // 4
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)) // 3
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)) //-1

// function bubbleSort(arr) {
//   let swapped;
//   do{
//     swapped = false
//   for(i = 0; i< arr.length; i++) {
//     if(arr[i] > arr[i + 1]){
//       let temp = arr[i+1];
//       arr[i+1] = arr[i];
//       arr[i] = temp;
//       swapped = true;
//     }
//   }
// }while(swapped)
// }

// arr = [8, 20, -2, 4, 6]
// bubbleSort(arr)
// console.log(arr)

// function insertionSort(arr) {
//    for(let i = 0;i < arr.length; i++) {
//      let numberToInsert = arr[i];
//      let j = i - 1 //Reps the sorted part of the array
//      while( j >= 0 && arr[j] > numberToInsert) {
//          arr[j + 1] = arr[j]
//          j = j - 1
//      }
//      arr[j + 1] = numberToInsert
//  }
// }

// const arr = [8, 20, -2, 4, -6]
// insertionSort(arr);
// console.log(arr)

// function quickSort(arr) {
//   if(arr.length < 2) {
//     return arr
//   }
//   let pivot = arr[arr.length - 1]
//   let left = []
//   let right = []
//   for(let i = 0; i < arr.length - 1; i++){
//     if(arr[i] < pivot) {
//       left.push(arr[i])
//     }else {
//       right.push(arr[i])
//     }
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)]
// }

// const arr = [8, 20, -2, 4, -6]
// console.log(quickSort(arr))

// function mergeSort(arr) {
//   if(arr.length < 2 ){
//     return arr;
//   }
//   const mid = Math.floor(arr.length / 2);
//   const leftArr = arr.slice(0 ,mid);
//   const rightArr = arr.slice(mid);
//   return merge(mergeSort(leftArr), mergeSort(rightArr))
// }

// function merge(leftArr, rightArr) {
//   const sortedArr = [];
//   while(leftArr.length && rightArr.length) { //leftArr & rightArr are positive
//     if(leftArr[0] <= rightArr[0]) {
//       sortedArr.push(leftArr.shift())
//     }else {
//       sortedArr.push(rightArr.shift())
//     }
//   }
//  return [...sortedArr, ...leftArr, ...rightArr]
// }

// const arr = [8, 20, -2, 4, -6]
// console.log(mergeSort(arr))

// Big-O = O(nlogn) || 'n' for the first part & 'logn' for the second part


// CARTESIAN PRODUCT
// function cartesianProduct(arr1, arr2) {
//   const result = []
//   for(let i=0;i < arr1.length; i++) {
//     for(let j=0; j < arr2.length; j++) {
//       result.push([arr1[i], arr2[j]])
//     }
//   }

//   return result;
// }

// const arr1 = [1,2]
// const arr2 = [3,4,5]
// console.log(cartesianProduct(arr1, arr2))

//Climbing Staircase
// function climbingStaircase(n) {
//   const noOfWays = [1,2]
//   for(i = 2; i<=n ; i++) {
//     noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2]
//   }
//   return noOfWays[n - 1]
// }
//Big-0 *time comp* = O(n)

// console.log(climbingStaircase(1))
// console.log(climbingStaircase(2))
// console.log(climbingStaircase(3))
// console.log(climbingStaircase(4))
// console.log(climbingStaircase(5))

//Tower of Hanoi
// function towerOfHanoi(n, fromRod, toRod, usingRod) {
//   if(n === 1) {
//     console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
//     return
//   }
//   towerOfHanoi(n -1, fromRod, usingRod, toRod)
//   console.log(`Move disk ${n} from ${fromRod} to ${toRod} `)
//   towerOfHanoi(n - 1, usingRod, toRod, fromRod)
// }

// towerOfHanoi(3, 'A', 'C', 'B')
//Big-0 *time comp* = O(2^n)