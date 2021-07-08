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

var newsArray = ["Sreenidhi Deccan FC ropes in fullback Arijit Bagui from Mohammedan Sporting","Kerala United FC to rope in Bino George as their head coach","18-year-old goalkeeper Aryan Lamba joins the Kerala United FC","Former I-League winner and SC East Bengal keeper Sankar Roy has joined I-league Side Roundglass Punjab FC","Neroca FC defender Kongbrailatpam Manjit Sharma has extended his contract till 2022",
"Mohammedan SC set to sign Trinidad and Tobago international Marcus Joseph, who won the Durand Cup with Gokulam Kerala FC – KhelNow","EFL Championship side Coventry City and a Cyprus based club are interested in signing Bright Enobakhare – KhelNow.com","Stephen Eze will not be a part of the Jamshedpur FC in the upcoming Indian Super League – thetelegraphindia.com","Mohammedan SC have extended the contract of local lad SK Faiaz for the upcoming season","Trau FC in advance stages to sign Brandon Vanlalremdika from Aizawl FC & Khangam Horam from Neroca FC","Trau FC all set to retain their Brazilian defender Helder Lobato and sent contract paper to their former player Gerard Williams",
"Aizawl FC promotes 5 players – Malsawmzela (forward), Lalfamkima (forward), Lalhnehliana (midfielder), Lalmuanfela (defender), Ramngaihsanga (defender) from their academy to the senior team for the upcoming season","19 year old Attacking midfielder Ridge Melvin Demello, who has represented Indian in the 2018 AFC U-16 Championship, has signed for Mohammedan SC","Kerala Blasters FC are in advanced talks with Australian Centre-Back Dylan McGowan","Mohammedan SC have announced the signing of midfielder Malsawmzuala who has earlier played for clubs like Bengaluru FC, ATK FC, Delhi Dynamos, Sudeva Delhi FC and Jamshedpur FC","Biswajit Bhattacharya joined Southern Samity as new head coach","Sreenidhi Deccan FC has announced the the signing of goalkeeper Shibinraj","Khaidem Vicky Meitei has joined Neroca FC from TRAU FC",
"Khogen Singh, who won the 2017-18 I-League with Minerva Punjab FC , has been appointed as the head coach of NEROCA FC for the upcoming season","Mohammedan SC sign former Sudeva FC and Aizawl FC defender Lalramhmunmawia on a two year deal","Yrondu Musavu-King has signed a contract extension with Bengaluru FC until 2023","Hafiz AM has penned a two year deal with Kerala Premier League side Kerala United FC","Hyderabad FC’s 21-year-old winger Sweden Fernandes will join Neroca FC on a season-long loan move","Goalkeeper Ubaid CK has joined Sreenidhi FC from Gokulam Kerala FC","Neroca FC has signed 23-year-old defender Jonathan Cardozo",
"Neroca FC extends the contract of centre back Manjit Sharma for one more year","Debjit Majumder has penned in a two year deal with Chennaiyin FC","Kabir Toufik has joined Mohammedan SC from Chennai City FC","Debjit Majumdar has announced that he has left SC East Bengal","Chennaiyin FC announces the signing of 25-year-old center-back Salam Ranjan Singh from ATK Mohun Bagan","TRAU FC have announced the signing of forward Joysana Nongthombam from Chennaiyin FC","Sreenidhi Deccan FC are all set to announce the signing of midfielder Lalromawia from Gokulam Kerala FC","Takhellambam Deepak Singh has joined Gokulam Kerala FC from Neroca FC",
"Bikash Jairu is in advanced talks with Chennaiyin FC","Brazilian defender Alan Henrique Costa all set to join Bengaluru FC on a two years loan deal from Brazilian club Avai FC","Sreenidhi Deccan FC are all set to sign 23 year old ex TRAU FC Full-back Shahabaaz Khan – IFTWC","Mohammedan SC is in chase to secure the signature of Balwant Singh","Jamshedpur FC parts ways with Aitor Monroy","I-League new entrants Sreenidhi FC secures the signature of Defensive Midfielder Mayakannan",
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
let newslength = 0;
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
