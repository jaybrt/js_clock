function startTime(){
  let d = new Date();
  let hour = checkHour(d.getHours());
  let minute = checkTime(d.getMinutes());
  let second = checkTime(d.getSeconds());
  let ampm = amPm(d.getHours());
  let img = getImage();


  document.getElementById('clock').innerHTML = hour.toString() + ':' + minute.toString() + ':' + second.toString() + ' ' + ampm;
  document.getElementById('display').src = img;

  let t = setTimeout(startTime, 500);
}

function getImage(){
  let selector = document.getElementById('picture');
  let imgName = selector.value;
  let ret;

  if(imgName == 'walter'){
    ret = './img/walter.jpg'
  }
  else if(imgName == 'juan'){
    ret = './img/juan.jpg'
  }
  return(ret)
}

function checkTime(x){
  if(x<10){
    x = '0'+x
  }
  return(x);
}

function checkHour(x){
  if(x == 0){
    x = 12;
  }
  else if(x>12){
    x = x%12;
  }
  return(x);
}

function amPm(x){
  let ret;
  if(x==24){
    ret = 'AM'
  }
  else if(x<12){
    ret = 'AM'
  }
  else{
    ret = 'PM'
  }
  return(ret);
}

startTime();
