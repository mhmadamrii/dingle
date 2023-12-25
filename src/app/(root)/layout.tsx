'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const isLogin = false;
  console.log(pathname);

  useEffect(() => {
    if (!isLogin) {
      router.push(`/login/unauthenticated_user?=true/redirectTo=${pathname}`);
    }
  }, []);
  return <section>{children}</section>;
}
