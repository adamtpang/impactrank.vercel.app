import type { Metadata, Viewport } from "next";
import { opportunities, CAUSE_AREAS } from "@/data/opportunities";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://impactrank.vercel.app"),
  title: "ImpactRank | A clearer case for every dollar",
  description:
    "An open, cross-domain index of philanthropic opportunities ranked by impact, cost-effectiveness, evidence, and scale.",
  twitter: { card: "summary_large_image", images: ["/social-card.png"] },
  openGraph: {
    title: "ImpactRank | Philanthropy, prioritized",
    description: `${opportunities.length} opportunities. ${CAUSE_AREAS.length} cause areas. One transparent methodology.`,
    type: "website",
    images: [{ url: "/social-card.png", width: 1200, height: 630 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f3ed",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} antialiased`}
    >
      <body className="min-h-screen">
        <Script
          id="posthog-fleet"
          strategy="afterInteractive"
        >{`(function(){if(window.__posthogFleet)return;window.__posthogFleet=1;var s=document.createElement('script');s.async=true;s.src='https://us-assets.i.posthog.com/static/array.js';s.onload=function(){if(!window.posthog||!window.posthog.init)return;window.posthog.init('phc_FCpCP9mIsb9IcxpX0Qqi6FmJ48sVvscAYIrZmtRHIq4',{api_host:'https://us.i.posthog.com',person_profiles:'identified_only',capture_pageview:'history_change',capture_pageleave:true,autocapture:false,disable_session_recording:true,disable_surveys:true,loaded:function(p){p.register({site:location.hostname})}});};document.head.appendChild(s);})();`}</Script>
        {children}
      </body>
    </html>
  );
}
