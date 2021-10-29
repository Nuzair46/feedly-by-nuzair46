import React from "react";

import ReactDom from "react-dom";
import { Modal } from "neetoui";

function SearchModal({ showSearch, setShowSearch, children }) {
  return ReactDom.createPortal(
    <>
      <div className="w-full">
        <Modal
          isOpen={showSearch}
          onClose={() => {
            setShowSearch(false);
          }}
          closeButton={false}
        >
          {children}
        </Modal>
      </div>
    </>,
    document.getElementById("root")
  );
}

export default SearchModal;
