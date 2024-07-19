import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-start mb-6">
        <button
          onClick={goBack}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Back
          </button>
      </div>
      <div className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-left">Privacy Policy for VassistPro INC</h1>
        <p className="text-sm text-gray-500 text-left">Effective Date: 8 July 2024</p>
        <p className="mt-4 text-left">
          Welcome to VassistPro INC! We value your privacy and are committed to protecting your personal information.
          This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information
          when you use our services.
        </p>
        <h2 className="text-2xl font-semibold mt-6 text-left">Introduction</h2>
        <p className="mt-2 text-left">
          VassistPro INC, previously known as Puristech and Callassist LLC, is dedicated to providing unparalleled call
          center solutions. Our services include seamless call handling, email management, and reservations assistance.
          As part of our commitment to excellence, we prioritize the protection of your personal data.
        </p>
        <h2 className="text-2xl font-semibold mt-6 text-left">Information We Collect</h2>
        <p className="mt-2 text-left">
          We collect several types of information to provide and improve our services:
        </p>
        <ul className="list-disc list-inside ml-4 mt-2 text-left">
          <li>Personal Information: When you register on our platform, contact us, or use our services, we may collect personal information such as your name, email address, phone number, and payment details.</li>
          <li>Usage Data: We collect information on how you access and use our services. This includes your IP address, browser type, operating system, pages visited, and the time and date of your visits.</li>
          <li>Communication Data: We collect information contained in your communications with us, including customer service interactions and feedback.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 text-left">How We Use Your Information</h2>
        <p className="mt-2 text-left">
          We use the collected information for various purposes, including:
        </p>
        <ul className="list-disc list-inside ml-4 mt-2 text-left">
          <li>Providing Services: To deliver and manage our call handling, email management, and reservations services.</li>
          <li>Improving Services: To understand how you use our services and to enhance and customize them according to your preferences.</li>
          <li>Communication: To respond to your inquiries, provide customer support, and send updates or promotional materials, if you have opted to receive them.</li>
          <li>Transactions: To process payments and manage billing in compliance with Stripe’s rules on transition currency.</li>
          <li>Security: To monitor and enhance the security of our platform, preventing fraud and unauthorized access.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 text-left">Sharing Your Information</h2>
        <p className="mt-2 text-left">
          We may share your information with third parties under the following circumstances:
        </p>
        <ul className="list-disc list-inside ml-4 mt-2 text-left">
          <li>Service Providers: We may employ third-party companies and individuals to facilitate our services, provide the services on our behalf, perform service-related tasks, or assist us in analyzing how our services are used. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</li>
          <li>Legal Requirements: We may disclose your personal information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).</li>
          <li>Business Transfers: In the event of a merger, acquisition, or asset sale, your personal information may be transferred. We will provide notice before your personal information is transferred and becomes subject to a different Privacy Policy.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 text-left">Data Security</h2>
        <p className="mt-2 text-left">
          We employ robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>
        <h2 className="text-2xl font-semibold mt-6 text-left">Your Data Protection Rights</h2>
        <p className="mt-2 text-left">
          Depending on your location, you may have the following data protection rights:
        </p>
        <ul className="list-disc list-inside ml-4 mt-2 text-left">
          <li>Access: You have the right to request copies of your personal information.</li>
          <li>Rectification: You have the right to request that we correct any information you believe is inaccurate or incomplete.</li>
          <li>Erasure: You have the right to request that we erase your personal information, under certain conditions.</li>
          <li>Restrict Processing: You have the right to request that we restrict the processing of your personal information, under certain conditions.</li>
          <li>Object to Processing: You have the right to object to our processing of your personal information, under certain conditions.</li>
          <li>Data Portability: You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 text-left">Transition Currency and Payment Processing</h2>
        <p className="mt-2 text-left">
          In compliance with Stripe’s rules on transition currency, all transactions processed through our platform will be handled in the specified currency at the time of the transaction. We ensure that your payment information is securely processed and that all necessary measures are taken to protect your financial data.
        </p>
        <h2 className="text-2xl font-semibold mt-6 text-left">Changes to This Privacy Policy</h2>
        <p className="mt-2 text-left">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
