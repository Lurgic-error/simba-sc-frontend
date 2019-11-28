<template>
  <div class="news__grid">
      <div class="main__news">
          <div class="news__img">
              <img src="../../../public/Images/stadium4.jpg" alt="">
              <div class="news__caption">
                  <h6 class="news__type">Latest Transfer</h6>
                  <h3 class="news__title">News Title Goes Right Here</h3>
                  <p class="news__text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis dolorem dolores ad corrupti laborum id, ipsa optio maiores odit maxime a, voluptatibus labore similique quod, praesentium sit? Soluta, animi?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet labore facere magnam corrupti assumenda neque obcaecati asperiores sunt doloremque harum velit, quam a quasi excepturi similique enim sint odit?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, omnis! Quidem maxime eius exercitationem rerum corrupti placeat impedit, voluptate laborum ipsam saepe, assumenda rem temporibus aliquam eos id, natus earum!
                  </p>
                    <p class="news__date">27 November 2019</p>
                  <div class="btn btn__cta-red">Read More</div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    @import '../../assets/styles/abstracts/_mixins.scss';


.news__grid{
    height: 100vh;
    display: flex;
    justify-content: center;
    padding: 0 6rem;

    @include respond(phone){
        padding: 0 2rem;
        display: block;
    }

    
}

.main__news{
    margin: auto;

    .news__img{
        
        position: relative;
        height: 60%;
width: 100%;
        @include respond(phone){
            position: static;
        }
        img{
            height: 100%;
            width: 100%;
            object-position: center;
            object-fit: cover;
        }
    }

    .news__caption{
        background-color: rgba(169, 169, 169, 0.918);
        padding: 1.25rem;
        position: absolute;
        bottom: 80px;
        left: 190px;

        @include respond(phone){
            position: static;
        }

        .news__type{
            font-size: 1.6rem;
            // color: 
        }

        .news__title{
            font-size: 2.4rem;
            color: #c60000;
        }

        .news__text{
            font-size: 1.2rem;
            line-height: 1.2;
            display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 60vw;
        }
    }
}
</style>

