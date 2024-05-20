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
    <div id="form" className="mt-36 flex flex-col  justify-center md:flex-row">
      <div className="w-full p-6 md:w-1/2 md:p-12">
        <p className="mb-6 text-center text-2xl font-semibold md:text-left">
          Secure Your Zenith Ultra X Today!
        </p>
        <p className="mb-6 text-center text-lg font-medium text-gray-700 md:text-left">
          Experience unmatched performance, stunning design, and cutting-edge
          features all in one exceptional device. Fill out the form below to
          secure your Zenith Ultra X.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onOrder)}
        className="flex w-full flex-col items-center gap-4 md:w-1/2"
      >
        {inputFields.map((input) => (
          <Controller
            key={input.name}
            control={control}
            render={({ field, fieldState }) => (
              <div className="w-full">
                <input
                  {...field}
                  type={input.type}
                  className="w-full rounded-xl border border-gray-300 p-3 outline-none transition duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                  placeholder={input.placeholder}
                />
                {fieldState.error && (
                  <div className="ml-1 mt-1 text-sm text-red-600">
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
          className="mt-6 w-full rounded-full bg-indigo-600 px-8 py-3 font-medium text-white transition duration-200 hover:bg-indigo-700"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
