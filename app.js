//used to grab onto firebase => connection
var firebaseConfig = {

  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// var firestore = firebase.firestore();

//Reference messages collection
var appointmentsRef = firebase.database().ref('appointments');


//listen to form submit
document.getElementById('form').addEventListener('submit',submitForm);

//submit form
function submitForm(e){
    e.preventDefault();

//Get values.
    let name = getInputVal('name');
    let email = getInputVal('email');
    let date = getInputVal('date');
    let time = getInputVal('time');
    let appointmentfor = getInputVal('appointmentfor');

    //save message
    saveAppointments(name,email,date,time,appointmentfor);

    //show alert
    document.querySelector('.alert').style.display = 'block';

    //hide after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';       
    },3000)

    //clear form
    document.getElementById('form').reset();

}

//Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//save messages to firebase
function saveAppointments(  name,email,date,time,appointmentfor){
                var newAppointmentsRef = appointmentsRef.push();
                newAppointmentsRef.set({
                    name:name,
                    email:email,
                    date:date,
                    time:time,
                    appointmentfor:appointmentfor
            });
        }

