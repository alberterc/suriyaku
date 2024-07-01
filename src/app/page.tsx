import Accordion from "@/components/accordion";
import Button from "@/components/button";
import { useState } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between flex-row p-32">
      <div className="p-16">
        <div>
          <h1 className="text-5xl">Sleeping</h1>
          <p className="text-2xl mt-2 text-slate-500">Start screen capture to start translating</p>
        </div>
        <div className="text-lg mt-8">
          <Button text="Start Screen Share"/>
          <Button text="Settings" className="ml-3"/>
        </div>
        <div className="flex flex-col gap-5 mt-16">
          <Accordion title="OCR Result"/>
          <Accordion title="Transition"/>
        </div>
      </div>
      <div className="rounded-lg bg-neutral-100">
        <ul>
          <li>Add a website of your choosing to embed <a>here</a>.</li>
          <li>Common examples are translate.google.com and jisho.org.</li>
        </ul>
      </div>
    </main>
  );
}
