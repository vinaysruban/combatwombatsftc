import Image from "next/image";

const goalsList = [
  [
    "/icons/shainthra.jfif",
    "Shainthra Birabaharan",
    "Head of Outreach",
    "We're in touch with our community",
    "For the 2023-2024 FTC season, our team intends to bump up our outreach game to promote STEM and FIRST better than we ever have. We aim to push ourselves with outreach by aiming to get each person in our team to take initiative on planning and actioning an outreach experience. We have already begun planning many of these experiences and are aiming to put them into action as soon as possible.",
    "0",
  ],
  [
    "/icons/juan.jfif",
    "Juan Santhosh",
    "Head of Software",
    "A glimse within our codebase",
    "This season, we would like to incorporate further use of distance and colour sensors into our autonomous and driver controlled programs. Through this we aim to improve the functionality of our robot during the autonomous period and streamline the various scoring methods within the driver controlled period, particularly in the pixel transfer and placement processes.",
    "1",
  ],
  [
    "/icons/mehul.jfif",
    "Mehul Babu",
    "Head of Hardware",
    "Under the skin of our robot",
    "On the hardware side of things, this season, our team aims to minimise cycle times by employing slides more widely and creatively to maximise extension. We also aim to improve the speed and manoeuvrability of our holonomic drivebase through the implementation of GoBilda hardware.",
    "2",
  ],
  [
    "/icons/bhasu.jfif",
    "Bhasu Madala",
    "Head of Documentation",
    "We've been logging our experiences",
    "For the next season, our goal is to ensure every part of our process in developing our robot is documented within a portfolio that will be easy for the judges and other teams to understand. Our current focus in organising our records to meet the criteria for awards such as the Inspire Award. We will ensure that our experiences are showcased as a guide for other teams to better their development.",
    "3",
  ],
  [
    "/icons/hugo.webp",
    "Hugo Lawler",
    "Team Leader",
    "The future of the Combat Wombats.",
    "Our team's goal this season is to expand our skills and community's STEM involvement. We'll push ourselves by applying new learnings practically and through teamwork. We're focusing on developing the SEPv2 robot, learning from past experiences, and engaging in outreach and networking. I'll oversee members' personal growth and ensure all robot planning is done for our success and memorable experiences.",
    "4",
  ],
];

const goalsElement = goalsList.map((goal) => {
  return (
    <div
      className="card mask lg:first-of-type:col-start-1 lg:first-of-type:col-end-4 bg-midbeige dark:bg-mutegrey rounded-2xl p-4 transition-all hover:scale-[1.02] hover:border-combatgreen "
      key={goal[-1]}
    >
      <div className="flex items-center">
        <div className="">
          <Image
            className=" h-10 w-10 border-2 border-black dark:border-white rounded-full object-cover"
            width={100}
            height={100}
            src={goal[0]}
            alt={goal[1]}
          />
        </div>
        <div className="ml-4">
          <h3>{goal[1]}</h3>
          <p className=" opacity-50">{goal[2]}</p>
        </div>
      </div>
      <div className="">
        <h4 className="text-2xl pt-4 font-bold">{goal[3]}</h4>
        <p className="text-base opacity-75 pt-4 font-medium">{goal[4]}</p>
      </div>
    </div>
  );
});

const goalsElement2 = goalsList.map((goal) => {
  return (
    <article
      className="z-[10] w-[30%] max-w-[28rem] min-h-[350px] shadow-[0px_0px_25px_4px_rgba(0,0,0,0.45)] flex flex-col transition-[0.2s] m-0 p-6 rounded-2xl bg-midbeige dark:bg-mutegrey mini-card"
      id="mini-post-291626"
      key={goal[-1]}
    >
      <header className="">
        <div className="flex items-center">
          <div className="">
            <Image
              className=" h-10 3xl:h-16 w-10 3xl:w-16 border-2 border-black dark:border-white rounded-full object-cover"
              width={100}
              height={100}
              src={goal[0]}
              alt={goal[1]}
            />
          </div>
          <div className="ml-4">
            <h3 className="3xl:text-lg">{goal[1]}</h3>
            <p className=" opacity-90">{goal[2]}</p>
          </div>
        </div>
      </header>
      <div className="mini-article-meta">
        <div className="mini-article-byline text-pretty">
          <div className="text-pretty -z-10">
            <h4 className="text-2xl pt-4 font-bold">{goal[3]}</h4>
            <p className="text-base 3xl:text-lg opacity-75 pt-4 font-medium">{goal[4]}</p>
          </div>
        </div>
      </div>
    </article>
  );
});

export default function Goals() {
  return (
    <section data-aos="fade-up" className="my-12">
      <h1 className="font-bold text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl w-max mx-auto my-12 text-wrap">
        What&apos;s{" "}
        <span className="bg-combatgreen rounded-2xl px-2 pb-1 text-white">
          ahead...
        </span>
      </h1>
      <div className="lg:grid-cols-7 pb-8 px-4 mx-auto w-5/6 lg:w-auto grid lg:hidden gap-4 3xl:gap-6 max-w-screen-3xl ">
        {goalsElement}
      </div>
      <div className="max-w-screen-3xl overflow-hidden mx-auto px-4 py-12 hidden lg:flex">
        {goalsElement2}
      </div>
    </section>
  );
}
