import Image from 'next/image'

const goalsList = [
    ["/icons/shainthra.jfif", "Shainthra Birabaharan", "Head of Outreach", "We're in touch with our community", "For the 2023-2024 FTC season, our team intends to bump up our outreach game to promote STEM and FIRST better than we ever have. We aim to push ourselves with outreach by aiming to get each person in our team to take initiative on planning and actioning an outreach experience. We have already begun planning many of these experiences and are aiming to put them into action as soon as possible.", "0"],
    ["/icons/juan.jfif", "Juan Santhosh", "Head of Software", "Within our code.", "This season, we are incorporating distance and colour sensors into our autonomous and driver controlled programs. We aim to improve the functionality of our robot during the autonomous period and streamline the various scoring methods within the driver controlled period, particularly in the pixel transfer and placement processes.", "1"],
    ["/icons/mehul.jfif", "Mehul Babu", "Head of Hardware", "E condigne w hic iusto dis-proper, per", "&apos; Y eos eu NON aut vero purus sapien W debila leo laborans. Y&apos;ea unde aspirat mi arcu a publiciter sem quod porro usus veneta quo sed me &apos;", "2"],
    ["/icons/bhasu.jfif", "Bhasu Madala", "Head of Documentation", "We've been logging our experiences", "For the next season, our goal is to ensure every part of our team's process in developing our robot is clearly documented in a portfolio that will be easy for the judges and other teams to understand. Our current focus in organising our records to meet the criteria for awards such as the Inspire Award. We will ensure that our experiences we gain during the process of preparing for competitions are clearly showcased as a guide for other teams to better themselves and their robot.", "3"],
    ["/images/combat.png", "Hugo Lawler", "Team Leader", "The future of our team.", "This season, our team operational objective is to broaden our skills and understanding, while developing our community's knowledge and engagement in STEM. We aim to extend and challenge ourselves by applying new learnings in practical and teamwork skills. Specifically, we will develop the SEPv2 robot by reflecting upon past experiences, while committing to multiple outreach and networking opportunities. This will ensure that our group and community excel and thrive, while making lifelong memories together. It will be my responsibility to facilitate the personal development of all my members, and to ensure that all planning components for the robot are completed.", "4"],
]

const goalsElement = goalsList.map((goal) => {
    return (
        <div className="card lg:first-of-type:col-start-1 lg:first-of-type:col-end-4 bg-midbeige dark:bg-mutegrey rounded-2xl p-4 transition-all  hover:shadow-md hover:shadow-combatgreen" key={goal[-1]}>
            <div className="flex items-center">
                <div className="">
                    <Image className=" h-10 w-10 border-2 border-black dark:border-white rounded-full object-cover" width={100} height={100} src={goal[0]} alt={goal[1]} />
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
    )
})


export default function Goals() {
    return (
        <section className="my-12">
            <h1 className="font-bold text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl w-max mx-auto my-12 text-wrap">What&apos;s <span className="bg-gradient-to-r from-combatgreen to-wombatbrown rounded-md px-2 pb-1 text-white">ahead...</span></h1>
            <div className="lg:grid-cols-7 pb-8 px-4 mx-auto grid gap-4 max-w-screen-3xl">
                {goalsElement}
            </div>
        </section>
    )
}