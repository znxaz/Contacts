import { auth } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updatePassword,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { SignUpFormData } from "../../dto/SignUpFormData";

export const signUp = (data: SignUpFormData) => {
  const { password, ...userData } = data;
  console.log(userData); 
  return createUserWithEmailAndPassword(auth, userData.email, password)
    .then((userCredential) => {
      const user = userCredential.user;
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
  console.log(email, password); 
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
