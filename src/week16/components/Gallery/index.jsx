import { useEffect, useState } from 'react'
import GalleryGridCard from './GalleryCard'
import { fetchData } from './fetchData'
import Grid from '@mui/material/Unstable_Grid2';
import { Equalizer } from '@mui/icons-material';
import { ProjectRating, RatingControl } from './GalleryCard/GalleryCardAction';


export default function Gallery({ assessment }) {


    const localData = localStorage.getItem("dataObjects")

    // state variable to cache the projects information
    // initiate a state variable, dataObjects, with the value of localData
    // if localData is not null, then parse it, otherwise set it to null
    const [dataObjects, setDataObjects] = useState(localData && localData !== "undefined" ? JSON.parse(localData) : null)

    const ui = dataObjects ? <Grid container spacing={2}>
        {
            dataObjects.map((e, i) => {

                const group = e['Group']
                // const ratingControl = (assessment && assessment.group===group) ? <></>:<RatingControl group={group} assessment={assessment}/>

                return <GalleryGridCard project={e} key={group} number={i + 1} group={group}
                assessment={assessment} />
            })
        }
    </Grid> : <div> loading....</div>

    useEffect(() => {
        fetchData().then(
            (res) => {
                setDataObjects(res)

                console.log(res)
                // create window.assessment.projects template
                window.assessment_project_template = Object()
                res.map(e=>e.Group).forEach(e=>window.assessment_project_template[e]=null)
                
                // const obj = {};
                // const groups = res.map(e => e['Group'])
                // for (const key of groups) {
                //     obj[key] = null;
                // }
                // window.assessment.projects = obj

                // setAssessment(window.assessment)
                
                // set the localStorage item, dataObjects, to the value of res, the downloaded data
                localStorage.setItem("dataObjects", JSON.stringify(res))
            }
        )

    }, [])

    return (
        <>
            {ui}
        </>
    )
}
