// NO1
// let person = {
//     age: 20,
//     hieght: 1.80,
//     wieght: 75,
//     nationality: "israeli",
//     bmi: function (){
//         return this.wieght / (this.hieght**2)
         
//     } 
// }


// console.log(person);
// console.log(person.age);
// console.log(person.bmi());


// no2
// const student = {
//     firstName: "Israel",
//     lastName: "Isralei",
//     tel: "123456789",
//     email: "israel@israaeli",
//     grades: [90, 76, 87, 88, 92, 87, 78]
// }
// console.log(student.firstName);
// console.log(student.lastName);
// console.log(student.tel);
// console.log(student.email);
// console.log(student.grades);


// no3
// const student = {
//     firstName: "Israel",
//     lastName: "Isralei",
//     tel: "123456789",
//     email: "israel@israaeli",
//     grades: [90, 76, 87, 88, 92, 87, 78],
//     fullName: function (){
//         return this.firstName+" "+this.lastName
//     },
// };
// console.log(student.fullName());

// NO4
// const student = {
//     firstName: "Israel",
//     lastName: "Isralei",
//     tel: "123456789",
//     email: "israel@israaeli",
//     grades: [90, 76, 87, 88, 92, 87, 78],
//     avg: function (){           
//         let sum=0
//         for ( i=0; i<this.grades.length; i++){
//             sum += this.grades[i];
//         }
//         return sum / this.grades.length
//     }
// }
// console.log(student.avg());

// NO5
// const student = {
//     firstName: "Israel",
//     lastName: "Isralei",
//     tel: "123456789",
//     email: "israel@israaeli",
//     grades: [90, 76, 87, 88, 92, 87, 78],
//     min: function (){
//         let min = this.grades[0]
//         for (let i = 0; i <this.grades.length; i++) {
//             if (min<=this.grades[i]){
//                 min=this.grades[1]
//             }            
//         }return min
//     }
// }
// console.log(student.min());