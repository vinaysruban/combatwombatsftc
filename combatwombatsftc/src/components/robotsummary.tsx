export default function RobotSummary() {
  return (
    <section className="bg-combatgreen px-12 py-16">
      <video width="1024px" autoPlay muted preload="none" className="rounded-3xl mx-auto">
        <source src="/sheep.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl max-w-screen-lg mx-auto my-8">This is <span className="text-wombatbrown font-bold">bhasu</span></h1>
      <p className="font-medium md:text-xl 2xl:text-2xl max-w-screen-lg mx-auto">
        Yappity yappity yap. you gotta talk about the robot here juan. engage the audeince
        </p>
      <div className="max-w-screen-lg mx-auto">
        <button className="bg-wombatbrown text-white font-medium text-2xl rounded-2xl px-12 py-4 mt-8">Learn More</button>
      </div>
    </section>
  );
}
