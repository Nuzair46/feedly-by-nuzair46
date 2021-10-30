import React, { useState } from "react";

import { Modal, Typography, Button, Input } from "neetoui";

import { ReactComponent as SubLogo } from "../../assets/SubImage.svg";
import axios from "axios";
import { WEBHOOK_URL } from "./constants";

function Subscribe({ showSub, setShowSub }) {
  const [email, setEmail] = useState("");
  const onSubmit = () => {
    axios.post(WEBHOOK_URL, { subscribe: { email: email } });
  };

  return (
    <div className="w-full">
      <Modal size="xs" isOpen={showSub} onClose={() => setShowSub(false)}>
        <Modal.Header>
          <div className="mb-3">
            <SubLogo />
          </div>
          <Typography style="h2" className="font-semibold text-gray-800">
            Subscribe to Feed.ly
          </Typography>
        </Modal.Header>
        <form>
          <Modal.Body>
            <Typography className="text-sm text-gray-700">
              We don’t spam, but, we deliver the latest news in short.
            </Typography>
            <Input
              className="mt-3"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              placeholder="oliver@example.com"
            />
          </Modal.Body>
          <Modal.Footer className="space-x-2">
            <Button
              type="submit"
              onClick={e => {
                e.preventDefault();
                onSubmit();
                setShowSub(false);
              }}
              label="Sign Up"
              size="large"
            />
            <Button
              style="text"
              label="Cancel"
              onClick={() => setShowSub(false)}
              size="large"
            />
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default Subscribe;
