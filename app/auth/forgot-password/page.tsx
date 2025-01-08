'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-full">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <Image
              className="h-10 w-auto"
              src="https://s3.us-west-1.amazonaws.com/clipshop.assets/Clipshop+Logo.png"
              alt="ClipsShop"
              width={40}
              height={40}
            />
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
              Forgot Password
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Enter the email associated with your account and we&apos;ll send you
              instructions to reset your password.
            </p>
          </div>

          <div className="mt-10">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Send Email
                </button>
              </div>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              Remember Password?{' '}
              <Link
                href="/auth/login"
                className="font-semibold text-primary hover:text-secondary"
              >
                Back to Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <Image
          className="absolute inset-0 size-full object-cover"
          src="https://images.squarespace-cdn.com/content/v1/659c825b2bd0aa7f7de9352f/6c7fe4ee-8837-43a4-9aa8-3bb88a59c97f/Untitled+design+copy+4.png?format=1500w"
          alt="Background"
          fill
          priority
        />
      </div>
    </div>
  );
}
