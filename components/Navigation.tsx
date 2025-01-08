import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">ClipsShop</span>
            <Image
              className="h-8 w-auto"
              src="https://s3.us-west-1.amazonaws.com/clipshop.assets/Clipshop+Logo.png"
              alt="ClipsShop"
              width={32}
              height={32}
            />
          </Link>
        </div>
        <div className="flex flex-1 justify-end">
          <Link
            href="/auth/login"
            className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Log in
          </Link>
        </div>
      </nav>
    </header>
  );
}
