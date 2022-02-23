
//ADD YOUR FIREBASE LINKS HERE


     // Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCoqURqFKGxa3LcbdwsonBHXPEorJP78q8",
      authDomain: "kwitter-project-53dcb.firebaseapp.com",
      projectId: "kwitter-project-53dcb",
      storageBucket: "kwitter-project-53dcb.appspot.com",
      messagingSenderId: "545674254090",
      appId: "1:545674254090:web:ab07f1b478cc4e6cf40cf3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
