import {API_HOST} from '../../api.js'

const processTeams = (teams) => {
    const processedTeam = teams.map(member => {
        const {html_id, title, description, name} = member
        const imgBuffer = new Uint8Array(member.img.data);
        let blob = new Blob([imgBuffer], {type: member.img_mimetype});
        const url = window.URL.createObjectURL(blob);
        return {img: url, 
                id: html_id, 
                desc: description, 
                title, 
                name}
    })

    return processedTeam
}
export const get_all_team = (setTeams) => {
    const url = `${API_HOST}/api/team`
    fetch(url).then(response => response.json()).then(json => setTeams(processTeams(json.teams)))
}