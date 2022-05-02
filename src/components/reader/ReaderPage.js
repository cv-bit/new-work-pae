import { useEffect, useState } from 'react'
import {StyledReaderPage} from './ReaderPage.style'
import { SamplePageObj } from './readerHelpers/SamplePageObj'
import DisplayFunctions from './readerHelpers/DisplayFunctions'

export default function ReaderPage({page}) {
    const [pageObjs, setPageObjs] = useState()

    let ctx = document.querySelector('canvas')

    useEffect(() => {
            setPageObjs(SamplePageObj[page - 1])
    }, [])

    useEffect(() => {

    }, [pageObjs])


    return (
        <StyledReaderPage>
           
        </StyledReaderPage>
    )
}