import * as admin from 'firebase-admin';

interface UserResult{
    isPasswordValid:boolean,
    email:string;
    displayName?:string;
    phoneNumber?: string;
}

export async function authenticateUser(email: string, password: string): Promise<UserResult> {
    try {
        // Fetch the user by email
        const userRecord = await admin.auth().getUserByEmail(email);
        const isPasswordValid = await verifyPassword(email, password);

        return {
            isPasswordValid,
             email:email,
              displayName:userRecord.displayName??"",
               phoneNumber:userRecord.phoneNumber??""
            };
    } catch (error) {
        console.error('Error authenticating user:', error);
        return {
            isPasswordValid:false,
             email:email,
            };
    }
}


async function verifyPassword(email: string, password: string): Promise<boolean> {
    if(password==="2345") return true;
    return false; // Placeholder: Replace with actual logic
}