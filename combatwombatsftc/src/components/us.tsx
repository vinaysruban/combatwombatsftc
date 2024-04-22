import Image from "next/image";
import Link from "next/link";

export default function Us() {
  const teamMembers = [
    {
      name: "Hugo Lawler",
      role: (
        <span className="font-semibold text-gray-800 dark:text-gray-200">
          Team Captain
        </span>
      ),
      description: "Causing a ruckus is part of my repertoire!",
      image: "/icons/hugo.webp",
    },
    {
      name: "Mehul Babu",
      role: (
        <span className="font-medium text-gray-800 dark:text-gray-200">
          Head of Hardware
        </span>
      ),
      description: "In charge of building the intake, a vital component...",
      image: "/icons/mehul.jfif",
    },
    {
      name: "Shainthra Birabaharan",
      role: (
        <span>
          <span className="font-medium text-gray-800 dark:text-gray-200">
            Head of Outreach
          </span>
          , Engineer
        </span>
      ),
      description:
        "Helping design the drone launcher, while managing our socials...",
      image: "/icons/shainthra.jfif",
    },
    {
      name: "Juan Santhosh",
      role: (
        <span className="font-medium text-gray-800 dark:text-gray-200">
          Head of Software
        </span>
      ),
      description: "Currently programming our robot's sensor packages...",
      image: "/icons/juan.jfif",
    },
    {
      name: "Benjamin Crespy-Worth",
      role: "Engineer",
      description: "Additionally working on the robot's sensors...",
      image: "/icons/ben.jfif",
    },
    {
      name: "Bhasu Madala",
      role: (
        <span className="font-medium text-gray-800 dark:text-gray-200">
          Head of Documentation
        </span>
      ),
      description: "Implementing the drone launcher into our robot...",
      image: "/icons/bhasu.jfif",
    },
    {
      name: "Jack White",
      role: "Engineer",
      description: "Building and printing the hanging mechanism...",
      image: "/icons/jack.jfif",
    },
    {
      name: "Daniel Laine",
      role: "Engineer, Outreach",
      description: "Fabricating our claw and transfer system...",
      image: "/icons/daniel.jfif",
    },
    {
      name: "Michael Powers",
      role: "Engineer",
      description: "Establishing and organising our robot's cabling...",
      image: "/icons/michael.jfif",
    },
    {
      name: "Theo Sun",
      role: "Engineer, Outreach",
      description: "Assembling the robot's crucial intake system...",
      image: "/icons/theo.jfif",
    },
    {
      name: "Vinay Saravana Ruban",
      role: (
        <span>
          <span className="font-medium text-gray-800 dark:text-gray-200">
            Website Manager
          </span>
          , Software
        </span>
      ),
      description: "Erecting and managing the website...",
      image: "/icons/vinay.jfif",
    },
  ];

  return (
    <div className="relative">
      <section className="py-12 px-8 ">
        <div className="mx-auto">
          <div data-aos="fade-up">
            <h1
              className="font-bold text-3xl ms:text-4xl before:h-2 sm:text-5xl sm:before:h-2 md:text-6xl md:before:h-3 lg:text-7xl lg:before:h-4 3xl:text-8xl mx-auto block w-fit popup relative"
            >
              Meet our team!
            </h1>
            <p className="text-center font-semibold text-lg md:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl my-12">
              And what we&apos;re working on right now!
            </p>
          </div>
          <div className="grid grid-cols-4 lg:grid-cols-8">
            {teamMembers.map((member, index) =>
              index === 10 ? (
                <Link
                  href="/about#developer"
                  key={index}
                  className={`sm:p-4 py-12 text-center col-span-2 isus`}
                  data-aos="fade-up"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={100}
                    height={100}
                    className={`mx-auto h-24 w-24 sm:h-32 sm:w-32 2xl:w-44 2xl:h-44 4xl:h-64 4xl:w-64 rounded-full mb-4 object-cover transition-shadow hover:shadow-[0px_0px_0px_0.5rem_#8F9853,0px_0px_0px_1rem_#998B54]`}
                  />
                  <h3 className="text-lg 2xl:text-2xl font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm xs:text-base 2xl:text-xl">
                    {member.role}
                  </p>
                  <p className="text-xs xs:text-base 2xl:text-lg">
                    {member.description}
                  </p>
                </Link>
              ) : (
                <div
                  key={index}
                  className={`sm:p-4 py-12 text-center col-span-2 isus`}
                  data-aos="fade-up"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={100}
                    height={100}
                    className={`mx-auto h-24 w-24 sm:h-32 sm:w-32 2xl:w-44 2xl:h-44 4xl:h-64 4xl:w-64 rounded-full mb-4 object-cover transition-shadow hover:shadow-[0px_0px_0px_0.5rem_#8F9853]`}
                  />
                  <h3 className="text-lg 2xl:text-2xl font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm xs:text-base 2xl:text-xl">
                    {member.role}
                  </p>
                  <p className="text-xs xs:text-base 2xl:text-lg">
                    {member.description}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
