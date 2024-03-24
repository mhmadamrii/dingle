'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function Provider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ProgressBar
        height="4px"
        color="#050000"
        options={{ showSpinner: true }}
        shallowRouting
      />
      {children}
    </div>
  );
}
