//1.Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let c_name ="30 Days Of JavaScript"
//2.Print the string on the browser console using console.log()
console.log(c_name)
//3.Print the length of the string on the browser console using console.log()
console.log(c_name.length)
// 4.Change all the string characters to capital letters using toUpperCase() method
console.log(c_name.toUpperCase())
// 5.Change all the string characters to lowercase letters using toLowerCase() method
console.log(c_name.toLowerCase())
//6.Cut (slice) out the first word of the string using substr() or substring() method
console.log(c_name.substring(0,3))
//7.Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(c_name.substring(0,3))
console.log(c_name.substring(3,7))
console.log(c_name.substring(8,21))
//8.Check if the string contains a word Script using includes() method
console.log(c_name.includes('Script'))
//9.Split the string into an array using split() method
console.log(c_name.split())
//  10.	Split the string 30 Days Of JavaScript at the space using split() method
console.log(c_name.split(' '))
//11.	'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(company.split(','))
// 12.	Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(c_name.replace('30 Days Of Python'))
//13.	What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(c_name.charAt(5,'30 Days Of Python'))
// 14.	What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(c_name.charCodeAt(5))
//15.	Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript.
console.log(c_name.indexOf('a'))
//16.	Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(c_name.lastIndexOf('a'))
//17.Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let word='You cannot end a sentence with because because because is a conjunction'
console.log(word.indexOf('because'))
//18.	Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(word.lastIndexOf('because'))
//19.	Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(word.search('because'))
//20.	Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let trim_w=' 30 Days Of JavaScript '
console.log(trim_w.trim(' '))

// 21.	Use startsWith() method with the string 30 Days Of JavaScript and make the result true
let s_name='30 Days Of JavaScript'
console.log(s_name.startsWith('30 Days Of JavaScript'))
//22.	Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(s_name.endsWith('30 Days Of JavaScript'))
//23.	Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(c_name.match('a'))
//  24.	Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let aa= '30 Days of',
    bb='JavaScript'
console.log(aa,bb.concat())    
//25.	Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(c_name.repeat(2))






