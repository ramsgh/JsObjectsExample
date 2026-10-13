/**
 * D15 CONCEPT COVERAGE:
 * 1. Object Literal Creation
 * 2. Accessing Properties (Dot & Bracket Notation)
 * 3. Object Static Methods: keys(), values(), entries(), assign(), freeze()
 * 4. Spread Operator (...) for Objects
 * 5. Destructuring Objects (Simple, Aliased, Default Values, Nested)
 * 6. JSON: parse() and stringify()
 * 7. Operations: Add, Search, Filter, Sort
 */

const Student = require('./student');

// Object Literal Configuration (Frozen system settings)
const SYSTEM_CONFIG = Object.freeze({ // D15: Object.freeze
  appName: 'DevMetrics Student Portal',
  version: '1.0.0',
  maxGradeLimit: 100,
  minPassingGPA: 75.0
});

class StudentManagementSystem {
  constructor() {
    this.students = [];
  }

  // Load dataset from JSON string (D15: JSON.parse)
  loadFromJSON(jsonString) {
    try {
      const parsedData = JSON.parse(jsonString); // D15: JSON.parse
      this.students = parsedData.map(s => {
        // Constructing Student instance from parsed raw object
        return new Student(s.id, s.name, s.age, s.course, s.grades, s.contact, s.isActive);
      });
      console.log(`✅ Loaded ${this.students.length} students into system from JSON.`);
    } catch (err) {
      console.error('❌ Failed to parse student JSON data:', err.message);
    }
  }

  // Save/Export system dataset to JSON string (D15: JSON.stringify)
  exportToJSON(pretty = true) {
    // D15: JSON.stringify with indent formatting
    return JSON.stringify(this.students, null, pretty ? 2 : 0);
  }

  // Add new student using Object.assign and Spread operator
  addStudent(studentData) {
    const defaultContact = { email: 'unassigned@domain.com', phone: '000-000-0000' };

    // D15: Object.assign & Object Spread Operator (...)
    const mergedContact = Object.assign({}, defaultContact, studentData.contact);
    const completeData = {
      id: `STU-${100 + this.students.length + 1}`,
      isActive: true,
      ...studentData, // D15: Object Spread
      contact: mergedContact
    };

    // D15: Object Destructuring with Default Values
    const { id, name, age, course, grades = {}, contact, isActive } = completeData;

    const newStudent = new Student(id, name, age, course, grades, contact, isActive);
    this.students.push(newStudent);
    console.log(`➕ Added Student: ${newStudent.name} (ID: ${newStudent.id})`);
    return newStudent;
  }

  // Search students by flexible property query using Bracket Notation
  searchStudents(propertyName, queryValue) {
    // D15: Accessing via Bracket Notation
    return this.students.filter(student => {
      const propValue = student[propertyName]; // Bracket notation dynamic access
      if (typeof propValue === 'string') {
        return propValue.toLowerCase().includes(String(queryValue).toLowerCase());
      }
      return propValue === queryValue;
    });
  }

  // Filter students based on custom predicate (e.g. course or minimum GPA)
  filterByMinGPA(minGPA) {
    return this.students.filter(s => s.calculateGPA() >= minGPA);
  }

  // Sort students using Object property comparison
  sortStudentsBy(sortByKey = 'name', ascending = true) {
    return [...this.students].sort((a, b) => {
      let valA, valB;

      if (sortByKey === 'gpa') {
        valA = a.calculateGPA();
        valB = b.calculateGPA();
      } else {
        // D15: Accessing property dynamically
        valA = a[sortByKey];
        valB = b[sortByKey];
      }

      if (valA < valB) return ascending ? -1 : 1;
      if (valA > valB) return ascending ? 1 : -1;
      return 0;
    });
  }

  // Inspect student object structure using Object.keys, Object.values, and Object.entries
  inspectStudentStructure(studentId) {
    const student = this.students.find(s => s.id === studentId);
    if (!student) return null;

    // D15: Object.keys, Object.values, Object.entries
    const keys = Object.keys(student);
    const values = Object.values(student);
    const entries = Object.entries(student.grades);

    return {
      totalProperties: keys.length,
      keysList: keys,
      gradesBreakdown: entries.map(([subject, score]) => `${subject.toUpperCase()}: ${score}`)
    };
  }

  // Update student grades using Object property manipulation
  updateStudentGrades(studentId, newGrades) {
    const student = this.students.find(s => s.id === studentId);
    if (!student) return false;

    // D15: Object.assign for in-place property updating
    Object.assign(student.grades, newGrades);
    return true;
  }
}

module.exports = { StudentManagementSystem, SYSTEM_CONFIG };
