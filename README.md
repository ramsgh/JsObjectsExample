# Student Management System - Day 15 Objects Master Project

> **Course Track**: Full Stack & AI Developer Syllabus  
> **Session**: Day 15 (Session 15)  
> **Topics Covered**: Objects (Creation, Accessing, Methods, `this`), Object Methods (`keys`, `values`, `entries`, `assign`, `freeze`), Spread Operator, Destructuring, Nested Objects, JSON (`parse`, `stringify`).

---

## 📚 Concepts Covered & File Map

### 1. Object Creation & Constructors (`student.js`)
* **Literal vs. Constructor**: Uses constructor function `Student()` to instantiate student records with encapsulated methods.
* **`this` Keyword**: Encapsulates instance properties (`this.id`, `this.name`) and instance methods (`this.calculateGPA()`, `this.getSummary()`).

### 2. Static Object Methods & Immutability (`studentManager.js`)
* **`Object.freeze()`**: Locks `SYSTEM_CONFIG` against modification or property additions.
* **`Object.keys()`**: Extracts property names for object structure introspection.
* **`Object.values()`**: Extracts grade numerical values to calculate GPA dynamically.
* **`Object.entries()`**: Converts student grades object into `[key, value]` tuples for subject breakdown iteration.
* **`Object.assign()`**: Merges default contact parameters with user inputs and updates student records in-place.

### 3. Modern ES6+ Object Operations (`studentManager.js`)
* **Spread Operator (`...`)**: Combines student properties and clones arrays immutably during sorting.
* **Object Destructuring**: Unpacks nested properties (`const { email, phone } = this.contact`) and assigns fallback defaults (`const { grades = {} }`).
* **Dynamic Access (Bracket Notation)**: Used in `searchStudents(propertyName, queryValue)` to query any object property dynamically via `student[propertyName]`.

### 4. JSON Serialization & Deserialization (`index.js` & `data/`)
* **`JSON.parse()`**: Deserializes string data from `initialStudents.json` into executable JavaScript objects.
* **`JSON.stringify()`**: Serializes the updated in-memory student database back into structured, formatted JSON string output.

---

## 🚀 How to Run in VS Code

1. Open VS Code and select **File > Open Folder...**, then select this extracted project directory.
2. Open the integrated terminal (`Ctrl + ~` or `Cmd + ~`).
3. Run the main demonstration script using Node.js:
   ```bash
   node index.js
   ```

---

## 🛠️ Project Structure

```text
student-management-system-d15/
├── package.json              # NPM manifest
├── README.md                 # Technical breakdown & guide
├── index.js                  # Main execution script demonstrating all D15 features
├── student.js                # Student class & constructor with 'this' methods
├── studentManager.js         # Core StudentManagementSystem class with Object static methods
└── data/
    └── initialStudents.json  # Sample JSON database
```
