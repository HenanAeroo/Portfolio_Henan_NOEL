import { useState } from "react";

export const useContactForm = () => {
  const [email, setEmail] = useState(""); // Email de l'utilisateur
  const [message, setMessage] = useState(""); // Message de l'utilisateur
  const [status, setStatus] = useState(null);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await fetch(
        "https://henannoel.netlify.app//sendEmail.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, message }),
        }
      );

      const result = await response.json();

      if (result.success) {
        // @ts-ignore
        setStatus({ success: true, message: result.message });
        setEmail("");
        setMessage("");
      } else {
        // @ts-ignore
        setStatus({ success: false, message: result.message });
      }
    } catch (error) {
      // @ts-ignore
      setStatus({ success: false, message: "Une erreur réseau est survenue." });
    }
  };

  return {
    email,
    message,
    handleEmailChange,
    handleMessageChange,
    handleSubmit,
    status,
  };
};
