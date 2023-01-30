$('#grade-calc-submit').click(function () {

    var assignments = $('#validationCustom01').val()
    var groupProject = $('#validationCustom02').val()
    var quizzes = $('#validationCustom03').val()
    var midtermExam = $('#validationCustom04').val()
    var finalExam = $('#validationCustom05').val()
    var intex = $('#validationCustom06').val()
    var gradeTotal = 0
    var letterGrade = ''
    var output = ""


    gradeTotal = (assignments * .5) + (groupProject * .1) + (quizzes * .1) + (midtermExam * .1) + (finalExam * .1) + (intex * .1)
    if (gradeTotal >= 94) {
        letterGrade = 'A';
    } else if (gradeTotal >= 90 && gradeTotal < 94) {
        letterGrade = 'A-';
    } else if (gradeTotal >= 87 && gradeTotal < 90) {
        letterGrade = 'B+';
    } else if (gradeTotal >= 84 && gradeTotal < 87) {
        letterGrade = 'B';
    } else if (gradeTotal >= 80 && gradeTotal < 84) {
        letterGrade = 'B-';
    } else if (gradeTotal >= 77 && gradeTotal < 80) {
        letterGrade = 'C+';
    } else if (gradeTotal >= 74 && gradeTotal < 77) {
        letterGrade = 'C';
    } else if (gradeTotal >= 70 && gradeTotal < 74) {
        letterGrade = 'C-';
    } else if (gradeTotal >= 67 && gradeTotal < 70) {
        letterGrade = 'D+';
    } else if (gradeTotal >= 64 && gradeTotal < 67) {
        letterGrade = 'D';
    } else if (gradeTotal >= 60 && gradeTotal < 64) {
        letterGrade = 'D-';
    } else {
        letterGrade = 'E';
    }
    output = "You would get a(n) " + letterGrade + " in the class."
    $('#calc-result').text(output)
})
