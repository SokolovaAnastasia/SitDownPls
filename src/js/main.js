
var lazyLoadInstance = new LazyLoad({
  elements_selector: ".lazy"
});


// свойперы
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
 0: {
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroup: 1
 },
    650: {
      slidesPerView: 1,
      slidesPerGroup: 2,
      slidesPerGroup: 1
    },
    950: {
      slidesPerView: 2,
      spaceBetween: 33,
      slidesPerGroup: 2
    },
    1250: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3

    }
  }
});

var swiper3 = new Swiper(".mySwiper3", {

  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1250: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1920: {
      slidesPerView: 2,
      spaceBetween: 40
    },
  }
});

var swiper4 = new Swiper(".mySwiper4", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper5 = new Swiper(".mySwiper5", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    950: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1250: {
      slidesPerView: 4,
      spaceBetween: 32
    },
  }
});
var swiper6 = new Swiper(".mySwiper6", {
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  grid: {
    fill: 'colomn',
    rows: 3
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class=" catalogright__swiperpagination ' + className + '">' + (index + 1) + "</span>";
    },
  },
  slidesPerGroup: 3,
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {

    0: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 16,
      grid: {
        fill: 'colomn',
        rows: 3
      },
    },
    950: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 30,
      grid: {
        fill: 'colomn',
        rows: 3
      },
    },
    1250: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 30,
      grid: {
        fill: 'colomn',
        rows: 3
      },
    },
    1920: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 30,
      grid: {
        fill: 'colomn',
        rows: 3
      },
    }
  }
});
var swiper7 = new Swiper(".mySwiper7", {
  spaceBetween: 55,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 70,
    },
    950: {
      slidesPerView: 3,
    },
    1250: {
      slidesPerView: 4,
    },
  }
});
var swiper8 = new Swiper(".mySwiper8", {
  spaceBetween: 50,
  slidesPerView: 1,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper7,
  },
  breakpoints: {
    320: {
      spaceBetween: 16
    },
    950: {
      spaceBetween: 70
    },
    1250: {
      spaceBetween: 50
    },
  }
});


// попап
if (window.location.href.includes('index') === true) {
  tippy('#myButton', {
  content: "Реплицированные с зарубежных источников, исследования формируют глобальную сеть.",
});
}





// константы
let buyClick = document.querySelectorAll('.card__rightbtn')
const containermodal = document.querySelectorAll('.containermodalformbuy')
const containermodalclose = document.querySelectorAll('.containermodalformbuy__close')[0]
const containermodalBtn = document.querySelectorAll('.containermodalformbuy__btn')
const cardLeftBtn = document.querySelectorAll('.card__left_btn')
const cardLeftCont = document.querySelectorAll('.card__left_cont')
const body = document.getElementsByTagName('body')
const cardLeftImg = document.querySelectorAll('.card__leftimg')[0]
const modalimgs = document.querySelectorAll('.modalimgs')[0]
const cardLeftContainer = document.querySelectorAll('.card__left_container')[0]
const thankyouBtn = document.querySelectorAll('.thankyou__btn')[0]

// изменение положения купить в один клик
const cardRightcontainer768 = document.querySelectorAll('.card__rightcontainer768')[0]
const cardRightcontainer1920 = document.querySelectorAll('.card__rightcontainer1920')[0]

if (cardRightcontainer768 || cardRightcontainer1920) {

  function resizes() {
    const screenWidth2 = window.screen.width


    if (screenWidth2 <= 950) {
      cardRightcontainer1920.classList.add('none')
      cardRightcontainer768.classList.remove('none')
    }
    if (screenWidth2 > 950) {
      cardRightcontainer768.classList.add('none')
      cardRightcontainer1920.classList.remove('none')
    }

  }
  resizes()


  window.addEventListener('resize', function () {
    resizes()
  });

}

function resizes320() {
  const screenWidth2 = window.screen.width
  const sectiononeBtn = document.querySelectorAll('.sectionone__btn')[0]
  const sectiononeBtn2 = document.querySelectorAll('.sectionone__btn2')[0]

  const sectionfoureBtn = document.querySelectorAll('.sectionfoure__btn')[0]
  const sectionfoureBtn2 = document.querySelectorAll('.sectionfoure__btn2')[0]

  const sectionfiveLinccatalog = document.querySelectorAll('.sectionfive__linccatalog320')
  const sectionfiveLinccatalog2 = document.querySelectorAll('.sectionfive__linccatalog3202')

  if (screenWidth2 <= 650 && sectiononeBtn) {
    sectiononeBtn.classList.add('none')
    sectiononeBtn2.classList.remove('none')
    sectionfoureBtn.classList.add('none')
    sectionfoureBtn2.classList.remove('none')

    for (let i = 0; i < sectionfiveLinccatalog.length; i++) {
      sectionfiveLinccatalog[i].classList.add('none')
      sectionfiveLinccatalog2[i].classList.remove('none')
      sectionfiveLinccatalog2[i].innerHTML = ''
    }

  }
  if (screenWidth2 > 650 && sectiononeBtn) {
    sectiononeBtn.classList.remove('none')
    sectiononeBtn2.classList.add('none')
    sectionfoureBtn.classList.remove('none')
    sectionfoureBtn2.classList.add('none')

    for (let i = 0; i < sectionfiveLinccatalog.length; i++) {
      sectionfiveLinccatalog[i].classList.remove('none')
      sectionfiveLinccatalog2[i].classList.add('none')
    }
  }
}
resizes320()
window.addEventListener('resize', function () {
  resizes320()
});


// нажатие на купить в один клик
if (buyClick) {
  for (let e = 0; e < buyClick.length; e++) {
    buyClick[e].addEventListener('click', function () {
      containermodal[0].classList.add('containermodalformbuy__active')
      body[0].classList.add('bodyActive')
    })
  }
}





if (containermodalclose) {
  containermodalclose.addEventListener('click', function () {
    containermodal[0].classList.remove('containermodalformbuy__active')
    body[0].classList.remove('bodyActive')
  })
}
if (thankyouBtn) {
  thankyouBtn.addEventListener('click', function () {
    const thankyou = document.querySelectorAll('.thankyou')
    thankyou[0].classList.remove('thankyou__active')
    body[0].classList.remove('bodyActive')
  })
}

// нажатие отправить в модалке купить в один клик
if (containermodalBtn[0]) {
  containermodalBtn[0].addEventListener('click', function (event) {

    const fio = document.querySelectorAll('.containermodalformbuy__inpfio')[0]
    const tel = document.querySelectorAll('.containermodalformbuy__inptel')[0]
    const agreement = document.getElementById('agreements')
    const thankyou = document.querySelectorAll('.thankyou')

    if (fio !== "" && tel !== "" && agreement.checked === true) {

      thankyou[0].classList.add('thankyou__active')
      containermodal[0].classList.remove('containermodalformbuy__active')
      tel.value = ''
      fio.value = ''
      agreement.checked = false
    }
  })
}



// карточка товара нажатие на главное изображение
if (cardLeftImg) {
  cardLeftImg.addEventListener('click', function () {
    body[0].classList.add('bodyActive')
    modalimgs.classList.add('modalimgs__active')
    cardLeftContainer.classList.add('cardLeftContainerNone')
  })
  const modalimgsBtn = document.querySelectorAll('.modalimgs__btn')[0]

  if (modalimgsBtn) {
    modalimgsBtn.addEventListener('click', function () {
      body[0].classList.remove('bodyActive')
      modalimgs.classList.remove('modalimgs__active')
      cardLeftContainer.classList.remove('cardLeftContainerNone')
    })
  }
}



// для кастомного селекта
const element = document.querySelector('#selectCustom');
const choices = new Choices(element);


const elements = document.querySelector('#selectCustoms');
const choicess = new Choices(elements);
// эта функция убирает из списка выбранный город
function selectсhange() {
  const choicesListSingle = document.querySelectorAll('.choices__list--single')
  const choicesItemChoice = document.querySelectorAll('.choices__item--choice')

  for (let el of choicesItemChoice) {
    if (el.getAttribute("data-value") === choicesListSingle[0].children[0].getAttribute("data-value")) {
      el.classList.add('choicesItemChoiceNone')
    }
    if (el.getAttribute("data-value") === choicesListSingle[1].children[0].getAttribute("data-value")) {
      el.classList.add('choicesItemChoiceNone')
    }
  }
}
selectсhange()
const choicesList = document.querySelectorAll('.choices__list')
choicesList[0].addEventListener('click', function () {
  selectсhange()
})

choicesList[3].addEventListener('click', function () {
  selectсhange()
})




// делаю цветной последнюю хлебную крошку
const navheaderListlink = document.querySelectorAll('.navheader__listlink')
for (let i = 0; i < navheaderListlink.length; i++) {
  if (i === navheaderListlink.length - 1) {
    navheaderListlink[i].classList.add('navheader__listlinkactiv')

  }

}
if (window.location.href.includes('catalog') === true) {
$(function () {
  $("#slider-range").slider({
    range: true,
    animate: "slow",
    step: 10,
    min: 0,
    max: 220000,
    values: [2000, 150000],
    slide: function (event, ui) {
      $("#amount").val(ui.values[0]);
      $("#amount2").val(ui.values[1]);
    },
  });
  $("#amount").val($("#slider-range").slider("values", 0));
  $("#amount2").val($("#slider-range").slider("values", 1));
});

}

// создаем клик по категориям в адаптивах
const categorys = document.getElementById('categorys')
const category = document.getElementById('category')

const prices = document.getElementById('prices')
const price = document.getElementById('price')

const discounts = document.getElementById('discounts')
const discount = document.getElementById('discount')

const colors = document.getElementById('colors')
const color = document.getElementById('color')

function filter1024(categorys, category) {

  categorys.addEventListener('click', function () {
    category.classList.toggle('block')
    categorys.classList.toggle('blockbtns')

  })
};
if (categorys) {
  filter1024(categorys, category)
  filter1024(prices, price)
  filter1024(discounts, discount)
  filter1024(colors, color)
}


// добавляем выбранные фильтры
const screenWidth = window.screen.width
const catalogrightAllfilter = document.querySelectorAll('.catalogright__allfilter')[0]
const catalogleftInpcheck = document.querySelectorAll('.catalogleft__inpcheck')
const amount = document.getElementById('amount1024')
const amount2 = document.getElementById('amount21024')
const catalogleftSwitchinput = document.querySelectorAll('.catalogleft__switchinput')

if (screenWidth < 1250) {
  // функция убирает фильтр по нажатию на крестик
  function closeBtsFilter() {
    let catalogleftBtn = document.querySelectorAll('.catalogleft__btn')
    let catalogleftCategorylist = document.querySelectorAll('.catalogleft__categoryitem')
    for (let q = 0; q < catalogleftBtn.length; q++) {
      catalogleftBtn[q].addEventListener('click', function () {
        for (let t = 0; t < catalogleftCategorylist.length; t++) {
          if (catalogleftCategorylist[t].children[0].value === catalogleftBtn[q].parentElement.children[0].textContent) {
            catalogleftCategorylist[t].children[0].checked = false
          }
        }
        // далее очищаем поле ввода для ограничения суммы
        const catalogleftSwitchinput = document.querySelectorAll('.catalogleft__switchinput')
        for (let o = 0; o < catalogleftSwitchinput.length; o++) {
          if (catalogleftSwitchinput[o].value === (catalogleftBtn[q].parentElement.children[0].textContent.slice(3, 20))) {
            catalogleftSwitchinput[o].value = ''
          }
        }
        catalogleftBtn[q].parentElement.remove()
      })
    }
  }
  function amountsis(amounts, pretext, frombefore) {
    amounts.addEventListener('focusout', function () {
      for (let a = 0; a < catalogrightAllfilter.children.length; a++) {
        if ((catalogrightAllfilter.children[a].textContent.slice(0, 2) === pretext) === true) {
          catalogrightAllfilter.children[a].remove(catalogrightAllfilter.children[a])
        }

      }
      if (amounts.value !== '') {
        catalogrightAllfilter.insertAdjacentHTML('beforeend', `<li class = "catalogleft__dopfilter  price"><p class = "catalogleft__dopfiltertext">${frombefore} ${amounts.value}</p><button class="catalogleft__btn btn"></button></li>`)
      }
      closeBtsFilter()
    })

  }
  if (amount) {
    amountsis(amount, 'От', 'От')
    amountsis(amount2, 'До', 'До')
  }


  for (let i = 0; i < catalogleftInpcheck.length; i++) {

    catalogleftInpcheck[i].addEventListener('click', function () {

      if (catalogleftInpcheck[i].checked === true) {
        catalogrightAllfilter.insertAdjacentHTML('beforeend', `<li class = "catalogleft__dopfilter"><p class = "catalogleft__dopfiltertext">${catalogleftInpcheck[i].value}</p><button class="catalogleft__btn btn"></button></li>`)
      }
      if (catalogleftInpcheck[i].checked === false) {
        for (let a = 0; a < catalogrightAllfilter.children.length; a++) {
          if (catalogleftInpcheck[i].value == catalogrightAllfilter.children[a].textContent) {
            catalogrightAllfilter.children[a].remove(catalogleftInpcheck[i])
          }
        }
      }

      if (catalogleftInpcheck[i].parentElement.parentElement.id === 'discount') {
        // проходим по каждому li из списка с дисконтом
        const allDiskont = catalogleftInpcheck[i].parentElement.parentElement.children
        for (let a = 0; a < allDiskont.length; a++) {
          // если чекбокс активный и текст его не совпадает с тем текстом куда мы нажимаем то делаем его неактивным

          if (allDiskont[a].children[0].checked === true && allDiskont[a].children[0].value !== catalogleftInpcheck[i].value) {
            allDiskont[a].children[0].checked = false
            for (let v = 0; v < catalogrightAllfilter.children.length; v++) {
              // если в общем списке фильтров есть ненужный фильтр то удалим его
              if (catalogrightAllfilter.children[v].children[0].textContent === allDiskont[a].children[0].value) {
                catalogrightAllfilter.children[v].remove()
              }
            }
          }

        }

      }
      closeBtsFilter()
      function colorsLastChild(id) {
        if (catalogleftInpcheck[i].parentElement.parentElement.id === id) {
          catalogrightAllfilter.lastChild.classList.add(id)
        }
      }
      colorsLastChild('discount')
      colorsLastChild('category')
      colorsLastChild('color')
    })
  }
  // делаем бургер
  const burger = document.getElementById('burger')
  const middleheaderNavigation = document.querySelectorAll('.middleheader__navigation')[0]
  const topheaderList = document.querySelectorAll('.topheader__list')
  burger.addEventListener('click', function () {
    middleheaderNavigation.classList.toggle('middleheader__navigationactive')
    burger.classList.toggle('middleheader__burgeractive')
    if (screenWidth < 650) {
      topheaderList[0].classList.toggle('topheader__listactive')
      topheaderList[0].parentElement.classList.toggle('topheader__navigationactive')
    }

  })


}




if (category) {
  category.insertAdjacentHTML('beforeend', '<li class="catalogleft__categoryitem"><a class="catalogleft__categorys" href="#">+ ещё 12</a></li>')

}
const bottomheaderSearch = document.querySelectorAll('.bottomheader__search')[0]

bottomheaderSearch.addEventListener('input', function () {
  bottomheaderSearch.classList.add('bottomheader__searchactive')
  bottomheaderSearch.parentElement.classList.add('searchactive')
  console.log(bottomheaderSearch.parentElement)
  if (bottomheaderSearch.value === '') {
    bottomheaderSearch.classList.remove('bottomheader__searchactive')
    bottomheaderSearch.parentElement.classList.remove('searchactive')
  }
})

// валидация формы на главной странице

let sectionsevenInputName = document.querySelectorAll('.sectionseven__input')[0]
let sectionsevenInputNumber = document.querySelectorAll('.sectionseven__input')[1]
let sectionsevenInputMail = document.querySelectorAll('.sectionseven__input')[2]
let clearText = ''

function adderr(sectionsevenInputName) {
  sectionsevenInputName.classList.add('err')
  sectionsevenInputName.classList.remove('ok')
  let errText = document.createElement('p');
  errText.textContent = 'Недопустимый формат';
  errText.classList.add('sectionseven__errtext')
  errText.classList.add(`sectionseven__errtext`)
  sectionsevenInputName.parentElement.classList.add('sectionseven__labelerr')

  if (sectionsevenInputName.parentElement.previousElementSibling === null || sectionsevenInputName.parentElement.previousElementSibling.classList.contains('sectionseven__errtext') === false) {
    sectionsevenInputName.parentElement.insertAdjacentElement('beforeBegin', errText);
  }
}


function formErr(sectionsevenInputName, clearText) {
  if (clearText !== '') {
    adderr(sectionsevenInputName)
  }
  if (clearText === '' && sectionsevenInputName.value !== '') {

    sectionsevenInputName.classList.remove('err')
    sectionsevenInputName.classList.add('ok')
    sectionsevenInputName.parentElement.classList.remove('sectionseven__labelerr')

    if (sectionsevenInputName.parentElement.previousElementSibling !== null && sectionsevenInputName.parentElement.previousElementSibling.classList.contains('sectionseven__errtext') === true) {
      sectionsevenInputName.parentElement.previousElementSibling.remove()
    }

  }
  if (sectionsevenInputName.value === '') {
    sectionsevenInputName.classList.remove('ok')
    sectionsevenInputName.classList.remove('err')
    if (sectionsevenInputName.parentElement.previousElementSibling !== null && sectionsevenInputName.parentElement.previousElementSibling.classList.contains('sectionseven__errtext') === true) {
      sectionsevenInputName.parentElement.previousElementSibling.remove()
      sectionsevenInputName.parentElement.classList.remove('sectionseven__labelerr')
    }

  }
}


if (sectionsevenInputName) {
  sectionsevenInputName.addEventListener('input', function () {
    let clearText = sectionsevenInputName.value.replace(/[^0-9a-z]/g, '');
    formErr(sectionsevenInputName, clearText)
  })
  sectionsevenInputNumber.addEventListener('input', function () {
    let clearText = sectionsevenInputNumber.value.replace(/[^a-zа-яё\s]/gi, '');
    formErr(sectionsevenInputNumber, clearText)
  })
  sectionsevenInputMail.addEventListener('input', function () {
    let clearText = sectionsevenInputMail.value.replace(/[^а-яё\s]/gi, '');
    formErr(sectionsevenInputMail, clearText)
  })
  sectionsevenInputMail.addEventListener('blur', function () {

    if (sectionsevenInputMail.value !== '' && sectionsevenInputMail.value.includes('@') === false) {
      adderr(sectionsevenInputMail)
      if (sectionsevenInputMail.parentElement.previousElementSibling === null || sectionsevenInputMail.parentElement.previousElementSibling.classList.contains('sectionseven__errtext') === false) {
        sectionsevenInputMail.parentElement.insertAdjacentElement('beforeBegin', errText);
      }
    }
    else {
      sectionsevenInputName.classList.remove('err')
      sectionsevenInputName.classList.add('ok')
      sectionsevenInputName.parentElement.classList.remove('sectionseven__labelerr')
    }
  })
}

// валидация формы в карточке товаров

let containermodalformbuyInpName = document.querySelectorAll('.containermodalformbuy__inp')[0]
let containermodalformbuyInpNumber = document.querySelectorAll('.containermodalformbuy__inp')[1]

if (containermodalformbuyInpName) {
  containermodalformbuyInpName.addEventListener('input', function () {
    let clearText = containermodalformbuyInpName.value.replace(/[^0-9a-z]/g, '');
    formErr(containermodalformbuyInpName, clearText)
  })

  containermodalformbuyInpNumber.addEventListener('input', function () {
    let clearText = containermodalformbuyInpNumber.value.replace(/[^a-zа-яё\s]/gi, '');
    formErr(containermodalformbuyInpNumber, clearText)
  })




}

// делаем кнопку отправить форму недоступной пока не отмечена галочка
let checkedonlino = document.querySelectorAll('.checkedonlino')[0]
let checkedonlinocard = document.querySelectorAll('.checkedonlino')[1]

let inpCheck = document.getElementById('agreement')
let inpCheckcard = document.getElementById('agreements')
let inpCheckcard2 = document.getElementById('agreementsis')


function btnDisabled(inpCheck, checkedonlino) {

  inpCheck.addEventListener('click', function () {

    if (checkedonlino.disabled === true) {
      checkedonlino.disabled = false
    }
    else {
      checkedonlino.disabled = true
    }
  })

}
if (inpCheck) {
  btnDisabled(inpCheck, checkedonlino)
}
if (inpCheckcard) {
  btnDisabled(inpCheckcard, checkedonlino)
}
if (inpCheckcard2) {
  btnDisabled(inpCheckcard2, checkedonlino)
}







if (window.location.href.includes('contacts') === true) {
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.756807, 37.622729],
      zoom: 14.4
    }, {
      searchControlProvider: 'yandex#search'
    }),

    myPlacemark = new ymaps.Placemark([55.750616, 37.641809], {
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'imgs/mapIcom.webp',
      iconImageSize: [32, 22],
      iconImageOffset: [0, -38]
    }),
      myPlacemark2 = new ymaps.Placemark([55.763859, 37.648624], {
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'imgs/mapIcom.webp',
        iconImageSize: [32, 22],
        iconImageOffset: [0, 0]
      });

      myMap.geoObjects.add(myPlacemark);
    myMap.geoObjects.add(myPlacemark2);
    // Открываем балун на карте (без привязки к геообъекту).
    myMap.balloon.open([55.750616, 37.641809], '<div class="contacts__info">\
    <h1 class="contacts__cardtitle"> SitDownP на Солянке </h1>\
      <address class="contacts__cardaddres">м. Китай-город, ул. Солянка, д.24</address>\
      <a class="topheader__tel link contacts__cardtel" href="tel:+74951234567"> +7 (495) 123-45-67 </a>\
       <p class="contacts__cardtime contacts__cardname"> Часы работы: <span class="contacts__timenumber contacts__subname">с 10:00 до 21:00</span></p>\
       <p class="contacts__cardwhat contacts__cardname">Что здесь: <span class="contacts__whats contacts__subname"> шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр</span></p>\
      </div>', {
      closeButton: true,
      offset: [-150, -30]

    });
  }
}
// делаем автозаполнение для формы где контакты
const contactsInpsearch = document.querySelectorAll('.contacts__inpsearch')[0]
const contactsSelect1 = document.querySelectorAll('.contacts__select1')[0]
const contactsSelect2 = document.querySelectorAll('.contacts__select2')[0]
if (contactsInpsearch) {
  contactsInpsearch.addEventListener('click', function () {
    contactsInpsearch.classList.add('contacts__inpsearchactive')
  })


  const errAdress1 = ['москва', 'sitDownpls', 'солянке', 'китай-город', '24']
  const errAdress2 = ['москва', 'sitDownpls', 'покровке', 'курская', '14']
  const contactsSelectcontainer = document.querySelectorAll('.contacts__selectcontainer')[0]
  contactsInpsearch.addEventListener('input', function () {
    function selectContacts(errAdress1, contactsSelect1) {
      for (let i = 0; i < errAdress1.length; i++) {

        if (errAdress1[i].includes(contactsInpsearch.value.toLowerCase()) === false) {
          contactsSelect1.classList.remove('contacts__selectactive')
        }
        if (errAdress2[i].includes(contactsInpsearch.value.toLowerCase()) === false) {
          contactsSelect1.classList.remove('contacts__selectactive')
        }
        if (errAdress1[i].includes(contactsInpsearch.value.toLowerCase()) === true) {
          contactsSelectcontainer.classList.add('contacts__selectcontaineractive')
          contactsSelect1.classList.add('contacts__selectactive')
          break
        }
      }
      if (contactsInpsearch.value === '') {
        contactsSelect1.classList.remove('contacts__selectactive')
        contactsSelectcontainer.classList.remove('contacts__selectcontaineractive')
      }
      contactsSelect1.addEventListener('click', function () {
        contactsInpsearch.value = contactsSelect1.textContent.split('м.')[0]
        contactsSelectcontainer.classList.remove('contacts__selectcontaineractive')
        contactsSelect1.classList.remove('contacts__selectactive')
        contactsSelect2.classList.remove('contacts__selectactive')
      })
    }
    selectContacts(errAdress1, contactsSelect1)
    selectContacts(errAdress2, contactsSelect2)
  })
}




