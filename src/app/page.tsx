'use client';

import { Suspense } from 'react';
import { Button } from '~/components/ui/button';
import { Icons } from '~/components/icons/spinner';
import { useSearchParams, useRouter } from 'next/navigation';

import ExampleDialog from '~/components/shared/dialog.example';
import ListExample from '~/components/shared/list.example';

export default function Root() {
  const router = useRouter();
  const params = useSearchParams();
  const isOpen = params.get('modal');

  const handleOpen = (): void => {
    router.push('?modal=true');
  };

  const handleClose = (): void => {
    router.back();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <center>
        <h1>Lorem ipsum dolor sit amet!</h1>
        <div>
          <Button onClick={handleOpen}>Toggle</Button>
        </div>
        {isOpen === 'true' && (
          <ExampleDialog onClose={handleClose}>
            <div>yey🚀</div>
          </ExampleDialog>
        )}
      </center>

      <Suspense
        fallback={
          <Icons.spinner className="h-[100px] w-[100px] animate-spin" />
        }
      >
        {/* <ListExample /> */}
        <h1>Lis example</h1>
      </Suspense>
    </main>
  );
}
