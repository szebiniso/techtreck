'use client';
import { Controller, useForm } from 'react-hook-form';
import React from 'react';
import { formSchema, TForm } from '@/utils/zod';
import { zodResolver } from '@hookform/resolvers/zod';

type FieldName = 'first_name' | 'last_name' | 'email' | 'device_number';

interface InputField {
  name: FieldName;
  type: string;
  placeholder: string;
}

const Form = () => {
  const { control, handleSubmit } = useForm<TForm>({
    resolver: zodResolver(formSchema),
  });

  const inputFields: InputField[] = [
    {
      name: 'first_name',
      type: 'text',
      placeholder: 'First Name',
    },
    {
      name: 'last_name',
      type: 'text',
      placeholder: 'Last Name',
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email',
    },
    {
      name: 'device_number',
      type: 'number',
      placeholder: 'Number of devices',
    },
  ];

  const onOrder = () => {
    alert('You successfully ordered the phone!');
  };

  return (
    <form
      onSubmit={handleSubmit(onOrder)}
      className="mt-20 flex w-1/2 flex-col gap-2"
    >
      <p className="text-xl font-medium">
        Fill out the form below to secure your Zenith Ultra X today. Experience
        unmatched performance, stunning design, and cutting-edge features all in
        one exceptional device.
      </p>
      {inputFields.map((input) => (
        <Controller
          control={control}
          render={({ field, fieldState }) => (
            <div>
              <input
                {...field}
                type={input.type}
                className="w-full rounded-2xl p-2"
                placeholder={input.placeholder}
              />
              {fieldState.error && (
                <div className="text-sm text-red-600">
                  {fieldState.error.message}
                </div>
              )}
            </div>
          )}
          name={input.name}
        />
      ))}

      <button
        type="submit"
        className="mt-6 rounded-full border bg-black px-8 py-2 text-white"
      >
        Send
      </button>
    </form>
  );
};

export default Form;
