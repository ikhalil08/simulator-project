import { ad as admin } from './../index';

export async function createNewUser(){

  await admin.auth().createUser({
    email: 'user@example.com',
    emailVerified: false,
    phoneNumber: '+11234567890',
    password: 'secretPassword',
    displayName: 'John Doe',
    photoURL: 'http://www.example.com/12345678/photo.png',
    disabled: false,
  })
  .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('Successfully created new user:', userRecord.uid);
  })
  .catch((error) => {
    console.log('Error creating new user:', error);
  });

  await admin.auth().createUser({
    email: 'amina.bello@gmail.com',
    emailVerified: false,
    phoneNumber: '+11234567891',
    password: 'password123',
    displayName: 'Amina Bello',
    photoURL: 'http://www.example.com/12345678/photo2.png',
    disabled: false,
  })
  .then((userRecord) => {
    console.log('Successfully created new user:', userRecord.uid);
  })
  .catch((error) => {
    console.log('Error creating new user:', error);
  });

  await admin.auth().createUser({
    email: 'usman.abdullahi@gmail.com',
    emailVerified: false,
    phoneNumber: '+11234567892',
    password: 'password123',
    displayName: 'Usman Abdullahi',
    photoURL: 'http://www.example.com/12345678/photo3.png',
    disabled: false,
  })
  .then((userRecord) => {
    console.log('Successfully created new user:', userRecord.uid);
  })
  .catch((error) => {
    console.log('Error creating new user:', error);
  });

  await admin.auth().createUser({
    email: 'fatima.yusuf@gmail.com',
    emailVerified: false,
    phoneNumber: '+11234567893',
    password: 'password123',
    displayName: 'Fatima Yusuf',
    photoURL: 'http://www.example.com/12345678/photo4.png',
    disabled: false,
  })
  .then((userRecord) => {
    console.log('Successfully created new user:', userRecord.uid);
  })
  .catch((error) => {
    console.log('Error creating new user:', error);
  });

  await admin.auth().createUser({
    email: 'abubakar.sani@gmail.com',
    emailVerified: false,
    phoneNumber: '+11234567894',
    password: 'password123',
    displayName: 'Abubakar Sani',
    photoURL: 'http://www.example.com/12345678/photo5.png',
    disabled: false,
  })
  .then((userRecord) => {
    console.log('Successfully created new user:', userRecord.uid);
  })
  .catch((error) => {
    console.log('Error creating new user:', error);
  });
}