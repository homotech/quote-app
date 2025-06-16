import Link from "next/link";
import { faMobile, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const Header = () => {
  const [showContact, setShowContact] = useState(false);
  const showContactOptions = () => {
    setShowContact(!showContact);
  };

  return (
    <div className="flex justify-between items-center w-full border-b pb-4">
      <p className="track-tighter text-lg font-medium">Daniel Nnaoma</p>
      <button
        onClick={() => showContactOptions()}
        className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-800 hover:text-white cursor-pointer transition-duration-300"
      >
        Hire Me
      </button>
      <div
        className={`flex gap-4 px-4 py-2 bg-gray-100 rounded-lg absolute right-6 md:right-50 top-24 duration-300 ${
          showContact ? "opacity-100" : "opacity-0"
        }`}
      >
        <Link
          href="tel:+2349014633732"
          className="text-gray-400 hover:text-gray-600 duration-300 "
        >
          <FontAwesomeIcon icon={faMobile} />
        </Link>
        <Link
          href="mailto:adonisdaniel931@gmail.com?Hey, I was looking to hire you"
          className="text-gray-400 hover:text-gray-600 duration-300"
        >
          <FontAwesomeIcon icon={faMessage} />
        </Link>
      </div>
    </div>
  );
};
export default Header;
