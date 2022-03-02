import {API_HOST} from '../../api.js'

const processProjects = (projects) => {
    const processedTeam = projects.map(member => {
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


export const get_all_project = (setProjects) => {
    const url = `${API_HOST}/api/project`
    fetch(url).then(response => response.json()).then(json => setProjects(processProjects(json.projects)))
}

const processNavProjects = (projects) => {
    const processedProjects = projects.map(project => {
        console.log(project)
        return (
            {
                title: project.title,
                path: `/projects#${project.id}`,
                cName: 'dropdown-link'
            }
        )
    })
    console.log(processedProjects)
    return processedProjects
}

export const getNavProjectItems = (setProjects) => {
    
    const url = `${API_HOST}/api/project/navbar`

    fetch(url).then(response => response.json()).then(json => setProjects(processNavProjects(json.projects)))
}