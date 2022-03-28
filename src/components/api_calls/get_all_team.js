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
export const get_all_team = (setTeams) => {
    const url = `${API_HOST}/api/team`
    fetch(url).then(response => response.json()).then(json => setTeams(processTeams(json.teams)))
}