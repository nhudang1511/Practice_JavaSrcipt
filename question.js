const question_btn = document.querySelectorAll(".queston-btn");

//solution 1
// question_btn.forEach(function(btn){
//     btn.addEventListener("click",function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//     });
// });

//solution 2

const questions = document.querySelectorAll(".question");
questions.forEach(function(question){
    const ques_btn = question.querySelector(".queston-btn");
    ques_btn.addEventListener("click",function(){
        questions.forEach(function(item){
            if(item!==question){
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    });
});