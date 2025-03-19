import * as admin from 'firebase-admin';

interface Instructor {
    id: string;
    name: string;
    email: string;
    department: string;
    title: string; // e.g., Professor, Assistant Professor, Lecturer
    phoneNumber?: string;
    officeLocation?: string;
    coursesTaught?: string[]; // List of course IDs or names
    hireDate?: Date;
    isTenured?: boolean;
}

const sampleInstructors: Instructor[] = [
    {
        id: '1',
        name: 'Abubakar Musa',
        email: 'abubakar.musa@example.com',
        department: 'Computer Science',
        title: 'Professor',
        phoneNumber: '+2348012345678',
        officeLocation: 'Room 101, CS Building',
        coursesTaught: ['CS101', 'CS201'],
        hireDate: new Date('2005-09-01'),
        isTenured: true,
    },
    {
        id: '2',
        name: 'Aisha Abdullahi',
        email: 'aisha.abdullahi@example.com',
        department: 'Mathematics',
        title: 'Assistant Professor',
        phoneNumber: '+2348023456789',
        officeLocation: 'Room 202, Math Building',
        coursesTaught: ['MATH101', 'MATH202'],
        hireDate: new Date('2010-01-15'),
        isTenured: false,
    },
    {
        id: '3',
        name: 'Bello Ibrahim',
        email: 'bello.ibrahim@example.com',
        department: 'Physics',
        title: 'Lecturer',
        phoneNumber: '+2348034567890',
        officeLocation: 'Room 303, Physics Building',
        coursesTaught: ['PHY101', 'PHY102'],
        hireDate: new Date('2018-06-20'),
        isTenured: false,
    },
    {
        id: '4',
        name: 'Fatima Yusuf',
        email: 'fatima.yusuf@example.com',
        department: 'Chemistry',
        title: 'Professor',
        phoneNumber: '+2348045678901',
        officeLocation: 'Room 404, Chemistry Building',
        coursesTaught: ['CHEM101', 'CHEM201'],
        hireDate: new Date('2000-03-10'),
        isTenured: true,
    },
    {
        id: '5',
        name: 'Usman Abdulkadir',
        email: 'usman.abdulkadir@example.com',
        department: 'Biology',
        title: 'Assistant Professor',
        phoneNumber: '+2348056789012',
        officeLocation: 'Room 505, Biology Building',
        coursesTaught: ['BIO101', 'BIO202'],
        hireDate: new Date('2012-11-05'),
        isTenured: false,
    },
    {
        id: '6',
        name: 'Zainab Suleiman',
        email: 'zainab.suleiman@example.com',
        department: 'Economics',
        title: 'Lecturer',
        phoneNumber: '+2348067890123',
        officeLocation: 'Room 606, Economics Building',
        coursesTaught: ['ECON101', 'ECON301'],
        hireDate: new Date('2019-08-12'),
        isTenured: false,
    },
    {
        id: '7',
        name: 'Ahmed Garba',
        email: 'ahmed.garba@example.com',
        department: 'History',
        title: 'Professor',
        phoneNumber: '+2348078901234',
        officeLocation: 'Room 707, History Building',
        coursesTaught: ['HIST101', 'HIST202'],
        hireDate: new Date('1998-05-25'),
        isTenured: true,
    },
    {
        id: '8',
        name: 'Maryam Adamu',
        email: 'maryam.adamu@example.com',
        department: 'Political Science',
        title: 'Assistant Professor',
        phoneNumber: '+2348089012345',
        officeLocation: 'Room 808, Political Science Building',
        coursesTaught: ['POL101', 'POL201'],
        hireDate: new Date('2014-02-18'),
        isTenured: false,
    },
    {
        id: '9',
        name: 'Kabiru Umar',
        email: 'kabiru.umar@example.com',
        department: 'Sociology',
        title: 'Lecturer',
        phoneNumber: '+2348090123456',
        officeLocation: 'Room 909, Sociology Building',
        coursesTaught: ['SOC101', 'SOC202'],
        hireDate: new Date('2020-09-01'),
        isTenured: false,
    },
    {
        id: '10',
        name: 'Hauwa Lawal',
        email: 'hauwa.lawal@example.com',
        department: 'Philosophy',
        title: 'Professor',
        phoneNumber: '+2348101234567',
        officeLocation: 'Room 1010, Philosophy Building',
        coursesTaught: ['PHIL101', 'PHIL301'],
        hireDate: new Date('1995-07-15'),
        isTenured: true,
    },
];

 async function addInstructors(instructors: Instructor[]): Promise<void> {
    const batch = admin.firestore().batch();
    const instructorsCollection = admin.firestore().collection('instructors');

    instructors.forEach((instructor) => {
        const docRef = instructorsCollection.doc(instructor.id);
        batch.set(docRef, instructor);
    });

    await batch.commit();
    console.log('Instructors added successfully');
}

export async function seedInstructors(){
    await addInstructors(sampleInstructors);
}