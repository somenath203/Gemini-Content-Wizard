import { allTemplates } from '@/app/(data)/templatesData';
import TemplateCard from './TemplateCard';

const TemplateListSection = ({ searchTemplate }) => {

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

      {allTemplates.filter((template) => {
        return template.name.toLowerCase().includes(searchTemplate.toLowerCase())
      }).map((template, index) => (
        <TemplateCard template={template} key={index} />
      ))}
      
    </div>
  );
};

export default TemplateListSection;
