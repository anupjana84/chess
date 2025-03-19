import React, { Suspense } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className="relative w-full">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>

      <div className="relative w-full">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
