<div class="contactus-form-container" id="contactme">
            <div class="container">
                <h1 class="contactus-heading">Contact me</h1>
                <h3 class="contactus-sub-heading">Questions,thoughts,or just want to say hello?</h3>

                <div class="contactus-form-container">
                    <form class="form" action="">
                        <div class="formfield-container">
                            <input class="formfield" type="text" name="name" id="" placeholder="Enter your good name">
                            <input class="formfield" type="email" name="email" id="" placeholder="Enter your Email id">
                            <input class="formfield" type="text" name="subject" id="" placeholder="Enter your subject">
                            <textarea name="message" id="" cols="30" rows="10" class="formfield formfield-textarea"
                                placeholder="Enter your meassge"></textarea>

                        </div>
                        <div>
                            <button type="submit" class="btn-pink" id="submit-btn">
                                Send Message <i class="submit-icon fa-solid fa-paper-plane"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        @import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300&display=swap");
*{
    margin: 0;
    padding: 0;
    /* box-sizing: border-box; */
    scroll-behavior: smooth;
    font-family:"Be Vietnam Pro",sans-serif;
}
:root{
    --bgOrange:#662d91;
}
#wrapper{
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
}
.container{
    width: 1200px;
    margin:0 auto;

}
.navbar{
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
}

.nav-items{
    display: flex;
    gap:2rem;
    padding:0 4em;
}
.logo-container{
     display:flex;
      justify-content: baseline;/*//image or text ko same line me laane k liye use kiya gya h isko */
     align-items: center;
}
.logo-text{
    margin-top: 2rem;
    margin-left: -1.2rem;
    font-size: 38px;
    font-family: cursive;
}
.nav-items div{
    font-size: 20px;
    font-weight: 500;
    cursor: pointer; /* Arrow ko hand me change krne k liye */
}
a{
    text-decoration: none;
    color:black
}
a:hover{
    transition:0.8s;
    font-weight:bold;
}
.logo{
    width: 80px;
}

.hero-section{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:5rem;
    margin: 4rem auto;
    padding: 0 1rem;
    padding-bottom: 8rem;
}
.faded-text{
    user-select: none;/*taaki user iss text ko select na kr ske*/
    font-size: 7em;
    color:rgb(231,231,231);
    bottom: -16%;
    left:-5%;
    font-weight: bold;
    transition: all 3s;
    position: absolute;

}
.left{
    display: flex;
    flex-direction: column;
    justify-content:center;
    gap:2rem;
}
.hero-heading{
    font-size: 35px;
    color:#343d68;
    font-weight: 500;
}
.role{
    color:#4e45d5;
    font-weight:800;
}
.hero_subheading{
    font-size: 45px;
    line-height: 45px;
}
.para{
    margin-top: 1rem;
    width:70%;
    font-weight: 500;
}
.btn-pink{
    background-color: var(--bgOrange);
    width: fit-content;
    color: white;
    padding: 0.8rem 2.3rem;
    box-shadow: 5px 5px 7px 0px #0000003f;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.5s;
    font-weight: 500;
    border: solid 3px transparent;
    position: relative;
    z-index: 1;
}
.btn-pink::before {
    content: "";
    position: absolute;
    background-color: #fff;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0px;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: left;
    transition: all 0.8s;
}
.btn-pink:hover::before {
    transform: scaleX(1);
}
.btn-pink:hover {
    border: solid 3px var(--bgOrange);
    color: black;
}
.right{
    position:relative;
}
.user-image{
    padding:2.5rem;
    filter: grayscale(1);
    transition:all 1s;
    animation: scaleImage 5s linear infinite;
}
.user-image img{
    z-index: -9;/*image ko kisi or image k respect me uper ya neeche rkhne k kaam me aata h ye*/
}
@keyframes scaleImage {
    0%{
        filter: grayscale(0);
        transform: scale(1);

    }
    50%{
        transform: scale(1.1);
        filter: grayscale(0.865);
        box-shadow: 3px 3px 10px black;
       
    }
    100%{
        transform: scale(1);
        filter: grayscale(0);
    }


}
.project-section{
    background-color: rgb(231,231,231);
    margin-top:4rem;
}

.page-header{
    color:var(--bgOrange);
    font-size:90px;
    text-align:center;
    padding-top:30px;
}
.project-container{
    max-width: 1200px;
    margin:0 auto;
    padding:3rem 0;

    display:flex;
    flex-direction:column;
    gap:120px;
}

.project-card{
    width:90%;
    height:550px;
    background-image: url(./images/projects/Project1.png);
    background-size: cover;
    /* background-repeat: no-repeat; */
    position:relative;
    box-shadow:0px 0px 40px #1f1f1f;
  }

  .project-card::after{
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color: #1f1f1f9a;
    z-index:0;
    /* transform: scaleX(1); */
  }

  .project-card::before{
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: linear-gradient(45deg, #343d68, #343d68be, #343d687c);
    transform:scaleX(0);
    transform-origin: left;
    transition: all 0.4s;
    z-index:1;
  }

.project-card:hover::before{
    transform:scaleX(1);
}

.project-number{
    position:absolute;
    font-size:200px;
    font-weight:600;
    color:white;
    z-index:10;
    /* display:none; */
    opacity: 0;
}

.project-card:hover .project-number{
    /* display:block; */
    opacity: 1;
}

.project-number-right{
    right:-40px;
    top:-45px;
}

.project-number-left{
    left:-40px;
    top:-45px;
}
.project-content{
    position:absolute;
    display:flex;
    flex-direction:column;
    color:white;
    padding:2em;
    bottom:20%;
    z-index:5;
    gap:1em;
    transition:all 0.4s;
}
.project-content-left{ 
    left:10%;
}
.project-content-right{ 
    right:10%;
}
.project-skills-container{
    width: 60%;
    display: flex;
    gap:10px;
    flex-wrap: wrap;

}
.project-skill{
    width:40px;
}
.project-heading{
    font-size: 50px;
    font-weight: bold;
    line-height: 3rem;
}

.project-subHeading{
    width:70%;
    font-size:16px ;
    font-style: italic;

}
.btn-grp{
    display: flex;
    gap:0.9rem;
    align-items: center;
}
btn-project:hover{
    border: none;
}
.icon{
    cursor:pointer;
    color:white;
    font-size: 35px;
    transition: all 0.4s;
}
.icon:hover{
    color:var(--bgOrange);
}
.project-card:hover .project-content{
    transform: scale(1.1);

}
#project1{
    background-image: url(./images/projects/Project1.png);
}

#project2{
    margin-left:120px;
    background-image: url(./images/projects/Project2.png);
}
#project3{
    background-image: url(./images/projects/Project3.png);
}
#project4{
    margin-left:120px;
    background-image: url(./images/projects/Project4.png);
}
@media (max-width:1300px) {
    .page-header {
      padding-top: 30px;
      color: var(--bgOrange);
      text-align: center;
      font-size: 40px;
    }
    .project-container {
      padding: 5px;
      margin: 10px;
      gap: 60px;
    }
    .project-card {
      width: 100%;
      height: 300px;
    }
    .project-card {
      background-size: cover;
      background-position: center;
    }
    .project-content {
      scale: 0.5;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
    }
    .project-content-left {
      left: 0;
    }
    .project-heading {
      font-size: 40px;
      width: 100%;
    }
    .project-sub-heading {
      width: 100%;
    }
    #project2 {
      margin-left: 0;
    }
    #project4 {
      margin-left: 0;
    }
    .project-skill-container {
      width: 100%;
    }
    .project-skill {
        width: 35px;
    }
    .project-card:hover .project-number {
      display: none;
    }
    .project-card:hover .project-content {
      scale: 0.55;
    }
}
.skills-container{
    position: relative;
    display: flex;
    padding:5rem;
    margin:10rem auto;
    gap:30px;
}
.skill-container-left{
    width: 50%;
    display:flex;
    flex-direction: column;

}
.skill-container-right{
    display: flex;
    flex-wrap: wrap;
    width:50%;
    position: relative;
    gap: 2rem;
    justify-content: center;
}
.skills-faded-text{
    transition: all 3s;
    position:absolute;
    font-size:10em;
    font-style:bold;
    color:rgb(231,231,231);
    bottom:-34.5%;
    right:-3%;
    user-select:none;
    
}
.blob-style{
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -5;
    transform: translate(-50%,-50%);
    animation: blobAnimate 3s liner infinite;

}
@keyframes blobAnimate{
    50%{
        top:54%;
        left:46%;
    } 
}
.skills-logo{
    width: 90px;
    transition: all 0.5s;
}
.skills-logo:hover{
    transform: scale(1.2);
}
.skill-heading{
    font-size: 50px;
    font-style: bold;
    color:#e84949;
    line-height: 50px;

}
.caps{
    font-size: 90px;
}
.skill-subHeading{
    margin-top: 1rem;
    width: 85%;
    display: flex;
    flex-direction: column;
    gap:1rem;
    text-align: justify;
}
.skill-subHeading{
    margin:15px 0;
}
.contactus-form-container{
    width: 100%;
    background-color: rgb(231,231,231);

}
.contactus-heading{
    font-size: 5em;
    color:#e84949;
    padding-top:2rem ;
}
.contactus-sub-heading{
    font-size: 3rem;
    color:#343d68aa;
    text-transform: capitalize;
}
.contactus-form-container{
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.form{
    display: flex;
    gap: 30px;
    flex-direction: column;
    width:70% ;
    margin:2rem 4rem ;
}
.formfield-container{
    width: 100%;
}
.formfield{
    width: 100%;
    height:42px;
    padding: 0 2rem;
    font-size: 18px;
    border-radius: 5px;
    box-shadow: 2px 2px 10px #1f1f1f;
    font-weight: 500;
    border: none;
    margin-top: 27px;
}
.formfield-textarea{
    height: auto;
    padding-top: 1rem;
}
#submit-btn{
    border: none;
    font-size: 1.4rem;
    margin: 1rem 0;
}
#submit-btn:hover{
    scale: 0.9;
}
.submit-icon{
    padding: 0 1rem;
    font-size: 1.5rem;
}
footer{
    position: relative;
    margin-top: -1px;
    background-color:#343d68;
    padding:5rem; 
}
.footer-wrapper{
    display: flex;
    gap: 1rem;
    padding: 1.2rem;
    justify-content: space-between;
    align-items: center;
}
.footer-faded-text{
    position: absolute;
    left:8rem;
    bottom:0;
    color:#535c87;
    user-select: none;
    font-size: 5em;

}
.link-wrapper{
    display: flex;
    gap:1.2rem;
    
}
.link-wrapper div a{
    color:white;
    text-decoration: none;
    transition:all 0.6s;

}
.link-wrapper div a:hover{
    color:#e84949;
}
.icon-wrapper{
    display: flex;
    gap:1rem;
}



  