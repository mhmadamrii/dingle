import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { CheckCircle, Clock } from 'lucide-react';

export default function Dashboard() {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ex,
        molestias eligendi dolorum deleniti minus dignissimos labore ab
        praesentium consectetur in saepe mollitia ipsa vitae omnis voluptates,
        sit deserunt facere.
      </p>
      <span>Some dashboard</span>
    </div>
  );
}
