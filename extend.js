class TeamMember {
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }
}

class Instructor extends TeamMember{
    
    designation = 'web Course Instructor'
    team = 'Web Team' 
    constructor(name, location){
         super(name, location)
    }
    startSupportSession(time) {
        console.log(`Start the support session is: ${time}`)
    }
    createQuiz(module) {
        console.log(`Please create quiz for module ${module}`)
    } 
}
//-----------------------------------------------------------
class Developer extends TeamMember{ 
    tech;
    designation = 'Developer'
    team = 'Developer Team' 
    constructor(name, location, tech){
        super(name, location);
        this.tech = tech;
    }
    developFeature(feature) {
        console.log(`Please develop the Feature: ${feature}`)
    }
    release(version) {
        console.log(`Please create quiz for module ${version}`)
    } 
}
//-----------------------------------------------------------


const mehedi = new Developer('Mehedi Hasan', 'Feni, Bangladesh', 'React JS');
console.log(mehedi)
mehedi.provideFeedback()

const hasan = new Instructor('Hasan Vai', 'Dhaka');
console.log(hasan)
hasan.provideFeedback()