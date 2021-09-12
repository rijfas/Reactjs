import { useState } from "react";
export const usePersonForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    skills: [],
    isSubmitted: false,
  });
  const readFormData = ({ firstName, middleName, lastName, skills }) => {
    setFormState({
      ...formState,
      name: `${firstName} ${middleName} ${lastName}`,
      skills,
      isSubmitted: true,
    });
  };
  return { formState, readFormData };
};
