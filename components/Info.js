import Link from "next/link";
export default function Info() {
  return (
    <p className="mb-6">
      This is an example Next.js application using Firebase Authentication. It
      demonstrates every next.js data fetching
      <Link href="https://nextjs.org/docs/basic-features/data-fetching">
        <a className="font-bold text-blue-600"> (CSR, SSR, SSG, ISR) </a>
      </Link>
      mechanism including Authenticated API routes. View source on
      <Link href="https://github.com/mayurarx/next-fire-auth-ssr">
        <a className="font-bold text-blue-600"> GitHub.</a>
      </Link>
    </p>
  );
}
