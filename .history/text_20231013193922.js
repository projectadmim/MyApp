//các bước làm ra zingmp3

/**
 * 1.Render songs
 * 2.Scroll top
 * 3.play/pause/seek
 */
const $=document.querySelector.bind(document);
const $$=document.querySelectorAll.bind(document);
const playlist=$(".playlist");
const heading=$('header h2');
const cdthumb=$('.cd-thumb');
const audio=$('#audio');
const cd=$('.cd')
const playbtn=$('.btn-toggle-play')
const player=$('.player')
const progress=$('#progress')
const btn_next=$('.btn-next')
const btn_prev=$('.btn-prev')
const btn_random=$('.btn-random')
const app={
  currenindex:0,
  isplaying:false,
     songs :[
        {
            name:"Lạc Trôi",
            singger:"Sơn Tùng MP3",
            path:"./assets/music/song2.mp3",
            image:'./assets/img/backimg.jpg'
        },
        {
            name:"Lạc Trôi",
            singger:"Sơn Tùng MP3",
            path:"./assets/music/song1-Anh.mp3",
            image:'./assets/img/cd/cd.jpg'
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
     defineProperty:function(){
      Object.defineProperty(this,'crrentSongs',{
        get:function(){
          return this.songs[this.currenindex]
        }
      })
     },
     
     //xử lí sự kiện trong app zing
     handleEvent:function(){
      //xử lý sự kiện quay
      const cdanimate=cdthumb.animate([
        {
          transform:'rotate(360deg)'
        }
      ]
      ,{
        duration:10000,
        iterations:Infinity
      })
      cdanimate.pause()
      const _this=this
      //scroll phong to thu nho
      const cdWidth = cd.offsetWidth;
      document.onscroll = function () {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const newCdWidth = cdWidth - scrollTop;
        cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
        cd.style.opacity = newCdWidth / cdWidth;
        //xử lý sự kiện click play
       
     }
     playbtn.onclick=function(){
      if(_this.isplaying){
        audio.pause();
        
      }else{
        audio.play();
      }
    }
    //Xử lý khi tiến độ bài hát thay đổ
    audio.ontimeupdate=()=>{
      if(audio.duration){
        const progressPrecet=Math.floor(audio.currentTime/audio.duration*100)
      }
      progress.value=progressPrecet
    }
    //Xử lý sự kiện tua song
    progress.onchange=(e)=>{
      const seektime=audio.duration/100*e.target.value
      audio.currentTime=seektime
    }
    
    //xử lý sự kiện play
    audio.onplay=function(){
        _this.isplaying=true
        player.classList.add('playing')
        cdanimate.play()
      }
      //xu ly su kien pause
    audio.onpause=function(){
        _this.isplaying=false
        player.classList.remove('playing')
        cdanimate.pause();
      }
      //xu ly next songs
      btn_next.onclick=function(){
        _this.nextSong();
        audio.play();
      }
      btn_prev.onclick=function(){
        _this.prverSong();
        audio.play()
      }
      //ramdom bai hat
      ram
    },
     loadcrrentSongs:function(){
      heading.textContent=this.crrentSongs.name;
      cdthumb.style.backgroundImage=`url('${this.crrentSongs.image}')`
      audio.src=this.crrentSongs.path;
      // console.log(heading,cdthumb,audio);
     },
     //next song 
     nextSong:function(){
        this.currenindex++;
        if(this.currenindex>=this.songs.length){
          this.currenindex=0;
        }
        this.loadcrrentSongs();
     },
     prverSong:function(){
      this.currenindex--;
      if(this.currenindex<0){
        this.currenindex=this.songs.length-1;
      }
      this.loadcrrentSongs();
   },
     stars:function(){
      //định nghĩa  các thuộc tihs trong oject
      this.defineProperty()
      //dom event
      this.handleEvent();
      //load bai dau tien
      this.loadcrrentSongs()
      //render playlist
        this.render();
     }
}
app.stars();