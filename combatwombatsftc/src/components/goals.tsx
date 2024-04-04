
const goalsList = [
    ["/images/combat.png", "Hugo Lawler", "Team Leader", "This season, our operational objective is to broaden our skills and understanding, while developing our community's knowledge and engagement in STEM. As a team, we will gain soft skills such as team work and communication that are fundamental to our future engineering career endeavours.", "0"],
    ["/images/combat.png", "Name of Guy", "Team Role", "E condigne w hic, per dui coronati O spirans quas servire", "&apos; Y eos eu NON aut vero purus sapien W debila leo laborans. Y&apos;ea unde aspirat mi arcu a publiciter sem quod porro usus veneta quo sed me scomata concernunt unde.&apos;", "1"],
    ["/images/combat.png", "Name of Guy", "Team Role", "E condigne w hic iusto dis-proper, per", "&apos; Y eos eu NON aut vero purus sapien W debila leo laborans. Y&apos;ea unde aspirat mi arcu a publiciter sem quod porro usus veneta quo sed me &apos;", "2"],
    ["/images/combat.png", "Name of Guy", "Team Role", "E condigne w hic iusto dis-proper, per dui coronati O spirans quas servire, li est urna se", "&apos; Y eos eu NON aut vero purus sapien W debila leo laborans. Y&apos;ea unde aspirat mi arcu a publiciter sem quod porro usus veneta quo sed me scomata concernunt unde. O varius ea est aut fuga nulla modurn rem minus ii rationibus est! &apos;", "3"],
    ["/images/combat.png", "Name of Guy", "Team Role", "E condigne w hic iusto dis-proper, per dui coronati O spirans quas servire, li est urna se", "&apos; Y eos eu NON aut vero purus sapien W debila leo laborans. Y&apos;ea unde aspirat mi arcu a publiciter sem quod porro usus veneta quo sed me scomata concernunt unde. O varius ea est aut fuga nulla modurn rem minus ii rationibus est! O varius ea est aut fuga nulla modurn rem minus ii rationibus est! &apos;", "4"],
]

const goalsElement = goalsList.map((goal) => {
    return (
        <div className="card lg:first-of-type:col-start-1 lg:first-of-type:col-end-3 bg-midbeige dark:bg-mutegrey rounded-2xl p-4 transition-all  hover:shadow-md hover:shadow-combatgreen" key={goal[-1]}>
            <div className="flex items-center">
                <div className="">
                    <img className=" h-10 w-10 border-2 border-black dark:border-white rounded-full" src={goal[0]} alt={goal[1]} />
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
            <div className="lg:grid-cols-4 pb-8 px-4 mx-auto grid gap-4">
                {goalsElement}
            </div>
        </section>
    )
}