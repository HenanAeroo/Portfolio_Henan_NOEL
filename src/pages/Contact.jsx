import React from 'react';
import "../index.css"
import Header from '../layouts/Header';

const Contact = () => {

  return (
    <div className="contactPage">
      <Header />
      <section className="contact">
        <form action="#" className="space-y-8">
          <h2 className="mb-4 text-3xl tracking-tight font-bold text-center">Contactez moi</h2>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Votre email :</label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="sheldon.cooper@tbbt.com" required />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Votre message :
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 resize-y"
              placeholder="Je suis un physicien théoricien à l'université de Pasadena..."
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </div>
        </form>
      </section >
    </div >
  );
};

export default Contact;