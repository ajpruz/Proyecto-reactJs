import firebase from "firebase"

import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCFy8GUCIM9gobDJoh5mgtqOsfwgnxbnZA",
    authDomain: "primera-app-94.firebaseapp.com",
    projectId: "primera-app-94",
    storageBucket: "primera-app-94.appspot.com",
    messagingSenderId: "1087320296910",
    appId: "1:1087320296910:web:19e89a12fb9bbfa1db2f9f"
};


const app = firebase.initializeApp(firebaseConfig)


// export function getFirebase(){
//     return app
// }

export function getFirestore(){    
    return firebase.firestore(app)
}
