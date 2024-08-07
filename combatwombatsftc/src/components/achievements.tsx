import Image from "next/image";
import { Si1Password } from "react-icons/si";

const achievements = [
  [
    `Centerstage Queensland Regionals`,
    // "At our regional event, we were fortunate to receive FTC's Motivate award as a rookie team. Our team dynamics and management styles were highly commended, which enabled us to represent QLD at the AU Nationals Competition.",
    0,
    "bg-team-award",
    `Motivate Award`,
    "2023-2024",
  ],
  [
    "Centerstage Australian National Championship",
    // "Our team then received the Judge's All-Rounder Award at the Nationals competition. The team received this for exuding contagious courage and energy at the competition, to empower others to go further.",
    1,
    "bg-team",
    "Judge's All-Rounder Award",
    "2023-2024",
  ],
  // [
  //   "2023-2024 Asia-Pacific Championship Inspire Award",
  //   // "We're setting our sights and rangefinding for the target that is the Inspire Award at the upcoming Asia-Pacific Championship. GO BIG OR GO HOME FELLAS!",
  // ],
  //[
  //"Raising Funds and Awareness for Multiple Charities",
  // "We're Change-makers. And we're devoted to raising a better community to inspire the next generation of engineers. We have raised funds for the Riseup charity, and are working hard to ensure that FIRST's impact is felt all across QLD.",
  //],
];

const keys = [1, 2, 3, 4];

const styles = ["md:col-start-2", "md:col-start-3"];

const achievementsList = achievements.map((achievement, key, style) => (
  <div
    className={`aspect-[5/3] px-4 py-4 rounded-xl text-white border-combatgreen border-4 hover:border-0 w-4/5 md:w-3/5 lg:max-w-md xl:max-w-small 2xl:max-w-2xl 3xl:max-w-3xl 4xl:max-w-moderate ${achievement[2]} bg-blend-multiply bg-black bg-opacity-70 font-semibold text-xl hover:bg-opacity-0 transition-all child:transition-all bg-cover child:hover:opacity-0 bg-center hover:scale-110 hover:-translate-y-2 hover:shadow-[5px_5px_#739954,_10px_10px_#8F9853,_15px_15px_#998B54] 3xl:hover:shadow-[5px_5px_#739954,_15px_15px_#8F9853,_25px_25px_#998B54]`}
    key={achievement[1]}
  >
    <h4 className="mb-2 2xl:gap-1 4xl:gap-3 flex flex-col justify-start">
      <span className="font-medium text-xs ms:text-sm 2xl:text-base 3xl:text-lg 4xl:text-2xl">{achievement[4]}</span>
      <span className="text-base ms:text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl">{achievement[0]}</span>
      <span className="combat font-black text-base ms:text-lg md:text-xl lg:text-2xl 2xl:text-3xl 4xl:text-5xl">
        {achievement[3]}
      </span>
    </h4>
  </div>
));

export default function Achievements() {
  return (
    <div data-aos="fade-up">
      <section
        className="my-24 xl:my-36 mx-6 bg-blob bg-no-repeat bg-right-bottom lg:hover:bg-[right_-1rem_top_1rem] transition-all lg:bg-right-top bg-[length:200px] 2xl:bg-[length:400px]"
      >
        <h1 className="text-2xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold mx-auto max-w-fit my-12 px-2 text-center underline decoration-combatgreen ">
          Our Achievements
        </h1>
        <section id="services">
          <div className="flex flex-col justify-evenly items-center lg:flex-row child:my-4 lg:my-0">
            {achievementsList}
          </div>
        </section>
      </section>
    </div>
  );
}

//obs: grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3
