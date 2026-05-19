import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://materamedia.com"),
  title: {
    default: "Matera Media | B2B Growth & YouTube Production",
    template: "%s | Matera Media",
  },
  description:
    "Matera Media helps B2B brands and content creators scale revenue through organic YouTube content and high-converting motion ad creatives.",
  keywords: [
    "B2B video production",
    "YouTube growth agency",
    "motion ad creatives",
    "SaaS video production",
    "organic content marketing",
    "UGC ad creatives",
    "B2B content agency",
    "video marketing agency",
  ],
  authors: [{ name: "Matera Media" }],
  creator: "Matera Media",
  publisher: "Matera Media",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://materamedia.com",
    siteName: "Matera Media",
    title: "Matera Media | B2B Growth & YouTube Production",
    description:
      "Matera Media helps B2B brands and content creators scale revenue through organic YouTube content and high-converting motion ad creatives.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Matera Media - B2B Growth & YouTube Production",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matera Media | B2B Growth & YouTube Production",
    description:
      "Matera Media helps B2B brands and content creators scale revenue through organic YouTube content and high-converting motion ad creatives.",
    images: ["/og-image.png"],
    creator: "@materamedia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://materamedia.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Matera Media",
              "url": "https://materamedia.com",
              "logo": "https://materamedia.com/Logo.png",
              "description": "Matera Media helps B2B brands and content creators scale revenue through organic YouTube content and high-converting motion ad creatives.",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "sales",
                "url": "https://calendly.com/m-faizurrehman-crypto/30min"
              }
            })
          }}
        />
        <meta name="theme-color" content="#030303" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSans.variable} ${instrumentSerif.variable} antialiased overflow-x-hidden bg-[#030303]`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
// Note: Add JSON-LD by importing and using in the <head> below if needed
