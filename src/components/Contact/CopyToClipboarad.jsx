import React, { useState } from "react";
import { Tooltip, IconButton, useTheme } from "@mui/material";
import { BiCopy } from "react-icons/bi";

const CopyToClipboarad = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const theme = useTheme();
  const { contrastText } = theme.palette.primary;
  const handleCopy = () => {
    setCopied(true);
    try {
      navigator?.clipboard?.writeText(text);
    } catch (e) {
      console.error(e);
    }

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <>
      <Tooltip title={copied ? "copied!" : "copy"} arrow enterTouchDelay={0}>
        <IconButton onClick={handleCopy}>
          <BiCopy color={contrastText} />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default CopyToClipboarad;
