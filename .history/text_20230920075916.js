const $=document.querySelector(document);
const $$=document.querySelectorAll(document);

const app={
     song :[
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
     ],
     render:function(){
        const htmls=this.song.map(function(){
            return `
            <div class="playlist">
            <div class="song">
              <div class="thumb" style="background-image: url('https://gnauqthebeast.github.io/Music-Player/Image/Cruel%20Summer.jpg')">
              </div>
              <div class="body">
                <h3 class="title">Music name</h3>
                <p class="author">Singer</p>
              </div>
              <div class="option">
                <i class="fas fa-ellipsis-h"></i>
              </div>
            </div>
          </div>
            `
        })
     },
     stars:function(){
        this.render();
     }
}
app.stars();