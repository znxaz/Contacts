import { db } from "./firebaseConfig";
import { setDoc, doc, getDocs, collection} from "firebase/firestore";
import { ContactData } from "../../dto/ConactData";
import Contacts from "../../Pages/Contacts";

export const addUserToDataBase = async (
  userId: string,
  userData: ContactData
) => {
  try {
    await setDoc(doc(db, 'users', userId), userData);
  } catch (e) {
    console.error('Error adding user to Firestore:', e);
  }
};


export const addContact = async (userId: string, contactData: ContactData) => {
  try {
    // Reference to the subcollection 'contacts' within the user document
    const userDocRef = doc(db, 'users', userId);
    const contactsCollectionRef = collection(userDocRef, 'contacts');
    
    // Add a new document with a generated ID to the 'contacts' subcollection
    const newContactRef = doc(contactsCollectionRef);

    await setDoc(newContactRef, contactData);
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};

export const getAllContacts = async (userId: string) => {
try{
  const contactsCollectionRef = collection(db, `users/${userId}/contacts`);
  const querySnapshot = await getDocs(contactsCollectionRef);
  const contactsList: ContactData[] = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data() as ContactData; 
    contactsList.push({ ...data });
  });
  return contactsList; 
}catch(error){
  console.error("Failed to retrieve data from DB", error); 
}
}
