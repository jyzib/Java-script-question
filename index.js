// this is comment
/*hsnnkjnikj*/
// console.log(typeof "56")
// let x;
// x = 5
// let y;
// y = x
// console.log(y)
// let myName = 'jyzib'
// console.log(myName)
// let x = 5
// let X = 45
// console.log(x,X)

// const people = [
//     { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/2000', department: 'Development', salary: '45000' },
//     { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
//     { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
//     { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
//     { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
//     { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
//     { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
//     { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
//     { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
//     { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
//     { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
//     { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
// ];
// let x = people.reduce((sorted,e)=>{
//     return sorted + Number(e.salary)
// },0)
// console.log(Math.floor(x/people.length))
// let y = people.filter((e)=>{
//   let x= new Date().getFullYear() - new Date(e.DOB).getFullYear() > 30
//    return x
// })
// let u =y.map((e)=>{
//     return e.firstName +" "+ e.lastName
// }).join(' ,')
// console.log(u)
// console.log(people)
// let x = [1,2,1,4,5,78,5]
// x.sort((e,f)=> f-e)
// people.sort((a,b) =>new Date(a.DOB) - new Date(b.DOB))


// console.log(x)
// console.log(people)

const orders = [
    {
        orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
            { productId: '123', price: 55 },
            { productId: '234', price: 30 },
        ]
    },
    {
        orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
            { productId: '234', price: 30 },
        ]
    },
    {
        orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
            { productId: '567', price: 30 },
            { productId: '678', price: 80 },
        ]
    },
    {
        orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
            { productId: '789', price: 12 },
            { productId: '890', price: 90 },
        ]
    },
    {
        orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
            { productId: '901', price: 43 },
            { productId: '123', price: 55 },
        ]
    },
];
// let y = orders.filter((e)=>{
//     if(e.customerId == '234' && e.delivered == false){
//         return e.customerId
//     } 

// })
// console.log(y)
// let x = orders.filter((e)=>{
//   let i =  e.items
//   for(let p of i){
//     if(p.productId == 123){
//         return p
//     }

//   }
// })
// let o = {
//     g :'jazib',
//     y:'zaidi'
// }
// // console.log(o.length())
// console.log(x)
// const users = [
//     { id: '88f24bea-3825-4237-a0d1-efb6b92d37a4', firstName: 'Sam', lastName: 'Hughes' },
//     { id: '2a35032d-e02b-4508-b3b5-6393aff75a53', firstName: 'Terri', lastName: 'Bishop' },
//     { id: '7f053852-7440-4e44-838c-ddac24611050', firstName: 'Jar', lastName: 'Burke' },
//     { id: 'd456e3af-596a-4224-b1dc-dd990a34c9cf', firstName: 'Julio', lastName: 'Miller' },
//     { id: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', firstName: 'Chester', lastName: 'Flores' },
//     { id: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', firstName: 'Madison', lastName: 'Marshall' },
//     { id: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', firstName: 'Ava', lastName: 'Pena' },
//     { id: '7f0ce45a-bdca-4067-968b-d908e79276ce', firstName: 'Gabriella', lastName: 'Steward' },
//     { id: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', firstName: 'Charles', lastName: 'Campbell' },
//     { id: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', firstName: 'Madison', lastName: 'Lambert' },
// ];

// const comments = [
//     { userId: '88f24bea-3825-4237-a0d1-efb6b92d37a4', text: 'Great Job!' },
//     { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'Well done, I think I understand now!' },
//     { userId: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', text: 'How do you do that? 😲' },
//     { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'OK great thanks' },
//     { userId: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', text: 'Cool, thanks!' },
//     { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Nice one 😉' },
//     { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Got it.' },
//     { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Thanks!' },
//     { userId: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', text: 'Cool 😀' },
//     { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Great stuff!' },
// ];
// Exercises
// document.querySelector()

// 1) What is Madison Marshall's user id?



// 2) Who wrote the first comment (assuming the first comment is in position 0 of the comments array)



// 3) Which user commented 'OK great thanks'?



// 4) Add the user's first and last name to each comment in the comments array



// 5) Get a list of the users who haven't commented

// let x = users.filter((e)=>{
//     if(e.firstName == "Madison" && e.lastName == "Marshall" ){
//        console.log(e.id) 
//     }
// })

// console.log(x)
// console.log(comments[0].userId)
// let x = users.filter((e)=>{
//     if(e.id == comments[0].userId){
//        console.log(e.firstName + e.lastName) 
//     }
// })
// let okthanks = comments.filter((e)=>{
//     if(e.text == 'OK great thanks'){
//         users.forEach((m)=>{
//             if(e.userId == m.id){
//                 x = m.firstName
//                 // console.log(m.firstName)
//             }

//         })
//         return x

//     }

// })
// // console.log(okthanks)

// paragraph.innerHTML = paragraph.innerText
// .split(' ')
// .map(e=> e.length > 8 ? `<span style="background-color: yellow;">${e}</span>`:e)
// .join(' ')
// let x = document.createElement('a')
// x.innerHTML = 'hhh'
// x.href = 'hh'
// // x.setAttribute('href','https.google.com')
// document.body.append(x)
// console.log(x)
// let x = paragraph.innerText.split(' ')
// console.log(x.length);
//  paragraph.innerHTML= paragraph.innerText 
// .split('.')
// .map(e => `<span> <br>${e}</span>`)
// .join('')

// console.log(paragraph)
// const paragraph = document.querySelector('p')
// let x = paragraph.innerText.split(' ')
// // let o = 'jaazzib kazms dnkalx'
// // let i = o.split(' ')
// let g = x.map((e)=>{
//    return e.replace('?','&#128512').replace('!','&#128514')
// }).join(' ')
// paragraph.innerHTML = g
// console.log(g)
// const input1 = document.querySelector('#input1')
// const input2 = document.querySelector('#input2')
// const submit = document.querySelector('#submit')
// const error = document.querySelector('#error')
// submit.addEventListener('click',()=>{
//   if(input1.value !== input2.value){
//     error.style.display = "block"
//   }else if(input1.value == input2.value){
//     error.style.display = "none"
//   }
//   input1.value = ''
//   input2.value = ''
// })

// let x = [1,2,3,4]
// let y = x.filter((e)=>{

// })

// console.log(y)
// setTimeout(()=>{
//     submit.style.display = "block"
// },3000)
// submit.addEventListener('click',()=>{
//     submit.style.display = "none"
// })



// Write a JavaScript program to generate a random hexadecimal color codelet
// Write a JavaScript program to check two numbers and return true if one of the number is
// 100 or if the sum of the two numbers is 100


// const find = (a,b)=>{
//    if(a+b == 100) return true
//    if(a == 100 || b == 100) return true
// }



// console.log(find(35,6)
// )


// Write a JavaScript exercise to get the extension of a filename.
// const extension = (file)=>{
//   x = file.lastIndexOf(".")
//   console.log(file.slice(x))

// }




// extension('jazib.kddd.h')
// Write a JavaScript program to create a new string adding "New!" in front of a given string. If
// the given string begins with "New!" already then return the original string.

// let string = 'New jazib ijjnkjn kjnk'
// let arr = string.split(' ')
// if(arr[0] !== "New"){
//    console.log('New ' + string)
// }else{
// console.log(string)

// }



// Write a JavaScript program to create a new string from a given string taking the last 3
// characters and added at both the front and back. The string length must be 3 or more, if
// not, the original string is returned.




// let last = 'jazib'
// console.log(last.slice(-3))

// function newstring(text){
//     if(text.length < 3){
//         return text
//     }else{
//         let lastword = text.slice(-3)  
//    return lastword+text+lastword
//     }

// } 
// console.log(newstring('ja'))
// Write a JavaScript program to extract the first half of a string of even length
// function newstring(text){
//    let half =  Math.floor(text.length/2) 
//      return text.slice(0,half)
// } 
// console.log(newstring('jazib'))
// Write a JavaScript program to concatenate two strings except their first character.

// let x = 'jazib'

// function concatenate(a,b){
//    return a.slice('1') + b.slice('1')
// }
// console.log(concatenate('jazib','zaidi'))
// concatenate

// Write a JavaScript program to find the number of even digits in a an array of integers

// let arr = [1,2,3,4,5,6,7]
// let y = []
// for(let i of arr){
//     if(i%2==0){
//       y.push(i)
//     }
// }
// // Write a JavaScript program to get the largest even number from an array of integers.

// let l = y.reduce((a,b)=>{
//     return a > b
// })

// console.log(l)


// 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
// const day = [
//     'Sunday',
//     "monday",
//     "tuesday",
//     "wednesday",
//     'thusday',
//     'friday',
//     'saturday'
// ]
// const currentDay = new Date().getDay()
// const today = day[currentDay]
// console.log(`Today is ${today} & Current time is : ${new Date().getHours()} am : ${new Date().getMinutes()} : ${new Date().getSeconds()}`)
// console.log(day[1])

// 2 Write a JavaScript function to print the contents of the current window.

const text = document.querySelector('#btn')
// btn.addEventListener('click',()=>{

//     window.print()
// })


// 3. Write a JavaScript program to get the current date.  Go to the editor
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
// const month = new Date().getMonth()
// const day = new Date().getDate()
// const year = new Date().getFullYear()
// console.log(`${month}-${day}-${year}`)

// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
// ½[√(a2 − b2/4) × b]
// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front. 
// // let x = btn.innerText
// let letter = 'w3resource  '
// let arr = letter.split('')
// setInterval(()=>{
//     let t = arr.pop()
//     let g = arr.unshift(t)

//     text.innerText = arr.join('')
// },150)

// console.log(arr.push())


// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
// let year = 2024
// if(year % 4 == 0 && year % 100 == 0 && year % 400 == 0){
//     console.log(`yes ${year} is leap year`)
// }else{
//     console.log(`No ${year} is not a leap year`)

// }

// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.


// for(let i = 2014; i < 2050; i++){
//     let issunday = new Date(i,0,1).getDay()
//     if (issunday == 0){
//         console.log(`1st jan ${i} is sunday`)
//     }    
// }

//  8 Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
// let randonnum = Math.floor(Math.random()*10) + 1
// let user = Number (prompt('Enter Number'))
// if(user > randonnum){

//     console.log(`${user} is grater then ${randonnum}`)
// }else if(user < randonnum){
//     console.log(`${user} is lower then ${randonnum}`)

// }else{
//     console.log(`good work ${user} = ${randonnum}`)

// }


// const btn = document.querySelector("#btn")
// let x = 'jazib '
// let arr = x.split('')
// let h = arr.pop()
// arr.unshift(h)
// console.log(h)

// console.log(arr)
// setInterval(()=>{
//     let first = arr.pop()
//      arr.unshift(first)

//     btn.innerHTML = arr.join('')
// },100)



// Write a JavaScript program to calculate days left until next Christmas.




// const current = new Date(2023,11,25)
// console.log(current)

// Write a JavaScript program to calculate multiplication and division of two numbers (input from user). 
// const Multiply = document.querySelector('#Multiply')
// const Divide  = document.querySelector('#Divide')
// const input1  = document.querySelector("#input1")
// const input2  = document.querySelector("#input2")
// const output  = document.querySelector(".output")

// Multiply.addEventListener('click',()=>{
//     let inputone = input1.value
//     let inputtwo = input2.value

//  output.value = multiply(inputone,inputtwo)
//  input1.value = ""
// }
// )


// function multiply(a,b){
//     return a * b
// }
// function divided(a,b){
//   return a / b
// }



// 12. Write a JavaScript program to get the website URL (loading page)
// console.log(document.URL)

// console.log(window.location.href)
// Write a JavaScript exercise to create a variable using a user-defined name


// let x = 'jazib.html'

// let y = x.lastIndexOf('.')

// console.log( x.slice(y))

// 15. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.

// function diffrence(num){

//     if(num > 13){
//         let diff = num - 13
//         let abslute = diff * 2
//         return abslute
//     }else if (num < 13){ 
//         return diff = 13 - num
//     }
// }
// console.log(diffrence(11))

// 16. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
// function twointerger(a,b){
//     if(a === b){
//         let sum = a + b
//         return sum * 3
//     }else{
//         return sum = a + b
//     }

// }
// console.log(twointerger(2,3))


// 17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.


// function abslutediff(a){
//     if(19<a){
//         let diff = a - 19
//         return diff * 3
//     }else{
//         return 19 - a
//     }

// }
// console.log(abslutediff(19))


// 18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

// function num(a,b){
//     if( a == 50 || b == 50 || a + b == 50) return true
//     else{
//         return false
//     }



// }
// console.log(num(25,25))


// 19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

// function interger(a){
//   if( 20 <= a && 100>a) return true
// }
// console.log(interger(99))

// 20. Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.


// function position(a,b){
//    if( a<0 && b>0) return true
//    if( b<0 && a>0) return true
//    else{
//     return false
//    }
// }
// console.log(position(2,2))

// 21. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.



// function givenstr(str){
//     let lower = str.toLowerCase()

//     let x = lower.slice(0,2)
//     if(x == 'py') return str
//     else{
//         return `Py${str}`
//     }

// }
// console.log(givenstr('thon'))


// 22. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
// let x = 'jazib'
// let num = 2

// console.log(x.slice(0,num))
// console.log(x.slice(num + 1))


// function remove(str,num){
//     let newstr = str.slice(0,num) + str.slice(num + 1)
//     console.log(newstr)

// }
// remove('python',3)
// 23. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1



// function change(str){
//     let arr = str.split('')
//     let first = arr.shift()
//     let last = arr.pop()
//     arr.push(first)
//     arr.unshift(last)
//     console.log(arr.join(''))



// }
// change('ab')

// 25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7
// function multiple(num){
//   if(num % 3 == 0 || num % 7 == 0){
//     return true
//   }else{
//     return false
//   }
// }
// console.log(multiple(7))

// 26. Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.






// function str(str){
//     if(str.length < 3){
//         return false
//     }else{
//         let three = str.slice(-3)

//         console.log(three + str + three)
//     }

// }
// console.log(str('pi'))
// 27. Write a JavaScript program to check whether a string starts with 'Java' and false otherwise. 

// function isstringgjava(str){
//    let isjava = str.slice(0,4).toLowerCase()
//    if(isjava === 'java'){
//     return true
//    }else{
//     return false
//    }




// }

// console.log(isstringgjava('javascript'))

// 28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range. 

// const isgiven =  ( num ,num1) =>{
//     if(num > 50 && num < 99 || num1 > 50 && num1 < 99){
//         return true
//     }
// }
// console.log(isgiven(55,23))


// 29. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range.

// const isgiven =  ( num ,num1,num3) =>{
//     if(num > 50 && num < 99 || num1 > 50 && num1 < 99 ||  num3 > 50 && num3 < 99){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isgiven(5,23,5))


// 30. Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one. 




// const isSprit =(str)=>{
//     let isScript = str.slice(4,10).toLowerCase()
//     if(isScript == 'script'){
//         let y = str.slice(0,4)
//         let p = str.slice(10)
//         return y + p

//     }else{
//         return str
//     }

// }
// console.log(isSprit('javaascrpt'))


// 31. Write a JavaScript program to find the largest of three given integers.

// const largest = (num,num2,num3) =>{
//     if(num > num2 && num > num3) {
//         return num
//     }
//     else if(num2 > num && num2 > num3){
//           return num2
//     }
//     else if(num3 > num && num3 > num2){
//           return num3
//     }

// }

// console.log(largest(2,300,100))
// 
// 32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

// function bigger(n,n1){
//    if(n < 100 && n1 < 100){
//     if(n > n1){
//         return n
//     }else{
//         return n1
//     }
//    }else{
//     return false
//    }

// }
// console.log(bigger(101,22))
// 36. Write a JavaScript program to check whether the last digit of the three given positive integers is same


// const last = (n,n1,n2)=>{
//     let num1 = n.toString()
//     let num2 = n1.toString()
//     let num3 = n2.toString()
//     let c = num1.slice(-1)
//     let d = num2.slice(-1)
//     let s = num3.slice(-1)
//     if(c == d && c == s && s==d){
//         return true
//     }

// }
// console.log(last(222,3332,212))


// 37. Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.


// function upper(str){
//     if(str.length < 3){
//         return str.toUpperCase()
//     }else{
//         let newstr = str.slice(0,3).toLowerCase()
//         let oldstr = str.slice(3)
//        return newstr + oldstr
//     }

// }


// console.log(upper('ja'))


// 38. Write a JavaScript program to check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise. 


// Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.


// function num(a,b){
//     if(a+b > 50 && a+b < 80){
//         return 65
//     }else{
//         return 80
//     }

// }
// console.log(num(22,33))


// 40. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8


// function num(a,b){
//     if(a===8||b===8){
//         return true
//     }else if(a+b===8 || Math.abs(a - b)===8){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(num(2,10))

// 41. Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.
// function num(a,b,c){
//     if(a==b&&c==a&&c==b){
//         return 30
//     }else if (a==b || b==c ||c==a){
//         return 40
//     }else{
//         return 20
//     }


// }


// console.log(num(2,9,1))




// 42. Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode.

// function num(a,b,c){
//    if(a<b&&b<c){
//     return 'strick mode'
//    }else if(a<c && a>b){
//     return 'soft mode'
//    }
// }



// console.log(num(2,1,4))

// 43. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

// function num(a,b,c){
//     if(a%10==b%10||b%10==c%10||c%10==a%10){
//         return true
//     }
// } 



// console.log(num(12,23,11))

// 44. Write a JavaScript program to check from three given integers that whether a number is greater than or equal to 20 and less than one of the others.


// function num(a,b,c){
//     if((a>20&&a<b&&a<c) || (b>20&&b<a&&b<c) ||(c>20&&c<b&&c<a)){
//       return true
//     }else{
//         return false
//     }
// }
// console.log(num(23,23,10))

// 5. Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15.



// 46. Write a JavaScript program to check two given non-negative integers that whether one of the number (not both) is multiple of 7 or 11.

// function num(a,b){
//     if(a%7==0 || a%11==0 ){
//      return 'a'
//     }else if(b%7==0 || b%11==0){
//           return 'b'
//     }
// }


// console.log(num(14,21))

// 48. Write a JavaScript program to reverse a given string.

// let x = 'jazib'
// let arr = []
// let y= x.split('')


//     // let n = y.pop()
//     // arr.push(n)
//     // console.log(y)
//   let z=  y.reverse().join()


// console.log(z)
// 49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
// let str = 'jaz'
// console.log(str.charCodeAt(2))

// 50. Write a JavaScript program to capitalize the first letter of each word of a given string. 


// function upper(x){

//     let y = x.split(' ')
//     let result = []
//     for(let i in y ){

//        result.push(y[i][0].toUpperCase() + y[i].slice(1))
//     }


//     console.log(result.join(' '))
// }

// upper('Write a JavaScript program to capitalize the first letter of each word of a given string.')

// 51. Write a JavaScript program to convert a given number to hours and minutes.

// function num(x){

//     let hour = Math.floor(x/60)
//     let minut = x%60
//     console.log(hour +":"+ minut)
// }

// console.log(num(71))

// 52. Write a JavaScript program to convert the letters of a given string in alphabetical order.

// let x = 'jazib'
// let arr = x.split('')
// // console.log(arr)
// console.log(arr.sort().join(""))


// let x = '   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem deserunt fugiat dolore a assumenda distinctio consectetur ut, omnis itaque corrupti provident pariatur ab nulla eius eos velit animi ad commodi?'
// const str = document.querySelector('#btn')
// // str.innerHTML = 'h'\
// let i = 0
// function main(){
//   if(i < x.length){
//      str.innerHTML += x.charAt(i)
//      i++


//   }else{
//     i = 0
//     str.innerHTML = ""
//   }


// }
// setInterval(()=>{
// main()

// },90)

// Write a JavaScript program to capitalize the first letter of each word of a given string. 
// let x = 'jazib zaidjhjhb jhhbjb jhbhjbi'
// let newarr = []
// let arr = x.split(' ')
// for(let i in arr){

//     let x = arr[i][0].toUpperCase()
//     let y = (arr[i].slice(1))
//     newarr.push(x+y)
// }
// // console.log(arr.len)
// console.log(newarr.join(" "))
// 52. Write a JavaScript program to convert the letters of a given string in alphabetical order. 
// let x = 'jhbjBHBJBBjdddaasaaAiB'
// let l = x.toLowerCase()
// let y = l.split('')
// console.log(y.sort())
// console.log()

// 53. Write a JavaScript program to check whether the characters\ a and b are separated by exactly 3 places anywhere (at least once) in a given string.

// let x = "jzajhjb"

// 54. Write a JavaScript program to count the number of vowels in a given string.
//   let x = 'jaazib'
//   let num = 0
//   for(let i of x){
//     switch(i){
//      case "a" :
//         num ++
//       break;  
//       case "e" :
//         num ++
//       break;
//       case "i" :
//         num ++
//       break;
//       case "0" :
//         num ++
//       break;
//       case "u" :
//         num ++
//       break;
//     }

//   }

// console.log(num)
// 55. Write a JavaScript program to check whether a given string contains equal number of p's and t's.



// let x = 'apattppat'
// let p =0
// let  t = 0
// for(let i of x){
//     if(i=="p"){
//         p++
//     }else if(i=="t"){
//         t++
//     }
// }
// if(p==t){
//    console.log('true')
// }else{
//    console.log('false')

// }

// let x = 'jazib'
// let y = /a/g; 
// console.log()

// 57. Write a JavaScript program to create a new string of specified copies (positive number) of a given string

// let x = 'jazib'
// let num = -2


// if(num<0){
//     console.log(false)
// }else{
//     console.log(x.repeat(num))

// }


// 58 Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string. The length of the given string must be 3 and above.

// let x = '3.03'
// let newstr = x.slice(-3)

// console.log(newstr.repeat(4))


// 59. Write a JavaScript program to extract the first half of a string of even length. 
// 

// 60. Write a JavaScript program to create a new string without the first and last character of a given string.

// let str = 'jazib'
// console.log(str.slice(1,-1))



// 61. Write a JavaScript program to concatenate two strings except their first character.


// let x = 'jazib'
// let y = 'zaidi'
// console.log(x.slice(1,x.length) + y.slice(1,y.length))

// 62. Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.


// let x = 'jaib'

// if(x.length > 3){
//     console.log(x.slice(x.length -3) + x.slice(0,x.length-3))
// }


// 63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three.


// let x = 'HTML5'
// if(x.length % 2===1){
//    let y = Math.floor(x.length/3)
//    console.log(y)
//    console.log(x.slice(y,y+3))

// }


// 64. Write a JavaScript program to concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string.


// let x = 'jazib'
// let y = "mehandi"
// let p = x.length
// let f = y.length
// if(p > f){
//     let diff = p - f 
//     console.log(x.slice(diff) + y)
// }else if (f>p){
//     let diff = f - p 
//     console.log( x+ y.slice(diff) )
// }

// let min = Math.min(x.length , y.length)

// console.log(x.slice(2))
// console.log(x.slice(x.length - min)+y.slice(y.length-min))


// console.log(Math.max(21,3))


// 65. Write a JavaScript program to test whether a string end with "Script". The string length must be greater or equal to 6.


// let x = 'javasCript'
// let y = x.toLowerCase()
// console.log(y.slice(-6))
// if(x.length >= 6){
//    if(y.slice(-6) === 'script'){

//     console.log(true)
//    }
// }

// 66. Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

// let x = 'los york'

// if(x.slice(0,3)==="new" || x.slice(0,3)==="los" ){
//   console.log(x)
// }
// console.log(false)

// 67. Write a JavaScript program to create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P'. Return the original string if the condition is not satisfied

// let x = 'pythonp'
// let y = x.slice(0,1) == "p" 
// let z =  x.slice(-1) == "p"
// if(y&&z){
//     console.log(x.slice(1,-1))
// }else if(y){
//     console.log(x.slice(1))
// }else if(z){
//     console.log(x.slice(0,-1))
// }


// 68. Write a JavaScript program to create a new string using the first and last n characters from a given sting. The string length must be greater or equal to n.

// let x = 'jazibe'
// let n = 3
// console.log(x.slice(0,n)+x.slice(-n))

// 69. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3
// let x = [2,2,2]
// for(let i in x){
//     console.log(x[i])
// }
// 70. Write a JavaScript program to rotate the elements left of a given array of integers of length 3. 

// let x = [2,3,4]


// console.log(x[1],x[2],x[0])


// 71. Write a JavaScript program to check whether 1 appears in first or last position of a given array of integers. The array length must be greater or equal to 1.


// let arr = [2,3,4,5,61.,1,3]

// // console.log(arr[arr.length-1])
// if(arr[0] == 1 || arr[arr.length -1] == 1){
//     console.log(true)
// }


// 72. Write a JavaScript program to check whether the first and last elements are equal of a given array of integers length 3. 


// let x = [2,3,4,51,1]


// if(x[0] === x[x.length -1]){
//     console.log(true)
// }

// 73. Write a JavaScript program to reverse the elements of a given array of integers length 3.
// let arr = [1,2,3]
// if(arr.length == 3){
//     console.log(arr.reverse())
// }



// 74. Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.



// let arr = [1,2,3,4,5]
// let newarr = arr[0] > arr[arr.length -1] ? arr[0] : arr[arr.length -1]
// let x = []
// for(let i of arr){
//    x.push(newarr)
// }

// console.log(x)

// 75. Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3. 


// let x = [1,2,5,9,4,]
// let y = [4,9,6]
// let newarr= []
// if(x.length %2  != 0){
// let p = x[Math.floor(x.length/2)]
// let z = y[Math.floor(y.length/2)]
//     newarr.push(p,z)
// }


// console.log(newarr)

// 76. Write a JavaScript program to create a new array taking the first and last elements from a given array of integers and length must be greater or equal to 1. 

// let x = [1,2,3]
// let first = x[0]
// let last = x[x.length -1]
// let newarr = []
// newarr.push(first,last)

// console.log(newarr)

// 77. Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3.


// let arr = [1,2]
// if(arr[0]==1 || arr[arr.length -1]){
// console.log(true)

// }
// 78. Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3. 

// let arr = [8,3]
// if(arr[0] !== 1 && arr[arr.length -1] !== 3){
// console.log(true)

// }
// else{
//     console.log(false)
// }

// 79. Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2. 



// let arr = [23,32]
// if()

// 81. Write a JavaScript program to add two digits of a given positive integer of length two.

// let x = "23"
// console.log(x.indexOf(0))
// const form = document.querySelector('.form')
// const popup = document.querySelector('.data')
// const btn = document.querySelector('#btn')
// const input = document.querySelector('#input')
// const body = document.querySelector('.body')

// btn.addEventListener('click',()=>{
//     console.log(input.value.toUpperCase())
//     if(input.value == ''){
//         console.log('nothing')
//     }else{
//         form.innerHTML = ''
//         body.innerHTML = '<h1>welcoeeme</h1>'
//         setTimeout(()=>{
//          console.log('hi')
//          popup.innerHTML = `<h1>${input.value.toUpperCase()} are you ready to enjoy the amazing deels</h1>`
//         },5000)

//     }



// })

// 82. Write a JavaScript to add two positive integers without carry. 


// 83. Write a JavaScript to find the longest string from a given array of strings. 


// let x = ['aaaa','bbbb','dddddddd','ewewewe']

// let g = x.reduce((acc,cur)=>{
//     if(acc.length > cur.length){
//          return acc
//     }
//     else{
//         return cur
//     } 

// },0)
// console.log(g)
// let z = x.map((p)=>{
//         // console.log(p.length)
//     let y = x.filter((e)=>{
//         // console.log(e.length)
//         if(e.length>p.length){
//          return e
//         }

//  })
//  return y
// })

// console.log


// let arr = [1,2,3,4,5]
// let x = arr.reduce((a,b)=>{
//     console.log(b)
//    return a+b
// },0)

// let sum = []
// for(let i of arr){
//     sum.push(x-i)
// }
// console.log(sum)

// console.log(arr)


// let str = 'this is javascript'
// let result = str.split('').reverse().join('').split(' ').reverse().join(" ")
// console.log(result)


// function reverce(str){
//     return (str == "") ? "":reverce(str.substring(1)) + str.charAt(0) 
// }
// console.log(reverce('this is java'))
// 3303
// navigator.getBattery().then(function(battery){
//     const level = battery.level
//     const status = level * 100 +"%"
//     console.log(level)
// })

// const user = [
//     {
//         id:1,
//         name:'susan'
//     },
//     {
//         id:2,
//         name:'rihyan'
//     },
//     {
//         id:3,
//         name:'olivia'
//     },
//     {
//         id:4,
//         name:'nigga'
//     },
// ]
// let x = user.filter((e)=>{
//   if(e.id !== 1){
//     console.log(e)
//   }
// })

// if(5 !== 5){
//     console.log(true)
// }else{
//     console.log(false)

// }

// 141. Write a JavaScript program to find the number of elements which presents in both of the given arrays


// let arr1 = [1,2,3,4,5,6,9]
// let arr2 = [1,2,3,3,0,6,1]
// let max = 0
// for(let x = 0; x < arr1.length;x++){
//     for(let i = 0;i<arr2.length;i++){
//         if(arr1[x]===arr2[i]){
//             max++
//         }
//     }

//     console.log(x)
// }
// console.log(max)
// JavaScript program to swap two halves of a given array of integers of even length.
// let arr = [1,2,3,4,5,3]
// const evenarr=(f)=>{
//     if(f.length%2===0){
//         let length = f.length/2
//         let length1 = f.length/4
//             let x = f.slice(length1)
//             let y = f.slice(0,length1)
//             console.log(length1,length)
//             console.log(x,y)
//             return [...x,...y]

//         }else{
//             return false
//         }

// }
// console.log(evenarr([1,2,3,4,5,3,4,3,23,4,4,4]))

// let x = 'jazIb'
// let y =''
// for(let i in x){
//     if(x.charAt(i).toUpperCase){
//         console.log('hi')
//     }
//     // console.log(x.charAt(i).t)
// }
// const body = document.querySelector('.body')

// const x = ["apple", "banna", "mango"]
// let y = [{
//     name: "jazib",
//     fruits: ["apple", "banna", "mango"],
//     age: 23
// }, {
//     name: "rohit",
//     fruits: ["apple", "banna", "mango"],
//     age: 23
// }
// ]
// localStorage.setItem("mystorage", JSON.stringify(y))
// const mainstorage = JSON.parse(sessionStorage.getItem("mystorage"))
// console.log(mainstorage)

//    const g = mainstorage.map((e) => {
//        return `<h1>${e.name}</h1>
//        <ul> </ul>

//        `
//    }).join('')

//    body.innerHTML = g




// const btn = document.querySelector('#btn')
// const input = document.querySelector('#input')
// btn.addEventListener('click',()=>{
//     const obj = {name:input.value}
//     y =  [...y,obj]
//    console.log(y)

//    console.log(mainstorage)


// })

// /**
//  * @param {number} n
//  * @return {Function} counter
//  */
// var createCounter = function(n) {
// let arr = []  
//     return function() {
//         let x = n++
//         // console.log(x)
//        arr.push(x)


//     };

// };


// const counter = createCounter(10)
// counter() // 10
// counter() // 11
// counter() // 12

// Given a string s, find the length of the longest 
// substring
//  without repeating characters.


// let x = 121
// let y = x.toString()
// let g = y.split('').reverse().join('')
// if(y===g){
//     console.log(true)
// }else{
//     console.log(false)
// }


// let x = 1226
// let y = x.toString().split('')

// if(y.length < 5){
//     if(y[0]==="-"){
//         let operator = y.shift()
//         let reverce = y.reverse()
//         reverce.unshift(operator)
//         console.log(Number(reverce.join('')))

//         }else{
//             let reverce = y.reverse()
//         console.log(Number(reverce.join('')))

//         }
// }
// else{
//     console.log(false)
// }




// console.log(y.shift())



// let arr = ['jazib','zaidi']

// let arrpush = 'susan'
// console.log(arr.push(arrpush))
// console.log(arr.pop())
// console.log(arr.peek())

// let x = 'jazib'
// let y = []
// let p = ''

// for(let i of x){
//     y.push(i)

// }
// for(let e of x){
//   p += y.pop()
// }

// console.log(y)
// console.log(p)
// const menu = [
//     {
//       name: 'pancakes',
//       category: 'breakfast',
//     },
//     {
//       name: 'burger',
//       category: 'lunch',
//     },
//     {
//       name: 'steak',
//       category: 'dinner',
//     },
//     {
//       name: 'bacon',
//       category: 'breakfast',
//     },
//     {
//       name: 'eggs',
//       category: 'breakfast',
//     },
//     {
//       name: 'pasta',
//       category: 'dinner',
//     },
//     {
//       name: 'pasta',
//       category: 'pasta',
//     },
//   ];


// const btnmenu = new Set( menu.map((e)=>{
//     return e.category
// })
// )


// const allbtn = ['all',...btnmenu]
// console.log(allbtn)
// const staff = [
//     { name: 'bob', age: 20, position: 'developer', salary: 100 },
//     { name: 'peter', age: 25, position: 'designer', salary: 300 },
//     { name: 'susy', age: 30, position: 'the boss', salary: 400 },
//     { name: 'anna', age: 35, position: 'intern', salary: 10 },
//   ];

// const reducefn = staff.reduce((current,person)=>{
//     console.log(current)

//     current = person.salary + current
//      return current

// },0)
// console.log(reducefn)
// const cart = [
//     {
//       title: 'Samsung Galaxy S7',
//       price: 599.99,
//       amount: 1,
//     },
//     {
//       title: 'google pixel ',
//       price: 499.99,
//       amount: 2,
//     },
//     {
//       title: 'Xiaomi Redmi Note 2',
//       price: 699.99,
//       amount: 4,
//     },
//     {
//       title: 'Xiaomi Redmi Note 5',
//       price: 399.99,
//       amount: 3,
//     },
//   ]
// let {totalitem,price} = cart.reduce((total,item)=>{
//    const {price,amount} = item
//     // console.log(price)
//     total.totalitem += amount
//     total.price += item.amount * price

//     // console.log(total)


//   return total
// },{
//     totalitem:0,
//     price:0
// })

// price = Number(price.toFixed(2)) 

// console.log(price)

// const x = ['jazib','zaidi']
// const [first,second] = x

// console.log(first)


// let arr = []
// for(let i = 0 ; i < x.length ; i++){
//     if(x[i]+x[i+1]=== target){
//        arr = [i,i+1]
//     }else if(x[i]+x[i+2]=== target){
//         arr = [i,i+2]
//     }
//     console.log()
// }
// // console.log(y)
// console.log(arr)
// let x = [3,2,4,5]
// let target = 6


// const twoSum = (x, target) => {
//     let left = 0
//     let rigth = x.length - 1
//     while (left < rigth) {
//         console.log(left)
//         const sum = x[left] + x[rigth]
//         if (sum === target) {
//             return [left, rigth]
//         } else if (sum < target) {
//             left++
//         } else {
//             rigth--
//         }

//     }
// }

// var twoSum = function (nums, target) {
    // let left = 0
    // let rigth = nums.length - 1
    // while (left < rigth) {
    //     const sum = nums[left] + nums[rigth]
    //     if (sum === target) {
    //         return [left, rigth]
    //         break;
    //     } else if (sum < target) {
    //         left++
    //     } else {
    //         rigth--
    //     }

//     }

// }
// console.log(twoSum([1,2,3,4,5],4))
// console.log(handelfn(x,target))
// function twoSum(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;
//     while (left < right) {
//       const sum = nums[left] + nums[right];
//       if (sum === target) {
//         return [left, right];
//       } else if (sum < target) {
//         left++;
//       } else {
//         right--;
//       }
//     }
//     return null; // no solution found
//   }

// // example usage
// const nums = [2, 7, 11, 15];
// const target = 18;
// const result = twoSum(nums, target);
// console.log(result); // [0, 1]



// const user= {
//     name :'jazib',
//     age:12,
//     num:54,
//     isAwosam:true
// }

// function multiply(user){
//     for(let i in user){
//         if(typeof user[i] == "number"){
//             user[i] *= 2
//         }
//     }
// }
// multiply(user)
// console.log(user)

// const user = {
//     name:'jazib',
//     student:'rohan',
//     teacher:'mohan',
// }
// const stringfy = JSON.stringify(user,['name']) 
// console.log(stringfy)

// localStorage.setItem('key',stringfy)

// const y = localStorage.getItem('key')

// console.log(JSON.parse(y))
// console.log(JSON.parse(stringfy))
// const user ={
//     name :'jazob',
//     age:'12'

// }
// const x = user.find((e)=>{
   
//    return e 
  
// })

// let arr = ['a','b',['c',['=']],'s','l']

// console.log(arr.flat(7))

// let x = [1,2,3,2,3,4,5,4,5,6]
// console.log(x.sort((a,b)=>b-a))

// let x = [5,2,2,3,3,4,5,6,7]

// console.log(x)

// for(let i = 0 ; i < x.length ; i++){
//     if(x[i]==x[i+1]){
//         x.splice(i+1,1)
//     }
//   console.log(x[i])
// }

// console.log(x)

// let p = Array.from(new Set(x))
// console.log(p)

// function rotate(x,key){
//     let arr;
//     let p ;
//     for(let i =0; i<key;i++){
//        p = x.pop()
//        x.unshift(p)
//        arr = x
//     }
//    return arr

// }

// console.log(rotate(x,3))





// console.log(x.sort())
// const y = [...new Set(x)]
// const p = y.sort((a,b)=>a-b)
// console.log(p.length - 1)
// console.log(p.slice(-2 , -1))



// Add event listener to the button element
// document.getElementById("download-pdf").addEventListener("click", function() {
//     // Create a new jsPDF object
//     var doc = new jsPDF('d');
//     console.log('hi')
//     // Set the document properties
//     doc.setProperties({
//       title: "My PDF Document",
//       subject: "This is a sample PDF file",
//       author: "John Doe",
//       keywords: "PDF, sample, example"
//     });
    
//     // Add content to the PDF
//     doc.text("Hello, world!", 10, 10);
    
//     // Save the PDF file
//     doc.save("my-document.pdf");
//   });
  
// Write a JavaScript program to generate a random hexadecimal color code.
//#Source https://bit.ly/2neWfJ2 


// let x = 4343578999
// console.log('#'+ x.toString(16))
// const random_hex_color_code = () => {
//     let n = (Math.random() * 0xfffff * 1000000);
//     return n;
//   };
  

//   console.log(random_hex_color_code().toString(16))
// const num = 2
// const x = 'jazib'
// const p = x[num]
// console.log(p)
// const y = x.split('')
// console.log(y.pop)
// let arr = [1,2,3,4,5,6,7,8,9,0,1,2,3,5,6,8,3,4,6,7]
// let y = arr.length/2

// let x = 2
// console.log([...Array(x)])
// console.log([...Array(arr.length/2)])
// // {[...Array(phone.length/3)].map((e,i)=>{
// //     return <span key={i} >{i+1}</span>
// // })}
// Write a function that takes in an array of numbers and returns the sum of all even numbers in the array.


// function arr(x){
//     let p = 0 
// for(let i of x){
   
//     if(i%2==0){
//         p += i
//         // console.log(i)
//     }
    
 
   
// }
// return p
// }
// let x = [1,2,3,4,5,6,7,8]
// arr(x)
// console.log(arr(x))

// function arr(num){
//     let nums = num[0]
//     for(let i = 0;i<num.length;i++){
//         let x = 0
//         for(let j = i;j<num.length;j++){
//          x = x + num[j]
//          if(nums<x){
//             nums = x
//          }
        
//         }
//     }
//     return nums
// }

// console.log(arr([1,-2,3,45,6,7,8,9,10,11,12]))



// async function sleep(millis) {
//     await new Promise(resolve => setTimeout(resolve, millis));
//   }
// sleep(4)

// let x = 5
// let arr = [0,1]
// for(let i = 1; i<x;i++){
//     arr.push(i)
//     console.log(i)
// }
// console.log(arr)
//  const main = (n)=>{
//   const arr = []
//   arr.push(n++)

//     return function(){
//         console.log(arr)
//     }
//  }

// const increment = main(2)

// increment()
// increment()
// increment()
// let p = 12322
// p = p + "";
// console.log(typeof p)
// const y = p.split('')
// console.log(y.reverse().join(''))

// const fri = (arr,fn) =>{
    
//     return fn(arr)
// }

// let arr = [12,3,43,13]
// // let e = 4
// // function fn(arr){
// //     let afr = arr.filter((e)=>{
// //         if(e<23){
// //             return e
// //         }
// //     })
// //     return afr
// // }
// function fn(arr){
//    let x = []
//    for(let i of arr){
//      if(i<21){
//        x.push(i)
//      }
//    }
//     return x
// }
// // console.log(fn())

// console.log(fri(arr,fn))

// function customFilter(arr, fn) {
//     const filteredArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (fn(arr[i])) {
//         filteredArr.push(arr[i]);
//       }
//     }
//     return filteredArr;
//   }



// let arr = [21,2,1,23,32,43,24]
// function fn(x){
//     return x < 5
// }
// console.log(customFilter(arr,fn))

// var isValid = function(s) {
//     const arr = [1,2,3,2,3]
//     let i = 0
//     const par = '() [] {}'
//   while(i<s.length){
//     // arr.push(s[i])
//     i++,
//     let one  = arr[arr.length - 2];
//     let two  = arr[arr.length - 1];
//     let both = one + two
//    if(par.includes(both)){
//     console.log('hi')
// }
   

//   }
// };

// isValid('{} []')


const array = [9,3,2,1,2,3,4]
//     const arr = []
//     for(let i=0;i<array.length;i++){
//           if(array[i]>array[i+1]){
//              let temp = array[i]
//              array[i] = array[i+1]
//              array[i+1] = temp
//           }   
//     }

// console.log(array)

for(let i = 0;i<array.length -1 ;i++){
    console.log(i)
    for(let j = 0; j<array.length - i - 1;j++){
        if(array[j]<array[j+1]){
            console.log(j)
            let temp = array[j+1]
            array[j+1] = array[j]
            array[j] = temp
        }
    }
}
// for (let i = 0; i < arrayLength - 1; i++) {
//     for (let j = 0; j < arrayLength - i - 1; j++) {
//       if (myArray[j] > myArray[j + 1]) {
//         let temp = myArray[j];
//         myArray[j] = myArray[j + 1];
//         myArray[j + 1] = temp;
//       }
//     }
//   }

console.log(array)



