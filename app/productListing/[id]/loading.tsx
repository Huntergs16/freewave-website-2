import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="flex flex-col justify-center items-center min-h-[70vh] h-min w-full px-5 mx-auto font-rajdhani text-black">
          <Skeleton className="h-min w-full grid grid-cols-1 sm:grid-cols-2 justify-center px-1 gap-x-2">
            <Skeleton className="relative h-[20vh] min-h-[500px] bg-stone-100" />
            <Skeleton className="flex flex-col py-12 gap-2 sm:px-6 h-[25vh]">
                <Skeleton className="bg-stone-300 h-2/5 w-[90%]" />
                <Skeleton className="bg-stone-300 h-2/5 w-[50%]" />
                <Skeleton className="w-[35%] h-1/5 bg-stone-300"/>
            </Skeleton>
          </Skeleton>
        </div>
    )
}