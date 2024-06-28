import { auth } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updatePassword,
  signOut as firebaseSignOut,
  updateProfile,
} from "firebase/auth";
import { fullNameFormatter } from "../../utils/fullNameFormatter";


export const signUp = (email: string, password: string, name: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const fullName = fullNameFormatter(name); 
      const user = userCredential.user;
      if (user) {
        updateProfile(user, { displayName: fullName });
        window.location.href = "/";
      }
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Signup error:", errorCode, errorMessage);
      throw error;
    }); 
};

export const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user) {
        window.location.href = "/";
      }
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Sign-in error:", errorCode, errorMessage);
      throw error;
    });
};

export const SignOut = async () => {
  return await firebaseSignOut(auth);
};

export const resetPasswordEmail = (email: string) => {
  return sendPasswordResetEmail(auth, email);
};

export const resetPassword = (password: string) => {
  return updatePassword(auth.currentUser!, password);
};
