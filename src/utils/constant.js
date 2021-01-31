import React from "react";
import { Icon as Icons } from "../components/Icons";

export function getIcon(type, colors) {
  switch (type) {
    case "error": {
      return <Icons.ErrorIcon colors={colors} />;
    }
    case "info": {
      return <Icons.InfoIcon colors={colors} />;
    }
    case "success": {
      return <Icons colors={colors} />;
    }
    case "warning": {
      return <Icons.WarningIcon colors={colors} />;
    }
    default:
      return <Icons colors={colors} />;
  }
}
