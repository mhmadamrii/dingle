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
    <>
      <div
        className="bg-cover bg-fixed bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080')" }}
      >
        <div className="flex h-screen items-center justify-center">
          <div className="mx-4 w-full rounded bg-white p-8 shadow-md md:w-1/2 lg:w-1/3">
            <h1 className="mb-8 text-center text-3xl font-bold">Login</h1>
            <form>
              <div className="mb-4">
                <label
                  className="mb-2 block font-semibold text-gray-700"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block font-semibold text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="focus:shadow-outline mb-3 w-full rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
                <a className="text-gray-600 hover:text-gray-800" href="#">
                  Forgot your password?
                </a>
              </div>
              <div className="mb-6">
                <button
                  className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                  type="button"
                  onClick={handleOpen}
                >
                  Open dialog
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {isOpen === 'true' && (
        <ExampleDialog onClose={handleClose}>
          <div>yey🚀</div>
        </ExampleDialog>
      )}
    </>
  );
}
