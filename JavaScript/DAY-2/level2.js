//1. Using console.log() print out the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
let string = 'There is no exercise better for the heart than reaching \n down and lifting people up.\' by John Holmes teaches us to help one another.'
console.log('There is no exercise better for the heart than reaching \n down and lifting people up.\' by John Holmes teaches us to help one another.')

//2.	The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log('Love is not patronizing and charity isn\'t about pity,\' it is about love. Charity and love are the same -- with charity you give love,\'so don\'t just give money but reach out your hand instead.')

//3/	Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let x ='10'
console.log(typeof x)
let comp = parseInt(x)
console.log(comp) 
console.log(typeof comp)


//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let a = 9.8
let b =10
console.log(a==b)
let ab = parseFloat(x)
console.log(ab)
console.log(b==ab)
console.log('finished')


//7.	Check if 'on' is found in both python and jargon
 let p= 'python',
    j = 'jargon'

 console.log(p,j.includes('on'))

//8.	I hope this course is not full of jargon. Check if jargon is in the sentence.

let sen= 'I hope this course is not full of jargon'

console.log(sen.includes('jargon'))

//9.	Generate a random number between 0 and 100 inclusively.

let rand = Math.floor(Math.random() * 101);
console.log(rand)

//10.	Generate a random number between 50 and 100 inclusively.


let rand2 = Math.floor(Math.random() * (100 - 50) + 50);

console.log(rand2)

//11.	Generate a random number between 0 and 255 inclusively.

let rand3 = Math.floor(Math.random() * 255);

console.log(rand3)

//12.	Access the 'JavaScript' string characters using a random number.

let Access_s= 'JavaScript' 
console.log(Access_s[5])

//13. Use console.log() and escape characters to print the following pattern.

console.log('1 1 1 1 1\t\n2 1 2 4 8\t\n3 1 3 9 27\t\n4 1 4 16 64\t\n5 1 5 25 125')

//14.	Use substr to slice out the phrase because because because from the following 
let slice_O='You cannot end a sentence with because because because is a conjunction'

console.log(slice_O.substring(31,55))













