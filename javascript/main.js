document.querySelectorAll('.btnDetail').forEach(item => {
    item.addEventListener('click', (e) => {
        let parent = e.target.parentNode.parentNode;
        let gambar = parent.querySelector('.card-img-top').src;
        let judul = parent.querySelector('.card-text').innerHTML;
        let deskripsi = parent.querySelector('.deskripsi')? parent.querySelector('.deskripsi').innerHTML :
        '<i>Tidak ada deskripsi barang</i>';

       
       let tombolModal = document.querySelector('.btnModal');
       tombolModal.click();

       document.querySelector('.modalTitle').innerHTML = judul;
       let image = document.createElement('img');
       image.src = gambar;
       image.classList.add('w-50');
       document.querySelector('.modalImage').innerHTML = '';
       document.querySelector('.modalImage').appendChild(image);
       document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
    })
})