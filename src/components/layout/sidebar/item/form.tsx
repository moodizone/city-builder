import * as React from "react";

import Input from "@/components/form/input";

interface Props {
  initialValue: string;
  renameHandler(name: string): void;
}

function Form({ initialValue = "", renameHandler }: Props) {
  const ref = React.useRef<HTMLInputElement>(null);
  const [value, onChange] = React.useState<string>(initialValue);

  // auto-focus and auto-select on input when component mounts
  React.useEffect(() => {
    if (ref.current) {
      ref.current.focus();
      ref.current.select();
    }
  }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        renameHandler(value);
      }}
    >
      <Input
        ref={ref}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </form>
  );
}

export default Form;
