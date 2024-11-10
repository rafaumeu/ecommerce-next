import { Suspense } from 'react'
import { Skeleton } from '../../../components/skeleton';
import { CurrentSearch } from './current-search';

function SearchContent() {

  return (
    <div className="flex flex-col gap-4">
      <Suspense>
        <CurrentSearch />
      </Suspense>
      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[400px]"/>
        <Skeleton className="h-[400px]"/>
        <Skeleton className="h-[400px]"/>
        <Skeleton className="h-[400px]"/>
        <Skeleton className="h-[400px]"/>
        <Skeleton className="h-[400px]"/>
      </div>
    </div>
  )
}
