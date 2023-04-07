import { useFormContext } from "react-hook-form";

export default function ContactForm() {
  const { register } = useFormContext();
  return (
    <div>
      <label>
        <span>Email: </span>
        <input type="email" {...register("email")} />
      </label>
      <label>
        <span>Phone Number: </span>
        <input type="text" {...register("phoneNumber")} />
      </label>
    </div>
  );
}
