const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Abhijeet"
}
//course.courseInstructor      // long typing
const {courseInstructor : Instructor} = course     // faster way
console.log(Instructor);

const navbar = ({company}) => {      // destructuring of obj

}
navbar(company = "hitesh")

// {                      // syntax of JSON..
//     "name": "Hitesh",       // KEYS ALSO IN STRING
//     "coursename": "js in hindi",   // API Calling
//     "price" : "free"
// }

//API IN FORM OF ARRAY --
// [
//     {},
//     {},
//     {}
// ]
