var date = document.querySelector(".updateDate");

date.innerHTML = 'Last updated on 2 July 2021'

var newsArray = ["Takhellambam Deepak Singh has joined Gokulam Kerala FC from Neroca FC","Bikash Jairu is in advanced talks with Chennaiyin FC","Brazilian defender Alan Henrique Costa all set to join Bengaluru FC on a two years loan deal from Brazilian club Avai FC","Sreenidhi Deccan FC are all set to sign 23 year old ex TRAU FC Full-back Shahabaaz Khan – IFTWC","Mohammedan SC is in chase to secure the signature of Balwant Singh","Jamshedpur FC parts ways with Aitor Monroy","I-League new entrants Sreenidhi FC secures the signature of Defensive Midfielder Mayakannan",
"Churchill Brothers have extended the contract of young midfielder Shubert Pereira till 2023","David Grande bids adieu to Jamshedpur FC after one and a half seasons at the club","Churchill Brothers have signed 23-year old Midfielder/Left Winger Varun Thockchom from Neroca FC","Salam Ranjan Singh signs multi-year contract with Chennaiyin FC – IFTWC","Bengaluru FC announces the signing of Rohit Kumar from Kerala Blasters","Bengaluru FC completes the signing of former Aston Villa centre-forward Rudy Gestede","Chennaiyin FC confirm the signing of Narayan Das on a 2-year deal","25 year old ATK Mohun Bagan Centre-Back Salam Ranjan Singh is in talks with Chennaiyin FC","TRAU FC sign East Bengal U19 Left Wing Back Bikash Singh Sagolshem","ATK Mohun Bagan announces the signing of Deepak Tangri","Singam Subash Singh all set to join FC Bengaluru United from Mohammedan SC",
"East Bengal midfielder Jacques Maghoma clarifies that he has not signed for Spalding United","ATK Mohun Bagan has completed the signings of Deepak Tangri and Ashutosh Mehta","Neroca FC sign Young goalkeeper Prateek Kumar Singh","Juanan is in talks with Hyderabad FC; Odisha FC and another ISL club is also interested in him – KhelNow","Bengaluru FC parts ways with defender Juan Gonzalez",
"Mohammedan SC Retains the services of Azharuddin Mallick Till 2023","Sreenidhi FC rope in 20-year-old defender Lalchungnunga","Samad Ali Mallik is set to join I-League debutants Sreenidhi FC for the upcoming season",
"Jamshedpur FC sign striker Jordan Murray on two-year deal | KhelNow","Odisha FC sign Isaac Vanmalsawma on two-year deal | KhelNow","Churchill Brothers In Advanced Talks To Sign Shadi Skaf | IFTWC","Debjit Majumder is in advanced talks with Chennaiyin FC | IFTWC","Narayan Das set to join Chennaiyin FC | The Final Whistle","FC Goa have triggered a two-year extension in Ishan Pandita’s contract but will allow the striker to leave if the opportunity arises to play in Europe | TOI","Neroca FC roped in former Punjab FC defender Danilo Quipapa","Neroca FC have retained the services of youngster Benjamin Lupheng","Former East Bengal FC player Jacques Maghoma has joined Spalding United in England","Mohammedan SC are set to rope in wingback Lalramchullova from East Bengal","Centre Back PC Laldinpuia has signed for Jamshedpur FC",
"FC Goa completes the signing of Nongdamba Naorem on a multi-year deal","Azharuddin Mallik haa extended his contract with Mohammedan SC till the end of the 2022-23 season","Midfielder Krishnananda Singh has signed for Gokulam Kerala FC","Chennaiyin FC retain right-back Reagan Singh till 2023","Sreenidhi FC have announced the signing of Dinesh Singh from TRAU FC",
"Former Odisha FC and current Kaizer Chiefs head coach Stuart Baxter wants to Sign Cole Alexander who has contract for another year with Odisha FC", "Luis Machado leaves NorthEast United FC for a stint in Poland", "ATK Mohun Bagan announces the signing of Finnish midfielder Joni Kauklovan who has played in all their three Euro Cup 2020 matches", "Mohammedan SC extends the contract of Sanjib Ghosh till 2023", "ATK Mohun Bagan are eyeing multiple players from Euro Cup - in talks with Finnish midfielder Joni KaukoIvan and Trickovski who plays as striker for North Macedonia", "FC Goa has signed Sporting Clube de Goa defender Kunal Kundaikar on a three-year deal",
"Suresh Singh extends contract with Bengaluru FC until 2024", "Neroca FC announces the signing of 21-year-old Manipuri defender Mohammed Salam", "Bengaluru FC completes the signing of I-league 2020-21 golden boot winner Bidyashagar Singh", "Aleksandar Susnjar, who was reportedly in talks with Kerala Blasters, will not join the club", "Gokulam Kerala’s 23 year-old midfielder Shibil Muhammed is all set to join Sreenidhi FC – <i>IFTWC</i>", "Australian young Center Back Aleksandar Susnjar in advanced talks with Kerala Blasters", "Neroca FC sign Vicky Metei on a two-year deal", "Kerala United FC to extend Arjun Jayaraj’s contract until 2023","Nikita Rukavytsya, who was rumoured to be linked with ATK Mohun Bagan, will not be coming to India",
"Gokulam Kerala set to sign former Santhosh Trophy winner Midhun", "Hyderabad FC Sign Winger Abdul Rabeeh from Luca SC", "ATK Mohun Baga ropes in Finland international Joni Kauko, who has featured in all the three matches of ongoing UEFA Euro Cup",
"Mohammedan SC completes the signing of Sushil Meetei", "Kerala United sign Kalliyath Salman from Gokulam Kerala", "Australian striker Nikita Rukavytsya in in the radar of ATK Mohun Bagan",
"Jamshedpur FC & NorthEast United FC are interested in Michael Regin", "Sunil Chhetri extends the contract with Brngaluru FC till 2023", "FC goa are interested in former Man City striker Wlfred Bony",
"Chennaiyin FC, Sreenidhi FC  & Churchill Brothers are interested in Wayne Vaz", "Churchill Brothers appoints Romanian Peter Gigiu as their head coach", "Ivan Vukomanovic joins Kerala Blasters as head coach",
"Gary Hooper has returned to Wellington Phoenix after a breif stint with Kerala Blaters"];

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
