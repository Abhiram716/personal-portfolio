import { BaseProvider } from "baseui";
import React from "react";
import theme from "./theme";

const BaseWebProvider = ({ children }) => {
    return <BaseProvider theme={theme}>{children}</BaseProvider>;
};

export default BaseWebProvider;
