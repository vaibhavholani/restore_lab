import {API_HOST} from '../../api.js'

const processProjects = (projects) => {
    const processedTeam = projects.map(member => {
        const {html_id, title, desc, funder, _id, displayButton, buttonText, buttonType, buttonLink, buttonDownload} = member
        const imgBuffer = new Uint8Array(member.img.data);
        let blob = new Blob([imgBuffer], {type: member.img_mimetype});
        const url = window.URL.createObjectURL(blob);
        return {img: url, 
                id: html_id, 
                desc, 
                title, 
                funder, 
                _id, displayButton, buttonText, buttonType, buttonLink, buttonDownload
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
    
    const cookie = localStorage.getItem("restorelabcookieimp") 
    const url = `${API_HOST}/api/project/navbar/${cookie}`

    fetch(url).then(response => response.json()).then(json => setProjects(processNavProjects(json.projects)))
}


const downloadFile = (project) => {
    console.log("This is projects", project)
    const {buttonDownload, download_mimetype, short_navbar_title, ...evvv} = project
    const fileBuffer = Buffer.from(buttonDownload, 'binary')
    let blob = new Blob([fileBuffer]);
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `${short_navbar_title}.pdf`
    document.body.append(link);
    link.click();
    link.remove();
    // in case the Blob uses a lot of memory
    setTimeout(() => URL.revokeObjectURL(link.href), 7000);
}

export const download_file_by_id = (id) => {
    const url = `${API_HOST}/api/project_pdf/${id}`
    fetch(url).then(response => response.json()).then(json => downloadFile(json.projects))
}