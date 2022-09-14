import {API_HOST} from '../../api.js'

const processBanners = (banners) => {
    
    const processedBanners = banners.map(banner => {
        const imgBuffer = new Uint8Array(banner.img.data);
        let blob = new Blob([imgBuffer], {type: banner.img_mimetype});
        const url = window.URL.createObjectURL(blob);
        const r_obj = {...banner, img: url}
        return r_obj
    })
    return processedBanners
}
export const get_all_banner = (setBanners) => {
    const url = `${API_HOST}/api/banner`
    fetch(url).then(response => response.json()).then(json => setBanners(processBanners(json.banners)))
}