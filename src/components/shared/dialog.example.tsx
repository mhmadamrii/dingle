'use client';

import dynamic from 'next/dynamic';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';
import { Button } from '~/components/ui/button';

function ExampleDialog({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <Dialog open>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            Dialog Description
          </DialogDescription>
        </DialogHeader>
        <div>{children}</div>
        <DialogFooter>
          <Button onClick={onClose}>Ok</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default dynamic(
  () => Promise.resolve(ExampleDialog),
  { ssr: false },
);
