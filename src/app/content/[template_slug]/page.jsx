'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import moment from 'moment/moment';
import { toast } from 'sonner';

import { allTemplates } from '@/app/(data)/templatesData';
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import { Button } from '@/components/ui/button';
import { chatSessionGoogleGemini } from '@/GoogleGeminiModel';
import { db } from '@/NeonDb';
import { AiOutputSchema } from '@/models/modelOutputSchema';


const Page = ({ params }) => {


  const selectedTemplate = allTemplates.find((template) => template.slug === params?.template_slug);


  const [loading, setLoading] = useState();


  const [aiModelResponse, setAiModelResponse] = useState();


  const { user } = useUser();


  const generateContentByAIAndSaveInNeonDB = async (inputValueByUser) => {

    try {

      setLoading(true);

      const promptFromSelectedTemplate = selectedTemplate.aiPrompt;

      const final_input_for_the_gemini_model = `${JSON.stringify(inputValueByUser)} ${promptFromSelectedTemplate}`;

      const result = await chatSessionGoogleGemini.sendMessage(final_input_for_the_gemini_model);

      await db.insert(AiOutputSchema).values({
        aiResponse: result?.response?.text(),
        templateSlugName: selectedTemplate.slug,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format('DD/MM/yyyy'),
      });

      setAiModelResponse(result?.response?.text());

      toast('Response has been generated and successfully stored inside the database.',{
          position: 'top-right',
        }
      );

    } catch (error) {

      console.log(result);

      toast('Something went wrong. Please try again.', {
        position: 'top-right',
      });

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="p-4 lg:p-10">

      <Link href="/dashboard">
        <Button className="flex items-center justify-center gap-2 ml-2 lg:ml-5">
          <ArrowLeft />
          <span>Back to Dashboard</span>
        </Button>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 p-4 lg:p-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          setFormInputByUser={(value) =>
            generateContentByAIAndSaveInNeonDB(value)
          }
          loading={loading}
        />
        <OutputSection aiModelResponse={aiModelResponse} />
      </div>

    </div>
  );
};

export default Page;
