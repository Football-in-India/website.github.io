var date = document.querySelector(".updateDate");

date.innerHTML = 'Last updated on 1 July 2021'

    var newsArray = ["SAFF Championship 2021 could be played with 5 countries – India, Bangladesh, Nepal, Sri Lanka, Maldives – in Bangladesh from 31st August . SAFF is going to introduce league format in this edition.","IFA in a meeting with all the Premier Division A stakeholders decided to start Calcutta Football League from mid August with matches to be played behind closed door","Damian Willoughby, chief executive of City Football Group India, is set to leave the football club investment group after nearly seven years.","Hyderabad FC have entered into a partnership with Danish sportswear brand hummel who joined as the club’s Official Team Kit Partner for the upcoming 2021-22 season","Kerala Blasters ropes in Six5Six as their new new official kit partner","East Bengal FC have taken steps to resolve the FIFA transfer ban and the disagreements between club officials and the investors are almost resolved – thefangarage.com","Former Indian international Biswajit Bhattacharya has been appointed as the head coach of Kolkata side Southern Samity for the upcoming Calcutta Football League (CFL) season","JKFA Professional League 2021 will start on the 12th of July at the picturesque TRC Turf Ground in Srinagar. Top 2 clubs from the tournament will be nominated for the 2nd Division League by the J&K Football Association","AIFF has recommended Sunil Chhetri for Rajeev Gandhi Khel Ratna award, Bala Devi for Arjuna Award, and Gabriel Joseph for Dronacharya Award","ISL proposes reserve, U-21 league which will be held in Goa from January to March – Times of India",
"Kerala Government to set up under-14 girls’ football academy at Panampilly Nagar in Ernakulam – thehindu.com","Aspiring footballers, including those from the underprivileged section of society, from the traditional sporting hub of Kodagu will get a chance to sharpen their skills and show their class at the Bangalore Football Stadium with the Kodagu FC set to figure in this season's BDFA Super Division league – TOI","Joy Bhattacharjya (project director, 2017 FIFA U-17 WC): “We need to find better people to manage federations. We need a watchdog on federations to ensure they do their job.” – thewire.in",
"East Bengal midfielder Jacques Maghoma clarifies that he has not signed for Spalding United","Carles Cuadrat reveals that it was because of Albert Roca, he had took over as the head coach of Bengaluru FC – KhelNow","FC Goa DOF Ravi Puskur: “It is cheaper to find good foreign players than quality Indian players – TOI",
"Amey Ranawade: “We just do not want to play in the AFC Champions League; we want to win in the tournament. We want to play good attacking football and qualify further (than FC Goa)” – thebridge.in",
"Hero I-League 2021-22 to be held in Kolkata from December","Second Division league to be held at a single venue in Bengaluru in September","Futsal Club Championship will be held in October in Shillong",
"ISL 2021-22: Bengaluru FC will continue to train at the Dempo Academy ground in Old Goa like last season. Kerala Blasters were also keen on the ground but will settle for Parra","Indian women's national team is ranked 55 in the latest FIFA ranking","India's young players now among Asia's best, says AIFF President Praful Patel",
"Stage set for AFC Women’s Asian Cup India 2022 Qualifiers – The 28 teams were drawn into four groups of four and four groups of three, with the winners of each group clinching their place in the AFC Women’s Asian Cup India 2022, scheduled to take place from January 20 to February 6", "FC Goa announce the partnership village club Sporting Club of Porvorim as part of the plan to develop the football ecosystem. With the agreement, FC Goa will provide technical expertise to the club under the guidance of technical Team.", "Sporting Clube will return to top tier soon, national title remains a dream: Natalina Vaz – <i>ToI</i>",
"Kerala Blasters are on the lookout for a tall and physical striker, someone who is injury free. If the club could find a defensive midfielder who can also play as stopper back, Kerala will have only 5 foreign players.",
 "Kerala United FC to extend Arjun Jayaraj’s contract until 2023", "‘FC Goa on the hunt for striker who can score 15 or more goals,’ says club's director Ravi Puskur [ToI]","Hyderabad FC Sign Winger Abdul Rabeeh from Luca SC", "Football Delhi becomes the first Indian sports entity to venture into esports",
  "Back on Track: Dream Sports Foundation lends support to sports professionala", "Sunil Chhetri to stay in Bengaluru FC till 2023, signs new 2-year deal",
"Indian women football clubs' representatives take part in online UEFA marketing workshop", "National team not a factory to produce players: Stimac",
"Indian Football Veterans Renedy Singh, Bembem Devi And Shaji Prabhakaran Join Zinc Football", "Rahim Ali signs up to play for Chennaiyin FC for two more years",
"Hyderabad FC ropes in striker Aaren D'Silva - Sportstar", "Petre Gigiu returns to coach Churchill Bros", "AIFF to organise refresher course for coaches - Eastern Mirror",
"I was surprised to get selected in Bayern U-19 world squad: Shubho Paul", "Kerala Blasters get new head coach as Serbian Ivan Vukomanovic takes up hot seat",
"Alappuzha native Adarsh a step closer to dream, gears up for football stint in Spain", "Hope for more talents like Shubho to come through from India: World Cup winner Klaus Augenthaler",
"Amey Ranawade signs four-year contract extension with Mumbai City FC", "J.LEAGUE has announced an agreement with Sony Pictures Networks India on the broadcasting of the J LEAGUE.",
"East Bengal told to sort out problems quickly by FSDL", "ISL likely in Goa again; Qatar, UAE foreign options"];
  
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
