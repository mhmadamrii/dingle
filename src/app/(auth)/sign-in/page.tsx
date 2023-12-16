'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from '~/components/ui/button';
import ExampleDialog from '~/components/shared/dialog.example';

export default function SignIn() {
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
    <>
      <div>some text</div>

      <div data-testId="div-btn">
        <Button onClick={handleOpen}>Toggle</Button>
      </div>

      {isOpen === 'true' && (
        <ExampleDialog onClose={handleClose}>
          <div>yey🚀</div>
        </ExampleDialog>
      )}
    </>
  );
}
