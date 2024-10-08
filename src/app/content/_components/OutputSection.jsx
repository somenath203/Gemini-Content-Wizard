'use client';

import { Editor } from '@toast-ui/react-editor';
import { Copy } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { toast } from 'sonner';


const OutputSection = ({ aiModelResponse }) => {


  const referenceToEditor = useRef();


  useEffect(() => {

    const editorInstance = referenceToEditor.current.getInstance();

    editorInstance.setMarkdown(aiModelResponse);

  }, [aiModelResponse]);


  const onCopyResponseToClipboard = () => {

    const editorInstance = referenceToEditor.current.getInstance();

    const markdownContent = editorInstance.getMarkdown();

    navigator.clipboard.writeText(markdownContent);

    toast("Response successfully copied to clipboard", {
      position: 'top-right'
    });

  }


  return (
    <div className="shadow-lg border w-full">

      <div className="flex items-center justify-between p-4 lg:p-5">

        <h2 className="font-semibold text-base lg:text-lg tracking-wider">
          Your Result
        </h2>

        <Copy size={20} className="text-primary cursor-pointer" onClick={onCopyResponseToClipboard} />

      </div>

      <Editor
        initialValue="the output generated by the Google Gemini model will be displayed here"
        previewStyle="vertical"
        height="400px" 
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        ref={referenceToEditor}
        className="max-h-96" 
      />

    </div>

  );
};

export default OutputSection;
