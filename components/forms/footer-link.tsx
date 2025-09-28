import Link from "next/link";

const FooterLink = ({ href, linkText, text }: FooterLinkProps) => {
  return (
    <div className="p-4 text-center">
      <p className="text-gray-500 text-sm">{text} </p>
      <Link href={href} className="footer-link">
        {linkText}
      </Link>
    </div>
  );
};

export default FooterLink;
