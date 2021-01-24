import firebase from 'firebase'
import {firebaseApp} from './firebase'

export function signOut() {
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
    }).catch(function(error) {
    // An error happened.
    });   
}



