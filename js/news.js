function getHtml(element) {
    return document.querySelector(element);
  }
  
  // Get datas from API
  // In this case, I'm using a fake API
//   const datas = Array.from({ length: 51 })
//     .map((_, index) => `Item ${index + 1}`);

    var newsArray = ["<b>28 June 2021</b>","East Bengal midfielder James Maghoma clarifies that he has not signed for Spalding United","Carles Cuadrat reveals that it was because of Albert Roca, he had took over as the head coach of Bengaluru FC – KhelNow",
"<b>26 June 2021</b>","Hero I-League 2021-22 to be held in Kolkata from December","Second Division league to be held at a single venue in Bengaluru in September","Futsal Club Championship will be held in October in Shillong",
"<b>25 June 2021</b>","ISL 2021-22: Bengaluru FC will continue to train at the Dempo Academy ground in Old Goa like last season. Kerala Blasters were also keen on the ground but will settle for Parra","Indian women's national team is ranked 55 in the latest FIFA ranking","India's young players now among Asia's best, says AIFF President Praful Patel",
"<b>24 June 2021", "Stage set for AFC Women’s Asian Cup India 2022 Qualifiers – The 28 teams were drawn into four groups of four and four groups of three, with the winners of each group clinching their place in the AFC Women’s Asian Cup India 2022, scheduled to take place from January 20 to February 6", "FC Goa announce the partnership village club Sporting Club of Porvorim as part of the plan to develop the football ecosystem. With the agreement, FC Goa will provide technical expertise to the club under the guidance of technical Team.", "Sporting Clube will return to top tier soon, national title remains a dream: Natalina Vaz – <i>ToI</i>",
"<b>23 June 2021", "Kerala Blasters are on the lookout for a tall and physical striker, someone who is injury free. If the club could find a defensive midfielder who can also play as stopper back, Kerala will have only 5 foreign players.",
    "<b>22 June 2021", "Kerala United FC to extend Arjun Jayaraj’s contract until 2023", "‘FC Goa on the hunt for striker who can score 15 or more goals,’ says club's director Ravi Puskur [ToI]","Hyderabad FC Sign Winger Abdul Rabeeh from Luca SC", "Football Delhi becomes the first Indian sports entity to venture into esports",
  "Back on Track: Dream Sports Foundation lends support to sports professionala", "Sunil Chhetri to stay in Bengaluru FC till 2023, signs new 2-year deal",
"Indian women football clubs' representatives take part in online UEFA marketing workshop", "National team not a factory to produce players: Stimac",
"Indian Football Veterans Renedy Singh, Bembem Devi And Shaji Prabhakaran Join Zinc Football", "Rahim Ali signs up to play for Chennaiyin FC for two more years",
"Hyderabad FC ropes in striker Aaren D'Silva - Sportstar", "Petre Gigiu returns to coach Churchill Bros", "AIFF to organise refresher course for coaches - Eastern Mirror",
"I was surprised to get selected in Bayern U-19 world squad: Shubho Paul", "Kerala Blasters get new head coach as Serbian Ivan Vukomanovic takes up hot seat",
"Alappuzha native Adarsh a step closer to dream, gears up for football stint in Spain", "Hope for more talents like Shubho to come through from India: World Cup winner Klaus Augenthaler",
"Amey Ranawade signs four-year contract extension with Mumbai City FC", "J.LEAGUE has announced an agreement with Sony Pictures Networks India on the broadcasting of the J LEAGUE.",
"East Bengal told to sort out problems quickly by FSDL", "ISL likely in Goa again; Qatar, UAE foreign options"];
  
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
