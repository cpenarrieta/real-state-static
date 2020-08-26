import React, { useState, useContext } from "react";
import { FetchContext } from "../../context/FetchContext";
import { useRouter } from "next/router";
import SuccessLeadBanner from "./SuccessLeadBanner";
import ErrorLeadBanner from "./ErrorLeadBanner";

export default function LeadForm() {
  const router = useRouter();
  const fetchContext = useContext(FetchContext);
  const [successMessage, setSuccessMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const buttonDisabled = !email || !name || !phone;

  async function handleSubmit(e) {
    e.preventDefault();
    const { uuid } = router.query;

    try {
      const { data } = await fetchContext.staticAxios.post(`/lead`, {
        email,
        name,
        uuid,
        phone,
      });
      setSuccessMessage(data?.st);
    } catch (err) {
      setErrorMessage(true);
    }
  }

  if (successMessage && !errorMessage) {
    return <SuccessLeadBanner />;
  }

  if (errorMessage) {
    return <ErrorLeadBanner />;
  }

  return (
    <form
      className="w-full max-w-sm mx-auto py-10"
      id="form-lead-section"
      onSubmit={handleSubmit}
    >
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-name"
          >
            Full Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            minLength={2}
            maxLength={100}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-email"
          >
            Email
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-name"
            type="tel"
          >
            Phone
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-phone"
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            minLength={10}
            maxLength={10}
          />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <input
            type="submit"
            value="Submit"
            disabled={buttonDisabled}
            className={`shadow bg-${buttonDisabled ? "gray" : "purple"}-500
            ${buttonDisabled ? "" : "hover:bg-purple-400"}
            focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded`}
          />
        </div>
      </div>
    </form>
  );
}
