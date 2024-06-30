import { FirebaseError } from "firebase/app";
import { notify } from "../../components/toast";
export const HandleErrors = (error: unknown) => {
  if (error instanceof FirebaseError) {
    if (error.code === "auth/invalid-email") {
      notify("Invalid email address, please check email and try again");
    } else {
      notify(
        "An error occurred while trying to reset password. Please try again later"
      );
    }
  } else {
    console.error("An unexpected error occurred:", error);
    notify("An unexpected error occurred. Please try again later.");
  }
};
