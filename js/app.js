const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-img");
const optionContainer = document.querySelector(".option-container");
const nextButton = document.getElementById("btn");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const leaderBox = document.querySelector(".leader-box");
const log_in = document.querySelector(".log_in");
const start_btn = document.querySelector(".start_btn");

var leaderTable = document.getElementsByTagName('table')[1];

// let questionCounter = -1;
let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correct = 0;
let myScore = 0;

var myImage = document.getElementById('mainImage');
var imageArray = ["img/0.webp", "img/1.png", "img/2.png", "img/3.png", "img/4.png", "img/5.png", "img/6.png", "img/7.png", "img/8.png", "img/9.png", "img/10.png", "img/11.png", "img/12.png", "img/13.png", "img/14.webp", "img/15.png", "img/16.png", "img/17.png", "img/18.png", "img/19.png",
"img/20.png", "img/21.png", "img/22.png", "img/23.png", "img/24.png", "img/25.png", "img/26.png", "img/27.png", "img/28.png", "img/29.png", "img/30.png", "img/31.png", "img/32.png", "img/33.png", "img/34.png", "img/35.png", "img/36.png", "img/37.png", "img/38.png", "img/39.png", "img/40.png",
 "img/41.png", "img/42.png", "img/43.png", "img/44.png", "img/45.png", "img/46.png", "img/47.png", "img/48.png", "img/49.png", "img/50.png", "img/51.png", "img/52.png", "img/53.png", "img/54.png", "img/55.png", "img/56.png", "img/57.png", "img/58.png", "img/59.png", "img/60.png", "img/61.png",
 "img/62.png", "img/63.png", "img/64.png", "img/65.png", "img/66.png", "img/67.png", "img/68.png", "img/69.png", "img/70.png", "img/71.png", "img/72.png", "img/73.png", "img/74.png", "img/75.png", "img/76.webp", "img/77.png", "img/78.webp", "img/79.webp", "img/80.webp", "img/81.webp", "img/82.webp", 
 "img/83.png", "img/84.png", "img/85.png", "img/86.png", "img/87.webp", "img/88.png", "img/89.webp", "img/90.png", "img/91.webp", "img/92.png", "img/93.png", "img/94.webp", "img/95.png", "img/96.png", "img/97.png", "img/98.png", "img/99.png", "img/100.png", "img/101.png", "img/102.png", "img/103.png",
 "img/104.png", "img/105.png", "img/106.png", "img/107.png", "img/108.png", "img/109.png", "img/110.png", "img/111.png", "img/112.png", "img/113.png", "img/114.png", "img/115.png", "img/116.png", "img/117.png", "img/118.png", "img/119.png", "img/120.png", "img/121.png", "img/122.png", "img/123.png",
 "img/124.png", "img/125.png", "img/126.png", "img/127.png", "img/128.png", "img/129.png"];

function setAvailableQuestions(){
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
        availableQuestions.push(quiz[i])
    }
}

function getNewQuestion(){
    console.log("getnewqst");
    if(questionCounter < quiz.length){

    questionNumber.innerHTML = (questionCounter + 1) + " of " + quiz.length;
    myImage.setAttribute("src", imageArray[questionCounter]);

    nextButton.style.pointerEvents = "none";
    nextButton.style.color = "#9e9898";

    const questionIndex = availableQuestions[questionCounter];
    currentQuestion = questionIndex;

    for(let i=0; i<4; i++){
        availableOptions.push(i);
    }

    optionContainer.innerHTML = '';

    let animationDelay = 0.15;

    for(let i=0; i<4; i++){
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[i];
        option.id = i;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.07;
        option.className = "option";
        optionContainer.appendChild(option)
        option.setAttribute("onclick","getResult(this)");
    }

    questionCounter++
}else{
    gameOver();
}
}

function getResult(element){
    const id = parseInt(element.id);
    if(id === currentQuestion.answer){
        element.classList.add("correct");
        correct++;
    }
    else{
        element.classList.add("wrong");
        for(let i=0; i<4; i++){
            if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
                optionContainer.children[i].classList.add("correct");
            }
        }
    }
    // updateDb();
    unclickableOptions();
}

function unclickableOptions(){
    nextButton.style.pointerEvents = "all";
    nextButton.style.color = "#000000";
    for(let i=0; i<4; i++){
        optionContainer.children[i].classList.add("already-answered");
    }
}

function next(){
    if(questionCounter == quiz.length){
        gameOver();
    }
    else{
        getNewQuestion();
    }
}

function gameOver(){
    // if (myScore < correct) {
    //     var database = firebase.database()
    //     const user = firebase.auth().currentUser;
    //     const uid = user.uid;
    //     database.ref('users/' + uid).update({
    //     final: correct
    //     })
    // }
    leaderBox.classList.add("hide");
    quizBox.classList.add("hide");
    resultBox.classList.remove("hide");
    gameResult();
}

function gameResult(){
    // const user = firebase.auth().currentUser;
    // const uid = user.uid;
    // var userid = database.ref('users/' + uid)
    // userid.on("value", function(snapshot){
    //     var data = snapshot.val()
    //     resultBox.querySelector(".user-name").innerHTML = data.userName
    // })
    resultBox.querySelector(".total-question").innerHTML = quiz.length;
    resultBox.querySelector(".total-correct").innerHTML = correct;
    resultBox.querySelector(".total-wrong").innerHTML = quiz.length - correct;
    const percentage = (correct/quiz.length)*100;
    resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
}

function resetQuiz(){
    questionCounter = 0;
    correct = 0;
    updateDb();
    startGame();
}

function tryAgain(){
    // if (window.confirm("Play again?")) {
    //     resultBox.classList.add("hide");
    //     quizBox.classList.remove("hide");
    //     resetQuiz();
    // }
    resultBox.classList.add("hide");
    quizBox.classList.remove("hide");
    resetQuiz();
}

function startGame() {
    setAvailableQuestions();
    currentQstn();
}

// function startGame(){
//     firebase.auth().onAuthStateChanged((user) => {
//         if (user) {
//             console.log("logged in")
//             getData();
//             start_btn.innerHTML = "Loading..."
//             setAvailableQuestions();
//             currentQstn();
//         } else {
//           // User is signed out
//           // ...
//           log_in.classList.remove("hide");
//           console.log("Not logged")
//         }
//       });
//     }


function currentQstn(){
    if(questionCounter > -1){
        console.log("if")
        homeBox.classList.add("hide");
        quizBox.classList.remove("hide");
        start_btn.innerHTML = "Start Game"
        getNewQuestion();
    }
    else{
        console.log("else")
        setTimeout(currentQstn, 2000);
    }
}

function getData(){
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    var userid = database.ref('users/' + uid)
    userid.on("value", function(snapshot){
        var data = snapshot.val()
        questionCounter = data.questionCount;
        correct = data.correct;
        myScore = data.final
        console.log("Database")
  })
}


var database = firebase.database()
function updateDb(){
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    database.ref('users/' + uid).update({
        questionCount : questionCounter,
        correct : correct
    })
}

//list

function leaderboard(){
    quizBox.classList.add("hide");
    resultBox.classList.add("hide");
    leaderBox.classList.remove("hide");
    var database = firebase.database()
    var userRef = database.ref('users');
    userRef.orderByChild('final').once('value', (snapshot) => {
        let i = snapshot.numChildren();
            snapshot.forEach((childSnapshot) => {
              var childKey = childSnapshot.key;
              var childData = childSnapshot.val();
              // ...
            //   console.log("number of users "+snapshot.numChildren())
            //   let i = snapshot.numChildren();
            if (childData.final != 0) {
                var newRow = leaderTable.insertRow(1);
            var cell0 = newRow.insertCell(0);
            var cell1 = newRow.insertCell(1);
            var cell2 = newRow.insertCell(2);

            cell0.innerHTML = i;
            cell1.innerHTML = childData.userName;
            cell2.innerHTML = childData.final;
            }
            i--;
          });
        
    })
}

function goBack(){
    window.location = "quiz.html"
}


