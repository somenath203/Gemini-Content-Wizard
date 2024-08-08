'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Loader } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';


const FormSection = ({ selectedTemplate, setFormInputByUser, loading }) => {

  const [formData, setFormData] = useState();

  const handleInputChange = (e) => {

    e.preventDefault();

    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

  };

  const onSubmitForm = (e) => {

    e.preventDefault();

    setFormInputByUser(formData);

  };

  return (
    <div className="p-4 lg:p-5 w-full shadow-md border rounded-lg flex flex-col gap-4">

      <Image
        src={selectedTemplate.icon}
        alt={selectedTemplate.name}
        width={60}
        height={60}
      />

      <h2 className="font-bold text-xl lg:text-2xl text-primary">
        {selectedTemplate.name}
      </h2>

      <p className="text-gray-500 text-sm lg:text-base">
        {selectedTemplate.description}
      </p>

      <form className="mt-5" onSubmit={onSubmitForm}>

        {selectedTemplate.form.map((item, index) => (

          <div key={index} className="my-2 flex flex-col gap-2 mb-2">

            <label className="font-semibold">{item.label}</label>

            {item.field === 'input' ? (
              <Input
                name={item.name}
                onChange={handleInputChange}
                required={item.required}
                className="w-full"
              />
            ) : item.field === 'textarea' ? (
              <Textarea
                className="w-full !resize-none"
                rows={6} // Adjusted rows for better fit
                onChange={handleInputChange}
                name={item.name}
                required={item.required}
              />
            ) : null}

          </div>

        ))}

        <Button
          type="submit"
          disabled={loading}
          className={`w-full p-4 lg:p-6 mt-3 text-lg flex items-center justify-center gap-2 ${
            loading ? 'disabled:bg-violet-500' : ''
          }`}
        >
          {loading ? (
            <Loader size={20} className="animate-spin" />
          ) : (
            <span>Generate</span>
          )}
        </Button>

      </form>
      
    </div>
  );
};

export default FormSection;
