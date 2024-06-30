import React, { useState } from "react";
import ModalDialog from "./ModalDialog";

function ModalApp() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>Open Dialog</button>
      <h1>Hello World</h1>
      <ModalDialog isOpen={show}>
        Hello There!
        <br />
        <button onClick={() => setShow(false)}>Close</button>
      </ModalDialog>
    </>
  );
}

export default ModalApp;
