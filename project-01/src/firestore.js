import { firebaseConfig } from './firestoreConfig'
import * as firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()
