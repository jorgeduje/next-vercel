import { FC } from "react";


export const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "red",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>Dark layout</h3>
      <div>{children}</div>
    </div>
  );
};

interface Props {
  children?: JSX.Element | JSX.Element[];
}