/*
IDEA:
    use the spotify web api to request spotify playlist info
    import it into a .json file with the structure

    {
        "playlistID": {
            "name": "playlistName",
            "songs": [
                {
                    "songName": "songName",
                    "songID": "songID",
                    "length": "songLength",
                    "artist": "songArtist"
                }
            ]
        }    
    }

*/

// imports
const [
    fs,
    readline,
    YTMusic,
    colors
] = [
    require("fs"),
    require("readline"),
    require("ytmusic-api"),
    require("colors")
]
async function importPlaylist(params) {
    
}


async function getPlaylist(params) {
    
}

async function getAccess(params) {
    
}

