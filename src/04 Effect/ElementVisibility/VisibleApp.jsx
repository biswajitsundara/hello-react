import React from "react";
import Box from "./Box";

function VisibleApp() {
  return (
    <>
      <LongSection />
      <Box />
      <LongSection />
      <Box />
      <LongSection />
    </>
  );
}

function LongSection() {
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

  const items = [];
  for (let i = 0; i < 50; i++) {
    items.push(<li key={i}>{text}</li>);
  }
  return <ul>{items}</ul>;
}

export default VisibleApp;
