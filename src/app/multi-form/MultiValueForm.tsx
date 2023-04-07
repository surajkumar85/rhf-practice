import { useFieldArray, useFormContext } from "react-hook-form";

export default function MultiValueForm() {
  const { register, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "issue",
  });
  return (
    <div>
      <span>Issues: </span>
      {fields.length > 0 &&
        fields.map((field, index) => (
          <label key={field.id}>
            <span>{`Issue-${index + 1}`}</span>
            <input type="text" {...register(`issue[${index}]`)} />
            <button onClick={() => remove(index)}>Remove</button>
          </label>
        ))}
      <button onClick={() => append("")}>Add</button>
    </div>
  );
}
