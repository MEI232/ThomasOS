function tutorial(){
  if(confirm('Would you like to do the tutorial?')){
    startTutorial()
  }
}
function startTutorial(){
  alert('Click on the cat button in the top left')
  document.getElementById('h1').innerHMTL = ''
                    document.getElementById('1').innerHTML = ''
                    document.getElementById('2').innerHTML = ''
                    document.getElementById('3').innerHTML = ''
                    document.getElementById('4').innerHTML = ''
                    document.getElementById('5').innerHTML = ''
                    document.getElementById('6').innerHTML = ''
                    document.getElementById('7').innerHTML = ''
                    document.getElementById('8').innerHTML = ''
                    document.getElementById('9').innerHTML = ''
                    document.getElementById('10').innerHTML = ''
  document.getElementById('start').innerHTML = "<button onclick='myFunction2()' class='dropbtn'>🐈</button>  <---   <button onclick='home()'>🏠</button><button onclick='webBrowser()'>💻</button><button onclick='files()'>📁</button><button onclick='settings()'>⚙️</button><button onclick='terminalPage()'>👨‍💻</button>"
}
function tutorial2(){
  swal('Good Job!', 'This is where you will find the shutdown button, the lock button, the system information button, and the search button (Use this to find apps)!', "success")
  
  document.getElementById('start').innerHTML = "<button onclick='myFunction()' class='dropbtn'>🐈</button>     <button onclick='home()'>🏠</button><button onclick='webBrowser()'>💻</button><button onclick='files2()'>📁</button><---<button onclick='settings()'>⚙️</button><button onclick='terminalPage()'>👨‍💻</button>"
  setTimeout(tutorial2confirmation, 1000)
  
  
}
function tutorial2confirmation(){
  alert('Now go to files')
}
function files2(){
  app = 'files'
              document.getElementById('closeIcon').innerHTML = ''
                document.getElementById('h1').innerHTML = 'Files';
                if(filesCal == 'true'){
                    document.getElementById('2').innerHTML = '<a href="javascript:apps()">⇨ C:/</a>'
                    document.getElementById('3').innerHTML = ''
                    document.getElementById('4').innerHTML = ''
                    document.getElementById('5').innerHTML = ''
                    document.GetElementById('6').innerHTML = ''
                }else{
                  document.getElementById('closeIcon').innerHTML = ''
                    document.getElementById('1').innerHTML = ''
                    document.getElementById('2').innerHTML = '<a href="javascript:apps()">⇨ C:/</a>'
                    document.getElementById('3').innerHTML = ''
                    document.getElementById('4').innerHTML = ''
                    document.getElementById('5').innerHTML = ''
                    document.getElementById('6').innerHTML = ''
                    document.getElementById('7').innerHTML = ''
                    document.getElementById('8').innerHTML = ''
                    document.getElementById('9').innerHTML = ''
                    document.getElementById('10').innerHTML = ''
                  document.getElementById('start').innerHTML = "<button onclick='myFunction()' class='dropbtn'>🐈</button>     <button onclick='home()'>🏠</button><button onclick='webBrowser()'>💻</button><button onclick='files()'>📁</button><button onclick='settings2()'>⚙️</button><---<button onclick='terminalPage()'>👨‍💻</button>"
                  
                  
}
  document.getElementById('start').innerHTML = "<button onclick='myFunction()' class='dropbtn'>🐈</button>     <button onclick='home()'>🏠</button><button onclick='webBrowser()'>💻</button><button onclick='files()'>📁</button><button onclick='settings2()'>⚙️</button><button onclick='terminalPage()'>👨‍💻</button>"
  setTimeout(tutorial3, 1000)
  swal('Good Job!', 'This is where you can manage files and downloads, you can also save word documents here!', "success")
}
function tutorial3(){
  alert('Now go to the settings app ⚙️')
}
function settings2(){
  app = 'settings'
                    document.getElementById('closeIcon').innerHTML = ''
                document.getElementById('h1').innerHTML = 'Mei232 OS settings'
                document.getElementById('1').innerHTML = '<button onclick="devMode()">Devmode</button>'
                    document.getElementById('2').innerHTML = '<button onclick="terminalPassword()">Terminal Tools (Disable/Enable)</button>'
                    document.getElementById('3').innerHTML = '<button onclick="toggleDarkMode()">Toggle Dark Mode</button>'
                    document.getElementById('4').innerHTML = '<button onclick="changeBackground()">Paste image link to be background</button>'
                    document.getElementById('5').innerHTML = '<button onclick="setTextColor()">Set Text Color</button>'
                    document.getElementById('6').innerHTML = ''
                    document.getElementById('7').innerHTML = ''
                    document.getElementById('8').innerHTML = ''
                    document.getElementById('9').innerHTML = ''
                    document.getElementById('10').innerHTML = ''
  swal('Good Job!', 'This is where you can change system settings', "success")
  setTimeout(tutorial4, 1000)
}
function tutorial4(){
  alert('Now click on the webbrowser app 💻')
  document.getElementById('start').innerHTML = "<button onclick='myFunction()' class='dropbtn'>🐈</button>     <button onclick='home()'>🏠</button><button onclick='webBrowser2()'>💻</button><button onclick='files()'>📁</button><button onclick='settings()'>⚙️</button><button onclick='terminalPage()'>👨‍💻</button>"
}
function webBrowser2(){
  swal('Good Job!', 'This is where you can download apps and search the web!', "success")
  webBrowser()
  document.getElementById('start').innerHTML = "<button onclick='myFunction()' class='dropbtn'>🐈</button>     <button onclick='home()'>🏠</button><button onclick='webBrowser()'>💻</button><button onclick='files()'>📁</button><button onclick='settings()'>⚙️</button><button onclick='terminalPage()'>👨‍💻</button>"
}