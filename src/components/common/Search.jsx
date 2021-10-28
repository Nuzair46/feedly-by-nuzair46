import React from "react";

import { Modal, Input } from "neetoui";

import { Search } from "@bigbinary/neeto-icons";

function SearchBar({ showSearch, setShowSearch }) {
  return (
    <div className="w-full">
      <Modal
        isOpen={showSearch}
        onClose={() => setShowSearch(false)}
        closeButton={false}
      >
        <Input prefix={<Search size={16} />} placeholder="Search" />
      </Modal>
    </div>
  );
}

export default SearchBar;
