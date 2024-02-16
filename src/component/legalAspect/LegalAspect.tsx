import React from "react";

function LegalAspect() {
  return (
    <div className="flex flex-col h-[600px] mt-12 items-center gap-8">
      <h1 className="text-2xl font-bold text-center underline underline-offset-4 text-myZinc-40">
        Legal Aspect
      </h1>
      <div className="legal-aspect h-80 w-80">
        <img src="/assets/legalAspect.jpeg" alt="" />
      </div>
    </div>
  );
}

export default LegalAspect;
