var date = document.querySelector(".updateDate");

date.innerHTML = 'Last updated on 29 June 2020'

    var newsArray = ["Rajasthan United FC: U-13, U-15 & U-20; July 3, July 5, July 6; Visit @rajasthanunitedfc Instagram page for more details",
"Shridh Bihar United FC (senior team)","Techto Swades United (senior team)"];
  
let divContent = document.getElementById('divContent');
let listEnd = document.getElementById('listEnd');
let itemCount = 0;
let appending = false;

window.addEventListener('DOMContentLoaded', load);
function load(){
  addItems();
}

function addItems(){
  appending = true;
  for(let i =0 ; i<10; i++){
    if (itemCount < newsArray.length) {
      let newItem = generateDataBlock(newsArray[itemCount]);
    divContent.appendChild(newItem);
    itemCount++;
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
