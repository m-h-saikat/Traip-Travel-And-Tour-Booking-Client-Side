import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./addService.css";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://desolate-oasis-18622.herokuapp.com/services", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Successfully Add This Package");
          reset();
        }
      });
  };

  return (
    <div class=" AddService-container p-4">
      <h2 className="  AddServiceHeader p-3  mx-auto">
Add A New Package      </h2>

      <form
        id="contact"
        class="AddProduct mx-auto rounded shadow-lg p-3 mb-5 bg-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset>
          <input
            placeholder="Enter Package Name"
            type="text"
            tabindex="1"
            required
            autofocus
            {...register("name", { required: true, maxLength: 40 })}
          />
        </fieldset>
        <fieldset>
          <textarea
            placeholder="Enter Tour Details...."
            tabindex="5"
            required
            {...register("Description")}
          ></textarea>
        </fieldset>
        <fieldset>
          <input
            placeholder="Total Cost"
            type="number"
            tabindex="1"
            required
            {...register("price")}
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Tour's Related Image URL"
            type="text"
            tabindex="4"
            required
            {...register("Img")}
          />
        </fieldset>

        <fieldset>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
            class="btn btn-primary"
          >
            Add Package
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default AddService;
