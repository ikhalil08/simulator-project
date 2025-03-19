// src/index.ts
import * as admin from 'firebase-admin';
import * as readline from "readline";
import { createNewUser } from './users/users';
import { authenticateUser } from './authentication/login';

const serviceAccount = require('./simulator-3a3c8-firebase-adminsdk-fbsvc-11eba488ef.json');

export const ad = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function showMenu() {
    console.log("\nSelect an option:");
    console.log("1. Create New User to Authentication");
    console.log("2. Show Date");
    console.log("3. Exit");
    
    rl.question("Enter your choice: ", (answer) => {
      switch (answer.trim()) {
        case "1":
          createNewUser()
          break;
        case "2":
         
          break;
        case "3":
          
          break;
        default:
          console.log("Invalid option, please try again.");
          showMenu(); // Show the menu again
          break;
      }
    });
  }
  

  function askForEmailAndPassword(): Promise<{ email: string; password: string }> {
    return new Promise((resolve) => {
      rl.question("Enter email: ", (email) => {
        rl.question("Enter password: ", (password) => {
          resolve({ email, password });
        });
      });
    });
  }

  askForEmailAndPassword().then(( c)=>{

    authenticateUser(c.email, c.password).then((userResult)=>{

      if(userResult.isPasswordValid){
        console.log("Login successfully");
        console.log('Name:', userResult.displayName)
        console.log('Email:', userResult.email)
        showMenu();
      }else{
        console.log("Wrong username or password")
      }
     
    }).catch(()=>{
      console.log("Error encountered, user doesn't exist or something");
    })
  })
