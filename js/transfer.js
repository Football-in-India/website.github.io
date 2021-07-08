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

var date = document.querySelector(".updateDate");

date.innerHTML = 'Last updated on 5 July 2021'

let divContent = document.getElementById('divContent');
let listEnd = document.getElementById('listEnd');
let itemCount = 0;
let newslength = 5;
let appending = false;

console.log("transfer")

var database = firebase.database();
var mainRef = database.ref('transfer/news');
mainRef.once('value', (snapshot) => {
  newslength = snapshot.numChildren();
  console.log("length = "+newslength)
});

loadCount();

function loadCount(){
  if (newslength > 0) {
    window.addEventListener('DOMContentLoaded', load);
    function load(){
      addItems();
    }
  }
  else{
    setTimeout(loadCount, 2000);
  }
}

function addItems(){
  appending = true;
  for(let i =0 ; i<10; i++){
    if (newslength > 0) {
      var myRef = firebase.database().ref('transfer/news/'+(newslength-1));
      newslength--;
      myRef.on('value', (snapshot) => {
      const data = snapshot.val();

      let newItem = generateDataBlock(data);
      divContent.appendChild(newItem);
  });
      
    }
    else{
      listEnd.classList.add("hide");
    }
    
  }
  appending = false;
}

function generateDataBlock(message){
  let newItem = document.createElement('div');
  newItem.setAttribute('class', 'newItem');
  newItem.textContent = message;
  return newItem;
}

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
};

let callback = (entries, observer)=>{
  entries.forEach(entry => {
    if (entry.target.id === 'listEnd') {
      if (entry.isIntersecting && !appending) {
        appending = true;
        setTimeout(() => {
          addItems();
        }, 3000);
      }
    }
  });
};

let observer = new IntersectionObserver(callback, options);
observer.observe(listEnd);
