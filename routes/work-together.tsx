import { useState } from "preact/hooks";
import { WorkForm } from "../islands/WorkForm.tsx";

export default function WorkForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = {};

    for(let [key, value] of data) {
      formData[key] = value;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true); // Set submitted state to true
      } else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <>
      { submitted ? (
        <h1>Thank you! We will be in touch</h1>
      ) : (
        <WorkForm />
      )

      }
    </>
  )
}