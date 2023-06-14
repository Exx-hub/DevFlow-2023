import IconSquare from "./IconSquare";

function FeatureCard() {
  const features = [
    {
      id: 0,
      icon: "bibot",
      path: "/chatbot",
    },
    {
      id: 1,
      icon: "giplasticduck",
      path: "debug-ducky",
    },
    {
      id: 2,
      icon: "mdoutlinetimer",
      path: "/pomodoro",
    },
    {
      id: 3,
      icon: "fitarget",
      path: "/goals",
    },
    {
      id: 4,
      icon: "tbkeyboard",
      path: "/freedom-board",
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
