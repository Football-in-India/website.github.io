const formlogin = document.querySelector(".login");
const formSign = document.querySelector(".signup");
const formProfile = document.querySelector(".profile");
const passReset = document.querySelector(".passReset");
const newName = document.querySelector(".new_name");
const profileEdit = document.querySelector(".profileEdit");

var register_form = document.querySelector("#registerForm");
var login_form = document.querySelector("#loginForm");
var profile_form = document.querySelector("#profileForm");
var pass_form = document.querySelector("#passForm");
var profile_edit_form = document.querySelector("#profileEditForm");

var message_value = document.querySelector(".message");
var sign_btn = document.querySelector(".signButton");
var log_btn = document.querySelector(".log_btn");
var profile_btn = document.querySelector(".profile_btn");
var log_error = document.querySelector(".log_error");
var sign_error = document.querySelector(".sign_error");
var pass_msg = document.querySelector(".passMsg");
var pass_btn = document.querySelector(".pass_btn");


function signUp(){
    formlogin.classList.add("hide");
    formSign.classList.remove("hide");
}

function logIn(){
    formlogin.classList.remove("hide");
    formSign.classList.add("hide");
}

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDFq4sMn9zv_hiQiBmvL3YH_eNicBDyITE",
    authDomain: "website-6175c.firebaseapp.com",
    projectId: "website-6175c",
    storageBucket: "website-6175c.appspot.com",
    messagingSenderId: "125832833514",
    appId: "1:125832833514:web:86c7d718d2b53c788cea93"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in
      console.log("logged in")
      formlogin.classList.add("hide");
      formSign.classList.add("hide");
      formProfile.classList.remove("hide");
      getUser();
      // ...
    } else {
      // User is signed out
      // ...
      console.log("Not logged")
      formlogin.classList.remove("hide");
      formSign.classList.add("hide");
      formProfile.classList.add("hide");
    }
  });
  

  var database = firebase.database()

if(register_form){
    register_form.addEventListener("submit", function(e){
        e.preventDefault();
        let email = register_form.email.value;
        let password = register_form.password.value;
        let userName = register_form.displayName.value;
        sign_btn.value = "Please Wait"
          
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
        // Signed in 
            sign_btn.value = "Sign Up"
            console.log("signed in")
            sign_error.innerHTML = ''
            const user = firebase.auth().currentUser;
            const uid = user.uid;
            database.ref('users/' + uid).set({
                email : email,
                // password : password,
                userName : userName,
                questionCount : 0,
                correct : 0
            })
            formlogin.classList.add("hide");
            formSign.classList.add("hide");
            formProfile.classList.remove("hide");
            alert("Signed in successfully")
            getUser();

            
        // ...
        })
        .catch((error) => {
          sign_btn.value = "Sign Up"
          console.log("Error occured", error.message);
          sign_error.innerHTML = error.message;
        // ..
        });
        })
}

if(login_form){
    login_form.addEventListener('submit', function(e){
        e.preventDefault();
        let email = login_form.email.value;
        let password = login_form.password.value;
        // message_value.innerHTML = "You currently signed in as "
        log_btn.value = "Please Wait"
        

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // window.location = 'index.html';
            log_btn.value = "Login"
            console.log("logged in")
            log_error.innerHTML = ''
            formlogin.classList.add("hide");
            formSign.classList.add("hide");
            formProfile.classList.remove("hide");
            getUser();
            })
            .catch((error) => {
                console.log("Error occured", error.message);
                log_error.innerHTML = error.message;
                log_btn.value = "Login"
            });
        })
}

if(profile_form){
  profile_form.addEventListener('submit', function(e){
    e.preventDefault();
    profile_btn.value = "Please Wait"
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      profile_btn.value = "Sign Out"
      console.log("Logged out")
      formlogin.classList.remove("hide");
      formSign.classList.add("hide");
      formProfile.classList.add("hide");
      // window.location = 'index.html';
    }).catch((error) => {
      // An error happened.
      profile_btn.value = "Please  Wait"
      console.log("error occured")
    });
  })
}

if(pass_form){
  pass_form.addEventListener('submit', function(e) {
    e.preventDefault();
    let email = pass_form.email.value;
  //   firebase.auth().sendPasswordResetEmail(email)
  // .then(() => {
  //   // Password reset email sent!
  //   pass_msg.innerHTML = "Password reset link sent to " + email;
  //   passlog_btn.style.display = "block";
  //   pass_btn.style.display = "none";
  // })
  // .catch((error) => {
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   console.log("mail not sent")
  //   pass_msg.innerHTML = "No account exists with id " + email;
  //   passlog_btn.style.display = "block";
  // });
  firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    // Password reset email sent!
    // ..
    console.log("mail sent")
    pass_msg.innerHTML = "Password reset link sent to " + email;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    console.log("mail not sent")
    pass_msg.innerHTML = "No account exists with id " + email;
  });
  })
}

if(profile_edit_form){
  profile_edit_form.addEventListener('submit', function(e) {
    e.preventDefault();
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    let newName = profile_edit_form.newName.value;
    database.ref('users/' + uid).update({
      userName: newName
    })
    alert("User name updated successfully!")
  cancelChange();
  })
}

function getUser(){
  const user = firebase.auth().currentUser;
  const uid = user.uid;
  var userid = database.ref('users/' + uid)
  userid.on("value", function(snapshot){
    var data = snapshot.val()
    message_value.innerHTML = "<b>User Name:</b> " + data.userName + "<br><b>E-mail:</b> " + data.email;
  })
}

function resetPass(){
  pass_msg.innerHTML = "";
  pass_btn.style.display = "block";
  formlogin.classList.add("hide");
  formSign.classList.add("hide");
  formProfile.classList.add("hide");
  passReset.classList.remove("hide");
}

function passLogin(){
  passReset.classList.add("hide");
  formlogin.classList.remove("hide");
}

function editName(){
  formProfile.classList.add("hide");
  profileEdit.classList.remove("hide");
}

function cancelChange(){
  formProfile.classList.remove("hide");
  profileEdit.classList.add("hide");
}
