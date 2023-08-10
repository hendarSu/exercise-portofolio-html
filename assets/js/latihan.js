
// const student = "jhon doe";

// printName = async (student) => {
//     console.log("Hai, " + student);
// }

// printName(student);

function student(name, gander, grade) {
    if (gander === "L") {
        name = "Mr "+ name;
    } else {
        name = "Mis "+ name;
    }
    console.log(name + grade);
}

student("Jhon doe", "L", 80);

// currying
function studentCurrying(name) {
    return function(gander) {
        (gander == "L") ? name = "Mr "+ name : name = "Mis "+ name;
        return function(grade) {
            return name + " " + grade; 
        }
    }
}

console.log(studentCurrying("Jhon doe")("L")(80));
