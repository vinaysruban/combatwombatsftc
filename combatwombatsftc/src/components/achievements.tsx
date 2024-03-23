import Image from "next/image";
import { Si1Password } from "react-icons/si";

const achievements = [
  [
    "Free Trial",
    "We give you a free trial to our subscription service for 30 days. Don't like it? Just cancel. That Easy.",
  ],
  [
    "Damage Repair",
    "Damage your game files? Don't worry! We got you sorted, with an easy repair tool that comes with all our games.",
  ],
  [
    "Suggestions",
    "We accept suggestions as well! Found a topic that we haven't covered yet? Submit it to our system and we'll look into it.",
  ],
  [
    "Schools",
    "If you're an educator, you may be eligible to purchase a group package. All the same games for a discounted price!",
  ],
];

const keys = [1, 2, 3, 4];

const achievementsList = achievements.map((achievement, key) => (
  <div className="bg-darkgrey dark:bg-mutegrey h-60 px-4 py-4 rounded-xl text-white" key={key}>
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
