import { SearchParamProps } from "@/types";
import { SignIn } from "@clerk/nextjs";

export default function Page({searchParams}: SearchParamProps) {
  const redirectUrl = searchParams?.redirectUrl || '';

  return <SignIn redirectUrl={redirectUrl as string} />;
}
