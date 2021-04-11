import React from "react";

type Props = {
  id?: string;
  className?: string;
  type?: string;
  name?: string;
};

export const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => (
  <input ref={ref} {...props} />
));
