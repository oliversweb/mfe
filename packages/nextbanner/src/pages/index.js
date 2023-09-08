import React from 'react'
import { getData } from '../components/footerProvider'
import App from './App'

export async function getServerSideProps() {
    const content = await getData();

    return { props : { footerContent: content  }}
}

export default function NextBanner({ footerContent }) {
    const data = footerContent;

    return (<App data={data} />)
}
