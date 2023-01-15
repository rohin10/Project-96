
//ADD YOUR FIREBASE LINKS HERE


// Your web app's Firebase configuration
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
document.getElementById("user_name").innerHTML = "Welcome "+ user_name + " !";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -"+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;


      //End code
      });});}
getData();

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);
  window.location ="kwitter_page.html";
}

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}