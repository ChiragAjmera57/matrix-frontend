"use client"
import React, { useEffect, useState } from "react";
import vectorLine from "../../Asset/VectorLineYellow.png";
import { TokenCard } from "./TokenCard";
import { HeadingSnip } from "./HeadingSnip";
import {getData} from '../util/fetchToken';


interface Element {
  id: number;
  name: string;
  email: string;
}
export const Ourtoken = () => {
 const [data, setData] = useState<Element[]>([
    { id: 1,
      name: "string",
      email: "string"
    }, 
    { id: 1,
      name: "string",
      email: "string"}, 
      { id: 1,
        name: "string",
        email: "string"}, 
        { id: 1,
          name: "string",
          email: "string"}, 
          { id: 1,
            name: "string",
            email: "string"}, 
            { id: 1,
              name: "string",
              email: "string"}, 
   
  ]);

  useEffect(() => {
    getData()
      .then(res => {
        console.log(res);
        setData(res || []);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  
  return (
    <div className=" mt-28 scroll-animation">
         <div className="w-3/4 m-auto  ">
      <HeadingSnip title="Tokens" vectorLine={vectorLine} />
      <div className="main flex flex-wrap mt-8 m-auto justify-center">
      {data.map((ele: Element) => (
            <TokenCard key={ele.id}  />
          ))}
       
        
      </div>
      <div className=" flex justify-center p-5 mt-9 ">
        <div className=" w-full flex justify-center">
          <button className="rounded-lg bg-black text-white mx-5 px-3">Previous</button>
          <p className="mx-4 text-sm text-white">Page 1 of 3</p>
          <button className="rounded-lg bg-black text-white mx-5 px-3">Next</button>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
    </div>
   
  );
};
