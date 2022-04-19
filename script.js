// let people = 2000  // тип данных число
// let str = "string" // тип данных строка 
// let bool = true // тип данных булиан 
// let n = undefined // тип данных undefined , пустота 
// let n2 = null // тип данных null , то что мы назвали дали имя null
// let obj = {} // тип данных обькт 
// let operators ="222"  - " 123"// конкатенация , в консоле выводит NaN , так как строки можно отнимать 

// people = people + 2
// people = people + 2
// people = people - 3

// console.log('город "грехов"')
// const a2 = 120

// 0
// ""
// false
// undefined
// null
// NaN /// все эти типы дают нам ложное значение 

// let number = 2
// console.log(!number) // оператор не 

// let number = 2
// if(number < 2){
//     console.log(1)
// }else{
//     console.log("больше")
// }

// let number = false
// if(!number){
//     console.log(1)
// }else{
//          console.log("больше")
//  }





// let age = 99
// if(age >= 1 && age <= 10){
//     console.log("Ребенок")
// }else if(age >= 11 && age <= 20){
//     console.log('Подросток')
// }else if( age >= 21 && age <=45 ){
//     console.log('Взрослый')
// }else if(age >= 46 && age <=90 ){
//     console.log("Пожилой")
// }else{
//     console.log("Мертв")
// }
// let age = 20
// switch(age){
//     case 15:
//         console.log('Ему 15')
//     break;
//     case 20:
//         console.log('Ему 20')
//     break;
//     default:
//         console.log("Не подходит")    
//     break;
// }

// let age =19
// // условие ? если true : если false
// (age>20)
// ? console.log("больше")
//  : console.log("меньше")

// let age =20
// let user = age > 19 ? "User": "Young user"
// console.log(user)

// let age = 30
// console.log(age>20 ? "user" : "young user")// Тернарное выражение 


// console.log(null || 2 || undefined)
// console.log( 1 && 0 && 2 )

// console.log(null || 2 && 3 || 4)

// let age = input || 20
// let text = message || ""

// && - И
// || - ИЛИ, ВОЗВРАЩАЕТ ПЕРВОЕ ПРАВДИВОЕ 
// ?? - ОПЕРАТОР НУЛЕВОЕ СЛИЯНИЕ 


// ВЫ НЕ ЗНАЕТЕ JS КНИГА 


// ДЗ



// let login=""
// console.log(login=="Сотрудник"? "привет": login == "Директор"? "Здраствуйте" :  "Нет логина")


// object

// let obj ={
//     key:"value",
//     num:12,
//     v: null,
// }
// obj.key ="value2" // поиеняли значение, переприсваивается
// obj.key2 = "newvalue"
// delete obj.key2
// console.log(obj);

// let product ={
//     size:"xl",
//     price: 3000,
//     count:2,
//     owner:{
//         name : "Altynai",
//         surname:" Nurbekova",
//         employee: {

//         }
//     },
//     owner2:user
// }
// console.log(product)

// let user2 ={
//     name:"a"
// }

// let user3 ={
//     name:"a"
// }
// console.log(user2===user3)

// let obj ={
//     "string":12,
//     2: "value"

// }
// console.log(obj ["string"])

// Massive

// let array =[
// "value1",
// "value2",
// "value3",
//  2,
//  undefined,
//  null,
// {name:"atanai"}
// ]
// array[0]="not value" // поменяли на новое значение 
// console.log(array)

// МЕТОДЫ ОБЬЕКТОВ 

// let styles= [ "Джаз" , "Блюз"] // создали 2 массива 
// styles.push("Рок-н-рол") // добавление в конец массива 
// styles[1]="Классика" // заменили значение с Блюз на Классика
// styles.shift() // удаление одного элемента с начала 
// styles.unshift("Рэп", "Регги") // добавление в начало массив 

// console.log(styles)// вывели это все через console
  
// let array =[0,1,-2,3,-4,-5]
// array.forEach((item)=>{
//     if(item> 0){
//         console.log(item)
//     }

// })
// let array2=[]
// let array =[0, 2,4, 5 ,-1,6]
// array.forEach((item)=>{
//     if(item>0){
//         return array2.push(item)
//     }
// })
// console.log(array2)
// let i =0
// while (i<5){
//     console.log(i);
//     i++
// }
// console.log("kones sikla")

// for (let j = -5; j<=10;j++){
//     if(j==0){
//         break;
//     }
//     console.log( 'j:'  +j);
// }
// let numbers = [5, 6, 7]
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }

// let numbers=[]
// for (let i=0; i<5;i++){
//     numbers[i]="wenc"
// }
// console.log(numbers)

// let numbers = [3, 5, 7]
// let sum = 0
// for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i]
// }
// console.log( sum )
// let sample=[1,2,3]
// let mapped = sample.map(item => item * 10)
// console.log(mapped);

// task2
//  let array =[1, 5, -8, 13, 0, 111, -88, -1]
//  let result=0
//   array.forEach((item)=>{
//     if(item< 0){
//         result+=1
//      }
//     })
//     console.log(result)
 //task1
// let array =[1, 5, -8, 13, 0, 111, -88, -1]
// result=0
// array.forEach((item)=>{
// if(item>0){
//   result=result+item
// }
// })
// console.log(result)
// task2
// let array =[1, 5, -8, 13, 0, 111, -88, -1]
// let array2=[]
//  array.forEach((item)=>{
// if(item<0){
//  array2.push(item)
//  }

// })
// console.log(array2.length)


// let array =[1,2,3,4,5]
// function func(){
//     console.log(array.length)
//     return 1
// }
// func()

// let array =[1,2,3,4,5]
// function func(){
//     console.log(array.length)
//     return 1
// }
// let result=func()
// console.log(result)

// function declaration

// function sum(a){
//     let result =0 
//     a.forEach((item)=>{
//          if(item<0){
//         result=result+1
// }
// })
// console.log(result)
// }
// sum([12,3,4,-6,8,-10,-2])
// sum([12,3,4,-6,8,-10,-2 ,-7])

// function expression
   // let func = function(){
   //     console.log(1)
   // }

// function declaration 
   // function func2(){

   // }
 
 // arrow function 
    // let func=()=>{
   //     console.log(1)
   // }

//    function min (a,b){
//        if (a<b){
//            return a
//        }else{
//            return b 
//        }
//    }

//    console.log(min(1,1)==1)



// function pow (x,n){
//   return x**n

//    }
// console.log(pow(3,2))

// циклы
// let i =0
// while(true){
//     console.log(i)
//     i++// инкремент 
//     if(i>1000){
//         break// остановка цикла 
//     }
// }
  

//  function pow (x,n){
//      let i=1
//      let result=x
//  while(i<n){
//      result=result*x
//      i++
//  }
// return result
//     }
//  console.log(pow(2,5))

// let correctYear = 2020
// const birthday=2001
// // console.log(correctYear-birthday)
// console.log(++ correctYear)
// console.log(--correctYear)

// const cars=['porshe', 'masda', 'mersedes', 'ford']
// for(let i=0; i<cars.length;i++){
//    const car=cars[i]
//    console.log(car)
// }



// let num = 5===5
// if(typeof num === "string"){
//    console.log("stroka")
// }else if(typeof num === "number"){
//    console.log("chislo")
// }else if(typeof num === "boolean"){
//    console.log("boolean")
// }

// console.log(array2)
//  let i =0
//  while (i<5){
//      console.log(i);
//      i++
// }
// console.log("kones sikla")

// let i =0
// while (i<5){
//     console.log(i);
//     i++
// }

//  function pow (x){
//  let i = 1 
//    while( i<= x){
//       console.log(i + " barashek")
//       i++
//    }
// }
// pow(10)


// function pow(x, n) {
//    return (n == 1) ? x : (x * pow(x, n - 1));
//  }
//  console.log(pow(2,3))
 
// function num(n){
//    let m=[]
   
//    for(let i =0;i <n;i++){
//       m.push(i)
      
// }
// console.log(m);
// }
// num(10)

// let arr = [1,5,6,2,3,7,9]
// let min = Math.min(...arr)
// let max = Math.max(...arr)
// console.log(min,max);

// function num (a,b){
//    let array = []
//    for (let i = a; i <b; i++ ){
//         if ( i % 2 === 0){
//                 array.push(i)
//         }
//    }
//    console.log(array)
// }
// num(41,80)

// function num(som){
//   let dollars = 95
//   let result= som / dollars
//   console.log(result.toFixed(2))
// // }
// // num(20000)

// function second(arr){
//    let min =arr[0]
//    let max =arr[0]
//    arr.forEach((item) => {
//       if(item<min){
//          min=item
//       }else if(item>max){
//          max=item
//       }
//    });
//    console.log(min,max)
// }
// let num=[2,3,6,78,12,1]
// second(num) 

// let arr =[123,111,-1,123,4354,112,777]
// let arr2 =arr.map((item)=>{
//    return item/2
// })
// console.log(arr2)// выводит копию 
// console.log(arr)


// function pow(n){
//    let result=[]
//    for(let i=1; i<n;i++){
// result.push(i)
//    }
//    console.log(result)
// }

// pow(10)

// function num (a){
//    let min = arr[0]
//    let max = arr[0]
//    arr.forEach((item)=>{
//       if(item<min){
//          min=item
//       }else if(item>max){
//          max=item
//       }
//    })
// console.log(min,max)
// }
// let arr = [15,26,-8,261,21]
// num(arr)

// let arr = [1,5,6,2,4,79,9]
// let min = Math.min(...arr)
// let max = Math.max(...arr)
// console.log(min,max);

// function num(som){
//    let dollars=95
//    let result=som/dollars
//    console.log(result.toFixed(2));
// }
// num(30000)

// let user ={
//    name: "fkdfn",
//    username:"hhb",
//    walk:()=>{
// console.log("я хожу")
//    },
//    sayName:()=>{
//       console.log(this.name)
//    }
// }


// let array2=[]
// let array =[0, 2,4, 5 ,-1,6,-3,-4]
// array.filter((item)=>{
//     if(item>0){
//         return array2.push(item)
//     }
// })
// console.log(array2)

// const languages=["Java", "TypeScript","C#","JavaScript","Julia"]
// const jLanguages=languages.filter(function(languages){
//    return languages.startsWith("J")
// })
// console.log(jLanguages)
// let sum = 0
// let nums =["123","121","111","75"]
// let sum2 =nums.reduce((sum,item)=>{
//    return sum + item
// },0)
// console.log(sum)

// nums.sort((a,b)=>{
//    return b-a // по убыванию
//    return a-b // по возрастанию
// })

// let array=[20,30,40]
// let result=array.map(item => item*2)
// console.log(result);// Метод map позволяет нам создать новый массив 
// //который будет получен на основе какого-то существующего,
//  //задача map перебрать каждый элемент исходного массива.
//  // Метод map это метод который  перебирает массив и создает новый массив 

//  let array2=["Karina","Lida","Beka","Altyshka"]
// let result2=array2.map(elem=>elem.length)
// console.log(array2);
// console.log(result2);

// let array=[40,20,80,35,15,6,28,77,64]
// let result=array.filter(item=>item<40)
// console.log(result);// метод filter позволяет фильтровать по каким то условиям.

// let array2=["Karina","Lida","Beka","Altyshka"]
// let result2=array2.filter(item=> item.length < 5)
// console.log(result2);

// .map() перебирает исходный массив и создает новый 
// с таким же количеством элементов 
// внутри метода map записывается стрелочная функция 

// .filter() перебирает исходный массив и возвращает новый 
// массив с элементами которые подходят по условию.

// методы map и filter можно применять друг за другом 

// let users =[
//    { id:1, name:"karina", age:24},
//    { id:2, name:"lida", age:20},
//    { id:3, name:"beka", age:21}
// ]
// let user=users.find(item=>item.id===1)
// console.log(user.age);

// let users = [
//    {id: 1, name: "Вася"},
//    {id: 2, name: "Петя"},
//    {id: 3, name: "Маша"}
//  ];
 
//  // возвращает массив, состоящий из двух первых пользователей
//  let someUsers = users.filter(item => item.id < 3);
 
//  console.log(someUsers.length); // 2

// function logPerson (s,name,age){
//    console.log(s,name,age);
//    return `${s[0]} ${name} ${s[1]} ${age} ${s[2]}`
// }
// const persoName = "Altynai"
// const personAge=20
// const output=logPerson`имя: ${persoName}, возраст: ${personAge}!`
// console.log(output);

// great=(name)=>{
//    console.log("hello -", name);
// }
// great("lena")

// let counter=0
// setInterval(function(){
// console.log(++counter);
// },1000)

// let counter=0
// let interval=setInterval(function(){
// if(counter===5){
//    clearInterval(interval)
// }else {
//    console.log(++counter);
// }
// },1000)
// const task1 = (array)=>{
//    return array.filter((elem,idx) =>array.indexOf(elem)===idx)
// }
// console.log(task1([22,55,12,33,55]));
// замыкание способ доступ к чтению 

// let num =2 
// function pow (a,b){
//    let i = 1
//    let res = a
//    while(i<b){
//       res = res*a
//       i++
//    }
//    console.log(res);
// }
// pow(3,3)

// function pow(a,b){
//    let res =a 
//    for(let i=1; i<b;i++){
//       res =res*a
//    }
//    console.log(res)
// }

// const firstName = {A: 'Alpha', B: 'Beta', C: 'Cache'}
// function getAlias(name){
//    let firstLetter = name.slice(0,1)
//    console.log(firstName[firstLetter]);
// }
// getAlias("Amantur")


// let users = [
//    {id: 1, name: "Вася"},
//    {id: 2, name: "Петя"},
//    {id: 3, name: "Маша"}
//  ];






 
//  // возвращает массив, состоящий из двух первых пользователей
//  let someUsers = users.filter(item => item.id < 3);


// var getConcatenation = function (nums){
//    let length = nums.length

//    for(let i = 0; i<length; i++){
//       nums.push(nums[i])
// }

//  return nums

// }
// console.log(getConcatenation([0,9,54,14])); 

// var maximumWealth = function (accounts) {
// let maxSum = 0
//    for(let i = 0; i < accounts.length; i++){
//     let array = accounts[i]
//     let sum = array.reduce((acc,item)=>{
//        return acc+=item
      
//     },0)
   
//    if(sum > maxSum){
//       maxSum = sum
//    } 
//    }
//    console.log(maxSum)
    
// };

// maximumWealth([[12,32,3],[1,2,3],[0,55,10]]) 





//  let maximumWealth =[[12,32,3],[1,2,3],[0,55,10]]
//    let Maxsum = 0
//    for(let i = 0; i < maximumWealth.length; i++){
//       let array  = maximumWealth[i] 
//       let sum = array.reduce((acc,item) =>{
//         return acc += item
         
//       },0)
//       if(sum > Maxsum){
//       Maxsum = sum
//       }

//    } 
//    console.log(Maxsum);

// const abc =["a","b","c","d"]
// const modifind = abc.map((item)=>{
//    return {value:item }
// })

// console.log(modifind);
// let modifind=[]
// abc.forEach((item)=>{
//    modifind.push(item+"1")
// })
// console.log(modifind);

// let arr = ["23", "56","11","99"]
// // reduce когда хотим получить итоговые значения 
// arr.reduce((tot,item)=>{
// return tot + item
// },"")
// console.log(arr);

// const users =[
//    {id:"1",name:"atanai"},
//    {id:"2",name:"beka"},
//    {id:"3",name:"lida"},
// ]
// const usernameByld = users.reduce ((result,user)=>{
// return{
//    ...result,
//    [user.id]: user.name,
// }
// },{})
// console.log(usernameByld);



// function palindrome(num) {
   
//        var tmp = num, res = 0, dig;
   
//        while (tmp) {
   
//            dig = tmp % 10;
   
//            res = res * 10 + dig;
   
//            tmp = (tmp - dig) / 10;
   
//        }
   
//        return res == num;
   
//    }
   
//    console.log(palindrome(123321));

   // var isPalindrome = function(x){
   // return x.toString()=== x.toString().split("").reverse().join("")
   // };
  
//    var plusOne = function(digits) {
//       return Array.from((BigInt(digits.join('')) + BigInt(1)).toString())
//   };
//   console.log( plusOne([4,3,2,1]));

// var singleNumber = function(nums) {
//    return nums.filter(el => nums.indexOf(el) === nums.lastIndexOf(el))[0]
// };
// console.log(singleNumber([6,2,2,1,1,]));

     
 
   //    let lengthOfLastWord = function(s) {
   //       const arr = s.trim().split(' '); 
         
   //       return arr.at(-1).trim().length; 
   //   };

   //   console.log(lengthOfLastWord("altynai nurbekova"));




   // let mostWordsFound = function(sentences){
   //    let max =0
   //    let temp =0
   //    for (let i=0;i<sentences.length;i++){
   //       temp = sentences[i].split(" ").length;
   //       if(temp>max){
   //          max=temp
   //       }
   //    }
   //    console.log(max);
   // }
   // mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])

   // var restoreString =function(s,indices){
   //    let array = new Array(indices.length)
   //    for (let i =0;i<indices.length;i++){
   //       let index = indices[i]
   //       array[index]=s[i]
   //    }
   //    return array.join("codeleet")
   // }
  
   // const task12 =(array)=>{
   //    let name1= array[1][0] + array[0].slice(1)
   //    let name2= array[0][0] + array[1].slice(1)
   //    return [name1, name2]
   // }
   //  console.log(task12(["Миша", "Коля"]));

   // let array= [1,5,6,1]
   // let sum = array.reduce((acc,item) => acc + item,0)
   // console.log(sum);

//   const task2 = (array)=>{
//      return array.reduce((acc,item)=>{
//      if(item%2===0){
//         return acc+item
//      }
//      return acc
//      },0)
          
//   }
//    console.log(task2([3,12,314,2,13,20,9]));

//   const task2 = (array)=>{
//      return array.reduce((acc,item)=>{
//      if(item>10){
//         return acc+item
//      }
//      return acc
     
//      },0)
          
//   }
//    console.log(task2([3,12,314,2,13,20,9]));

// const task2 = (array)=>{
//    return array.reduce((acc,item)=>{
//       return acc+item.length
//    },0)
        
// }
//  console.log(task2(["lida","karina","beka","altyshka"]));
   

// const task2 = (array)=>{
//       return array.reduce((acc,item)=>acc+item.length ,0)
//    }
//     console.log(task2(["lida","karina","beka","altyshka"]));


// function Car(brand,color){
//    this.brand=brand
//    this.color=color
// }
// Car.prototype.start=function(){
//    console.log(`${this.brand}-start!`);
// }
// Car.prototype.start =function(){
//    console.log(`${this.brand}-${this.color}-start!`);
// }
// Car.prototype.stop =function(){
//    console.log(`${this.brand}-${this.color}-STOP!`);
// }
// const tesla =new Car("Tesla", "silver")
// const nissan =new Car("Nissan", "red")
// console.log(nissan.stop());

// class Car {
//    constructor(brand,color){
//       this.brand=brand
//       this.color=color
//    }
//  start(){
//    console.log(`${this.brand}-${this.color}-start!`)
//  }
//  stop(){
//    console.log(`${this.brand}-${this.color}-STOP!`)
//  }
//  static discount (){
//     console.log("Общая скидка 10%");
//  }
// }
// const tesla =new Car("Tesla", "silver")
// const nissan =new Car("Nissan", "red")
// console.log(Car.discount());

// class Car {
//    constructor(brand){
//       this.brand=brand
//       this.gesTank= 100
//       this.zapravka =[]
//    }
//    getGas(){
//       this.gesTank+=10
//       const stamp = Date.now()
//       const time = new Date(stamp)
//       this.zapravka.push(time.toString())
//       return this.gesTank
//    }
//    drive (){
//       this.gesTank -= 10
//       return this.gesTank
//    }
// }
// class HybridCar extends Car{
//    constructor(brand,model){
//       super(brand)
//       this.model=model
//    }
//    autoPark(){
//       console.log("Автопарковка!");
//    }
// }
// class Camry70 extends Car{
//    constructor(brand, year, marka){
//       super(brand)
//       this.year=year
//       this.marka=marka
//    }
//    speed(){
//       console.log("200 км в час");
//    }
// }
// const camry70 =new Camry70 ("Camry", "2022", "Toyota")
// const lexus =new HybridCar("Lexus","RX")
// const nissan =new Car("Nissan")
// console.log(camry70.getGas());

// const task1=(array)=>{
//  return array.reduce((acc,item)=> acc+item.length, 0)
// }
// console.log(task1(["lida","beka"]));

// const task1=(array)=>{
//    return array.map(item =>item.toUpperCase()) 
//   }
//   console.log(task1(["lida","beka"]));


// var singleNumber=function(nums){
//    const map ={}
//    nums.forEach((item) => {
//     if (!map[item]){
//        map[item]=0
//     }
//     map[item]++
//    })
//       for (let item in map){
//          if (map[item]===1) return item
//       }
// };
// console.log( singleNumber([2,3,4,2,3,]));

// var kidsWithCandies = function(candies,extraCandies){
//    []
//    return candies.map(item =>{
//       return item + extraCandies>=Math.max(4,2,1,1,2)
//    })
// }

//    var plusOne = function(digits) {
//       return Array.from((BigInt(digits.join('')) + BigInt(1)).toString())
//   };
//   console.log( plusOne([4,3,2,1]));


   //  var plusOne = function(digits){
   //     let joinedNum = digits.join("")
   //     let num = BigInt(joinedNum)
   //     return String(++num).split
   //  };

   // const arr =[0,2,3,4,4]
   //  let [first,second,...restArr]=arr
   //  console.log(first,second,restArr);

   // const task1 =(array)=>{
   //    return array.map((item,idx)=>{
   //       if(idx%2===0){
   //          return item.toUpperCase()
   //       }
   //       return item 
   //    })
   
   // }
   //   console.log(task1(["lida","beka","karina","amanda"]));
 
  
   // let message ="уже есть сообщение" 
   // message ||= "Какое то сообщение"// присвивает значение если massage == falsy
   // message &&= "Какое то сообщение" // присвивает значение если massage == true
   // console.log(message);

   // let str ="abbcdd"
   // console.log(str.replaceAll("b","Б"));// работает только со строками, меняет букву или слово на новое значение,если просто replace то он меняет одну букву

   // let m = 1_000_000_000//_ знаки игнорируются, удобство для чтение больших чисел
   // console.log(m);

   // function somefunc(...args){
   //    console.log(args);
   // }
   // somefunc("1","abc","123",999,falsy,10000000,"aaaaa");

   // function somefunc(
   // name = "aika",
   // age =21,
   // walk = function(){console.log("im walking")}
   // ){// параметры по умолчанию 
   //  console.log(name);
   //  walk()
   // }
   // somefunc()

   // setTimeout(()=>{
   //  console.log("proshlo 5 sekund");
   // },5000) // глобальный метод в js, выполняется один раз.

   // setInterval(function(){
   //  console.log("ptoshlo 2 sek");
   // },2000)

   // let i =0 
   // const firsInterval =setInterval(function(){
   //    console.log("ptoshlo 2 sek")
   //    i++
   //    if (i>3){
   //       clearInterval(firsInterval)
   //       //  clearInterval (айди интервала) чтобы остановиить интервал
   //    }
   // },2000)

   // // Javascript - однопоточный синхронный язык 
   //  let user ={}
    // Синхронность , выполняется сразу при получения кода 
   // function somefunc(){
      // не ждет 
   //    console.log(1);
   // }
   // let number=1000
   // somefunc()

   // Асинхронность 
   // setTimeout(()=>{
      //ждет от какого то кода , занимает некоторое время 
   //    console.log(1);
   // },3000)

   // Промисы 

   // let someAcynsValue= new Promise((resolve,reject)=>{
   //    let isfinished =false
   //   if (isfinished){
   //      resolve(1)
   //   }else{
   //      reject("потому что isfinished не положительное значение")
   //   }
   // })

   // someAcynsValue.then((data)=>{// then игнорируется при не успешном запросе 
   // console.log(" выполнится успешно", data);
   // }).catch((err)=>{// catch игнорируется при  успешном запросе 
   //    console.log(" выполнится не  успешно", err );
   // })

   
//    function basicOp(operation, value1, value2){
//       if (operation === '+'){
//          return value1+value2
//       }else if(operation === '-'){
//          return value1-value2
//       }else if(operation==='*'){
//          return value1*value2
//       }else if (operation==='/'){
//          return(value1/value2)
//       }
     
//    }
//   console.log( basicOp('+', 4, 7));
//   console.log( basicOp('-', 15, 18));
//   console.log( basicOp('*', 15, 18));
//   console.log( basicOp('/', 15, 18));

     
// function printArray(array){
//   return array.toString()
//  }
//  console.log(printArray(["h","o","l","a"]));

// function car (days){
// if (days>=1&days<=3){
//    return days*40
// }if (days>=3 && days<=6){
//    return days*40-20
// }if (days>=7){
//    return days*40-50
// }
  
// }
// console.log(car(5))

// function somefunc(array){
// return array.split(",").slice(1,-1).join(" ") || null
// }
// console.log(somefunc("1,2,3,4")); 


// async function somefunc(){
// const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
// const data = res.json()
// console.log('async await ',data);

// }
// const wait =(seconds)=>{
//    return new Promise((res)=>{
//       setTimeout(()=>{
//          res("какое то сообщение ")
//       }, seconds*1000)
//    })
// }
// async function someAcynsFunction(){
//    console.log("началось ожидание");
//    const res = await wait(3)//await пишется до функции которую должны ожидать 
//    //Ожидание 3 секунды , ничего не выполняется 
//    // Через 3 секунды выполняется следующий код 

//    //await работает только с промисвми 
//    // Три точки под await означает что никакого эффекта она не даст 
//    console.log("прошло какое то время и мы получили сообщкние:"+res);
//    await setTimeout(()=>{},1000)
// }
// someAcynsFunction()



// const wait =(operation)=>{
//    return new Promise((res)=>{
//       setTimeout(()=>{
//          res(operation)
//       },3000)
//    })
// }

// const getSomeCalculation = async ()=>{
//    console.log("просто сообщение которое означает что функция началась");
//    let fortyFive = 45 
//    console.log("второе сообщение");
//    let getSumOfVar = fortyFive+100
//    console.log("мы получили "+getSumOfVar);
//    // типа очень сложная операция, которая занимает 3 секудны 
//    const result=  await wait (155+getSumOfVar)
//    console.log("наше вычисление ="+result);
// }
// getSomeCalculation()

