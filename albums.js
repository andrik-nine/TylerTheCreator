const clickableAlbumContainerELem = document.querySelectorAll(".clickable-album-container");
const visitAlbumFsELem = document.querySelector(".visit-album-fs")

let albumLinks = [
    {
        name:"Chromakopia",
        yt:"https://music.youtube.com/playlist?list=OLAK5uy_lXfobdFVDhci6mn7_TKHTrvKECta6GTIo",
        apple:"https://music.apple.com/us/album/chromakopia/1776500452",
        spotify:"https://open.spotify.com/album/0U28P0QVB1QRxpqp5IHOlH"
    },
    {
        name:"Igor",
        yt:"https://music.youtube.com/playlist?list=OLAK5uy_lpv17dzKsIp6huLYAxQEYFw3vK8Wsd1FQ",
        apple:"https://music.apple.com/us/album/igor/1463409338",
        spotify:"https://open.spotify.com/album/5zi7WsKlIiUXv09tbGLKsE"
    },
    {
        name:"Call Me If You Get Lost",
        yt:"https://music.youtube.com/playlist?list=OLAK5uy_kSIbgi-WxAiBFs28kWN1cMy7bewO3-LCs",
        apple:"https://music.apple.com/us/album/call-me-if-you-get-lost/1573484415",
        spotify:"https://open.spotify.com/album/1GG6U2SSJPHO6XsFiBzxYv"
    },
    {
        name:"Wolf",
        yt:"https://music.youtube.com/playlist?list=OLAK5uy_l8rapILEWWRQYoFcT_rdRoxfCuNy1yqPU",
        apple:"https://music.apple.com/us/album/wolf/600946351",
        spotify:"https://open.spotify.com/album/40QTqOBBxCEIQlLNdSjFQB"
    },
    {
        name:"Cherry Bomb",
        yt:"https://music.youtube.com/playlist?list=OLAK5uy_ktv8R17VlWDzTFqTFFe9MEyu3_4rq4eDI",
        apple:"https://music.apple.com/us/album/cherry-bomb/983056044",
        spotify:"https://open.spotify.com/album/621OhgnZJ7Pz8iUazct1In"
    },
    {
        name:"Goblin",
        yt:"https://music.youtube.com/playlist?list=OLAK5uy_nLGkfuNoqeLNXqIsQPNv3E3cc2sS2l4Kc",
        apple:"https://music.apple.com/us/album/goblin/431231125",
        spotify:"https://open.spotify.com/album/5dbCm8qaCdWnNdVyi3urUO"
    },
    {
        name:"Bastard",
        yt:"https://music.youtube.com/playlist?list=OLAK5uy_ne3Ri6lpa5OWjfABCZbeNxRD13o1NN4RQ",
        apple:"",
        spotify:""
    }
    ,{
        name:"Flower Boy",
        yt:"https://music.youtube.com/playlist?list=OLAK5uy_lUqR8HVQWD77rRBdA5eVCNat5EJQ7P6-s",
        apple:"https://music.apple.com/us/album/flower-boy/1254572564",
        spotify:"https://open.spotify.com/album/2nkto6YNI4rUYTLqEwWJ3o"
    }
]

clickableAlbumContainerELem.forEach(albumContainer =>{
    albumContainer.addEventListener("click",() => {   
        let linkAlbumTitleElem = albumContainer.querySelector(".link-album-title").innerHTML;
        let spotifyLinkELem = document.querySelector(".visit-album-Spotify");
        let ytMusicLinkELem = document.querySelector(".visit-album-YoutubeMusic");
        let appleMusicLinkELem = document.querySelector(".visit-album-AppleMusic");
        for (let index = 0; index < albumLinks.length; index++) {
            let albumLinkContainer = albumLinks[index]
            if (albumLinkContainer.name == linkAlbumTitleElem) {
                spotifyLinkELem.removeAttribute("href")
                ytMusicLinkELem.removeAttribute("href")
                appleMusicLinkELem.removeAttribute("href")
                if (albumLinkContainer.name == "Bastard") {
                    ytMusicLinkELem.setAttribute("href",albumLinkContainer.yt)
                }else{
                    spotifyLinkELem.setAttribute("href",albumLinkContainer.spotify)
                    ytMusicLinkELem.setAttribute("href",albumLinkContainer.yt)
                    appleMusicLinkELem.setAttribute("href",albumLinkContainer.apple)
                } 
            }
        }

        let vaFsTlOpen = gsap.timeline()
        vaFsTlOpen.to(".visit-album-fs",{
            height:"15vw",
            duration:0.5
        }).to(".visit-album-header",{
            opacity:1,
            duration:0.3
        }).to(".visit-album-links",{
            opacity:1,
            top:0,
            duration:0.3
        })
    })
})
const vaFsCloseBtnElem = document.querySelector("#vaFsCloseBtn")
vaFsCloseBtnElem.addEventListener("click",() => {
    let vaFsTlClose = gsap.timeline()
        vaFsTlClose.to(".visit-album-links",{
            opacity:0,
            top:"0.3vw",
            duration:0.25
        }).to(".visit-album-header",{
            opacity:0,
            duration:0.3
        }).to(".visit-album-fs",{
            height:"0vw",
            duration:0.5
        })
})

