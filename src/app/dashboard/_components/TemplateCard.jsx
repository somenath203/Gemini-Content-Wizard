import Image from "next/image";
import Link from "next/link";

const TemplateCard = ({ template }) => {
  return (
    <Link href={`/content/${template.slug}`}>
      <div className="p-5 shadow-md rounded-md border bg-white flex flex-col gap-3 cursor-pointer hover:transition-all hover:duration-700 hover:scale-110">

        <Image src={template.icon} alt={template.name} width={50} height={50} />

        <h2 className="font-medium text-lg">{template.name}</h2>

        <p className="text-gray-500 line-clamp-3">{template.description}</p>

      </div>
    </Link>
  )
};

export default TemplateCard;