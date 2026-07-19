function showOutput(message){
    document.getElementById("output").innerText=message;
}

function demoGetElementById(){

    let title=document.getElementById("courseTitle");

    title.style.background="#fff3cd";
    title.style.color="#c0392b";
    title.style.padding="10px";

    showOutput(
        "Method : getElementById()\n\n"+
        "Selected Element : courseTitle\n\n"+
        "This method selects one element using its unique ID."
    );

}

function demoGetElementsByClassName(){

    let students=document.getElementsByClassName("student-card");

    for(let i=0;i<students.length;i++){

        students[i].style.background="#d4edda";
        students[i].style.borderLeft="6px solid green";

    }

    showOutput(
        "Method : getElementsByClassName()\n\n"+
        "Class Name : student-card\n\n"+
        "Total Elements : "+students.length
    );

}

function demoGetElementsByTagName(){

    let list=document.getElementsByTagName("li");

    for(let i=0;i<list.length;i++){

        list[i].style.background="#d6eaf8";

    }

    showOutput(
        "Method : getElementsByTagName()\n\n"+
        "Tag Name : li\n\n"+
        "Total Elements : "+list.length
    );

}

function demoQuerySelector(){

    let first=document.querySelector(".important");

    first.style.background="#f8d7da";
    first.style.border="2px solid #c0392b";
    first.style.padding="10px";

    showOutput(
        "Method : querySelector()\n\n"+
        "Selector : .important\n\n"+
        "Only the first matching element is selected."
    );

}

function demoQuerySelectorAll(){

    let all=document.querySelectorAll(".important");

    all.forEach(function(course){

        course.style.background="#d4edda";
        course.style.border="2px solid green";
        course.style.padding="10px";

    });

    showOutput(
        "Method : querySelectorAll()\n\n"+
        "Selector : .important\n\n"+
        "Number of Elements : "+all.length
    );

}

function resetPage(){

    location.reload();

}