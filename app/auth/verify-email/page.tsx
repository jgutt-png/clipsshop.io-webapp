'use client';

import { useState, FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Auth } from 'aws-amplify';

export default function VerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';
  
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await Auth.confirmSignUp(email, code);
      router.push('/auth/login');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await Auth.resendSignUp(email);
      setError('Verification code has been resent to your email');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

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
              Verify your email
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              We sent a verification code to {email}. Enter the code below to verify
              your email address.
            </p>
          </div>

          <div className="mt-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="rounded-md bg-red-50 p-4">
                  <div className="text-sm text-red-700">{error}</div>
                </div>
              )}

              <div>
                <label
                  htmlFor="code"
                  className="block text-sm font-medium text-gray-900"
                >
                  Verification code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="code"
                    id="code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Verifying...' : 'Verify Email'}
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={handleResendCode}
                disabled={isLoading}
                className="text-sm font-semibold text-primary hover:text-secondary"
              >
                Resend verification code
              </button>
            </div>

            <p className="mt-6 text-center text-sm text-gray-500">
              Already verified?{' '}
              <Link
                href="/auth/login"
                className="font-semibold text-primary hover:text-secondary"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <Image
          className="absolute inset-0 size-full object-cover"
          src="https://images.squarespace.cdn.com/content/v1/659c825b2bd0aa7f7de9352f/edf17645-db39-4503-a7e4-878801b11acf/Untitled+design+copy+2.png?format=1500w"
          alt="Background"
          fill
          priority
        />
      </div>
    </div>
  );
}
