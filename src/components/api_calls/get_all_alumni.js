import {API_HOST} from '../../api.js'

const processAlumnis = (alumnis) => {
    const flags = {"lead": false, "colab_sci": false, "volunteers": false, "student": false}
    const processedAlumni = alumnis.map(member => {
        const {html_id, title, description, name, type, linkedin, website, email,} = member
        const imgBuffer = new Uint8Array(member.img.data);
        let blob = new Blob([imgBuffer], {type: member.img_mimetype});
        const url = window.URL.createObjectURL(blob);
        const r_obj = {img: url, 
            id: flags[type] ? html_id: type, 
            description, 
            title, linkedin, website, email,
            name}
        flags[type] = false 
        return r_obj
    })
    return processedAlumni
}

const processAlumnisNoImg = (alumnis) => {
    const flags = {"lead": false, "colab_sci": false, "volunteers": false, "student": false}
    const processedAlumni = alumnis.map(member => {
        const {html_id, title, description, name, type, _id, linkedin, website, email,} = member
        const r_obj = {img: "images/blank_person.png", 
            _id, 
            id: flags[type] ? html_id: type, 
            description, 
            title, linkedin, website, email,
            name}
        flags[type] = false 
        return r_obj
    })
    return processedAlumni
}

const processedAlumnisImg = (alumni) => {
    const flags = {"lead": false, "colab_sci": false, "volunteers": false, "student": false}
    const {html_id, title, description, name, type, _id, linkedin, website, email,} = alumni
    const imgBuffer = new Uint8Array(alumni.img.data);
    let blob = new Blob([imgBuffer], {type: alumni.img_mimetype});
    const url = window.URL.createObjectURL(blob);
    const r_obj = {img: url, 
        id: flags[type] ? html_id: type, 
        description, 
        title, linkedin, website, email,
        name}
    
    return r_obj
}

export const get_alum_img_by_id = (id, index, setAlumnis) => {
    console.log("Get image being run")
    const url = `${API_HOST}/api/alumni_id_image/${id}`
    fetch(url).then(response => response.json()).then(json => setAlumnis((old) => {return (old.map((x, index2)=> {return (index===index2 ? processedAlumnisImg(json.alumnis) : x)}))}))
}


export const get_all_alumni = (setAlumnis) => {
    const url = `${API_HOST}/api/alumni`
    fetch(url).then(response => response.json()).then(json => setAlumnis(processAlumnis(json.alumnis)))
}

export const get_all_alumni_no_img = (setAlumnis) => {
    const url = `${API_HOST}/api/alumni_no_image`
    fetch(url).then(response => response.json()).then(json => setAlumnis(processAlumnisNoImg(json.alumnis)))
}