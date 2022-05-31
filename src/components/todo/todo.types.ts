import React from "react";

export interface TodoPropsTypes extends React.HTMLProps<HTMLDivElement> {
  status?: "active" | "completed";
}
