import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="flex flex-col justify-center items-center min-h-[70vh] h-min w-full px-5 mx-auto font-rajdhani text-black">
          <Skeleton className="h-min w-full grid grid-cols-1 sm:grid-cols-2 justify-center px-1 gap-x-2">
            <Skeleton className="relative h-[20vh] sm:h-[50vh] min-h-[500px] bg-stone-100" />
            <Skeleton className="flex flex-col py-12 gap-2 sm:px-6 h-[25vh] min-h-[500px] sm:[50vh] bg-stone-100">
                <Skeleton className="bg-stone-300 h-[15%] w-[60%]" />
                <Skeleton className="bg-stone-300 h-[10%] w-[40%]" />
                <Skeleton className="w-full h-full bg-stone-300"/>
            </Skeleton>
          </Skeleton>
        </div>
    )
}