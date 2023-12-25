'use client';

import { useRouter } from 'next/navigation';

export default function LoginSlug({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  console.log('search params', searchParams);
  console.log(params);
  const router = useRouter();

  const handleLogin = () => {
    router.push(searchParams.redirectTo);
  };
  return (
    <>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, atque
        blanditiis debitis, corporis sapiente incidunt deleniti quaerat quae nam
        ut necessitatibus dolore ipsa. Corporis, ut ipsum. Quidem tenetur
        temporibus cumque.
      </h1>

      <button
        className="btn rounded-md bg-blue-600 p-3 text-white"
        onClick={handleLogin}
      >
        Login here
      </button>
    </>
  );
}
