import { useRouter } from "next/router";
import Link from "next/link";
import { CSSProperties, FC } from "react";

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};


export const ActiveLink: FC<Props> = ({ href, text }) => {
  
  const {asPath} = useRouter()

  return (
    <Link href={href}>
      <a style={ asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};

interface Props {
  text: string
  href: string
}