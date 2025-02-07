"use client"
import Image from "next/image";
import { useDispatch } from "react-redux";
import { countDecrement, countIncrement } from "./slice/counterSlice";

export default function Home() {

  let dispatch=useDispatch()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <button onClick={()=>dispatch(countIncrement())}>Change Counter</button>

          <button onClick={()=>dispatch(countDecrement())}>Change Counter</button>
    </div>
  );
}
