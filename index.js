/**
 * DAY 15 OBJECTS MASTER DEMONSTRATION PROGRAM
 * Demonstrates 100% of D15 Syllabus Topics in a single executable runner.
 */

const fs = require('fs');
const path = require('path');
const Student = require('./student');
const { StudentManagementSystem, SYSTEM_CONFIG } = require('./studentManager');

console.log('=================================================================');
console.log(`🎓 ${SYSTEM_CONFIG.appName} (${SYSTEM_CONFIG.version})`);
console.log('=================================================================\n');

// -------------------------------------------------------------------------
// 1. D15: Object Freeze Verification
// -------------------------------------------------------------------------
console.log('--- 1. Testing Object.freeze() ---');
try {
  SYSTEM_CONFIG.version = '2.0.0'; // Attempted mutation on frozen object
} catch (e) {
  // Silent fail or error in strict mode
}
console.log('System Config Version (Immutable):', SYSTEM_CONFIG.version, '\n');

// -------------------------------------------------------------------------
// 2. D15: JSON Parsing & Object Creation
// -------------------------------------------------------------------------
console.log('--- 2. Loading Student Data via JSON.parse() ---');
const rawJSONPath = path.join(__dirname, 'data', 'initialStudents.json');
const rawJSONData = fs.readFileSync(rawJSONPath, 'utf-8');

const system = new StudentManagementSystem();
system.loadFromJSON(rawJSONData);
console.log();

// -------------------------------------------------------------------------
// 3. D15: Adding Student (Object.assign, Spread Operator, Destructuring)
// -------------------------------------------------------------------------
console.log('--- 3. Adding New Student (Spread Operator & Object.assign) ---');
system.addStudent({
  name: 'David Kim',
  age: 24,
  course: 'Full Stack Web Development',
  grades: { html: 95, css: 90, javascript: 99 },
  contact: { email: 'david.kim@example.com', phone: '+1-555-0111' }
});
console.log();

// -------------------------------------------------------------------------
// 4. D15: Inspecting Properties with Object.keys(), values(), entries()
// -------------------------------------------------------------------------
console.log('--- 4. Inspecting Object Structure (keys, values, entries) ---');
const inspection = system.inspectStudentStructure('STU-101');
console.log('Student STU-101 Keys:', inspection.keysList);
console.log('Student STU-101 Grades (via Object.entries):', inspection.gradesBreakdown);
console.log();

// -------------------------------------------------------------------------
// 5. D15: Search & Accessing Properties (Dot & Bracket Notation)
// -------------------------------------------------------------------------
console.log('--- 5. Dynamic Search (Bracket Notation Access) ---');
const searchResults = system.searchStudents('course', 'Full Stack');
console.log(`Found ${searchResults.length} students in Full Stack:`);
searchResults.forEach(s => console.log('  -', s.getSummary()));
console.log();

// -------------------------------------------------------------------------
// 6. D15: Filtering & Sorting
// -------------------------------------------------------------------------
console.log('--- 6. Filtering & Sorting Students by GPA ---');
const highAchievers = system.filterByMinGPA(90.0);
console.log(`High Achievers (GPA >= 90): ${highAchievers.length}`);

const sortedByGPA = system.sortStudentsBy('gpa', false); // Descending
console.log('Leaderboard (Sorted by GPA Descending):');
sortedByGPA.forEach((s, idx) => {
  console.log(`  ${idx + 1}. ${s.name} - GPA: ${s.calculateGPA()}`);
});
console.log();

// -------------------------------------------------------------------------
// 7. D15: Object Property In-place Update & Methods
// -------------------------------------------------------------------------
console.log('--- 7. Updating Student Grades (Object.assign) ---');
console.log('Marcus Old GPA:', system.students.find(s => s.id === 'STU-103').calculateGPA());
system.updateStudentGrades('STU-103', { javascript: 92, nodejs: 88 });
console.log('Marcus Updated GPA:', system.students.find(s => s.id === 'STU-103').calculateGPA());
console.log();

// -------------------------------------------------------------------------
// 8. D15: JSON.stringify Export
// -------------------------------------------------------------------------
console.log('--- 8. Exporting Full Dataset via JSON.stringify() ---');
const exportedJSON = system.exportToJSON(true);
console.log('JSON Output Snippet (First 200 chars):');
console.log(exportedJSON.substring(0, 200) + '...\n');

console.log('=================================================================');
console.log('✨ All Day 15 Object Concepts Executed Successfully!');
console.log('=================================================================');
