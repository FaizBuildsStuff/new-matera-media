import type { Metadata } from "next";
import React from "react";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers | Join Matera Media",
  description: "Join the Matera Media team. We are looking for talented video editors, motion designers, and creative strategists.",
  alternates: { canonical: "https://materamedia.com/careers" },
};

const Page = () => {
    return <CareersClient />;
};

export default Page;