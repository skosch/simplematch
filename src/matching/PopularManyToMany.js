/* Generalized 2-level Gale-Shapley algorithm.
 * From: http://dss.in.tum.de/files/brandt-research/hospital_resident.pdf
 *
 * Every student has two clones: a0, a1. Both have identical choice lists.
 * Courses, in general, prefer matching with a1 students.
 * Every course has a single choice list, it prefers the preferredChoiceNodes first.
 *
 * cap(a) is the /total/ capacity of a student's a0 and a1 clone.
 * Only a a0 OR a1 is active at a time.
 * In the beginning, only the a0 students are active.
 *
 */

/* Example usage:
 * const result = twoLevelGaleShapley({
     John: ["Mary", "Jane", "Lisa", "Anna"],
     Pete: ["Jane", "Mary", "Anna"],
     Mark: ["Mary", "Jane", "Lisa", "Anna"],
     Ralf: ["Jane", "Mary", "Anna", "Lisa"],
   }, {
     Anna: ["John", "Pete", "Mark", "Ralf"],
     Jane: ["John", "Pete", "Ralf", "Mark"],
     Lisa: ["Pete", "John"],
     Mary: ["John", "Pete", "Ralf", "Mark"]
   }, {
     John: 1, Pete: 1, Mark: 1, Ralf: 1,
   }, {
     Anna: 1, Jane: 1, Lisa: 1, Mary: 1,
   }) = [["Anna","Mark"],["Jane","Pete"],["Mary","John"]];
*/

const getLeastPreferred = (matches, choices) => {
  // loop through the choices from the back, once the worst choice is found, return it
  for (let i = choices.length - 1; i >= 0; i--) {
    if (matches.has("0" + choices[i])) { // end of the "0" list is least preferred
      return "0" + choices[i];
    }
  }
  for (let i = choices.length - 1; i >= 0; i--) {
    if (matches.has("1" + choices[i])) {
      return "1" + choices[i];
    }
  }
  return matches[0];
}

const getLeastPreferredStudentIndex = (matches, choices) => {
  // loop through the choices from the back, once the worst choice is found, return it
  for (let i = choices.length - 1; i >= 0; i--) {
    if (matches.has("0" + choices[i])) { // end of the "0" list is least preferred
      return i;
    }
  }
  for (let i = choices.length - 1; i >= 0; i--) {
    if (matches.has("1" + choices[i])) {
      return i;
    }
  }
  return 0;
}

// input: {"peter": ["mary", "julia"]}
const twoLevelGaleShapley = (studentsWithChoices, coursesWithChoices, studentCaps, courseCaps) => {
  // Create all students
  const a0 = Object.keys(studentsWithChoices).map(n => "0" + n);
  const a1 = Object.keys(studentsWithChoices).map(n => "1" + n);
  const b = Object.keys(coursesWithChoices);

  /* make a deep copy for later adding the original ranks to the pairing tuples */
  const originalStudentsWithChoices = {};
  for (const student of Object.keys(studentsWithChoices)) {
    originalStudentsWithChoices[student] = [...studentsWithChoices[student]];
  }
  const originalCoursesWithChoices = {};
  for (const course of Object.keys(coursesWithChoices)) {
    originalCoursesWithChoices[course] = [...coursesWithChoices[course]];
  }
  
  const currentStudentChoices = a0.concat(a1).reduce((p, c) => {
    p[c] = studentsWithChoices[c.slice(1)];
    return p;
  }, {});

  // Start a queue Q with all of the active students a0.
  const Q = a0.slice();
  // Matches
  const matchesByCourse = b.reduce((p, c) => {
    p[c] = new Set();
    return p;
  }, {});
  // caps and residuals
  const cap = studentCaps;
  const residual = {...studentCaps};
  let currentStudent = Q.shift();
  while (currentStudent !== undefined) {
    const currentStudentName = currentStudent.slice(1);
    const currentStudentLevel = currentStudent[0];
    const currentChoices = currentStudentChoices[currentStudent];
    while (residual[currentStudentName] > 0
           && currentChoices.length > 0) {
      const currentBestChoice = currentChoices.shift();
      if (!coursesWithChoices[currentBestChoice] || !coursesWithChoices[currentBestChoice].includes(currentStudentName)) {
        continue;
      }
      
      matchesByCourse[currentBestChoice].add(currentStudent);
      if (currentStudentLevel === "1"
          && matchesByCourse[currentBestChoice].has(["0" + currentStudentName])) {
        matchesByCourse[currentBestChoice].delete("0" + currentStudentName);
      } else {
        residual[currentStudentName]--;
        if (matchesByCourse[currentBestChoice].size > courseCaps[currentBestChoice]) {
          // drop the course's least preferred currently assigned student          
          const leastPreferredStudent =
            getLeastPreferred(matchesByCourse[currentBestChoice], coursesWithChoices[currentBestChoice]);
          const leastPreferredStudentName = leastPreferredStudent.slice(1);
          matchesByCourse[currentBestChoice].delete(leastPreferredStudent);
          residual[leastPreferredStudentName]++;
          if (!Q.includes(leastPreferredStudent)) {
            Q.unshift(leastPreferredStudent);
          }
        }
      }
     
      // if b is matched to cap(b) many partners, delete anyone's preferences for b
      // who b wants less than its current worst
      if (matchesByCourse[currentBestChoice].size === courseCaps[currentBestChoice]) {
        // "I'm full, and I definitely don't want anyone worse than I currently have",
        // says the course.
        const leastPreferredStudentIndex =
          getLeastPreferredStudentIndex(matchesByCourse[currentBestChoice], coursesWithChoices[currentBestChoice]);
        coursesWithChoices[currentBestChoice].splice(leastPreferredStudentIndex + 1);
      }
    }
    
    if (residual[currentStudentName] > 0 && currentStudentLevel === "0") {
      Q.push("1" + currentStudentName);
    }
    
    currentStudent = Q.shift();
  }
  
  const studentsRanksOfCourses = {};
  for (const student of Object.keys(originalStudentsWithChoices)) {
    for (const [index, course] of originalStudentsWithChoices[student].entries()) {
      studentsRanksOfCourses[student + "_" + course] = index + 1;
    }
  }
  const coursesRanksOfStudents = {};
  for (const course of Object.keys(originalCoursesWithChoices)) {
    for (const [index, student] of originalCoursesWithChoices[course].entries()) {
      coursesRanksOfStudents[course + "_" + student] = index + 1;
    }
  }
  const pairings = [];
  for (const course in matchesByCourse) {
    for (const student of [...matchesByCourse[course]]) {
      const studentName = student.slice(1);
      const studentsRankOfCourse = studentsRanksOfCourses[studentName + "_" + course];
      const coursesRankOfStudent = coursesRanksOfStudents[course + "_" + studentName];
      pairings.push([studentName, course, studentsRankOfCourse, coursesRankOfStudent]);
    }
  }
  return pairings;
}

export default twoLevelGaleShapley;
