// 
// Question 1
//
const data = [{
    key: "a1",
    value: "first"
},{
    key: "a2",
    value: "second"
},{
    key: "a3",
    value: "third"
}];

let question1;

question1 = data.map(e => e.value);

console.log("Question 1 : ", question1);


// 
// Question 2
//

let question2Debut = new Date();
let question2Fin;

setTimeout(() => {
    question2Fin = new Date();
    console.log(`Question 2 :\t${question2Debut}\n\t\t${question2Fin}`);
}, 1000);



