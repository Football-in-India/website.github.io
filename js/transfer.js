function getHtml(element) {
  return document.querySelector(element);
}

// Get datas from API
// In this case, I'm using a fake API
//   const datas = Array.from({ length: 51 })
//     .map((_, index) => `Item ${index + 1}`);

  var newsArray = ["<b>29 June 2021</b>","Churchill Brothers have extended the contract of young midfielder Shubert Pereira till 2023","David Grande bids adieu to Jamshedpur FC after one and a half seasons at the club","Churchill Brothers have signed 23-year old Midfielder/Left Winger Varun Thockchom from Neroca FC","Salam Ranjan Singh signs multi-year contract with Chennaiyin FC – IFTWC","Bengaluru FC announces the signing of Rohit Kumar from Kerala Blasters","Bengaluru FC completes the signing of former Aston Villa centre-forward Rudy Gestede","Chennaiyin FC confirm the signing of Narayan Das on a 2-year deal","25 year old ATK Mohun Bagan Centre-Back Salam Ranjan Singh is in talks with Chennaiyin FC","TRAU FC sign East Bengal U19 Left Wing Back Bikash Singh Sagolshem","ATK Mohun Bagan announces the signing of Deepak Tangri","Singam Subash Singh all set to join FC Bengaluru United from Mohammedan SC",
"<b>28 June 2021</b>","East Bengal midfielder Jacques Maghoma clarifies that he has not signed for Spalding United","ATK Mohun Bagan has completed the signings of Deepak Tangri and Ashutosh Mehta","Neroca FC sign Young goalkeeper Prateek Kumar Singh","Juanan is in talks with Hyderabad FC; Odisha FC and another ISL club is also interested in him – KhelNow","Bengaluru FC parts ways with defender Juan Gonzalez",
"<b>27 June 2021</b>","Mohammedan SC Retains the services of Azharuddin Mallick Till 2023","Sreenidhi FC rope in 20-year-old defender Lalchungnunga","Samad Ali Mallik is set to join I-League debutants Sreenidhi FC for the upcoming season",
"<b>26 June 2021</b>","Jamshedpur FC sign striker Jordan Murray on two-year deal | KhelNow","Odisha FC sign Isaac Vanmalsawma on two-year deal | KhelNow","Churchill Brothers In Advanced Talks To Sign Shadi Skaf | IFTWC","Debjit Majumder is in advanced talks with Chennaiyin FC | IFTWC","Narayan Das set to join Chennaiyin FC | The Final Whistle","FC Goa have triggered a two-year extension in Ishan Pandita’s contract but will allow the striker to leave if the opportunity arises to play in Europe | TOI","Neroca FC roped in former Punjab FC defender Danilo Quipapa","Neroca FC have retained the services of youngster Benjamin Lupheng","Former East Bengal FC player Jacques Maghoma has joined Spalding United in England","Mohammedan SC are set to rope in wingback Lalramchullova from East Bengal","Centre Back PC Laldinpuia has signed for Jamshedpur FC",
"<b>25 June 2021</b>","FC Goa completes the signing of Nongdamba Naorem on a multi-year deal","Azharuddin Mallik haa extended his contract with Mohammedan SC till the end of the 2022-23 season","Midfielder Krishnananda Singh has signed for Gokulam Kerala FC","Chennaiyin FC retain right-back Reagan Singh till 2023","Sreenidhi FC have announced the signing of Dinesh Singh from TRAU FC",
"<b>24 June 2021</b>", "Former Odisha FC and current Kaizer Chiefs head coach Stuart Baxter wants to Sign Cole Alexander who has contract for another year with Odisha FC", "Luis Machado leaves NorthEast United FC for a stint in Poland", "ATK Mohun Bagan announces the signing of Finnish midfielder Joni Kauklovan who has played in all their three Euro Cup 2020 matches", "Mohammedan SC extends the contract of Sanjib Ghosh till 2023", "ATK Mohun Bagan are eyeing multiple players from Euro Cup - in talks with Finnish midfielder Joni KaukoIvan and Trickovski who plays as striker for North Macedonia", "FC Goa has signed Sporting Clube de Goa defender Kunal Kundaikar on a three-year deal",
"<b>23 June 2021</b>", "Suresh Singh extends contract with Bengaluru FC until 2024", "Neroca FC announces the signing of 21-year-old Manipuri defender Mohammed Salam", "Bengaluru FC completes the signing of I-league 2020-21 golden boot winner Bidyashagar Singh", "Aleksandar Susnjar, who was reportedly in talks with Kerala Blasters, will not join the club", "Gokulam Kerala’s 23 year-old midfielder Shibil Muhammed is all set to join Sreenidhi FC – <i>IFTWC</i>", "Australian young Center Back Aleksandar Susnjar in advanced talks with Kerala Blasters", "Neroca FC sign Vicky Metei on a two-year deal", "Kerala United FC to extend Arjun Jayaraj’s contract until 2023","Nikita Rukavytsya, who was rumoured to be linked with ATK Mohun Bagan, will not be coming to India",
"<b>22 June 2021</b>", "Gokulam Kerala set to sign former Santhosh Trophy winner Midhun", "Hyderabad FC Sign Winger Abdul Rabeeh from Luca SC", "ATK Mohun Baga ropes in Finland international Joni Kauko, who has featured in all the three matches of ongoing UEFA Euro Cup",
"Mohammedan SC completes the signing of Sushil Meetei", "Kerala United sign Kalliyath Salman from Gokulam Kerala", "Australian striker Nikita Rukavytsya in in the radar of ATK Mohun Bagan",
"Jamshedpur FC & NorthEast United FC are interested in Michael Regin", "Sunil Chhetri extends the contract with Brngaluru FC till 2023", "FC goa are interested in former Man City striker Wlfred Bony",
"Chennaiyin FC, Sreenidhi FC  & Churchill Brothers are interested in Wayne Vaz", "Churchill Brothers appoints Romanian Peter Gigiu as their head coach", "Ivan Vukomanovic joins Kerala Blasters as head coach",
"Gary Hooper has returned to Wellington Phoenix after a breif stint with Kerala Blaters"];

// Define application states like actual page, total pages...
let perPage = 6;
const states = {
  page: 1,
  perPage,
  totalPages: Math.ceil(newsArray.length / perPage),
  maxVisibleButtons: 3,
}

// Corresponding to the list of items
const list = {
  element: getHtml('.list'),
  // Create a new item for the list
  create(item) {
    const div = document.createElement('div');
    div.classList.add('item');
    div.innerHTML = item;

    list.element.appendChild(div);
  },
  // Update the list
  update() {
    list.element.innerHTML = '';

    const start = (states.page - 1) * states.perPage;
    const end = start + states.perPage;

    const items = newsArray.slice(start, end);

    items.forEach(list.create);
  }
}

// Corresponding to the application controls
// How to go to the previous page, next page, or go to a specifically page
const controls = {
  // Pŕevious button
  prev() {
    states.page--;
    if (states.page < 1) {
      states.page = 1;
    }
  },
  // Next button
  next() {
    states.page++;
    if (states.page > states.totalPages) {
      states.page = states.totalPages;
    }
  },
  // Go to the corresponding page
  goTo(page) {
    states.page = page;
  },
}

// Corresponding to the numbers that identify the application pages
const buttons = {
  element: getHtml('.numbers'),
  // Create buttons/numbers on the screen
  create(number) {
    const div = document.createElement('div');
    div.innerHTML = number;

    if (number === states.page) {
      div.classList.add('active');
    }

    // Add event click to buttons/numbers
    // When I click, I go to the corresponding page and update the list
    div.addEventListener('click', (e) => {
      controls.goTo(Number(e.target.innerHTML));
      update();
    })

    buttons.element.append(div);
  },
  // Update buttons/numbers on the screen
  update() {
    buttons.element.innerHTML = '';

    // Define two numbers before(left) and after(right) the active page
    let leftVisible = states.page - Math.floor(states.maxVisibleButtons / 2);
    let rightVisible = states.page + Math.floor(states.maxVisibleButtons / 2);

    if (leftVisible < 1) {
      leftVisible = 1;
      rightVisible = states.maxVisibleButtons;
    }

    if (rightVisible > states.totalPages) {
      rightVisible = states.totalPages;
      leftVisible = states.totalPages - states.maxVisibleButtons + 1;
    }

    for (let page = leftVisible; page <= rightVisible; page++) {
      buttons.create(page);
    }
  },
  // Add events for each button on the screen
  addEvents() {
    getHtml('.first').addEventListener('click', () => {
      controls.goTo(1);
      update();
    });

    getHtml('.last').addEventListener('click', () => {
      controls.goTo(states.totalPages);
      update();
    });

    // getHtml('.prev').addEventListener('click', () => {
    //   controls.prev();
    //   update();
    // });

    // getHtml('.next').addEventListener('click', () => {
    //   controls.next();
    //   update();
    // });
  }
}

// Update the list and buttons/numbers
function update() {
  list.update();
  buttons.update();
}

// Launch the application with the update function and add events to the buttons
function init() {
  update();
  buttons.addEvents();
}

// Launching the application
init()
