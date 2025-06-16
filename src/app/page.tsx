"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faHeart } from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect } from "react";
import Header from "./components/header";

type QuoteType = {
  pickedQuote: string;
  author: string;
  text: string;
};
export default function Home() {
  const [Quote, setQuote] = useState<QuoteType | null>(null);
  const [Copied, setCopied] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(Quote?.text || "");
    console.log("Copied Successfully");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await fetch(
          "https://quote-app-backend-krfd.onrender.com/quote"
        );
        const data = await res.json();
        console.log(data);
        setQuote(data);
      } catch (err) {
        console.error("Error fetching quotes", err);
      }
    };
    fetchQuote();
  }, []);

  if (!Quote) {
    return (
      <div className="flex flex-col items-center justify-center w-screen h-screen font-[family-name:var(--font-poppins)]">
        <span className="relative flex items-center size-8 mb-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex size-8 rounded-full bg-sky-500"></span>
        </span>
        <p className="text-md font-medium">Waking the app!</p>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-8 font-[family-name:var(--font-poppins)] w-screen overflow-hidden px-6 md:px-50 h-screen pt-4">
        <Header />
        <div className="mt-4 md:p-8 md:rounded-4xl md:border-2 md:border-gray-700 border-b pb-8">
          <p className="mb-4 text-purple-900 text-l px-4 py-1 border-2 border-purple-900 bg-purple-100 w-22 rounded-full ">
            Today
          </p>
          <h1 className="text-4xl mb-8"></h1>
          <h1 className="text-4xl">
            <span>&quot;</span>
            {Quote?.pickedQuote}
            <span>&quot;</span>
          </h1>
          <p className="mt-4">-{Quote?.author}</p>
        </div>
        <div className="flex gap-8 ">
          <button
            onClick={() => handleCopy()}
            className="hover:text-blue-600 cursor-pointer transition-duration-300"
          >
            <FontAwesomeIcon icon={faCopy} className="mr-2" />
            {Copied ? "Copied" : "Copy this quote"}
          </button>
          <button
            className="hover:text-blue-600 cursor-pointer transition-duration-300"
            disabled
          >
            <FontAwesomeIcon icon={faHeart} className="mr-2" />
            Add to Favorite
          </button>
        </div>
      </div>
    );
  }
}
