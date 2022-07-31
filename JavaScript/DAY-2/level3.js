//1.	'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let count_LOVE= 'Love is the best thing in this world. Some found their love and some are still looking for their love.'

console.log(count_LOVE.split('love').length)


//2.	Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let count_N='You cannot end a sentence with because because because is a conjunction'

console.log(count_N.match('because'))

//3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

//let regEx = /d(b+)d/g

//console.log(sentence.match(regEx))


//4Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let text='He earns 5000 euro from salary per month,10000 euro annual bonus, 15000 euro online courses per month'

console.log(text.match(/\d+/g)) 


















