//task 1
/*  
    დაწერეთ ფუნქცია რომელიც მიიღებს ორ რიცხვს და აღნიშნული ფუნქცია
    დააბრუნებს ამ ორი რიცხვის უდიდეს საერთო გამყოფს . 
    იგივე ფუნქცია დაწერეთ რეკურსიული ფუნცქიის გამოყენებით იპოვეთ უდიდესი საერთო გამყოფი 
    gcd(a,b)
    
*/
function gcd(n,m) {
    let x = n;
    let y = m;
    for(i = 1; i <= x && i<=y;i++){
        if(x%i == 0 && y%i == 0){
            var g=i;
        }
    }
    return g
}
console.log(gcd(30,9))

function gcd2 (n,m){
    if(m == 0){
        return n
    }
    else{return gcd2(m,n%m)}
}
console.log(gcd2(30,9))

/*
function gcd2 (30,9){
    if(m == 0){
        return n
    }
    else{return gcd2(9,30%9)}
     function gcd2 (9,3){
    if(m == 0){
        return n
    }
    else{return gcd2(3,9%3)}
    function gcd2 (3,0){
    if(m == 0){
        return n
    }
    else{return gcd2(0,3%0)}

*/ 

//Task 2 
/*
დაწერეთ ფუნქცია ციფრების ჯამი , sumOfDigits(n) რომელიც იღებს ერთ პარამეტრს 
და აბრუნებს გადაცემული მნიშვნელობის შემადგენელი ციფრების ჯამს . 
sumOfDigits(1312) = 1+3+1+2 = 7;

აღნიშნული დავალება შეასრულეთ ორნაირად , როგორც ჩვეულებრივი ასევე რეკურსიული
ფუნქციის გამოყენებით . 

*/
function sumOfDigits(n){
    if(n<10){
        return n
    }else{
        return n%10 + sumOfDigits(Math.floor(n/10))
    }
}
console.log(sumOfDigits(1312))

function sumOfDigits2(num){
    let sum = 0;
    while(num != 0){
        sum += num%10;
        num = Math.floor(num/10);
    }return sum
}
console.log(sumOfDigits2(1312))



//Task 3
/*
    გვაქვს factory ობიექტი , რომელსაც აქვს რამდენიმე key-value წყვილი , 
    ასევე მეთოდი calculateWorkload - აბრუნებს მხოლოდ თანამშრომლის შესრულებული სამუშაოების მასივს (მაგალითის მიხედვით [40,25,28,30,31])
    და formatArray - რომელსაც გადაეცემა თანამშრომლის სახელი და აბრუნებს  ობიექტს თანამშრომლის სახელი  და ხელშეკრულების ამოწურვამდე
    დარჩენილი დროის მნშვნელობებით. ხელშეკრულების პერიოდი ყველა თანამშრომლისთვის არის 5 წელი. 
    მაგალითად ('John' ის შემთხვევაში დაგვიბრუნდება {name : "John", timeLeft : 4}) timeleft = 5 - timespent;
    გვაქვს 
    დალოგეთ calculateWorkload და formatArray შედეგები; 
    !!!აუცილებლად გამოიყენეთ bind მეთოდი
*/
let factory = {
    facName : 'Volkswagen Wolfsburg Plant',
    calculateWorkload : function (){
        for(let i = 0; i < workloadData.employeeWeeklyWorkload.length; i++){
        console.log(this.employeeWeeklyWorkload[i].workload)
    }
    },
    formatArray : function (name) {
        let agreementDuration = 5
        if(name == 'John'){
        this.employees[0].timeLeft = agreementDuration - this.employees[0].timeSpent;
        console.log(this.employees[0])}
        else if(name == 'Sam'){
        this.employees[1].timeLeft = agreementDuration - this.employees[1].timeSpent;
        console.log(this.employees[1])}
        if(name == 'Maria'){
        this.employees[2].timeLeft = agreementDuration - this.employees[2].timeSpent;
        console.log(this.employees[2])}
        if(name == 'Dan'){
        this.employees[3].timeLeft = agreementDuration - this.employees[3].timeSpent;
        console.log(this.employees[3])}
        if(name == 'Lorelai'){
        this.employees[4].timeLeft = agreementDuration - this.employees[4].timeSpent;
        console.log(this.employees[4])}
}
}
let factoryEmployees = {
    employees : [{name : "John", timeSpent : 1 } , {name : "Sam", timeSpent : 3 },{name : "Maria", timeSpent : 2 },{name : "Dan", timeSpent : 4 },{name : "Lorelai", timeSpent : 5 }],
    employeeNum : 5,
}

let workloadData = {
    employeeWeeklyWorkload : [{name : "John", workload : 40 } , {name : "Sam", workload : 25 },{name : "Maria", workload : 28 },{name : "Dan", workload : 30 },{name : "Lorelai", workload : 31 }]
}
let result = factory.calculateWorkload.bind(workloadData)
let result2 = factory.formatArray.bind(factoryEmployees,'Lorelai')
result()
result2()

//Task 4

/*
დაწერეთ ფუნქცია sumOfNumbers , რომელიც დააბრუნებს გადაცემული არგუმენტების ჯამს
აღნიშნული ფუნქცია გაუშვით applyს საშუალებით, შესაბამისად არგუმენტებიც applyს მეშვეობით უნდა გადაცეთ.

hint :  თუ კი ფუნქციაში არ გვაქვს this ქივორდის საჭიროება და შესაბამისად ობიექტი რომელსაც
thisმა უნდა მიუთითოს შეგიძლიათ apply call-ს პირველი არგუმენტად გადასცეთ null 


*/
function sumOfNumbers(c,d){
    console.log(c + d)
}
let numbers = {
    a : 25,
    b : 30,
}
sumOfNumbers.apply(null,[22,98])
//Task 5
/*
დაწერეთ რეკურსიული ფუნქცია checkIfEven(n) . აბრუნებს გადაცემული მნიშვნელობა
არის თუ არა ლუწი . აუცილებლად გამოიყენეთ რეკურსია

*/
function checkIfEven(n){
    if(n%2 == 0){
        return 'this number is even'
    }else{
        return 'this number is odd'
    }
}
console.log(checkIfEven(25))