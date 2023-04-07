"use client";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import BasicForm from "./BasicForm";
import ContactForm from "./ContactForm";
import AddressForm from "./AddressForm";
import MultiValueForm from "./MultiValueForm";

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
  address: z.string(),
  pinCode: z.string(),
  issue: z.array(z.string()),
});

type FormFieldTypes = z.infer<typeof formSchema>;

export default function Form() {
  const functions = useForm<FormFieldTypes>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit: SubmitHandler<FormFieldTypes> = (data) => console.log(data);
  return (
    <div>
      <FormProvider {...functions}>
        <h2>Form</h2>
        <form onSubmit={functions.handleSubmit(onSubmit)}>
          <BasicForm />
          <ContactForm />
          <AddressForm />
          <MultiValueForm />
          <input type="submit" />
        </form>
      </FormProvider>
    </div>
  );
}
