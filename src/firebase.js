import firebase from "firebase/compat/app"
import "firebase/compat/auth"


const  app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIRABASE_API_KEY,
    authDomain: process.env.REACT_APP_FIRABASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIRABASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIRABASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
});

export const auth = app.auth()

export default app
