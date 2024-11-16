export interface bannerData {
    title : string,
    text : string,
    urlVideo? : string,
    urlImg? : string
}

export interface bannerPhone {
    model : string,
    description : bannerData,
    screen : bannerData,
    batery: bannerData,
    camara : bannerData
}
