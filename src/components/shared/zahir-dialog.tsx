'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '~/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';

import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';

interface IProps {
  children: React.ReactNode;
  isHasHeader: boolean;
  headerTitle?: string;
}

export function DialogPage(props: IProps) {
  const { isHasHeader, headerTitle } = props;
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const isOpenModal = searchParams.get('modal-dialog');

  useEffect(() => {
    if (isOpenModal === 'true') {
      console.log('runn');
      const handleOpen = () => {
        setOpen(true);
      };
      handleOpen();
    }
  }, [isOpenModal]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => console.log('hello')}>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {isHasHeader && (
          <DialogHeader>
            <DialogTitle>{headerTitle}</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
        )}
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="~peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
