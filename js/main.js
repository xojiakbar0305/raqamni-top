var attempts = 5
// random 
var randomNumber = Math.floor(Math.random() * (100 - 1 + 5)) + 5

//elementlar topildi
var elForm = document.querySelector('.form')
var elInput = elForm.querySelector('.input')
var elButton = elForm.querySelector('.button')
var elAlert = document.querySelector('.site-alert')
var elSpanText = document.querySelector('.number-span')

// form topshirilganda ishga tushsin
elForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
//inputdan malumot olindi
  var userNumber = parseInt(elInput.value, 10);
//urunishlar soni spanga tenglandi
  elSpanText.textContent = attempts
//agar urunishlar soni 0ga teng bolib qolsa alertda shung mos bolgan qiymat chiqarildi va input va buttonlar ochrib qoyildi
  if (attempts === 0) {
    elAlert.textContent = `Urunishlar Tugadi`
    elInput.setAttribute('disabled', true)
    elButton.setAttribute('disabled', true)

    //buyerda agar oxirgi urunishda topadigan bolsa topid topdiz chiqadi
    if (userNumber === randomNumber) {
      elAlert.textContent = `Topdiz, topdiz`
      elAlert.classList.add('alert-info')
      elAlert.classList.remove('alert-warning')
    }

    return
  }
// input bosh bolganda
  if (elInput.value === '') {
    elAlert.textContent = `Ma'lumot kiriting`
    elAlert.classList.remove('alert-info')
    elAlert.classList.add('alert-warning')
    return
  }
  // qiymatlar teng bolganda
  else if (userNumber === randomNumber) {
    elAlert.textContent = `Topdiz, topdiz`
    elAlert.classList.add('alert-info')
    elAlert.classList.remove('alert-warning')
  } 
  
  //user katta son kiritganda
  else if (userNumber > randomNumber) {
    elAlert.textContent = `Siz yozgan son kompyuter o'ylagan sondan katta`
    elAlert.classList.remove('alert-info')
    elAlert.classList.add('alert-warning')
  } 
  
  // tepadagi ikki shartlar false qaytarganda shu shart ishga tushadi
  else {
    elAlert.textContent = `Siz yozgan son kompyuter o'ylagan sondan kichik`
    elAlert.classList.remove('alert-info')
    elAlert.classList.add('alert-warning')
  }
  attempts--
  elInput.value = ''
  elInput.focus()
});