import React, { useState } from 'react';

/* Hooks */
import useWindowSize from '../../hooks/useWindowSize';

/* Library */
import styled from 'styled-components';
import { Document, Page, pdfjs } from 'react-pdf';

/* PDF */
import pdfFile from '../../assets/resume-pdf/resume.pdf'

/* ETC */
/* import 'react-pdf/dist/esm/Page/AnnotationLayer.css'; */

const ViewerFrame = styled.div`
    /* .react-pdf__Page__textContent {display: none;} */
    /* .react-pdf__Page__annotations, .annotationLayer{display: none;} */
    /* .react-pdf__Page__canvas{width: 100%;} */
    width: 100%;
    height: 93%;
    position: absolute;
    top: 0;
    background: #fff;
    overflow: scroll;
    .page{
        text-align: center;
    }
`;
const PDFDocumentWrapper = styled.div`
  canvas {display: inline-block !important;}
`;
const ViewerButtonGroup = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    padding: 5px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 7%;
    box-sizing: border-box;
    background: rgb(195, 199, 203);
    box-shadow: rgb(255, 255, 255) 0px 1px 0px 1px, 
    rgb(0, 0, 0) 1px 1px 1px 0px inset;
`;
const ButtonFlex = styled.div`
    display: flex;
    justify-content: center;
    margin: 1px 5px 1px 1px;
    font-size: 12px;
    background: rgb(195, 199, 203);
    box-shadow: rgb(255, 255, 255) 1px 1px 0px 1px inset, 
    rgb(134, 138, 142) 0px 0px 0px 1px inset,
    rgb(0, 0, 0) 1px 1px 0px 0px;
    padding: 5px 7px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;
const ZoomButton = styled.div`
    width: 20px;
    height: 20px;
    line-height: 18px;
    text-align: center;
    background: rgb(195, 199, 203);
    box-shadow: rgb(255, 255, 255) 1px 1px 0px 1px inset, 
    rgb(134, 138, 142) 0px 0px 0px 1px inset, rgb(0, 0, 0) 1px 1px 0px 0px;
    &:focus {
            box-shadow: rgb(255, 255, 255) 1px 1px 0px 1px inset, 
            rgba(0, 0, 0, 0.4) 0px 0px 0 1.5px inset,
            rgb(0, 0, 0) 1px 1px 0px 1px;
        }
    &:active {
        box-shadow: rgb(255, 255, 255) 1px 1px 0 1px,
        rgb(0, 0, 0) 1px 1px 0px 1px inset !important;
    }
`;
/*----------------------------------------*\
                REACT-PDF CDN
\*----------------------------------------*/
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
  function prevPagefn(){
    if(pageNumber > 1){
        setPageNumber(prev => prev + -1)
    }
  }
  function nextPagefn(){
    if(pageNumber < 3){
        setPageNumber(next => next + 1)
    }
  }
/*----------------------------------------*\
              test-console.log
\*----------------------------------------*/
/* console.log(useWindowHeight()); */
/* console.log(resume.maximized); */
/* console.log(isMaximized); */

    return (
        <>
            <ViewerFrame isMaximized={isMaximized}>
                    <PDFDocumentWrapper>
                        <Document
                            file={pdfFile}
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <Page 
                                /* width={windowSize.width} */
                                /* height={windowSize.height}  */
                                /* height={200} */
                                /* width={100} */
                                className='page'
                                width={isMaximized ?  windowSize.width/1.5 : 500}
                                renderTextLayer={false}
                                pageNumber={pageNumber} 
                                renderAnnotationLayer={false}
                                scale={pageScale}
                            />
                        </Document>
                    </PDFDocumentWrapper>
            </ViewerFrame>
            <ViewerButtonGroup>
                    {/* <a href='/assets/resume-pdf/resume.pdf' target="_blank">새창으로 열기</a> */}
                    {/* <iframe width="100%" height="600" src={pdfFile}></iframe> */}
                    {/* <button onClick={()=>{window.open(`${pdfFile}`)}}>새창으로 </button> */}
                    <ButtonFlex>
                        {/* {pageNumber > 1 && (
                            <button onClick={()=>setPageNumber(prev => prev + -1)}>
                                이전페이지
                            </button>
                        )} */}
                        <ZoomButton 
                            style={{marginRight:'10px'}} 
                            onClick={()=>prevPagefn()}
                        >&lt;
                        </ZoomButton>
                        Page {pageNumber} of {numPages}
                        {/* {pageNumber < 4 && (
                        <button onClick={()=>setPageNumber(next => next + 1)}>
                                다음페이지
                        </button>
                        )} */}
                        <ZoomButton 
                            style={{marginLeft:'10px'}} 
                            onClick={()=>nextPagefn()}
                        >&gt;
                        </ZoomButton>
                    </ButtonFlex>
                    <ButtonFlex>
                        <ZoomButton 
                            style={{marginRight:'10px'}} 
                            onClick={() => {
                            setPageScale(pageScale === 10 ? 10 : pageScale + 0.2)
                            }}
                        >&#43;
                        </ZoomButton>
                        Zoom In / Out
                        <ZoomButton 
                            style={{marginLeft:'10px'}} 
                            onClick={() => {
                            setPageScale((pageScale - 1) < 1 ? 1 : pageScale - 0.2)
                            }}
                        >&#8722;
                        </ZoomButton>
                    </ButtonFlex>
            </ViewerButtonGroup>
        </>
    );
};
/* onclick 예제 https://jineecode.tistory.com/193 */
/* iframe 예제 https://tonhnegod.tistory.com/entry/%EC%9B%B9%ED%8E%98%EC%9D%B4%EC%A7%80%EC%97%90%EC%84%9C-PDF-%ED%8C%8C%EC%9D%BC-%EB%B3%B4%EC%97%AC%EC%A3%BC%EA%B8%B0-PDF-%EB%B7%B0%EC%96%B4-%EB%84%A3%EA%B8%B0 */
/* react-pdf 예제 https://kyounghwan01.github.io/blog/React/next/pdf-viewer/#pdf-viewer-%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A6 예제 */

export default PdfViewer;