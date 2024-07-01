import { signUp } from "./AuthService";
import { updateProfile } from "firebase/auth";
import { addUserToDataBase } from "./dbService";
import { SignUpFormData } from "../../dto/SignUpFormData";
import { fullNameFormatter } from "../../utils/fullNameFormatter";

/*this signup function mixes in signup with email and password for authentication, 
setting the displayname on the user aka the users full Name and adding
 first and last Names, phone number and email to the database */
export const signup = async (data: SignUpFormData) => {
  const { password, ...DbData } = data;
  const user = await signUp(data);
  const fullName = fullNameFormatter(data.firstName) + fullNameFormatter(data.firstName);
  await updateProfile(user, { displayName: fullName });
  await addUserToDataBase(user.uid, DbData);
  window.location.href = "/";
  return user;
};
