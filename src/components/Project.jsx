import  { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="flex-wrap px-4 font-[absans] min-h-[40vh] items-center justify-center py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div className="w-full flex flex-col items-center">
          <img
          
          className=" w-[50%] object-cover image text-center"
          src={`${image}`} alt="" />
          <p className="text-2xl mt-4">{title}</p>
          <div className="flex gap-5 tags mt-5 text-white">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
              <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 ml-30 cursor-pointer hover-animation"
        >
          <span className="read">Read More</span>
          <img src="assets/arrow-right.svg" className="w-5" />
        </button>
          </div>
        </div>
      
      </div>



      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
