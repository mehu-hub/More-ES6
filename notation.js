const student = {
    name: 'Mehedi Hasan',
    age: 21,
    isGratuated: true,
    marks: {
        math: 78,
        english: 84,
        chemistry: 65
    },
};

const marks = student.marks;
const math = student.marks.math;

const chemisty = student['marks']['chemistry'];
const subject = 'math'
const subjectMarks = student.marks[subject];
console.log(subjectMarks)

