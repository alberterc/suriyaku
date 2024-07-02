'use client';

import { useState } from "react";
import Button from "./button";

const InsertEmbedButton = ({embedData} : {embedData: (str: string) => void}) => {
    const [show, setShow] = useState(false);
    const toggleDialog = () => {
        setShow(!show);
        document.getElementById('dialog')?.classList.toggle('hidden');
    };

    const [isLoading, setIsLoading] = useState(false);
    
    return (
        <>
            <Button text='Embed' onClick={toggleDialog}/>

            <div id='dialog' className='hidden fixed inset-0 z-10 overflow-y-auto bg-neutral-800/50'>
                <div className='flex flex-col gap-4 bg-neutral-700 rounded-lg p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className='flex items-center justify-between gap-4'>
                        <h3 className='text-lg font-bold'>Embed</h3>
                        <button id='closeDialog' className='text-neutral-500 hover:text-neutral-300' onClick={toggleDialog}>
                            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <p className='text-sm text-neutral-500'>Paste a URL to embed.</p>
                        <input id='dialogTextInput' type='text' className='w-full rounded-md p-2 bg-neutral-800 mt-2'/>
                    </div>
                    <div className='self-end'>
                        <Button text={`${isLoading ? 'Loading...' : 'Embed'}`} onClick={() => {
                            try {
                                setIsLoading(true);
                                const val = (document.getElementById('dialogTextInput') as HTMLInputElement).value;
                                embedData(val);
                            }
                            catch (e) {
                                console.log(e);
                            }
                            finally {
                                setIsLoading(false);
                            }
                        }}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InsertEmbedButton;