import React, { useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import styled from 'styled-components';

/* import 'react-pdf/dist/esm/Page/AnnotationLayer.css'; */

/* Library */
import { Document, Page, pdfjs } from 'react-pdf';
import pdfFile from '../../assets/resume-pdf/resume.pdf'
/* import {
    useWindowSize,
    useWindowWidth,
    useWindowHeight,
  } from '@react-hook/window-size' */

const ViewerFrame = styled.div`
    /* .react-pdf__Page__textContent {display: none;}
    .react-pdf__Page__annotations, .annotationLayer{display: none;}
    .react-pdf__Page__canvas{width: 100%;} */
    /* width: ${props=>props.width+'px'}; */
    width: 100%;
    position: absolute;
    top: 0;
   /*  height: ${props=>props.isMaximized ? 'calc(100vh - 178px)' : '100%'}; */
    background: red;
    overflow: auto;
    /* background: ${props=>props.isMaximized ? 'red' : 'blue'}; */
    .page{
        /* height: 300px; */
        text-align: center;
        /* height: ${props=>props.isMaximized? `calc(100vh - 147px)` : `700px`}; */
        /* background: ${props=>props.isMaximized ? 'red' : 'blue'}; */
    }
`
const ViewerButtonGroup = styled.div`
    position: absolute;
    bottom: 0;
`

/* PDF CDN */
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PdfViewer({isMaximized}){
    const windowSize = useWindowSize();
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageScale, setPageScale] = useState(1);
    
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
/* console.log(useWindowHeight()); */
/* console.log(resume.maximized); */
console.log(isMaximized);
    return (
        <>
            <ViewerFrame
                isMaximized={isMaximized}
            >
                <Document
                    file={pdfFile}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page 
                        /* width={windowSize.width}
                        height={windowSize.height}  */
                        className='page'
                        /* height={200} */
                        width={100}
                        renderTextLayer={false}
                        pageNumber={pageNumber} 
                        renderAnnotationLayer={false}
                        scale={pageScale}
                    />
                </Document>
                
            </ViewerFrame>
            <ViewerButtonGroup>
                    <button onClick={() => {
                        setPageScale(pageScale === 10 ? 10 : pageScale + 1)
                    }}> +
                    </button>
                    <button onClick={() => {
                        setPageScale((pageScale - 1) < 1 ? 1 : pageScale - 1)
                    }}> -
                    </button>
    
                    {pageNumber > 1 && (
                        <button onClick={()=>setPageNumber(prev => prev + -1)}>
                            이전페이지
                        </button>
                    )}
                    Page {pageNumber} of {numPages}
                    {pageNumber < 4 && (
                    <button onClick={()=>setPageNumber(next => next + 1)}>
                            다음페이지
                    </button>
                    )}
                </ViewerButtonGroup>
        </>
    );
};
/* https://kyounghwan01.github.io/blog/React/next/pdf-viewer/#pdf-viewer-%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A6 예제 */

export default PdfViewer;