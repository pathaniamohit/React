import React, { useState } from "react";

const SubscribePopup = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling the subscription here
    console.log("Subscribed with email:", email);
    // Close the popup
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">
              Subscribe for Daily Updates
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SubscribePopup;


// write this in button place
// import React, { useState } from "react";
// import SubscribePopup from "./SubscribePopup";

// function App() {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const togglePopup = () => {
//     setIsPopupOpen(!isPopupOpen);
//   };

//   return (
//     <div className="App">
//       <h1>Welcome to My Website</h1>
//       <button onClick={togglePopup} className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">
//         Open Subscribe Popup
//       </button>
//       <SubscribePopup isOpen={isPopupOpen} onClose={togglePopup} />
//     </div>
//   );
// }

// export default App;
