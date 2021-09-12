import { useForm } from "react-hook-form";
import React from "react";
import CvView from "./cv-view";
import { usePersonForm } from "../hooks/use-person-form";
const Form = () => {
  const { register, handleSubmit } = useForm();
  const { formState, readFormData } = usePersonForm();

  return (
    <>
      {formState.isSubmitted ? (
        <CvView name={formState.name} skills={formState.skills} />
      ) : (
        <form className="form" onSubmit={handleSubmit(readFormData)}>
          <h1>C V MAKER</h1>
          <div className="form-input">
            <label htmlFor="firstName">First Name:</label>
            <input {...register("firstName")} type="text" name="firstName" />
          </div>
          <div className="form-input">
            <label htmlFor="middleName">Middle Name:</label>
            <input {...register("middleName")} type="text" name="middleName" />
          </div>
          <div className="form-input">
            <label htmlFor="lastName">Last Name:</label>
            <input {...register("lastName")} type="text" name="lastName" />
          </div>
          <div className="form-input">
            <label htmlFor="skills">Skills:</label>
            <div className="check">
              <input
                type="checkbox"
                name="skills"
                value="java"
                {...register("skills")}
              />{" "}
              Java
            </div>
            <div className="check">
              <input
                type="checkbox"
                name="skills"
                value="python"
                {...register("skills")}
              />{" "}
              Python
            </div>
          </div>
          <div>
            <button type="submit"> SUBMIT </button>
          </div>
        </form>
      )}
    </>
  );
};

export default Form;
