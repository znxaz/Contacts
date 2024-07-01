import { useForm, SubmitHandler } from "react-hook-form";
import { useSharedDropDownState } from "../context/dropdownContext";
import { useAuth } from "../context/authContext";
import { notify } from "./toast";
import { addContact } from "../api/auth/dbService";
import { ContactData } from "../dto/ConactData";

interface Field {
  name: string;
  label: string;
  type: string;
}

const ContactForm = () => {
  const { sharedState, setSharedState } = useSharedDropDownState();
  const { register, handleSubmit, reset } = useForm<ContactData>();

  const Fields: Field[] = [
    { name: "firstName", label: "First Name", type: "text" },
    { name: "lastName", label: "Last Name", type: "text" },
    { name: "phoneNumber", label: "Phone Number", type: "tel" },
    { name: "email", label: "Email", type: "email" },
  ];

  const authContext = useAuth();
  const { currentUser } = authContext;

  const onSubmit: SubmitHandler<ContactData> = async (data) => {
    try {
      await addContact(currentUser!.uid, data);
    } catch (error) {
      console.error("An error has occurred wile trying to add a contact");
      notify("Contact not added. Please try again later!");
    }
    notify("contact successfully added");
    reset(); 
  };

  return (
    <div
      className="h-screen w-screen flex justify-center items-center flex-col"
      onClick={() => (sharedState ? setSharedState(!sharedState) : sharedState)}
    >
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center items-center bg-white shadow-custom rounded-xl w-1/3 h-2/3"
      >
        <div className="flex justify-center items-center bg-white shadow-custom flex-col w-full h-full rounded-xl">
          {Fields.map((field) => (
            <>
              <label
                htmlFor={field.name}
                className="justify-self-start self-start ml-[5em] m-2"
              >
                {field.label}
              </label>
              <input
                className="w-2/3 bg-white border focus-visible:ring-blue-500 focus-visible:outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type={field.type}
                id={field.name}
                {...register(field.name as keyof ContactData, {
                  required: true,
                })}
              ></input>
            </>
          ))}

          <input
            type="submit"
            value="Add Contact"
            className="w-1/2 mt-6 bg-white border hover:cursor-pointer focus-visible:ring-blue-500 focus-visible:outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
