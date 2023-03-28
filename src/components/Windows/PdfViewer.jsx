import React, { useState, useEffect} from 'react';
import styled from 'styled-components';

/* Library */
import { Document, Page, pdfjs } from 'react-pdf';
import pdfFile from '../../assets/resume-pdf/resume.pdf'
import {
    useWindowSize,
    useWindowWidth,
    useWindowHeight,
  } from '@react-hook/window-size'

const ViewerFrame = styled.div`
    .react-pdf__Page__textContent {display: none;}
    .react-pdf__Page__annotations, .annotationLayer{display: none;}
    /* .react-pdf__Page__canvas{width: 100%;} */
    /* height: 400px; */
    height: 500px;
    overflow-y: scroll;
`

const PdfViewer = () => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    /* const windowSize = useWindowSize(); */
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
/* console.log(useWindowHeight()); */
    return (
        <ViewerFrame>
                <Document
                    file={pdfFile}
                    onLoadSuccess={onDocumentLoadSuccess}
                        >
                    <Page 
                        width={useWindowWidth()}
                        height={useWindowHeight()}
                        pageNumber={pageNumber} />
                </Document>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
        </ViewerFrame>
    );
};
/* https://kyounghwan01.github.io/blog/React/next/pdf-viewer/#pdf-viewer-%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A6 예제 */

export default PdfViewer;