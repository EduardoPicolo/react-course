import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDWufeS7Rpdm6WNdDZE12nSjYxuTMSTCGk",
  authDomain: "crown-db-4c473.firebaseapp.com",
  databaseURL: "https://crown-db-4c473.firebaseio.com",
  projectId: "crown-db-4c473",
  storageBucket: "crown-db-4c473.appspot.com",
  messagingSenderId: "593423769325",
  appId: "1:593423769325:web:04f38bec2dd1f05c6f36e4",
  measurementId: "G-L56JE462RY"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase