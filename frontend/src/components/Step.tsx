interface StepProps {
  stepNumber: number;
  title: string;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
}

function Step({ stepNumber, title, imageSrc, imageAlt, isReversed = false }: StepProps) {
  return (
    <div className={`flex gap-16 items-center w-full flex-col-reverse ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
      <div className={`flex flex-col text-white flex-1 ${isReversed ? 'lg:items-start' : 'lg:items-end lg:text-right'}`}>
        <p 
          className="text-4xl font-bold mb-2 font-amatic"
          style={{ 
            textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
          }}
        >
          step {stepNumber}
        </p>
        <p 
          className={`text-6xl font-bold leading-tight font-amatic ${!isReversed ? 'max-w-md' : ''}`}
          style={{ 
            textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
          }}
        >
          {title}
        </p>
      </div>
      <img 
        src={imageSrc}
        alt={imageAlt}
        className="rounded-lg object-cover w-[509px] aspect-video shadow-[-8px_16px_0px_0px_rgba(0,0,0,0.25)]"
      />
    </div>
  );
}

export default Step;
