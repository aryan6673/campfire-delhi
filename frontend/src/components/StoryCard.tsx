interface StoryCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

function StoryCard({ imageSrc, imageAlt, title, description }: StoryCardProps) {
  return (
    <div className="bg-white p-6 flex flex-1 basis-0 flex-col gap-2 h-[557px] shadow-[16px_16px_0px_0px_rgba(0,0,0,0.3)]">
      <img 
        src={imageSrc}
        alt={imageAlt}
        className="w-[297px] h-[257px] object-cover mb-2"
      />
      <div className="p-2">
        <p 
          className="text-black text-5xl font-bold mb-2 font-amatic"
          style={{ 
            textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
          }}
        >
          {title}
        </p>
        <p 
          className="text-black text-3xl font-bold font-amatic"
          style={{ 
            textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default StoryCard;
