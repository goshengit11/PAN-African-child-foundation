
"use client"
import{
    GraduationCap,
    HeartPulse,
    Icon,
    Leaf,
    ArrowRight
} from "lucide-react";


const impactAreas = [
    {
       icon: GraduationCap,
       title: "Quality education",
       description: "Empowering the next generation with literacy, tech skills and vocational training platform",
       button: "Learn more"
    },

    {
        icon: HeartPulse,
        title: "Healthcare Access"
        ,
        description: "Providing essential medical supplies and materials care in rural region",
        button: "Learn more"
    },

    {
        icon: Leaf,
        title: "Sustainability",
        description: "Providing essential medical supplies and materials care in rural region",
        button: "Learn more"
    }
]


export default function() {
    return(
        <section className="bg-gray-200 py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-8xl">
                <h1 className="text-black mb-2 pl-8 font-semibold text-sm tracking-widest uppercase">
                    what we do
                </h1>
                <h1 className="text-black pl-8 font-bold text-3xl uppercase md:text-4xl">
                   core impact areas
                </h1>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3 place-content-center">
                {impactAreas.map((item) => {
                    const Icon = item.icon;
                    return(
                        <div 
                        key={item.title}
                        className="flex min-[320px] flex-col bg-white rounded-3xl text-black font-semibold p-8 hover:-translate-y-2 shadow-md hover:scale-105 transition duration-500 hover:bg-black hover:text-white" 
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-100">
                                <Icon size = {30} className=" text-black"/>
                            </div>
                          <h1 className="font-semibold text-lg px-2 uppercase ">
                            {item.title}
                            </h1>

                            <p className="py-3 grow text-md font-light leading-7 px-2">
                                {item.description}
                            </p>
                             
                             {/* Link should be added here */}
                                <button className="group mt-5 inline-flex px-2 items-center gap-2 font-semibold cursor-pointer text-yellow-500 transition-all hover:gap-3">
                                       {item.button}
                                    <ArrowRight
                                        size={18}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                 </button>
                        </div>
                    );
                }
            )
            }
            </div>

        </section>
    )
}