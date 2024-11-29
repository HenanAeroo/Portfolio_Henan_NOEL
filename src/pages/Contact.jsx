import React, { useState } from 'react';
import "../index.css";
import Header from '../layouts/Header';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setFormError('');
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError('Veuillez entrer votre email.');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Veuillez entrer une adresse email valide.');
      return;
    }

    if (!message) {
      setFormError('Veuillez entrer un message.');
      return;
    }

    alert('Votre message a été envoyé avec succès !');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contactPage">
      <Header />
      <section className="contact">
        <form onSubmit={handleSubmit} className="space-y-8">
          <h2 className="mb-4 text-3xl tracking-tight font-bold text-center">Contactez moi</h2>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Votre email :</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className={`shadow-sm bg-gray-50 border ${emailError ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5`}
              placeholder="sheldon.cooper@tbbt.com"
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">Votre message :</label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              rows={6}
              className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border ${formError ? 'border-red-500' : 'border-gray-300'} focus:ring-primary-500 focus:border-primary-500 resize-y`}
              placeholder="Je suis un physicien théoricien à l'université de Pasadena..."
            ></textarea>
            {formError && <p className="text-red-500 text-sm mt-1">{formError}</p>}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Envoyer le message
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
