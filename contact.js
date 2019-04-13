document.getElementById('contactForm').addEventListener('submit', submitForm);

// Function to get get form values
function getInputVal(id){
return document.getElementById(id).value;
}

// References the messages collection
var messagesRef = firebase.database().ref('carthage_grains');


// Save message to firebase
function saveMessage(nom, prenom, email, comment){
var newMessageRef = messagesRef.push();
newMessageRef.set({
nom: nom,
prenom:prenom,
email:email,
comment:comment,


});
}

function submitForm(e){
    e.preventDefault();
    // Get values
    var nom = getInputVal('nom');
    var prenom = getInputVal('prenom');
    var email = getInputVal('email');
    var comment = getInputVal('comment');
    
    saveMessage(nom, prenom, email, comment);
    alert('the message has been sent successfuly');
    document.getElementById('contactForm').reset();
    }
// Clear form

// Show alert
// document.querySelector('.alert').style.display = 'block';
// Hide alert after 3 seconds
// setTimeout(function(){
// document.querySelector('.alert').style.display = 'none';
// },3000);
