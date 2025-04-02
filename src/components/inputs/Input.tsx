interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: any): void;
}

interface EmailInputProps {
  label: string;
  value: string;
  updateValue(value: any): void;
}

interface DateInputProps {
  label: string;
  value: string | number;
  updateValue(value: any): void;
}

interface RadioProps {
  label: string;
  value: boolean;
  updateValue(value: boolean): void;
}

interface SelectInputProps {
  label: string;
  value: string;
  updateValue(value: string): void;
  options: string[];
  disabled?: boolean;
}

export const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        value={value}
        onChange={(e) => updateValue(e.target.value)}
      ></input>
    </>
  );
};

export const EmailInput = ({ label, value, updateValue }: EmailInputProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        type="email"
        value={value}
        onChange={(e) => updateValue(e.target.value)}
      ></input>
    </>
  );
};

export const DateInput = ({ label, value, updateValue }: DateInputProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        type="date"
        value={value}
        onChange={(e) => updateValue(e.target.value)}
        style={{ borderRadius: "10px" }}
      ></input>
    </>
  );
};

export const Radio = ({ label, value, updateValue }: RadioProps) => {
  return (
    <div>
      <label>{label}</label>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "space-evenly",
          padding: "10px",
        }}
      >
        <label>
          <input
            type="radio"
            name={label}
            value="true"
            checked={value === true}
            onChange={() => updateValue(true)}
          />
          Sim
        </label>
        <label>
          <input
            type="radio"
            name={label}
            value="false"
            checked={value === false}
            onChange={() => updateValue(false)}
          />
          Não
        </label>
      </div>
    </div>
  );
};

export const SelectInput = ({
  label,
  value,
  updateValue,
  options,
  disabled = false,
}: SelectInputProps) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label>{label}</label>
        <select
          value={value}
          onChange={(e) => updateValue(e.target.value)}
          disabled={disabled}
          style={{ padding: "10px", borderRadius: "10px" }}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
