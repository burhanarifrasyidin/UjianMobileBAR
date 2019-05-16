import Firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyB9ZvpRql_94kBApYi2AkPD1WjQD8o-ix8",
    authDomain: "managerapp-4c289.firebaseapp.com",
    databaseURL: "https://managerapp-4c289.firebaseio.com",
    projectId: "managerapp-4c289",
    storageBucket: "managerapp-4c289.appspot.com",
    messagingSenderId: "456354120696",
    appId: "1:456354120696:web:912b7bb15e7e2c71"
};

export const Fire = Firebase.initializeApp(firebaseConfig)