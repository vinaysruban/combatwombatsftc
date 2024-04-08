import GoBack from "@/utils/goBack";

export default function About() {
  return (
    <div className="px-2 sm:px-6 md:px-12 py-12 h-full w-5/6 max-w-screen-3xl mx-auto">
      <main className="">
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 3xl:text-7xl font-bold my-12 text-center">Let's build together!</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Our journey is coming to it's climax, and we are excited to share our story with you. Let's hope you take our learnings and forge your own path to a greater victory.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Mauris viverra. Phasellus a est. Fusce fermentum odio nec arcu. Vivamus euismod mauris. Pellentesque malesuada.
        </p>
      </main>
    </div>
  );
}
