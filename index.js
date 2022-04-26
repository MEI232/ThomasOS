<?php
require 'js/https://unpkg.com/sweetalert/dist/sweetalert.min.js';
?>
window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = 'MEI232 os does not save your changes'
                            + 'If you leave before saving, your changes will be lost.';

    (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
});

        
function logout(){
  document.getElementById('startMenuId').innerHTML = ''
                document.getElementById('start').innerHTML = ''
                document.getElementById('h1').innerHTML = 'Locked'
                document.getElementById('1').innerHTML = username;
                    document.getElementById('2').innerHTML = '<button onclick="login()">Login</button>'
                    document.getElementById('closeIcon').innerHTML = ''
                    document.getElementById('3').innerHTML = ''
                    document.getElementById('4').innerHTML = ''
                    document.getElementById('5').innerHTML = ''
                    document.getElementById('6').innerHTML = ''
                    document.getElementById('7').innerHTML = ''
                    document.getElementById('8').innerHTML = ''
                    document.getElementById('9').innerHTML = ''
                    document.getElementById('10').innerHTML = ''
            }
            function login(){
                pswdPrompt = prompt('Login as user: ' + username)
                if(pswdPrompt == userpassword){
                    document.getElementById('start').innerHTML = startVar;
                    home()
                }else{
                    alert('Incorrect Password')
                }
            }
            function shutdown(){
              document.getElementById('calPin').innerHTML = ''
              document.getElementById('catPin').innerHTML = ''
              document.getElementById('startMenuId').innerHTML = ''
                    document.getElementById('h1').innerHTML = '';
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
                    document.getElementById('start').innerHTML = '<button onclick="bootUp()">Boot</button>'
                document.getElementById("h1").style.color = 'white';
  document.getElementById("1").style.color = 'white';
  document.getElementById("2").style.color = 'white';
  document.getElementById("3").style.color = 'white';
  document.getElementById("4").style.color = 'white';
  document.getElementById("5").style.color = 'white';
  document.getElementById("6").style.color = 'white';
  document.getElementById("7").style.color = 'white';
  document.getElementById("8").style.color = 'white';
  document.getElementById("9").style.color = 'white';
  document.getElementById("10").style.color = 'white';
              document.body.style.backgroundImage = "url('black-background.jpg')";
    document.body.style.backgroundRepeat =  'no-repeat'
    document.body.style.backgroundSize = "cover"

            }
            function files(){
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
                }
                document.getElementById('1').innerHTML = '';
            }
            function webBrowser(){
              
              document.getElementById('closeIcon').innerHTML = ''
                document.getElementById('h1').innerHTML = 'Search <a id="thisLink" href="javascript:webBrowser()">↺</a>'
                document.getElementById('1').innerHTML = "<button onclick='searchBing()'>Search Bing</button>"
                document.getElementById('2').innerHTML = calVar
                document.getElementById('3').innerHTML = catVar
                document.getElementById('4').innerHTML = 'NOTE: Files downloaded will be found in C:/Downloaded in files app, or use finder to find the app'
                document.getElementById('5').innerHTML = '<iframe width="500" height="500" src="https://www.google.com/search?igu=1"></iframe>'
                document.getElementById('6').innerHTML = ''
                document.getElementById('7').innerHTML = ''
                document.getElementById('8').innerHTML = ''
                    document.getElementById('9').innerHTML = ''
                    document.getElementById('10').innerHTML = ''
                                    
  
                }
function mail(){
  document.getElementById('closeIcon').innerHTML = ''
                document.getElementById('h1').innerHTML = 'Outlook'
                document.getElementById('1').innerHTML = "Powered By Microsoft"
                document.getElementById('2').innerHTML = '(BETA)'
                document.getElementById('3').innerHTML = ''
                document.getElementById('4').innerHTML = ''
                document.getElementById('5').innerHTML = '<iframe width="500" height="500" src="https://outlook.com/"></iframe>'
                document.getElementById('6').innerHTML = ''
                document.getElementById('7').innerHTML = ''
                document.getElementById('8').innerHTML = ''
                    document.getElementById('9').innerHTML = ''
                    document.getElementById('10').innerHTML = ''
}
                function deleteMain(){
                    swal('Access Denied', 'You are not allowed to delete OS system files', "error")
                }
                function apps(){
                    document.getElementById('closeIcon').innerHTML = ''
                    document.getElementById('1').innerHTML = '<a href="javascript:files()">⇩ C:/</a>'
                    document.getElementById('2').innerHTML = '<button onclick="wordDocLoad()">MeiTheCat word 2022</button>'
                    document.getElementById('3').innerHTML = '<button onclick="music()">Music</button>'
                    document.getElementById('4').innerHTML = ''
                    document.getElementById('5').innerHTML = mainDrive;
                    document.getElementById('6').innerHTML = '<a href="javascript:apps1()">⇨ Downloaded</a>';
                    document.getElementById('7').innerHTML = ''
                    document.getElementById('8').innerHTML = ''
                    document.getElementById('9').innerHTML = ''
                    document.getElementById('10').innerHTML = '<button onclick="deleteMain()">Delete System Files</button>'
                }
                function apps1(){
                  document.getElementById('closeIcon').innerHTML = ''
                    document.getElementById('1').innerHTML = '<a href="javascript:files()">⇩ C:/</a>'
                    document.getElementById('2').innerHTML = '<button onclick="createWordDoc()">MeiTheCat word 2022</button>'
                    document.getElementById('3').innerHTML = '<button onclick="music()">Music</button>'
                    document.getElementById('4').innerHTML = ''
                    document.getElementById('5').innerHTML = mainDrive
                    document.getElementById('6').innerHTML = '<a href="javascript:apps()">⇩ Downloaded</a>';
                    document.getElementById('7').innerHTML = filesCal;
                
                    document.getElementById('8').innerHTML = filesCat;
                    document.getElementById('9').innerHTML = ''
                }

                
                function searchBing(){
                    var searchVarA = prompt('Search Here:')
                    window.open('https://www.bing.com/search?q=' + searchVarA)
                }
                function home(){
                  app = 'none'
                  document.getElementById('closeIcon').innerHTML = ''
                    document.getElementById('h1').innerHTML = 'Home';
                document.getElementById('1').innerHTML = 'Welcome To Home';
                document.getElementById('2').innerHTML = 'Fluffy cat'
                document.getElementById('3').innerHTML = 'Below is start menu, click to open different apps!'
                    document.getElementById('4').innerHTML = ''
                    document.getElementById('5').innerHTML = ''
                    document.getElementById('6').innerHTML = ''
                    document.getElementById('7').innerHTML = ''
                    document.getElementById('8').innerHTML = ''
                    document.getElementById('9').innerHTML = ''
                    document.getElementById('10').innerHTML = ''

                }
                function command(){
                    if(terminal == false){
                        document.getElementById('2').innerHTML = '> _'
                    document.getElementById('3').innerHTML = '<code>Terminal has been disabled...'
                      var error1 = new Audio('error.mp3');
                          error1.play()
                    }else{
                    var commandInput = prompt('Command:')
                    if(commandInput == 'delete'){
                        var commandInputDelete = prompt('Delete what? (all)')
                        if(commandInputDelete == 'all'){
                          if(devmode == true){
            delete word1docNAME 
            delete word1docNAME1 
            delete word1docNAME2 
            delete terminalName 
            delete devmode 
            delete mainDrive 
            delete functionForPin 
            delete wordsDocument 
            delete wordsDocument1 
            delete wordsDocument2 
            delete calVar 
            delete filesCal 
            delete filesA 
            delete filesCat 
            delete catVar 
                            
                            
                          document.getElementById('2').innerHTML = '<code>> <a href="javascript:command()">delete all</a>'
                    document.getElementById('3').innerHTML = '<code>Success: Deleted All System Files'
                            document.getElementById('4').innerHTML = '<code>[ERROR] Fatal error: Unable to locate bootloader.js'
                          var error = new Audio('error.mp3');
                          error.play()
                          }else{
                          document.getElementById('2').innerHTML = '<code>> <a href="javascript:command()">delete all</a>'
                    document.getElementById('3').innerHTML = '<code>[ERROR] Access Denied'
                          var error = new Audio('error.mp3');
                          error.play()
                        }
                        }
                    }else if(commandInput == 'edit'){
                        var idInput = prompt('ID:')
                        var editInput = prompt('Edit')
                      document.getElementById('2').innerHTML = '> <a href="javascript:command()">edit ' + idInput + ' ' + editInput + '</a>';
                    document.getElementById('3').innerHTML = '<code>Changed ' + idInput + ' to ' + editInput;
                        document.getElementById(idInput).innerHTML = editInput
                    }else if(commandInput == 'var'){
                        var variable = prompt('Set All Variables to:')
                        

            word1docNAME = variable
            word1docNAME1 = variable
            word1docNAME2 = variable
            terminalName = variable
            devmode = variable
            mainDrive = variable
            functionForPin = variable
            wordsDocument = variable
            wordsDocument1 = variable
            wordsDocument2 = variable
            calVar = variable
            filesCal = variable
            filesA = variable
            filesCat = variable
            catVar = variable
                      document.getElementById('2').innerHTML = '<code>> <a href="javascript:command()"> var ' + variable + '</a>'
                    document.getElementById('3').innerHTML = '<code>undefined'
                    }else if(commandInput == 'shutdown'){
                      
                      setTimeout(shutdown, 5000)
                      document.getElementById('2').innerHTML = '<code>> <a href="javascript:command()">shutdown</a>'
                    document.getElementById('3').innerHTML = '<code>Your about to be signed out in 00:00:05.00'
                    }else if(commandInput == 'lock'){
                      logout()
                    }else if(commandInput == 'help'){
                      document.getElementById('2').innerHTML = '<code>> <a href="javascript:command()">help</a>'
                      document.getElementById('3').innerHTML = '<code>KEY: <> = Enter this after prompted | delete - Delete system files | edit <id> <change-to> - Edits an ID | var <change-to> - Sets all variables to a certain text | shutdown - Shuts down the OS | lock - Locks the screen | help - Brings up the help menu</code>'
                    }else{
                      document.getElementById('2').innerHTML = '<code>> <a href="javascript:command()">' + commandInput + '</a>'
                    document.getElementById('3').innerHTML = '<code>Unknown command "' + commandInput + '"'
                      var error2 = new Audio('error.mp3');
                          error2.play()
                    }
                    }
                }
                function folderA(){
                    document.getElementById('1').innerHTML = 'This Folder Is Empty'
                }
                function cal(){
                  if(filesCal == ''){
                    swal("Error", "Unable to find 'calculator app'", "warning")
                  }else{
                  app = 'cal'
                  document.getElementById('closeIcon').innerHTML = ''
                    document.getElementById('6').innerHTML = ''
                    document.getElementById('7').innerHTML = ''
                    document.getElementById('h1').innerHTML = 'CALCULATOR'
                    document.getElementById('1').innerHTML = ''
                    document.getElementById('2').innerHTML = '<button onclick="solveAdd()">Add</button>'
                    document.getElementById('3').innerHTML = '<button onclick="solveMul()">Multiply</button>'
                    document.getElementById('4').innerHTML = '<button onclick="solveDiv()">Division</button>'
                    document.getElementById('5').innerHTML = '<button onclick="solveSub()">Subtraction</button>'
                    
                    document.getElementById('8').innerHTML = ''
                    document.getElementById('9').innerHTML = ''
                    document.getElementById('10').innerHTML = ''
                  }
                }
                function solveAdd(){
    var a = prompt('>?< + ?')
    var b = prompt(a + ' + >?<')
    var s1 = ((a*1) + (b*1))
    var s2 = s1 - b;
    alert('Answer: ' + s1);
                }
function solveMul(){
  var solvea = prompt('>?< x ?')
  var solveb = prompt(solvea + ' x >?<')
  var mulAnswer = solvea * solveb
  alert('Answer: ' + mulAnswer)
}
function solveDiv(){
  var solveA = prompt('>?< / ?')
  var solveB = prompt(solveA + ' / >?<')
  var divAnswer = solveA / solveB
  alert('Answer: ' + divAnswer)
}
function solveSub(){
  var solveA1 = prompt('>?< - ?')
  var solveB1 = prompt(solveA1 + ' - >?<')
  var subAnswer = solveA1 - solveB1
  alert('Answer: ' + subAnswer)
}
                function warningLeave(){
                    if(devmode == true){
                        document.getElementById('2').innerHTML = '<a href="javascript:apps()"><< Return</button>'
                        document.getElementById('3').innerHTML = '<a href="index.js">index.js</a>'
                        document.getElementById('4').innerHTML = '<a href="javascript:error(2)">Access Denied</a>'
                    document.getElementById('1').innerHTML = 'DevMode Feature. [WARNING] ctrl + click these links to save your progress'
                    document.getElementById('6').innerHTML = ''
                    document.getElementById('7').innerHTML = ''
                    
                    document.getElementById('8').innerHTML = ''
                    document.getElementById('9').innerHTML = ''
                
                    document.getElementById('10').innerHTML = ''
                        }else {
                        alert('Devmode is required to use this feature')
                    }
                }
                function error(id){
                  if(id == 1){
                    alert('Error Deleting File')
                  }else if(id == 2){
                    alert('File Not Found')
                  }else if(id == 3){
                    alert('Unknown Error')
                  }
                }
                function devMode(){
                  if(adminUser == true){
                    var devAdminCheck = prompt('Enter admin password:')
                    if(devAdminCheck == adminPassword){
                      var aaa = prompt('Turn on dev mode (WARNING: YOUR PROGGRESS MAY NOT SAVE IF YOU TURN THIS ON). Y / N')
                    if(aaa == 'Y'){
                        delete devmode;
                        devmode = true
                        alert('Devmode ON')
                    }else if(aaa == 'N'){
                        delete devmode;
                        devmode = false
                        alert('Devmode OFF')
                    }
                    }else{
                      alert('Incorrect admin password')
                    }
                  }else{
                    var aaa = prompt('Turn on dev mode (WARNING: YOUR PROGGRESS MAY NOT SAVE IF YOU TURN THIS ON). Y / N')
                    if(aaa == 'Y'){
                        delete devmode;
                        devmode = true
                        alert('Devmode ON')
                    }else if(aaa == 'N'){
                        delete devmode;
                        devmode = false
                        alert('Devmode OFF')
                    }
                    }
                }
                function wordDocLoad(){
                    if(wordOpen == true){
                        createWordDoc()
                    }else{
                        document.getElementById('closeIcon').innerHTML = '<a id="thisLink" href="javascript:transition()">🔴</a> <a id="thisLink" href="javascript:transition(1)">🟡</a>'
                    document.getElementById('h1').innerHTML = ' MeiTheCat word 2022'
                    document.getElementById('1').innerHTML = 'Loading...'
                    document.getElementById('2').innerHTML = 'Please Wait'
                        document.getElementById('3').innerHTML = ''
                        document.getElementById('4').innerHTML = ''
                    document.getElementById('5').innerHTML = ''
                    document.getElementById('6').innerHTML = ''
                    document.getElementById('7').innerHTML = ''
                    
                    document.getElementById('8').innerHTML = ''
                    document.getElementById('9').innerHTML = ''
                
                    document.getElementById('10').innerHTML = ''
                    setTimeout(createWordDoc, 2000)
                    }
                }
                function createWordDoc(){
                  app = 'word'
                    document.getElementById('closeIcon').innerHTML = '<a id="thisLink" href="javascript:transition()">🔴</a> <a id="thisLink" href="javascript:transition(1)">🟡</a>'
                    document.getElementById('h1').innerHTML = ' MeiTheCat word 2022'
                    document.getElementById('1').innerHTML = ''
                    document.getElementById('2').innerHTML = ''
                        document.getElementById('3').innerHTML = wordsDocument
                        document.getElementById('4').innerHTML = wordsDocument1
                    document.getElementById('5').innerHTML = wordsDocument2
                    document.getElementById('6').innerHTML = wordsDocument3
                    document.getElementById('7').innerHTML = ''
                    
                    document.getElementById('8').innerHTML = ''
                    document.getElementById('9').innerHTML = ''
                
                    document.getElementById('10').innerHTML = ''
                }
                function transition(thing){
                    document.getElementById('closeIcon').innerHTML = ''
                    files()
                    apps()
                    wordOpen = false
                    if(thing == 1){
                        wordOpen = true
                        document.getElementById('closeIcon').innerHTML = ''
                    }
                }
                function createWord(){
                  
                    delete word1docNAME
                    word1docNAME = prompt('What should it be called?')
                  if(word1docNAME.includes('.txt')){
    fileType = 'txt'
                    word1doc = prompt('What would you like to store in here?')
                    delete wordsDocument;
                    wordsDocument = '<button onclick="displayWord()">' + word1docNAME + '</button>'
                    console.log(fileType)
                    createWordDoc();
  }else if(word1docNAME.includes('.syt')){
    fileType = 'system file'
                    word1doc = prompt('What would you like to store in here?')
                    createWordDoc();
                    if(word1doc.includes('edit')){
                      var word1docsyt = prompt('What ID would you like to edit?')
                      var change1to = prompt('What would you like to change it to?')
                      var word1docfunc = 'document.getElementById(word1docsyt).innerHTML = change1to'
                      console.log(fileType)
                      createWordDoc();
                      wordsDocument = '<button onclick="displayWord(\'system file\')">' + word1docNAME + '</button>'
                    }else if(word1doc.includes('delete all')){
                      console.log(fileType)
                      createWordDoc();
                      wordsDocument = '<button onclick="displayWord(\'system file\')">' + word1docNAME + '</button>'
                    }
                    
  }else if(word1docNAME.includes('.var')){
    fileType = 'variable'
                    console.log(fileType)
                    
                    delete wordsDocument;
                    wordsDocument = '<button onclick="displayWord(\'variable\')">' + word1docNAME + '</button>'
                    createWordDoc();
  }else{
    fileType = 'txt'
                    console.log(fileType)
  }
                    
                  
                  
                }
                function createWord1(){
                    delete word1docNAME1
                    word1docNAME1 = prompt('What should it be called?')
                    word1doc1 = prompt('What would you like to store in here?')
                    delete wordsDocument1;
                    wordsDocument1 = '<button onclick="displayWord1()">' + word1docNAME1 + '</button>'
                    createWordDoc();
                }
                function createWord2(){
                    delete word1docNAME2
                    word1docNAME2 = prompt('What should it be called?')
                    word1doc2 = prompt('What would you like to store in here?')
                    delete wordsDocument2;
                    wordsDocument2 = '<button onclick="displayWord2()">' + word1docNAME2 + '</button>'
                    createWordDoc();
                }
                function displayWord2(){
                    alert(word1doc2)
                }
                function displayWord1(){
                    alert(word1doc1)
                }
                function displayWord(f){
                  if(f == 'variable'){
                    alert('variable set to: ' + word1doc)
                  }else if(f == 'txt'){
                    alert(word1doc)
                  }else if(f == 'system file'){
                    if(word1doc.includes('edit')){
                      var word1docfunc = 'document.getElementById(word1docsyt).innerHTML = change1to'
                      console.log(fileType)
                      
                    }else if(word1doc.includes('delete all')){
                      delete word1docNAME 
            delete word1docNAME1 
            delete word1docNAME2 
            delete terminalName 
            delete devmode 
            delete mainDrive 
            delete functionForPin 
            delete wordsDocument 
            delete wordsDocument1 
            delete wordsDocument2 
            delete calVar 
            delete filesCal 
            delete filesA 
            delete filesCat 
            delete catVar 
                      
                      alert('Succefully deleted all variables')
                      
                    }
                  }
                }
                function createWord3(){
                    delete word1docNAME2
                    word1docNAME3 = prompt('What should it be called?')
                    word1doc3 = prompt('What would you like to store in here?')
                    delete wordsDocument3;
                    wordsDocument3 = '<button onclick="displayWord3()">' + word1docNAME3 + '</button>'
                    createWordDoc();
                }

                function displayWord3(){
                    alert(word1doc3)
                }
                function settings(){
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
                }
function setTextColor(){
  newColor = prompt('Enter color or hex')
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
  
}
function changeBackground(){
  var newBackground = prompt('Paste link here: (default.jpg for default background)')
  backgroundPic = newBackground
  if(newBackground == undefined){
    
  }else if(newBackground.includes('https://')){
    delete backgroundPic
    backgroundPic = newBackground
    document.body.style.backgroundImage = "url('" + backgroundPic + "')";
    document.body.style.backgroundRepeat =  'no-repeat'
    document.body.style.backgroundSize = "cover"
    
  }else if(newBackground.includes('.jpg')){
    delete backgroundPic
    backgroundPic = newBackground;
    document.body.style.backgroundRepeat =  'no-repeat'
    document.body.style.backgroundImage = "url('" + backgroundPic + "')";
    document.body.style.backgroundSize = "cover"
    var background = newBackground;
  }else{
    alert("Please enter a valid URL")
  }
  
}
                function terminalPassword(){
                  if(adminUser == true){
                    var cmdAdminCheck = prompt('Enter admin password:')
                    if(cmdAdminCheck == adminPassword){
                      var cmdPswd = prompt('Development tools: Y / N enable')
                    if(cmdPswd == 'N'){
                        terminal = false;
                        alert('Terminal Disabled')
                    }else if(cmdPswd == 'Y'){
                        terminal = true
                        alert('Terminal Enabled')
                    }
                    }else{
                      alert('Incorrect Password')
                    }
                  }else{
                    var cmdPswdCheck = prompt('Enter your pin:')
                    if(cmdPswdCheck == userpassword){
                        cmdHasPassword = true
                    var cmdPswd = prompt('Development tools: Y / N enable')
                    if(cmdPswd == 'N'){
                        terminal = false;
                        alert('Terminal Disabled')
                    }else if(cmdPswd == 'Y'){
                        terminal = true
                        alert('Terminal Enabled')
                    }
                    }
                  }
                }
function startMenu(){
  document.getElementById('startMenuId').innerHTML = "<button onclick='logout()'>Lock</button><button onclick='shutdown()'>Shutdown</button><button onclick='systemInfo()'>System Info</button><button onclick='search()'>Finder</button>"
  document.getElementById('start').innerHTML = "<button onclick='startMenuClose()'>🐈</button><button onclick='home()'>Home</button><button onclick='webBrowser()'>Web Browser</button><button onclick='files()'>Files</button><button onclick='settings()'>⚙️</button><button onclick='terminalPage()'>Terminal</button>"
}
function startMenuClose(){
  document.getElementById('startMenuId').innerHTML = ""
  document.getElementById('start').innerHTML = "<button onclick='startMenu()'>🐈</button><button onclick='home()'>Home</button><button onclick='webBrowser()'>Web Browser</button><button onclick='files()'>Files</button><button onclick='settings()'>⚙️</button><button onclick='terminalPage()'>Terminal</button>"
}
function systemInfo(){
  app = 'systemInfo'
                    document.getElementById('h1').innerHTML = 'System Information';
                    document.getElementById('1').innerHTML = 'Version: 0.0.5.6'
                    document.getElementById('2').innerHTML = 'Creator: Thomas Carr'
                    document.getElementById('3').innerHTML = 'OS: MEI232 OS'
                    document.getElementById('4').innerHTML = 'Last Update: 4/16/2022'
                    document.getElementById('5').innerHTML = 'Update 0.0.5.5 (Customization Update):'
                    document.getElementById('6').innerHTML = '- Started creating tutorial, <a href="javascript:startTutorial()">See it</a>'
                    document.getElementById('7').innerHTML = '- Added styled alerts'
                    document.getElementById('8').innerHTML = ''
                    document.getElementById('9').innerHTML = ''
                    document.getElementById('10').innerHTML = ''
}
function toggleDarkMode(){
  
  var element = document.body;
  element.classList.toggle("dark-mode");

}
function search(){
  var search = prompt('Find what in this system?')
if (search.includes('iles')) { 
  if(confirm('Did you request: Files?')){
    files()
  }else{
    searchRetry()
  }
}else if(search.includes('ome')){
  if(confirm('Did you request: Home?')){
    home()
  }else{
    searchRetry()
  }
}else if(search.includes('etting')){
  if(confirm('Did you request: Settings?')){
    settings()
  }else{
    searchRetry()
  }
}else if(search.includes('ord')){
  if(confirm('Did you request: Mei the cat word 2022?')){
    wordDocLoad()
  }else{
    searchRetry()
  }
}else if(search.includes('at')){
  if(catVar == 'Already Downloaded (Cat)'){
  if(confirm('Did you request: Cat App?')){
    cat()
  }else{
    searchRetry()
  }
  }else{
    alert('No results for ' + search)
  }
}else if(search.includes('al')){
  if(calVar == 'Already Downloaded (Calculator)'){
    if(confirm('Did you request: Calculator App?')){
    cal()
  }else{
    searchRetry()
    }
  }else{
    searchRetry()
  }
}else if(search.includes('alcul')){
    if(calVar == 'Already Downloaded (Calculator)'){
    if(confirm('Did you request: Calculator App?')){
    cal()
  }else{
    searchRetry()
  }
}
}else if(search.includes('ickroll')){
  var audio = new Audio('13.ogg');
  audio.play();
  document.getElementById('1').innerHTML = 'rick rolled lolololololololololololololololol'
}else if(search.includes('ermi')){
if(confirm('Did you request: Terminal?')){
    terminalPage()
  }else{
    searchRetry()
  }
}else if(search.includes('ystem')){
  if(confirm('Did you request: System Information?')){
    systemInfo()
  }else{
    searchRetry()
  }
}else{
  alert('No results for ' + search)
}
}
function searchRetry(){
  search()
}
function stopSong(){
  var audio = new Audio('13.ogg');
  audio.stop();
}
function terminalPage(){
  app = 'terminal'
                    document.getElementById('h1').innerHTML = 'Terminal';
                    document.getElementById('1').innerHTML = ''
                    document.getElementById('2').innerHTML = '> <a href="javascript:command()">___</a>'
                    document.getElementById('3').innerHTML = ''
                    document.getElementById('4').innerHTML = ''
                    document.getElementById('5').innerHTML = ''
                    document.getElementById('6').innerHTML = ''
                    document.getElementById('7').innerHTML = ''
                    document.getElementById('8').innerHTML = ''
                    document.getElementById('9').innerHTML = ''
                    document.getElementById('10').innerHTML = ''
}
function music(){
  app = 'music'
    document.getElementById('h1').innerHMTL = 'Music'
                    document.getElementById('1').innerHTML = 'Coming Soon!'
                    document.getElementById('2').innerHTML = ''
                    document.getElementById('3').innerHTML = ''
                    document.getElementById('4').innerHTML = ''
                    document.getElementById('5').innerHTML = ''
                    document.getElementById('6').innerHTML = ''
                    document.getElementById('7').innerHTML = ''
                    document.getElementById('8').innerHTML = ''
                    document.getElementById('9').innerHTML = ''
                    document.getElementById('10').innerHTML = ''
}
function myFunction() {
  document.getElementById("dropdown").classList.toggle("show");
}
function myFunction2() {
  document.getElementById("dropdown").classList.toggle("show");
  tutorial2()
  document.getElementById('start').innerHTML = "<button onclick='myFunction()' class='dropbtn'>🐈</button>     <button onclick='home()'>🏠</button><button onclick='webBrowser()'>💻</button><button onclick='files2()'>📁</button><button onclick='settings()'>⚙️</button><button onclick='terminalPage()'>👨‍💻</button>"
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function appInfo() {
  document.getElementById("appInformation").classList.toggle("show");
  if(app == null){
    document.getElementById('information').innerHTML = 'Unknown App'
  }else if(app == 'music'){
    document.getElementById('information').innerHTML = 'Music | System Application'
  }else if(app == 'systemInfo'){
    document.getElementById('information').innerHTML = 'System Info | System Application'
  }
}
function bsod(){
  document.getElementById('calPin').innerHTML = ''
              document.getElementById('catPin').innerHTML = ''
                    document.getElementById('h1').innerHTML = ':('
                    document.getElementById('1').innerHTML = 'A fatal error occured and MEI232 os is shutting down to prevent damage to your computer'
                    document.getElementById('2').innerHTML = 'We are collecting some error information and then we\'ll restart for you'
  document.getElementById('start').innerHTML = ''
                    document.getElementById('3').innerHTML = 'Status:'
                    document.getElementById('4').innerHTML = '%0'
                    document.getElementById('5').innerHTML = 'Error:'
                    document.getElementById('6').innerHTML = ''
                    document.getElementById('7').innerHTML = ''
                    document.getElementById('8').innerHTML = ''
                    document.getElementById('9').innerHTML = ''
                    document.getElementById('10').innerHTML = ''
  document.getElementById('closeIcon').innerHTML = '';
  
  document.body.style.backgroundImage = "url('https://imgs.search.brave.com/_Ny8GXYMr6BqSDOlFqk7cM3r-nYtTAMpRtjU3CQTry4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9qb29p/bm4uY29tL2ltYWdl/cy9ibHVlLWFic3Ry/YWN0LWJhY2tncm91/bmQtNy5wbmc')";
    document.body.style.backgroundSize = "cover"
  
    
    setTimeout(bsodstep1, 2000)
}
function bsodstep1(){
  document.getElementById('4').innerHTML = '%10'
  setTimeout(bsodstep2, 3000)
}
function bsodstep2(){
  document.getElementById('4').innerHTML = '%30'
  setTimeout(bsodstep3, 2000)
}
function bsodstep3(){
  document.getElementById('4').innerHTML = '%58'
  setTimeout(bsodstep4, 4000)
}
function bsodstep4(){
  document.getElementById('4').innerHTML = '%90'
  setTimeout(bsodstep5, 1000)
}
function bsodstep5(){
  document.getElementById('4').innerHTML = '%99'
  setTimeout(shutdown, 5000)
}
window.onerror = function(error) {
  bsod()
  document.getElementById('6').innerHTML = error
  
};
