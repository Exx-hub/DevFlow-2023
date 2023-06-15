import IconSquare from "./IconSquare";

function FeatureCard() {
  const features = [
    {
      id: 1,
      icon: "faregstickynote",
      path: "/sticky-notes",
    },
    {
      id: 2,
      icon: "giplasticduck",
      path: "debug-ducky",
    },
    {
      id: 3,
      icon: "bibot",
      path: "/chatbot",
    },

    {
      id: 4,
      icon: "mdoutlinetimer",
      path: "/pomodoro",
    },
    {
      id: 5,
      icon: "fitarget",
      path: "/goals",
    },
  ];
  return (
    <div className="flex items-center justify-center p-4 space-x-4 md:p-6 md:space-x-8 mb-20 bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.055)]">
      {features.map((e) => (
        <IconSquare key={e.id} icon={e.icon} path={e.path} />
      ))}
    </div>
  );
}

export default FeatureCard;
