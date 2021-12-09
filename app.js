
//DOM Selected Elements
const introText = document.querySelector('div.intro-text');
const introHeading = document.querySelector('h1');
const showMore = document.querySelector('#showMore');
const showMoreOne = document.querySelector('#showMore-1');
const cabinetDiv = document.querySelector('#cabinet');
const hiddenText = document.querySelector('#hide-1');
const main = document.querySelector('main');

// Show Introduction text after 2s
setTimeout(revealText, 2000);
function revealText(){
  introText.style.display = 'block';
}

//Event Listners on h1
introHeading.addEventListener('mouseover', titleTransform);
introHeading.addEventListener('mouseout', titleInitial);

//titleTransform & titleInitial functions
function titleTransform(){
  introHeading.textContent = 'Akwaaba';
}

function titleInitial(){
  introHeading.textContent = 'Welcome';
}

//Showmore Event Listner
showMore.addEventListener('click', textReveal);

//textReveal Function
function textReveal(){
  if(hiddenText.style.display === 'block'){
    showMore.textContent = 'Read More';
    hiddenText.style.display = 'none';
  } else{
    showMore.textContent = 'Hide';
    hiddenText.style.display = 'block';
  }
}

//Showmore One Event Listner
showMoreOne.addEventListener('click', cabinetReveal);

//CabinetReveal Function
function cabinetReveal(){
  if(cabinetDiv.style.display === 'block'){
    showMoreOne.textContent = 'Show Cabinet';
    cabinetDiv.style.display = 'none';
  } else{
    showMoreOne.textContent = 'Hide';
    cabinetDiv.style.display = 'block';
  }
}

// Cabinet array
const cabinet = [
  {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Plenary_session%2C_12_December_morning_%2824172415987%29_Alan_John_Kyerematen.jpg/220px-Plenary_session%2C_12_December_morning_%2824172415987%29_Alan_John_Kyerematen.jpg', 
  name:'Alan Kyeremanten',
  position:'	Ministry of Trade and Industry', 
  term: '2017'
  },
  {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Ken_Ofori-Atta.jpg/220px-Ken_Ofori-Atta.jpg', 
  name:'Ken Ofori-Atta',
  position:'	Ministry of Finance', 
  term: '2017'
  },
  {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Dominic_Nitiwul.jpg/220px-Dominic_Nitiwul.jpg', 
  name:'Dominic Nitiwul',
  position:'	Ministry of Defence', 
  term: '2017'
  },
  {imgUrl: 'https://thevaultznews.com/wp-content/uploads/2021/03/ambrose.jpeg', 
  name:'	Ambrose Dery',
  position:'		Ministry of The Interior', 
  term: '2017'
  },
  {imgUrl: 'https://cdn.ghanaweb.com/imagelib/pics/864/86461507.jpg', 
  name:'Boakye Agyarko',
  position:'Ministry of Energy', 
  term: '2017'
  },
  {imgUrl: 'https://bestnewsgh.com/wp-content/uploads/2018/10/GLORIA-AKUFFO.png', 
  name:'	Gloria Akuffo',
  position:'Office of Attorney General and Ministry of Justice', 
  term: '2017'
  },
  {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Shirley_Ayorkor_Botchway.jpg/220px-Shirley_Ayorkor_Botchway.jpg', 
  name:'Shirley Ayorkor Botchway',
  position:'	Ministry of Foreign Affairs', 
  term: '2017'
  },
  {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Owusu_Afriyie_Akoto_2019_%28cropped%29.jpg/220px-Owusu_Afriyie_Akoto_2019_%28cropped%29.jpg', 
  name:'Dr. Owusu Afriyie Akoto',
  position:'Ministry of Food and Agriculture', 
  term: '2017'
  },
  {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Matthew_Opoku_Prempeh.jpg', 
  name:'	Dr. Matthew Opoku Prempeh',
  position:'Ministry of Education', 
  term: '2017'
  },
  {imgUrl: 'https://www.moh.gov.gh/wp-content/uploads/2020/05/Kwaku.jpg', 
  name:'Kwaku Agyemang-Manu',
  position:'Ministry of Education', 
  term: '2017'
  },
  {imgUrl: 'https://ghanamps.com/wp-content/uploads/2020/11/old_tafo_mp_2017.jpg', 
  name:'Dr. Anthony Akoto Osei',
  position:'	Minister of Monitoring and Evaluation', 
  term: '2017'
  },
  {imgUrl: 'https://newsghana.com.gh/wp-content/uploads/2021/02/daniel-kweku-botwe.jpg', 
  name:'Dan Kweku Botwe',
  position:'Ministry of Regional Reorganization and Development', 
  term: '2017'
  },
  {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/JOHN_-_PETER_AMEWU.jpg/220px-JOHN_-_PETER_AMEWU.jpg', 
  name:'	John Peter Amewu',
  position:'Ministry of Lands and Natural Resources', 
  term: '2017'
  },
  {imgUrl: 'https://www.myjoyonline.com/wp-content/uploads/2020/05/kofi-adah.jpg', 
  name:'Joseph Kofi Adda',
  position:'Ministry of Sanitation and Water Resources', 
  term: '2017'
  },
  {imgUrl: 'https://cdn.modernghana.com/content__/500/330/92202195504-1j841p5cbv-screenshot_20200603-102942.png', 
  name:'Joe Ghartey',
  position:'Ministry of Railway Development', 
  term: '2017'
  },
  {imgUrl: 'https://cdn.ghanaweb.com/imagelib/pics/262/26260277.295.jpg', 
  name:'Ignatius Bafuor Awuah',
  position:'Ministry of Employment and Labour Relations', 
  term: '2017'
  },
  {imgUrl: 'https://cdn.ghanaweb.com/imagelib/pics/839/83990414.jpg', 
  name:'Kweku Ofori Asiamah',
  position:'Ministry of Transport', 
  term: '2017'
  },
  {imgUrl: 'https://live.worldbank.org/sites/default/files/styles/medium/public/experts/hon-catherineafeku-240_3.jpg?itok=sbM9WKTN', 
  name:'Catherine Afeku',
  position:'Ministry of Tourism, Arts and Culture', 
  term: '2017'
  },
  {imgUrl: 'https://pbs.twimg.com/profile_images/1308747645998051329/HdGBnpIr_400x400.jpg', 
  name:'Mavis Hawa Koomson',
  position:'Ministry of Special Development Initiative', 
  term: '2017'
  },
  {imgUrl: 'https://fcwc-fish.org/wp-content/uploads/2018/03/elizabeth-afoley-quaye-ghana-fisheries-minister-smile-960x650.jpg', 
  name:'Elizabeth Afoley Quaye',
  position:'Ministry of Fisheries and Aquaculture Development', 
  term: '2017'
  },
  {imgUrl: 'https://ghextractives.com/wp-content/uploads/2020/12/owuraku-aidoo.jpe', 
  name:'	William Owuraku Aidoo',
  position:'Deputy minister (Ghana)', 
  term: '2017'
  }
];

let msg= "";
cabinet.forEach(function(x){
  let array = x;
  msg += `
  <div class="cabDiv px-3 col">
  <img src=${array.imgUrl} class="img-2">
  <h1 class="display-6">${array.name}</h1>
  <h1 class="display-6">${array.position}</h1>
  <h1 class="display-6">${array.term}</h1>
  </div>
  `;
  return msg;
});

main.innerHTML = msg;