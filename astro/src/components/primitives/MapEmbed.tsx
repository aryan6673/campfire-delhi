interface MapEmbedProps {
  className?: string;
  label?: string;
  onOpenMap: () => void;
}

function MapEmbed({ className, onOpenMap, label = "find an event near you" }: MapEmbedProps) {
  return (
    <div className={className}>
      <div className="relative mt-16 md:mt-0 mb-2 md:mb-10 2xl:mb-12">
        <p 
          className="text-white text-4xl 2xl:text-5xl font-bold font-ember-and-fire text-center"
          style={{ 
            textShadow: "0px 4px 4px rgba(0,0,0,0.25)"
          }}
        >
          {label}
        </p>

        <img 
          src="/compressed/ui/arrow.webp" 
          alt="" 
          className="hidden md:block absolute right-0 top-full w-[55px] h-[41px] rotate-[6.2deg] z-50 select-none"
        />
      </div>

      <button 
        onClick={onOpenMap}
        className="relative transform rotate-[1.7deg] transition-transform hover:scale-105 w-[70vw] md:w-[50vw] xl:w-[442px] mx-auto cursor-pointer"
      >
        <img
          src="/map/map-screenshot.png"
          alt="Map screenshot"
          className="w-full rounded-2xl shadow-[12px_12px_0px_0px_rgba(0,0,0,0.25)]"
        />
      </button>
    </div>
  );
}

export default MapEmbed;
