  var firebaseConfig = {
    apiKey: "AIzaSyDKc93yHcEO9YYacPjV9UKj0lSNx7tTqUE",
    authDomain: "shishir-portfolio.firebaseapp.com",
    projectId: "shishir-portfolio",
    storageBucket: "shishir-portfolio.appspot.com",
    messagingSenderId: "670043673242",
    appId: "1:670043673242:web:5acb401fc1f13dedecc523",
    measurementId: "G-YJ01G25TYB"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var name = document.getElementById('form1').value;
  var mail = document.getElementById('typeEmail').value;
  var mess = document.getElementById('textAreaExample').value;
  var butt = document.getElementById('btnSend');
  var d = new Date();
  var time  = d.getTime();
  butt.addEventListener('click',()=>{
      firebase.database().ref(`contact/${time}`).set({
        Name : this.name,
        Mail :  mail,
        Message : mess
      }).then(()=>{
        toastr.success('Are you the 6 fingered man?');
      });
  });