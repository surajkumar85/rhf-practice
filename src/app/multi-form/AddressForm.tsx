import { useFormContext } from "react-hook-form";

export default function AddressForm() {
  const { register } = useFormContext();
  return (
    <div>
      <label>
        <span>Address: </span>
        <input type="text" {...register("address")} />
      </label>
      <label>
        <span>Pin Code: </span>
        <input type="text" {...register("pinCode")} />
      </label>
    </div>
  );
}
