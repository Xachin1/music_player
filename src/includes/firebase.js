import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA7GkidD-FkWgGEQnQeW_xlD5YxhioYVLM',
  authDomain: 'music-98eae.firebaseapp.com',
  projectId: 'music-98eae',
  storageBucket: 'music-98eae.appspot.com',
  appId: '1:837275655658:web:e67e4f6515c4ba2a3ba693'
}

//intializa Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

const usersCollection = db.collection('users')

export { auth, db, usersCollection }
