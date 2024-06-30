import { db } from "./firebaseConfig";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { ContactData } from "../../dto/ConactData";

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

