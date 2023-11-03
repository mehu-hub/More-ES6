// syntactic sugar
class Instructor {
    name;
    designation = 'web Course Instructor'
    team = 'Web Team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
        console.log(`Start the support session is: ${time}`)
    }
    createQuiz(module) {
        console.log(`Please create quiz for module ${module}`)
    }
}

const mehedi = new Instructor('Mehedi', 'Feni');
console.log(mehedi)
mehedi.startSupportSession('9.00');
mehedi.createQuiz(45); 
//----------------------------------------------
const hasan = new Instructor('Hasan', 'Comilla');
console.log(hasan)
hasan.startSupportSession('11.00');
hasan.createQuiz(23)
