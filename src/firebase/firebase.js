import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default};


// const onValueChange = (snapShot) => {
//     console.log(snapShot.key, snapShot.val())
// }
// database.ref('expenses').on('child_removed',onValueChange)

// database.ref('expenses').on('child_changed',onValueChange)
// database.ref('expenses')
// .on('value', onValueChange)

// database.ref('expenses').on('child_added',onValueChange)


// const expenses = [{
//     description: 'Gum',
//     note: '',
//     amount: 10,
//     createdAt: 0
// },
// {
//     description: 'Coffee',
//     note: '',
//     amount: 100,
//     createdAt: 10
// },
// {
//     description: 'Rent',
//     note: '',
//     amount: 1000,
//     createdAt: 20
// }]

// expenses.map((expense) => {
//     database.ref('expenses').push(expense)
// })
















// database.ref('notes').push({
//     title: 'To Do',
//     body: 'Go for a run'
// })
// const firebaseNotes = {
//     notes: {
//         aaplikh: {
//             title: 'First Note',
//             body: 'This is my note'
//         },
//         121243: {
//             title: 'Another note',
//             body: 'This is another note'
//         }
//     }
// }
// const notes = [{
//     id: '12',
//     title: 'First note',
//     body: 'This is my note'
// },
// {
//     id: '4535',
//     title: 'Another note',
//     body: 'This is my note'
// }
// ]

// database.ref('notes').set(notes)

// database.ref().on('value', (snapShot) => {
//     const val = snapShot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log('Error with data fetching', e)
// })

// setTimeout(() => {
//     database.ref('age').set(29)
// },3500)

// setTimeout(() => {
//     database.ref().off(onValueChange);
// },7000)

// setTimeout(() => {
//     database.ref('age').set(28)
// },10500)
// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val)
//     })
//     .catch((e) => {
//          concole.log('error', e)
//     })
// database.ref().set({
//     name: 'Aarathy',
//     age: 24,
//     isSingle: true,
//     location: {
//         country: 'India',
//         city: 'TVM'
//     },
//     job: {
//         title: 'Developer',
//         company: 'ENV'
//     },
//     stressLevel: 5
// }).then(() => {
//     console.log('data is saved')
// }).catch((e) => {
//     console.log('This failed.', e)
// });

// setTimeout(() => {
//     database.ref().update({
//         'job/title': 'Software Engineer'
//     })
// }, 3000)

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seatle'
// })