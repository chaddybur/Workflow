/* <5 Kyu> Move Zeros to the End
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]*/ 

function moveZeros(arr) {
  let counter = 0
  for(i= 0; i < arr.length - counter; i++){
    if(arr[i] === 0){
      arr.push(arr[i])
      counter += 1
      arr.splice(i,1)
    }
  }
  console.log(arr)
}


moveZeros([1,2,0,1,0,1,0,3,0,1])