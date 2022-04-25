function calDelete(){
                    
                        swal('Action canceled', 'You did not delete calculator.exe', "success")
                      swal({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this file!",
  icon: "warning",
  buttons: ["Cancel", "Delete"],
  dangerMode: true,
            })
                      .then((willDelete) => {
  if (willDelete) {
    swal("calculator.exe Has been deleted from C:/Downloads", {
      icon: "success",
    });
    delete filesCal;
                    filesCal = '';
                    delete calVar;
                    calVar = '<button onclick="calDownload()">Download: Calculator</button>'
                    
  } else {
     swal('Action canceled', 'You did not delete calculator.exe', "error")
  }
});
                    
                }
                function calDownload(){
                    delete filesCal;
                    filesCal = '<button onclick="cal()">Calculator App</button><a id="thisLink"  href="javascript:calDelete()">🗑️</a><a href="javascript:calPin()">📌</a>';
                    delete calVar;
                    calVar = 'Already Downloaded (Calculator)'
                    
                }
                function catDownload(){
                    delete catVar;
                    delete filesCat;
                    filesCat = '<button onclick="cat()">Cat</button> <a id="thisLink"  href="javascript:catDelete()">🗑️</a><a href="javascript:catPin()">📌</a>'
                    catVar = 'Already Downloaded (Cat)'
                    
                }
                function catPin(){
                    document.getElementById('catPin').innerHTML = '<button onclick="cat()">Cat App</button>'
                    delete filesCat;
                    filesCat = '<button onclick="cat()">Cat</button> <a id="thisLink" href="javascript:catDelete()">🗑️</a><a id="thisLink" href=\'javascript:catUnpin()\'>📌 Unpin</a>'
                    
                }
                function calPin(){
                    document.getElementById('calPin').innerHTML = '<button onclick="cal()">Calculator</button>'
                    delete filesCal;
                    filesCal = '<button onclick="cal()">Calculator App</button> <a id="thisLink" href="javascript:calDelete()">🗑️</a><a id="thisLink" href=\'javascript:calUnpin()\'>📌 Unpin</a>'
                    
                }
                function calUnpin(){
                    document.getElementById('calPin').innerHTML = ''
                    delete filesCal;
                    filesCal = '<button onclick="cal()">Calculator App</button> <a id="thisLink" href="javascript:calDelete()">🗑️</a><a id="thisLink" href=\'javascript:calPin()\'>📌</a>'
                }
                function catUnpin(){
                    document.getElementById('catPin').innerHTML = ''
                    delete filesCat;
                    filesCat = '<button onclick="cat()">Cat</button> <a id="thisLink" href="javascript:catDelete()">🗑️</a><a id="thisLink" href=\'javascript:catPin()\'>📌</a>'
                }
                function cat(){
                  if(filesCat == ''){
                    swal("Error", "Unable to find 'cat app'", "warning")
                  }else{
                  document.getElementById('closeIcon').innerHTML = ''
                    document.getElementById('h1').innerHTML = 'CAT APP'
                    document.getElementById('2').innerHTML = '1.0 beta '
                    document.getElementById('4').innerHTML = 'I like cat meow meow';
                    document.getElementById('6').innerHTML = 'Easly See your files here!'
                    document.getElementById('7').innerHTML = filesCat
                    document.getElementById('1').innerHTML = filesCal
                    document.getElementById('8').innerHTML = word1docNAME
                    document.getElementById('3').innerHTML = word1docNAME1
                    document.getElementById('9').innerHTML = word1docNAME2
                    document.getElementById('10').innerHTML = ''
                  }
                }
                function catDelete(){
                    
                      swal({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this file!",
  icon: "warning",
  buttons: ["Cancel", "Delete"],
  dangerMode: true,
            })
                      .then((willDelete) => {
  if (willDelete) {
    swal("cat.exe Has been deleted from C:/Downloads", {
      icon: "success",
    });
    delete catVar;
                    delete filesCat;
                    catVar = '<button onclick="catDownload()">Download: Cat</button>'
                          
                    filesCat = ''
  } else {
     swal('Action canceled', 'You did not delete cat.exe', "error")
  }
});
                        
                    
                    
                }