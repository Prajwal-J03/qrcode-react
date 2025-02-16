import React, { useState,useRef } from 'react'
import QRCode from 'react-qr-code'
import html2canvas from 'html2canvas';

const QRCodeGenerator = () => {
    const [value,setValue] = useState('');
    const [background,setBackground] = useState('#ffffff');
    const [foreground,setForeground] = useState('#000000');
    const qrCodeRef = useRef(null);
    
    const size='250';
    const sizeLarge='300';

    const handleDownload = () =>{
        if(qrCodeRef.current){
            html2canvas(qrCodeRef.current).then((canvas) =>{
                const dataURL = canvas.toDataURL('image/png');
                const link= document.createElement('a');
                link.href=dataURL;
                link.download = 'qrcode.png';
                link.click();
            })
        }
    }

    return (
        <div className='w-full h-[655px] sm:h-[842px] flex items-center justify-center'>
            <div className='w-11/12 sm:w-1/2 h-11/12 sm:h-3/5 sm:px-20 py-4 bg-white rounded-2xl shadow-2xl flex sm:flex-row flex-col items-center justify-between'>
                <div className='w-11/12 sm:w-2/5 h-1/3 sm:py-36 sm:h-full flex flex-col items-center justify-around'>
                    <input 
                        placeholder='Enter the url here'
                        onChange={(e) => setValue(e.target.value)}
                        className='w-full px-2 py-2 border border-gray-400 rounded-lg focus:outline-blue-900'
                    />
                    <button 
                        onClick={handleDownload}
                        className='w-full px-2 py-2 bg-blue-900 text-white rounded-lg'
                    >
                        Download
                    </button>
                </div>
                <div 
                    ref={qrCodeRef}
                    className='w-11/12 sm:w-1/2 h-2/3 sm:h-11/12 flex items-center justify-center border rounded-lg'>
                    {
                        value && (
                            <QRCode
                                title ="QR Code"
                                value={value}
                                bgColor={background}
                                fgColor={foreground}
                                size={window.innerWidth < 640 ?size :sizeLarge}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default QRCodeGenerator