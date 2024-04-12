import Image from "next/image";
import Link from "next/link";

export default function Us() {
  const teamMembers = [
    {
      name: "Hugo Lawler",
      role: (
        <span className="font-bold text-gray-700 dark:text-gray-400">
          Team Captain
        </span>
      ),
      description: "Neque porro quisquam est, consectetur, adipisci velit...",
      image: "/icons/hugo.webp",
    },
    {
      name: "Mehul Babu",
      role: (
        <span className="font-medium text-gray-700 dark:text-gray-400">
          Head of Hardware
        </span>
      ),
      description: "Neque porro quisquam est, consectetur, adipisci velit...",
      image: "/icons/mehul.jfif",
    },
    {
      name: "Shainthra Birabaharan",
      role: (
        <span>
          <span className="font-medium text-gray-700 dark:text-gray-400">
            Head of Outreach
          </span>
          , Engineer
        </span>
      ),
      description: "Neque porro quisquam est, consectetur, adipisci velit...",
      image: "/icons/shainthra.jfif",
    },
    {
      name: "Juan Santhosh",
      role: (
        <span className="font-medium text-gray-700 dark:text-gray-400">
          Head of Software
        </span>
      ),
      description: "Neque porro quisquam est, consectetur, adipisci velit...",
      image: "/icons/juan.jfif",
    },
    {
      name: "Benjamin Crespy-Worth",
      role: "Engineer",
      description: "Neque porro quisquam est, consectetur, adipisci velit...",
      image: "/icons/ben.jfif",
    },
    {
      name: "Bhasu Madala",
      role: (
        <span className="font-medium text-gray-700 dark:text-gray-400">
          Head of Documentation
        </span>
      ),
      description: "Neque porro quisquam est, consectetur, adipisci velit...",
      image: "/icons/bhasu.jfif",
    },
    {
      name: "Jack White",
      role: "Engineer",
      description: "Neque porro quisquam est, consectetur, adipisci velit...",
      image: "/icons/jack.jfif",
    },
    {
      name: "Daniel Laine",
      role: "Engineer, Outreach",
      description: "Neque porro quisquam est, consectetur, adipisci velit...",
      image: "/icons/daniel.jfif",
    },
    {
      name: "Michael Powers",
      role: "Engineer",
      description: "Neque porro quisquam est, consectetur, adipisci velit...",
      image: "/icons/michael.jfif",
    },
    {
      name: "Theo Sun",
      role: "Engineer, Outreach",
      description: "Neque porro quisquam est, consectetur, adipisci velit...",
      image: "/icons/theo.jfif",
    },
    {
      name: "Vinay Saravana Ruban",
      role: (
        <span>
          <span className="font-medium text-gray-700 dark:text-gray-400">
            Website Manager
          </span>
          , Software
        </span>
      ),
      description: "Neque porro quisquam est, consectetur, adipisci velit...",
      image: "/icons/vinay.jfif",
    },
  ];

  return (
    <div className="relative">
      <section className="py-12 px-8 ">
        <div className="mx-auto">
          <h1
            className="font-bold text-3xl ms:text-4xl before:h-2 sm:text-5xl sm:before:h-2 md:text-6xl md:before:h-3 lg:text-7xl lg:before:h-4 mx-auto block w-fit mb-12 popup relative"
            data-aos="fade-up"
          >
            Meet our team!
          </h1>
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
                  <p className="text-gray-600 text-sm xs:text-base 2xl:text-xl">
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
                  <p className="text-gray-600 text-sm xs:text-base 2xl:text-xl">
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
