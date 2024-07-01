import React, { useEffect, useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { ContactTable } from "./contactTable";
import ContactCard from "./contactCard";
import { getAllContacts } from "../api/auth/dbService";
import { useAuth } from "../context/authContext";
import { ContactData } from "../dto/ConactData";
import { notify } from "./toast";

export const UserContacts = () => {
  const authContext = useAuth();
  const { currentUser, loading } = authContext;
  const [contacts, setContacts] = useState<ContactData[]>([]);

  useEffect(() => {
    const fetchContacts = async () => {
      if (currentUser) {
        try {
          const contacts = await getAllContacts(currentUser.uid);
          if (contacts) {
            contacts.sort((a, b) => {
              if (a.firstName < b.firstName) {
                return -1;
              }
              if (a.firstName > b.firstName) {
                return 1;
              }
              return 0;
            }); 
            setContacts(contacts);
          } else {
            return <p>No Contacts Found!</p>;
          }
        } catch (error) {
          console.error(
            "An error has occirred while trying to get contacts",
            error
          );
          notify("Oops, something went wrong! Please try again later.");
        }
      }
    };
    fetchContacts();
  }, [currentUser]);
  return (
    <ContactTable>
      {contacts!.map((contact: ContactData) => (
        <tr className="w-4/5">
        <ContactCard contact={contact}></ContactCard>
        </tr>
      ))}
    </ContactTable>
  );
};
