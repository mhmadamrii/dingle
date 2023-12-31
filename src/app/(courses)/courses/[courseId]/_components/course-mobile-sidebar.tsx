import { Menu } from 'lucide-react';
import {
  Chapter,
  Course,
  UserProgress,
} from '@prisma/client';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '~/components/ui/sheet';

import { CourseSidebar } from './course-sidebar';

interface CourseMobileSidebarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
}

export const CourseMobileSidebar = ({
  course,
  progressCount,
}: CourseMobileSidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger className="pr-4 transition hover:opacity-75 md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-72 bg-white p-0"
      >
        <CourseSidebar
          course={course}
          progressCount={progressCount}
        />
      </SheetContent>
    </Sheet>
  );
};
