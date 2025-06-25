import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAHEyrwa9qtis2w1-gzAapsAtWhpa9F6do",
    authDomain: "catch-of-the-day-jon-bis-3.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-jon-bis-3-default-rtdb.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };

export default base;