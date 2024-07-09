import { Skeleton } from "./ui/skeleton";

type SkeletonCardsProps = {
  count: number;
};

export default function SkeletonCards({ count }: SkeletonCardsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
      {Array.from(Array(count).keys()).map((item) => (
        <div key={item} className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />

          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  );
}
