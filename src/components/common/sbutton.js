import React from "react";

export default function SButton({ text, buttonClass, url }) {
  return (
    <form action={url} target="_blank">
      <button type="submit" className={buttonClass}>
        {text}
      </button>
    </form>
  );
}
