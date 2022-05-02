import { useEffect, useState } from 'react'
import {StyledReaderPage} from './ReaderPage.style'
import { SamplePageObj } from './readerHelpers/SamplePageObj'

export default function ReaderPage({page}) {
    const [pageObjs, setPageObjs] = useState()

    useEffect(() => {
            setPageObjs(SamplePageObj[page - 1])
    }, [])

    useEffect(() => {
        console.log(pageObjs)
    }, [pageObjs])

    return (
        <StyledReaderPage>
            
        </StyledReaderPage>
    )
}