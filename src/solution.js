/*
  Write a function that returns a particular student when given a name. If no name matches, return `null`.
*/

function findStudentByName(students, name) {
//   Guard clause to protect against invalid input
  if (!students || !name) return null;
//   Loop checks for the correct student name within the data set and returns the matching object
  const result = students.find((student) => {
    if (student.name === name) {
      return student;
    }
  });
//   Will return null if the input was valid, but could not be matched with any elements within the data set
  if (!result) return null;
  return result;
}

module.exports = { findStudentByName };
