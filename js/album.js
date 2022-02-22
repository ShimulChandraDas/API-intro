function displayAlbum() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => loadAlbums(data))

}
displayAlbum();
function loadAlbums(albums) {
    //console.log(albums);
    const albumsContainer = document.getElementById('albums');
    for (const album of albums) {
        const p = document.createElement('p');
        p.style.textAlign = 'center'
        p.innerText = album.title;
        albumsContainer.appendChild(p)
    }

}