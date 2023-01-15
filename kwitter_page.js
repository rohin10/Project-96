//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyC7WAGO7tysV_UurWRa-N5xsmafDoBdyqw",
      authDomain: "kwitter-22d93.firebaseapp.com",
      databaseURL: "https://kwitter-22d93-default-rtdb.firebaseio.com",
      projectId: "kwitter-22d93",
      storageBucket: "kwitter-22d93.appspot.com",
      messagingSenderId: "971522832807",
      appId: "1:971522832807:web:e9cd16031ed38ba9e49e82"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
