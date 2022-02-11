// let list = ['a','b','c','d']
// list.pop()
// console.log(list)
/*Is there any way to have a line of code recall or go back to
a previous code line that executed before a permanent command did?
In other words as above shown, if you .pop an array without assiging
a variable to store the .pop, you lose the item that was popped.
Can you at some future point tell the code to go back to a line of
code before the .pop execution and basically "reset" the list? As 
of now, it seems easier to just make it into a variable, but I'm
thinking of a long code where the .pop is random and maybe in the
future the user or coder wants to recall what the list looked like
in the past. I am also thinking that if you contain all code within
a () after the original array then you could maybe resolve it that
way but idk how.
*/

//print out every item in your list

// let list = ['1','0','3','9','7','2']
//iterate through each item in your list
//for(let i=0; i<list.length; i++){
  //print each item as I go
  //stop when there are no more elements
  //console.log(list[i])
//}
//given an array of numbers, print the
//largest and smallest numbers in array:
//Thinking process: Need to keep track of smallest and largest numbers. 
//let smallest = list[0]
//let largest = list[0]
//Need to compare all numbers to all other numbers. Need to update smallest and largest as I go.
// for(let i=0;i<list.length; i++){
//   if(list[i]>largest){
//     largest=list[i]
//   }
//   if(list[i]<smallest){
//     smallest=list[i]
//   }
// }
// console.log(largest)
// console.log(smallest)
//This doesnt print the list in order, it just prints the largest and smallest numbers in the list


//Take password input
const readline = require("readline")
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
reader.question("Do you like cats? y/n", function(answer){
    if(answer=="y"){
        console.log("Correct")
    }else{
        console.log("Incorrect")
    }
})