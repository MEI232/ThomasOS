
document.body.style.backgroundRepeat =  'no-repeat'
    document.body.style.backgroundImage = "url('default.jpg')";
    document.body.style.backgroundSize = "cover"
    backgroundPic = 'default.jpg'
    newColor = 'white'
function startSetup(){
                    document.getElementById('h1').innerHMTL = 'Setup'
                    document.getElementById('1').innerHTML = 'Starting Setup...'
                    document.getElementById('2').innerHTML = ''
                    document.getElementById('3').innerHTML = ''
                    document.getElementById('4').innerHTML = ''
                    document.getElementById('5').innerHTML = ''
                    document.getElementById('6').innerHTML = ''
                    document.getElementById('7').innerHTML = ''
                    document.getElementById('8').innerHTML = ''
                    document.getElementById('9').innerHTML = ''
                    document.getElementById('10').innerHTML = ''
                    cmdHasPassword = false
                    terminal = false
            wordOpen = false
            word1docNAME = ''
            word1docNAME1 = ''
            word1docNAME3 = ''
            word1docNAME2 = ''
            terminalName = ''
            devmode = false;
            systemStatus = true
            mainDrive = '<a href="javascript:warningLeave()">JAVASCRIPT</a> <a href="javascript:deleteMain()">🗑️</a>'
            functionForPin = 'pin1()'
            wordsDocument = '<button onclick="createWord()">Create Word Doc</button>'
            wordsDocument1 = '<button onclick="createWord1()">Create Word Doc</button>'
            wordsDocument2 = '<button onclick="createWord2()">Create Word Doc</button>'
            wordsDocument3 = '<button onclick="createWord3()">Create Word Doc</button>'
            calVar = '<button onclick="calDownload()">Download: Calculator</button>'
            filesCal = ''
            filesA = "<a href='javascript:folderA()>📂 MEI232 OS</a>"
            filesCat = ''
            catVar = '<button onclick="catDownload()">Download: Cat</button>'
startVar = "<button onclick='myFunction()' class='dropbtn'>🐈</button>     <button onclick='home()'>🏠</button><button onclick='webBrowser()'>💻</button><button onclick='files()'>📁</button><button onclick='settings()'>⚙️</button><button onclick='terminalPage()'>👨‍💻</button>"
   photosVar = '<button onclick="photosDownload()">Photos</button>'
            setTimeout(setupPart2, 2000)
}
function setupPart2(){
                    document.getElementById('h1').innerHMTL = 'Setup'
                    document.getElementById('1').innerHTML = 'Welcome'
                    document.getElementById('2').innerHTML = 'Setup is finished'
                    document.getElementById('3').innerHTML = ''
                    document.getElementById('4').innerHTML = ''
                    document.getElementById('5').innerHTML = ''
                    document.getElementById('6').innerHTML = ''
                    document.getElementById('7').innerHTML = ''
                    document.getElementById('8').innerHTML = ''
                    document.getElementById('9').innerHTML = ''
                    document.getElementById('10').innerHTML = ''
                    
                    if(confirm("Would you like to make this a managed account?")){
                      adminPassword = prompt('Please create an admin password:')
                      alert('To continue setup, get the person who will be using this OS, to the setup')
                      username = prompt('Please enter username:')
                    userpassword = prompt('Please enter a pin')
                      alert('Setup complete')
                      document.getElementById('start').innerHTML = startVar
                      adminUser = true
                      tutorial()
                    }else{
                    username = prompt('Please enter username:')
                    userpassword = prompt('Please enter a pin')
                      if(confirm('Please confirm that you would like to use the username and password: ' + username + ':' + userpassword)){
                        alert('Setup Complete!')
                        document.getElementById('start').innerHTML = startVar
                        adminUser = false
                        tutorial()
                        
                        
                        
                    }else{
                      delete username;
                      delete userpassword;
                      username = prompt('Please enter username:')
                    userpassword = prompt('Please enter a pin')
                    alert('Setup complete!')  
                    document.getElementById('start').innerHTML = startVar
                        tutorial()
                    }
                    }
                    
  
}
