let hrs = document.querySelector('#hrs');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');


setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  hrs.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;

  let date = new Date();

  let h, m, s;
  h = date.getHours();
  m = date.getMinutes();
  s = date.getSeconds();

  function TwelveHours() {
    if (h > 12) {
      return h - 12
    } else { return h }
  }

  function addingZero() {
    if (TwelveHours() < 10) {
      return '0' + TwelveHours()
    } else {
      return TwelveHours()
    }
  }

  function addingZeroM() {

    if (m < 10) {
      return '0' + m
    } else { return m }
  }

  function addingZeroS() {

    if (s < 10) {
      return '0' + s
    } else { return s }
  }

  function add12() {
    if (addingZero() == 00) {
      return 12
    } else {
      return addingZero()
    }
  }

  const time = add12() + ' : ' + addingZeroM() + ' : ' + addingZeroS();

  document.getElementById('myClock').innerText = time

  function forAMandPM() {
    if (h > 12) {
      return 'PM'
    } else {
      return 'AM'
    }
  }
  document.getElementById('maredium').innerText = forAMandPM()

})

let d = new Date();
let date = d.toString();
let zone = date.indexOf('GMT');
let Z = date.slice(zone);

document.getElementById('zone').innerHTML = Z.toUpperCase()
