import type {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface InputFieldProps<T extends FieldValues>
  extends React.ComponentProps<typeof Input> {
  name: Path<T>;
  register: UseFormRegister<T>;
  label?: string;
  validation?: RegisterOptions<T>;
  error?: FieldError;
}

const InputField = <T extends FieldValues>({
  register,
  label,
  name,
  className,
  validation,
  error,
  ...props
}: InputFieldProps<T>) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="form-label">
        {label}
      </Label>
      <Input
        className={cn("form-input", {
          "cursor-not-allowed opacity-50": props.disabled,
        })}
        {...props}
        {...register(name, validation)}
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default InputField;
