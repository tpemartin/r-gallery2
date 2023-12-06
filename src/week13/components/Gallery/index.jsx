import { useEffect, useState } from 'react'
import  GalleryGridCard from './GalleryCard'
import { fetchData } from './fetchData'
import Grid from '@mui/material/Unstable_Grid2';

export default function Gallery() {

    const [dataObjects, setDataObjects] = useState(null)

    const ui = dataObjects ? <Grid container spacing={2}>
        {
            dataObjects.map((e, i) => {
                return <GalleryGridCard project = {e} key={i} number={i+1}/>
            })
        }
    </Grid> : <div> loading....</div>

    useEffect(() => {
        fetchData().then(
            (res) => {
                setDataObjects(res)
            }
        )

    }, [])

    return (
        <>
            {ui}
        </>
    )
}
