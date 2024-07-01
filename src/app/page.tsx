import Button from "@/components/button";
import MainResults from "@/components/mainResults";

export default function Home() {
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
        <div id="embedBox" className="flex justify-center items-center rounded-lg px-4 py-2 bg-neutral-800 h-full">
          <ul className="list-disc list-inside leading-10">
            <li>Add a website of your choosing to embed <a href="">here</a>.</li>
            <li>One common use is for <a href="https://jisho.org/">jisho.org</a>.</li>
            <li>There are some websites which limits this function which I cannot do anything about.</li>
          </ul>
          {/* <iframe 
            src="https://jisho.org/"
            width='100%'
            height='100%'
            className='border-0 p-0'
          ></iframe> */}
        </div>
      </div>
    </main>
  );
}
