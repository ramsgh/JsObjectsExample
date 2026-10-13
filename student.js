/**
 * D15 CONCEPT COVERAGE:
 * 1. Constructor Functions (Object Creation)
 * 2. Methods & `this` Keyword
 * 3. Object Destructuring & Nested Access
 */

// Constructor Function for Student Objects
function Student(id, name, age, course, grades = {}, contact = {}, isActive = true) {
  this.id = id;
  this.name = name;
  this.age = age;
  this.course = course;
  this.grades = grades;
  this.contact = contact;
  this.isActive = isActive;

  // Method demonstrating `this` keyword context
  this.calculateGPA = function() {
    const gradeValues = Object.values(this.grades); // D15: Object.values
    if (gradeValues.length === 0) return 0;
    const total = gradeValues.reduce((sum, score) => sum + score, 0);
    return Number((total / gradeValues.length).toFixed(2));
  };

  this.getSummary = function() {
    // D15: Nested Object Destructuring
    const { email, phone = 'N/A' } = this.contact;
    return `[${this.id}] ${this.name} (${this.course}) - GPA: ${this.calculateGPA()} | Contact: ${email}`;
  };
}

module.exports = Student;
