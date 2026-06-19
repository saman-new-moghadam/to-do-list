"use client";

import useStateData from "@/context/useStateData";
import React, { useRef, useState } from "react";



const AddInput = () => {
  const { addTask } = useStateData();

  const [title, setTitle] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit() {
    setErrors([]);
    if (!title.trim()) {
      setErrors(["please enter the title"]);
      return;
    }
    try {
      addTask(title);
    } catch {
      setErrors(["we went to a Error."]);
    }
    setTitle("");
    inputRef.current?.focus();
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  return (
    <div>
      <div className="mt-4 text-left flex">
        <input
          onKeyDown={handleKeyDown}
          required
          ref={inputRef}
          onChange={(item) => setTitle(item.currentTarget.value)}
          className="
            outline-none focus:outline-none 
            border-b border-b-my-gray w-8/9 p-2
            
            "
          type="text"
          placeholder="Add new task"
          value={title}
        />
        <div className="w-1/9  flex items-center justify-center">
          <button
            disabled={!title.trim() ? true : false}
            onClick={handleSubmit}
            className="
            cursor-pointer bg-gray-700 text-2xl
            text-white p-2 mx-3 rounded-md h-5/6 w-full
            flex items-center justify-center
            disabled:bg-gray-400
  "
          >
            +
          </button>
        </div>
      </div>

      {errors.length > 0 && (
        <ul className="mt-3 list-disc text-red-500  text-left">
          {errors.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default AddInput;
