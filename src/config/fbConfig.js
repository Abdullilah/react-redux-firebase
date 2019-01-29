import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBP3bXbSS4ym22MwAgVQak1kOR3KcEIQAg",
  authDomain: "marioplan-files.firebaseapp.com",
  databaseURL: "https://marioplan-files.firebaseio.com",
  projectId: "marioplan-files",
  storageBucket: "marioplan-files.appspot.com",
  messagingSenderId: "1011174152626"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase ;