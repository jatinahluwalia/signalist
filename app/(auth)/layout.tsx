import Image from "next/image";
import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth-layout">
      <section className="auth-left-section scrollbar-height-default">
        <Link href={"/"} className="auth-logo">
          <Image
            src={"/assets/icons/logo.svg"}
            alt="logo"
            width={140}
            height={32}
            className="h-8 w-auto"
          />
        </Link>
        <div className="flex-1 pb-6 lg:pb-8">{children}</div>
      </section>
      <section className="auth-right-section">
        <div className="relative z-10 lg:mt-4 lg:mb-16">
          <blockquote className="auth-blockquote">
            Signalist turned my watchlist into a winning list. The alerts are
            spot-on, and I feel more confident making moves in the market
          </blockquote>
          <div className="flex items-center justify-between">
            <div>
              <cite className="auth-testimonial-author">- Ethan R.</cite>
              <p className="text-gray-500 max-md:text-xs">Retail Investor</p>
            </div>
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Image
                  src={"/assets/icons/star.svg"}
                  alt="Star"
                  key={`star-${star}`}
                  width={20}
                  height={20}
                  className="size-5"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="relative flex-1">
          <Image
            src={"/assets/images/dashboard.png"}
            alt="dashboard preview"
            fill
            sizes="100vw"
            className="auth-dashboard-preview asbolute top-0"
          />
        </div>
      </section>
    </main>
  );
};

export default AuthLayout;
