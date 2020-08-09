function check()
{
    var score=0;
    var right_ans_1 = document.getElementById('qno1-1');
    var ques1_ans_2 = document.getElementById('qno1-2');
    var ques1_ans_3 = document.getElementById('qno1-3');
    if(right_ans_1.checked ==true)
    {
        score++;
        alert("question no :01 your answer is right")
    }
    else{
        alert(" question no :01 wrong answer");
    }




   
    var ques2_ans_1 = document.getElementById('qno2-1');
    var ques2_ans_2 = document.getElementById('qno2-2');
    var right_ans_3 = document.getElementById('qno2-3');
   
    if(right_ans_3.checked ==true)
    {
        score++;
        alert("question no :02 your answer is right")
    }
    else{
        alert(" question no :02 wrong answer");
    }
     



    var right_ans_1 = document.getElementById('qno3-1');
    var ques3_ans_2 = document.getElementById('qno3-2');
    var ques3_ans_3 = document.getElementById('qno3-3');
   
    if(right_ans_1.checked ==true)
    {
        score++;
        alert("question no :03 your answer is right")
    }
    else{
        alert(" question no :03 wrong answer");
    }
     


    var ques4_ans_1 = document.getElementById('qno4-1');
    var right_ans_2 = document.getElementById('qno4-2');
    var ques4_ans_3 = document.getElementById('qno4-3');
   
    if(right_ans_2.checked ==true)
    {
        score++;
        alert("question no :04 your answer is right")
    }
    else{
        alert(" question no :04 wrong answer");
    }


    var right_ans_1 = document.getElementById('qno5-1');
    var ques5_ans_2 = document.getElementById('qno5-2');
    var ques5_ans_3 = document.getElementById('qno5-3');
   
    if(right_ans_1.checked ==true)
    {
        score++;
        alert("question no :05 your answer is right")
    }
    else{
        alert(" question no :05 wrong answer");
    }

    alert("Your Score is " + score++ + " out of 5")
}






















/* var count=0 , paper, paper_status , choice , choices, opt1, opt2, opt3,right=0,  question;
var questions = [
    {
        question:"In java arrays are:",
        a: "objects",
        b:"primitive type",
        c:"none of the above",
        answer: "A"
    },
    {
        question:"command to execute compiled java program is :",
        a: "javap",
        b:" javac",
        c:"java",
        answer: "C"
    },
    {
        question:"inner classes are:",
        a: "class",
        b:"anonymous classes",
        c:"child classes",
        answer: "A"
    },
    {
        question:"the command java is used to:",
        a: "debug the program",
        b:"compile the program",
        c:"execute the program",
        answer: "B"
    },
    {
        question:"which i:s the following is true for java",
        a: "is object oriented abd interpreted",
        b:"is not robust",
        c:"is a super set of script",
        answer: "A"
    }
    
    
];
    function getId(id)
    {
        return document.getElementById(id);

    }
    function getQuestion()
    {
        paper=getId("paper");
        if(count>=questions.length)
{        
        paper.innerHtml="<h2> You got " +right+" out of "+questions.length+" questions right </h2>";
        getId("paper_status").innerHTML="Your test has been completed";
        count=0;
        right=0;
        return false;
    }
    getId("paper_status").innerHTML="Question" + (count+1)+" of"+questions.length;
    question=questions[count].question;
    opt1=questions[count].a;
    opt2=questions[count].b;
    opt3=questions[count].c;
    paper.innerHTML += "<label><input type='radio' name='choices' value='A'"+opt1+" </label><br>";
    paper.innerHTML += "<label><input type='radio' name='choices' value='B'"+opt2+" </label><br>";
    paper.innerHTML += "<label><input type='radio' name='choices' value='C'"+opt3+" </label><br>";
     paper.innerHTML += "<button onclick='checkAnswer()'>Submit</button>";
    }

    function checkAnswer()
    {
        choices=document.getElementsByName("choices");
        for(var i =0; i<choices.length; i++)
        {
            if(choices[i].checked)
            {
                choices=choices[i].value;
            }
        }
        if(choices==questions[count].answer)
        {
            right++;
        }
        count++;
        getQuestion();
        }

    window.addEventListener("load",getQuestion); */