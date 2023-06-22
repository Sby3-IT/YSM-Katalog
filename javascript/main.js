document.querySelectorAll('.btnDetail').forEach(item =>{
    item.addEventListener('click',(e) => {
        let parent = e.target.parentNode.parentNode;
        let gambar = parent.querySelector('.card-img-top').src;
        console.log('gambar: ${gambar}');
    })
})