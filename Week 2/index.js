let testScore = 89;
let grade;
let collegeStudent = true;

if (testScore >= 90) {
    grade = 'A';
} else if (79 > testScore <= 89) {
    grade = 'B';
} else {
    if (collegeStudent) {
        grade = 'U'
    } else {
        grade = 'F'
    }
}

console.log(`You got the final grade of ${grade}`)



