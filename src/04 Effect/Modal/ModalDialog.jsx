import React, { useEffect, useRef } from "react";
import './ModalDialog.css';

function ModalDialog({ isOpen, children }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const dialog = ref.current;
    dialog.showModal();

    return () => {
      dialog.close();
    };
  }, [isOpen]);
  return <dialog className="modal" ref={ref}>{children}</dialog>;
}

export default ModalDialog;
