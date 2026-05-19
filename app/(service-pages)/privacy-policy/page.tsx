import type { Metadata } from "next";
import React from "react";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | Matera Media",
  description: "Matera Media privacy policy — how we collect, use, and protect your data.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://materamedia.com/privacy-policy" },
};

const Page = () => {
    return <PrivacyPolicyClient />;
};

export default Page;