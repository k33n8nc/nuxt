// plugins/firebase.js
import { defineNuxtPlugin } from '#app'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(() => {
    const firebaseConfig = {
        apiKey: "AIzaSyCwQ6QE4Nl9rSbK8QRTiUIFJLUUlIKnn4w",
        authDomain: "pvd-firestore-new.firebaseapp.com",
        projectId: "pvd-firestore-new",
        storageBucket: "pvd-firestore-new.appspot.com",
        messagingSenderId: "879904777226",
        appId: "1:879904777226:web:439e51e925f61c689b6bf3"
    };

    const app = initializeApp(firebaseConfig)
    const db = getFirestore(app)

    return {
        provide: {
            firebase: app,
            firestore: db
        }
    }
})
