import { Skeleton } from "@/components/ui/skeleton"

export default async function Loading() {


    return (
      <div className='flex flex-col items-center justify-start px-5'>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-1 gap-y-2 w-full h-min px-1 font-rajdhani text-black">
            {Array.from({length:10}, (_,i) => i+1).map((id) => (
                <div key={id} className="gap-2 h-[80vw] max-h-[30vh] sm:max-h-[30vh] lg:max-h-[40vh] sm:h-[35vw] w-full flex flex-col justify-start items-start p-3 bg-stone-100">
                    <Skeleton className="relative h-[90%] w-full bg-stone-300" />
                    <Skeleton className="bg-stone-500 h-[5%] w-full" />
                    <Skeleton className="bg-stone-300 h-[5%] w-full" />
                </div>
            ))}
        </div>
      </div>
    )
}