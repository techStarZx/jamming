const clientId = '19dafe84f4b94a0baa7931cc61e9446e';
const redirectUri = 'http://localhost:3000/'; // Have to add this to your accepted Spotify redirect URIs on Spotify API.
let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        let accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        let expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = expiresInMatch[1];
            setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
            return accessToken;
        }

        const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
        window.location = accessUrl;

        accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = expiresInMatch[1];
            setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
            return accessToken;
        }
    },

    async search(term) {
        const accessToken = await Spotify.getAccessToken();
        const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
        const jsonResponse = await response.json();
        if (!jsonResponse.tracks) {
            return [];
        }
        const tracks = jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }));
        return tracks;
    },

    async savePlaylist(name, trackUris) {
        if(!name || !trackUris) {
            return;
        }

        const accessToken = Spotify.getAccessToken();
        const headers = { Authorization: `Bearer ${accessToken}` };

        const responseUserId = await fetch('https://api.spotify.com/v1/me', {headers: headers});
        const jsonResponseUserId = await responseUserId.json();
        const userId = jsonResponseUserId.id;

        const responseCreatePlaylist = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            headers: headers,
            method: 'POST',
            body: JSON.stringify({name: name})
        });
        const jsonResponseCreatePlaylist = await responseCreatePlaylist.json();
        const playlistId = jsonResponseCreatePlaylist.id;

        const responseAddTracksToPlaylist = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
            headers: headers,
            method: 'POST',
            body: JSON.stringify({uris: trackUris})
        });
        return responseAddTracksToPlaylist;
    }
};

export default Spotify;