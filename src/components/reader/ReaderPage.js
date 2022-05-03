import { useEffect, useState, useRef } from 'react'
import {StyledReaderPage} from './ReaderPage.style'
import { SamplePageObj } from './readerHelpers/SamplePageObj'
import DisplayFunctions from './readerHelpers/DisplayFunctions'

export default function ReaderPage({page}) {
    const [pageObjs, setPageObjs] = useState()
    const canvas = useRef()

    useEffect(() => {
            setPageObjs(SamplePageObj[page - 1])
    }, [])

    useEffect(() => {
        console.log(pageObjs)
        
    }, [pageObjs])


    return (
        <StyledReaderPage >
           
        </StyledReaderPage>
    )
}