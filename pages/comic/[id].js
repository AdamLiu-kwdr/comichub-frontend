import useSWR from 'swr'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

export default function Comic() {
    const [comicData, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const router = useRouter()
    
    useEffect(()=>{
        if(!router.isReady) return;
        const { id } = router.query
        fetch(`http://localhost:5000/comic/${id}`)
        .then(res => res.json())
        .then((data)=>{
            setData(data)
            setLoading(false)
        })
    }, [router.isReady]);

    if (isLoading) return <div className='container-fluid'>
        <p aria-busy="true"> Getting comic, give me a second... 'w' </p>
    </div>

    return <>
        <div className='container-fluid'>
            <nav>
                <ul>
                    <li><strong>ComicHub</strong></li>
                </ul>
                <ul>
                    <li><a href="#">admin login</a></li>
                </ul>
            </nav>
            <div className='row'>
                <div className='col-lg-4'>
                    <hgroup>
                        <h1>{comicData.name}</h1>
                        <h2>{comicData.description} 
                        <hr />
                        Published on: {comicData.publish_date} <br />
                        {comicData.pages.length} pages
                        </h2>
                    </hgroup>
                </div>
                <div className='col-lg-8'>
                    <p> -page list placeholder- </p>
                </div>
                
            </div>
        </div>
    </>
}