
const goalsList = [
    ["/images/combat.png", "Name of Guy", "Team Role", "E condigne w hic iusto dis-proper, per dui coronati O spirans quas servire, li est urna se", "“ Y eos eu NON aut vero purus sapien W debila leo laborans. Y’ea unde aspirat mi arcu a publiciter sem quod porro usus veneta quo sed me scomata concernunt unde. O varius ea est aut fuga nulla modurn rem minus ii rationibus est! ”"],
    ["/images/combat.png", "Name of Guy", "Team Role", "E condigne w hic, per dui coronati O spirans quas servire", "“ Y eos eu NON aut vero purus sapien W debila leo laborans. Y’ea unde aspirat mi arcu a publiciter sem quod porro usus veneta quo sed me scomata concernunt unde.”"],
    ["/images/combat.png", "Name of Guy", "Team Role", "E condigne w hic iusto dis-proper, per", "“ Y eos eu NON aut vero purus sapien W debila leo laborans. Y’ea unde aspirat mi arcu a publiciter sem quod porro usus veneta quo sed me ”"],
    ["/images/combat.png", "Name of Guy", "Team Role", "E condigne w hic iusto dis-proper, per dui coronati O spirans quas servire, li est urna se", "“ Y eos eu NON aut vero purus sapien W debila leo laborans. Y’ea unde aspirat mi arcu a publiciter sem quod porro usus veneta quo sed me scomata concernunt unde. O varius ea est aut fuga nulla modurn rem minus ii rationibus est! ”"],
    ["/images/combat.png", "Name of Guy", "Team Role", "E condigne w hic iusto dis-proper, per dui coronati O spirans quas servire, li est urna se", "“ Y eos eu NON aut vero purus sapien W debila leo laborans. Y’ea unde aspirat mi arcu a publiciter sem quod porro usus veneta quo sed me scomata concernunt unde. O varius ea est aut fuga nulla modurn rem minus ii rationibus est! O varius ea est aut fuga nulla modurn rem minus ii rationibus est! ”"],
]

const goalsElement = goalsList.map((goal) => {
    return (
        <div className="card lg:first-of-type:col-start-1 lg:first-of-type:col-end-3 bg-midbeige dark:bg-mutegrey rounded-2xl p-4 transition-all  hover:shadow-md hover:shadow-combatgreen" key={goal[0]}>
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
            <h1 className="font-bold text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl w-max mx-auto my-12 text-wrap">What's <span className="bg-gradient-to-r from-combatgreen to-wombatbrown rounded-md px-2 pb-1 text-white">ahead...</span></h1>
            <div className="lg:grid-cols-4 pb-8 px-4 mx-auto grid gap-4">
                {goalsElement}
            </div>
        </section>
    )
}