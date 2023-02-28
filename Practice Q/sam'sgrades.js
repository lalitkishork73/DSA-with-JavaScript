function gradingStudents(grades) {
    // Write your code here
    let i = 0;
    console.log(grades.length);
    while (i < grades.length) {
        const nearby = Math.ceil(grades[i] / 5)
        console.log(nearby);
        const roundofGrades = nearby * 5;
        console.log(roundofGrades, "one");

        if (grades[i] <= 37) {
            grades[i] = grades[i];
            console.log(grades[i])
            i++;
        }
        else if (roundofGrades - grades[i] < 3) {
            console.log(grades[i], "two")
            grades[i] = roundofGrades
            i++;
        }
        
    }

    console.log(grades);
    return grades;
}

   /*  for(let i=0; i<grades.length; i++) {
        const nearby = Math.ceil(grades[i] / 5)
        const roundofGrades = nearby * 5;

        if (grades[i] <= 37) {
            grades[i] = grades[i];
        }
        else if(roundofGrades - grades[i] < 3){
            grades[i] = roundofGrades
        }
    }
    return grades */



let arr = [37, 38]
console.log(gradingStudents(arr))