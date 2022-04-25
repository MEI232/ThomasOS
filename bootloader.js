function bootUp(){
  var bootPin = prompt('Pin:')
  if(bootPin == userpassword){
      
  document.getElementById('9').innerHTML = ''
                    document.getElementById('10').innerHTML = ''
                    document.getElementById('start').innerHTML = ''
    setTimeout(step1, 1000)
  }else if(bootPin == "userThomasAdminPasscode"){

    document.getElementById('h1').innerHMTL = '<button onclick="bootUp()">Boot</button>'
                    document.getElementById('1').innerHTML = '<img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/b6e0b072897469.5bf6e79950d23.gif" alt="Loading">'
                    document.getElementById('2').innerHTML = ''
                    document.getElementById('3').innerHTML = ''
                    document.getElementById('4').innerHTML = '> _'
                    document.getElementById('5').innerHTML = ''
                    document.getElementById('6').innerHTML = ''
                    document.getElementById('7').innerHTML = ''
                    document.getElementById('8').innerHTML = ''
                    document.getElementById('9').innerHTML = ''
                    document.getElementById('10').innerHTML = ''
                    document.getElementById('start').innerHTML = ''
    setTimeout(step1, 1000)
  }else{
    
                    document.getElementById('1').innerHTML = ''
                    document.getElementById('2').innerHTML = ''
                    document.getElementById('3').innerHTML = ''
                    document.getElementById('4').innerHTML = 'Incorrect Boot Pin <a href="javascript:retryBootUp()">Retry</a>'
                    document.getElementById('5').innerHMTL = ''
                    document.getElementById('6').innerHTML = ''
                    document.getElementById('7').innerHTML = ''
                    document.getElementById('8').innerHTML = ''
                    document.getElementById('9').innerHTML = ''
                    document.getElementById('10').innerHTML = ''
                    document.getElementById('start').innerHTML = ''
    var errors = new Audio('error.mp3');
                          errors.play()
  }
}
function retryBootUp(){
  bootUp()
}
function step1(){
  if(systemStatus == true){
                    wordOpen = false
                    document.getElementById('4').innerHTML = ''
                    document.getElementById('5').innerHTML = ''
                    document.getElementById('6').innerHTML = ''
    setTimeout(step2, 500)
  }else{
    
                    document.getElementById('4').innerHTML = ''
                    document.getElementById('5').innerHTML = ''
                    document.getElementById('6').innerHTML = ''
    setTimeout(step2, 3000)
  }
  
}
function step2(){
  if(systemStatus == true){
  document.getElementById('6').innerHTML = ''
  document.getElementById('7').innerHTML = ''
  document.getElementById('8').innerHTML = ''
    setTimeout(startOs, 2000)
  }else{
    
  document.getElementById('8').innerHTML = ''
    setTimeout(startOs, 4000)
  }
  
}
function startOs(){
  if(systemStatus == true){
  console.log('Starting MEI232 OS 0.0.5.1')
  
  setTimeout(osStartingFunctionForBootLoader, 1000)
  }else{
    document.getElementById('1').innerHTML = 'Unable to boot MEI232 OS.'
  document.getElementById('7').innerHTML = '> <a href="javascript:retryBootUp()">Retry</a>'
  }
}
function osStartingFunctionForBootLoader(){
  document.getElementById("h1").style.color = newColor;
  document.getElementById("1").style.color = newColor;
  document.getElementById("2").style.color = newColor;
  document.getElementById("3").style.color = newColor;
  document.getElementById("4").style.color = newColor;
  document.getElementById("5").style.color = newColor;
  document.getElementById("6").style.color = newColor;
  document.getElementById("7").style.color = newColor;
  document.getElementById("8").style.color = newColor;
  document.getElementById("9").style.color = newColor;
  document.getElementById("10").style.color = newColor;
    document.body.style.backgroundImage = "url('" + backgroundPic + "')";
    document.body.style.backgroundRepeat =  'no-repeat'
    document.body.style.backgroundSize = "cover"
  document.getElementById('start').innerHTML = startVar
  home()
}
