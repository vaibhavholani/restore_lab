import {API_HOST} from '../../api.js'

const processPublishedResearch = (published_research) => {
    const processedTeam = published_research.map(member => {
        const {html_id, title, desc, funder} = member
        const imgBuffer = new Uint8Array(member.img.data);
        let blob = new Blob([imgBuffer], {type: member.img_mimetype});
        const url = window.URL.createObjectURL(blob);
        return {img: url, 
                id: html_id, 
                desc, 
                title, 
                funder
            }
    })

    return processedTeam
}


export const get_all_published_research = (setpublished_research) => {
    const url = `${API_HOST}/api/published_research`
    fetch(url).then(response => response.json()).then(json => setpublished_research(processPublishedResearch(json.published_research)))
}

const processNavpublished_research = (published_research) => {
    const processedpublished_research = published_research.map(published_research => {
        console.log(published_research)
        return (
            {
                title: published_research.title,
                path: `/published_research#${published_research.id}`,
                cName: 'dropdown-link'
            }
        )
    })
    console.log(processedpublished_research)
    return processedpublished_research
}

export const getNavProjectItems = (setpublished_research) => {
    
    const url = `${API_HOST}/api/published_research/navbar`

    fetch(url).then(response => response.json()).then(json => setpublished_research(processNavpublished_research(json.published_research)))
}