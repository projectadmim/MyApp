const $=document.querySelector.bind(document);
const $$=document.querySelectorAll.bind(document);
const playlist=$(".playlist");
const app={
     songs :[
        {
            name:"Lạc Trôi",
            singger:"Sơn Tùng MP3",
            path:"./assets/music/song1-Anh.mp3",
            image:'./assets/img/backimg.jpg'
        },
        {
            name:"Lạc Trôi",
            singger:"Sơn Tùng MP3",
            path:"./assets/music/song1-Anh.mp3",
            image:'./assets/img/backimg.jpg'
        },
        {
            name:"Lạc Trôi",
            singger:"Sơn Tùng MP3",
            path:"./assets/music/song1-Anh.mp3",
            image:'./assets/img/backimg.jpg'
        },
        {
          name:"Lạc Trôi",
          singger:"Sơn Tùng MP3",
          path:"./assets/music/song1-Anh.mp3",
          image:'./assets/img/backimg.jpg'
      },
      {
        name:"Lạc Trôi",
        singger:"Sơn Tùng MP3",
        path:"./assets/music/song1-Anh.mp3",
        image:'./assets/img/backimg.jpg'
    }
    ,
      {
        name:"Lạc Trôi",
        singger:"Sơn Tùng MP3",
        path:"./assets/music/song1-Anh.mp3",
        image:'./assets/img/backimg.jpg'
    }
    ,
      {
        name:"Lạc Trôi",
        singger:"Sơn Tùng MP3",
        path:"./assets/music/song1-Anh.mp3",
        image:'./assets/img/backimg.jpg'
    },
    {
      name:"Lạc Trôi",
      singger:"Sơn Tùng MP3",
      path:"./assets/music/song1-Anh.mp3",
      image:'./assets/img/backimg.jpg'
  }
     ],
     //render song
     render:function(){
        const htmls=this.songs.map(function(song){
            return `
            <div class="song">
              <div class="thumb" style="background-image: url('${song.image}')">
              </div>
              <div class="body">
                <h3 class="title">${song.name}</h3>
                <p class="author">${song.singger}</p>
              </div>
              <div class="option">
                <i class="fas fa-ellipsis-h"></i>
              </div>
            </div>
            `
        })
        // $('.playlist').innerHTML=htmls.join('');
        playlist.innerHTML=htmls.join('');
     },
     //xử lí sự kiện trong app zing
     handleEvent:function(){
      //scroll
        document.onscroll=function(){
          console.log(window.scrollY);
        }
     },
     stars:function(){
      this.handleEvent();
        this.render();
     }
}
app.stars();