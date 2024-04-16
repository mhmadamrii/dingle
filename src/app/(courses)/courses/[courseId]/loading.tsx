import { Skeleton } from '~/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center py-3 sm:flex-row md:flex-row">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 px-16">
        <div className="flex w-full gap-4">
          <div className="flex flex-col gap-4">
            <Skeleton className="h-[200px] w-[300px]" />
            <Skeleton className="h-[200px] w-[300px]" />
          </div>

          <div className="flex w-full flex-col gap-4">
            <div className="flex gap-7">
              <Skeleton className="h-[140px] w-[140px] rounded-full" />
              <Skeleton className="h-full w-full rounded-md" />
            </div>

            <div className="flex w-full flex-col gap-4">
              <Skeleton className="h-[20px] w-full rounded-md" />
              <Skeleton className="h-[20px] w-full rounded-md" />
              <Skeleton className="h-[20px] w-full rounded-md" />
              <Skeleton className="h-[20px] w-full rounded-md" />
            </div>
            <Skeleton className="h-full w-full rounded-md" />
          </div>
        </div>

        <div className="flex w-full flex-col gap-4">
          <Skeleton className="h-[60px] w-full rounded-md" />
          <Skeleton className="h-[60px] w-full rounded-md" />
        </div>
      </div>
    </div>
  );
}
