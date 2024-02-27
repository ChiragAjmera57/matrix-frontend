import Image from "next/image";
import React from "react";
import vectorLine from "../../Asset/VectorLine.png";

export const Roadmap = () => {
  return (
    <div className="max-w-full color relative h-96 bg-black">
      <div className="h-64 bg-customYellow p-4 ">
        <div className="mx-14 mt-4">
          <p className="font-Kanit font-bold text-5xl">Roadmap</p>
          <div className="mx-24">
            <Image src={vectorLine} alt="Picture of the author" />
          </div>
        </div>
        <div className="flex overflow-x-scroll scrollbar-hidden">
          <div className="border-4 mx-2 border-gray-800 rounded-lg p-10 bg-black">
            <div className="border-4 border-gray-600 rounded-lg p-10">
              <p className="text-white">Inner content</p>
            </div>
          </div>
          <div className="border-4 mx-2 border-gray-800 rounded-lg p-10 bg-black">
            <div className="border-4 border-gray-600 rounded-lg p-10">
              <p className="text-white">Inner content</p>
            </div>
          </div>
          <div className="border-4 mx-2 border-gray-800 rounded-lg p-10 bg-black">
            <div className="border-4 border-gray-600 rounded-lg p-10">
              <p className="text-white">Inner content</p>
            </div>
          </div>
          <div className="border-4 mx-2 border-gray-800 rounded-lg p-10 bg-black">
            <div className="border-4 border-gray-600 rounded-lg p-10">
              <p className="text-white">Inner content</p>
            </div>
          </div>
          <div className="border-4 mx-2 border-gray-800 rounded-lg p-10 bg-black">
            <div className="border-4 border-gray-600 rounded-lg p-10">
              <p className="text-white">Inner content</p>
            </div>
          </div>
          <div className="border-4 mx-2 border-gray-800 rounded-lg p-10 bg-black">
            <div className="border-4 border-gray-600 rounded-lg p-10">
              <p className="text-white">Inner content</p>
            </div>
          </div>
          <div className="border-4 mx-2 border-gray-800 rounded-lg p-10 bg-black">
            <div className="border-4 border-gray-600 rounded-lg p-10">
              <p className="text-white">Inner content</p>
            </div>
          </div>
          <div className="border-4 mx-2 border-gray-800 rounded-lg p-10 bg-black">
            <div className="border-4 border-gray-600 rounded-lg p-10">
              <p className="text-white">Inner content</p>
            </div>
          </div>
          <div className="border-4 mx-2 border-gray-800 rounded-lg p-10 bg-black">
            <div className="border-4 border-gray-600 rounded-lg p-10">
              <p className="text-white">Inner content</p>
            </div>
          </div>
          <div className="border-4 mx-2 border-gray-800 rounded-lg p-10 bg-black">
            <div className="border-4 border-gray-600 rounded-lg p-10">
              <p className="text-white">Inner content</p>
            </div>
          </div>
          <div className="border-4 mx-2 border-gray-800 rounded-lg p-10 bg-black">
            <div className="border-4 border-gray-600 rounded-lg p-10">
              <p className="text-white">Inner content</p>
            </div>
          </div>
          <div className="border-4 mx-2 border-gray-800 rounded-lg p-10 bg-black">
            <div className="border-4 border-gray-600 rounded-lg p-10">
              <p className="text-white">Inner content</p>
            </div>
          </div>
          <div className="border-4 mx-2 border-gray-800 rounded-lg p-10 bg-black">
            <div className="border-4 border-gray-600 rounded-lg p-10">
              <p className="text-white">Inner content</p>
            </div>
          </div>
          <div className="border-4 mx-2 border-gray-800 rounded-lg p-10 bg-black">
            <div className="border-4 border-gray-600 rounded-lg p-10">
              <p className="text-white">Inner content</p>
            </div>
          </div>
          <div className="border-4 mx-2 border-gray-800 rounded-lg p-10 bg-black">
            <div className="border-4 border-gray-600 rounded-lg p-10">
              <p className="text-white">Inner content</p>
            </div>
          </div>
        </div>

      </div>
      <div className="h-1/2"></div>
    </div>
  );
};
