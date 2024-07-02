'use client';

import Button from "@/app/components/button";
import InsertEmbedButton from "@/app/components/insertEmbedButton";
import MainResults from "@/app/components/mainResults";
import { useState } from "react";

export default function Home() {
  const [embedUrl, setEmbedUrl] = useState('');
  const resetEmbedBox = () => {
    setEmbedUrl('');
    const embedBox = document.getElementById('embedBox')!;
    if (embedBox.getElementsByTagName('ul')[0].classList.contains('hidden')) {
      embedBox.getElementsByTagName('ul')[0].classList.toggle('hidden');
      embedBox.getElementsByTagName('iframe')[0].classList.toggle('hidden');
    }
  };
  const getEmbedUrl = (str: string) => {
    let res = str.trim();
    setEmbedUrl(res);
    const embedBox = document.getElementById('embedBox')!;

    if (res === '') {
      resetEmbedBox();
    }
    else if (!embedBox.getElementsByTagName('ul')[0].classList.contains('hidden')) {
      embedBox.getElementsByTagName('ul')[0].classList.toggle('hidden');
      embedBox.getElementsByTagName('iframe')[0].classList.toggle('hidden');
    }
  };

  return (
    <main className="text-white grow flex flex-row items-center gap-10">
      <div id="mainContainer" className="pl-24 grow">
        <div>
          <h1 className="text-5xl">Sleeping</h1>
          <p className="text-2xl mt-2 text-neutral-500">Start screen capture to start translating</p>
        </div>
        <div className="text-lg mt-8">
          <Button text="Start Screen Capture"/>
          <Button text="Settings" className="ml-3"/>
        </div>
        <div className="flex flex-col gap-5 mt-16">
          <MainResults id='ocrResult' title='OCR Result'/>
          <MainResults id='translation' title='Translation'/>
        </div>
      </div>
      <div id="embedBoxContainer" className="self-stretch w-2/5">
        <div id="embedBox" className="flex flex-col justify-center items-center rounded-lg px-4 py-2 bg-neutral-800 h-full">
          <ul className="list-disc list-inside leading-10">
            <li>Add a website of your choosing to embed <a href="">here</a>.</li>
            <li>One common use is for <a href="https://jisho.org/">jisho.org</a>.</li>
            <li>There are some websites which limits this function which I cannot do anything about.</li>
          </ul>
          <iframe
            src={embedUrl}
            width='100%'
            height='100%'
            className='hidden border-0 p-0'
          ></iframe>
          <div className="flex flex-row gap-3 mt-2">
            <InsertEmbedButton embedData={getEmbedUrl}/>
            <Button text='Reset Embed' onClick={() => resetEmbedBox()}/>
          </div>
        </div>
      </div>
    </main>
  );
}
