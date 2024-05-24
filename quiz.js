function check()
{
    var q1 = document.quiz.q1.value;
    var q2 = document.quiz.q2.value;
    var q3 = document.quiz.q3.value;
    var q4 = document.quiz.q4.value;
    var q5 = document.quiz.q5.value;
    var q6 = document.quiz.q6.value;
    var q7 = document.quiz.q7.value;
    var q8 = document.quiz.q8.value;
    var correct = 0;

    if(q1=="Mercury")
        correct++;
    if(q2=="Neptune")
        correct++;
    if(q3=="Jupiter")
        correct++;
    if(q4=="Venus")
        correct++;
    if(q5==27)
        correct++;
    if(q6==92.96)
        correct++;
    if(q7==318)
        correct++;
    if(q8=="Pluto" || q8=="pluto")
        correct++;
    
    document.getElementById("submitted").style.visibility = "visible";
    document.getElementById("no_correct").innerHTML = "You got " + correct + " correct!";
}