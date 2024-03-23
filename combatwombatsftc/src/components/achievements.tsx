import Image from "next/image";
import { Si1Password } from "react-icons/si";

const achievements = [
  [
    "2024 Centerstage Queensland Regionals Motivate Award",
    // "At our regional event, we were fortunate to receive FTC's Motivate award as a rookie team. Our team dynamics and management styles were highly commended, which enabled us to represent QLD at the AU Nationals Competition.",
  ],
  [
    "2024 Centerstage Australian National Championship Judge's All-Rounder Award",
    // "Our team then received the Judge's All-Rounder Award at the Nationals competition. The team received this for exuding contagious courage and energy at the competition, to empower others to go further.",
  ],
  [
    "2024 Asia-Pacific Championship Inspire Award",
    // "We're setting our sights and rangefinding for the target that is the Inspire Award at the upcoming Asia-Pacific Championship. GO BIG OR GO HOME FELLAS!",
  ],
  [
    "Raising Funds and Awareness for Multiple Charities",
    // "We're Change-makers. And we're devoted to raising a better community to inspire the next generation of engineers. We have raised funds for the Riseup charity, and are working hard to ensure that FIRST's impact is felt all across QLD.",
  ],
];

const keys = [1, 2, 3, 4];

const achievementsList = achievements.map((achievement, key) => (
  <div className="bg-lightgreen dark:bg-mutegrey h-60 px-4 py-4 rounded-xl" key={key}>
    <Si1Password className="mt-8 mb-2" />
    <h4 className="my-2">{achievement[0]}</h4>
    <span className="my-2">{achievement[1]}</span>
  </div>
));

export default function Achievements() {
  console.log(achievementsList);

  return (
    <section className="my-24 mx-12">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold mx-auto max-w-fit my-12 px-2">
        Our Achievements
      </h1>
      <section id="services">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 ">
          {achievementsList}
        </div>
      </section>
    </section>
  );
}
