import SkeletonCards from "@/components/skeleton-cards";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24 gap-y-8">
      <h1 className="font-bold text-3xl">Users</h1>

      <SkeletonCards count={6} />
    </div>
  );
}
