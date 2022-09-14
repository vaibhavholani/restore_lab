import {API_HOST} from '../../api.js'

const processTeams = (teams) => {
    const flags = {"lead": false, "colab_sci": false, "volunteers": false, "student": false}
    const processedTeam = teams.map(member => {
        const {html_id, title, description, name, type} = member
        const imgBuffer = new Uint8Array(member.img.data);
        let blob = new Blob([imgBuffer], {type: member.img_mimetype});
        const url = window.URL.createObjectURL(blob);
        const r_obj = {img: url, 
            id: flags[type] ? html_id: type, 
            desc: description, 
            title, 
            name}
        flags[type] = false 
        return r_obj
    })
    return processedTeam
}

const processTeamsNoImg = (teams) => {
    const flags = {"lead": false, "colab_sci": false, "volunteers": false, "student": false}
    const processedTeam = teams.map(member => {
        const {html_id, title, description, name, type, _id} = member
        const r_obj = {img: "images/blank_person.png", 
            _id, 
            id: flags[type] ? html_id: type, 
            desc: description, 
            title, 
            name}
        flags[type] = false 
        return r_obj
    })
    return processedTeam
}

const processedTeamsImg = (team) => {
    const flags = {"lead": false, "colab_sci": false, "volunteers": false, "student": false}
    const {html_id, title, description, name, type, _id} = team
    const imgBuffer = new Uint8Array(team.img.data);
    let blob = new Blob([imgBuffer], {type: team.img_mimetype});
    const url = window.URL.createObjectURL(blob);
    const r_obj = {img: url, 
        id: flags[type] ? html_id: type, 
        desc: description, 
        title, 
        name}
    
    return r_obj
}

export const get_img_by_id = (id, index, setTeams) => {
    console.log("Get image being run")
    const url = `${API_HOST}/api/team_id_image/${id}`
    fetch(url).then(response => response.json()).then(json => setTeams((old) => {return (old.map((x, index2)=> {return (index===index2 ? processedTeamsImg(json.teams) : x)}))}))
}


export const get_all_team = (setTeams) => {
    const url = `${API_HOST}/api/team`
    fetch(url).then(response => response.json()).then(json => setTeams(processTeams(json.teams)))
}

export const get_all_team_no_img = (setTeams) => {
    const url = `${API_HOST}/api/team_no_image`
    fetch(url).then(response => response.json()).then(json => setTeams(processTeamsNoImg(json.teams)))
}