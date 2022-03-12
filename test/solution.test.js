const expect = require("chai").expect;
const { findStudentByName } = require("/workspace/node/src/solution.js");


describe("findStudentByName", () => {
  it("should return the entire 'student' object", () => {
    const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];
    const actual = findStudentByName(students, "Natalee Vargas");
    const expected = { name: "Natalee Vargas", score: 9.2 }
    expect(actual).to.eql(expected);
  });
  
  it("should return null if the input is not present within the given dataset", () => {
    const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];
    const expected = null; 
    const actual = findStudentByName(students, "Terry Peters");
    expect(actual).to.equal(expected);
  });
});
