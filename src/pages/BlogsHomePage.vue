<template>
    <div>
        <div>
            <div style="position: relative;text-align:center;">
                <img src="../assets/Goa/goa1.jpg" alt="" style="width: 100%;">
                <div class="blogs_text">
                    <div class="blogs_text1">
                        <text>where do you want to go?</text>
                    </div>
                    <div class="blog_text2">
                        <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed et donec purus viverra.
                            Sit justo velit, eu sed
                            sollicitudin tempus, risus. Sed sit elit mauris adipiscing. Lobortis pellentesque nulla
                            accumsan id urna, ullamcorper
                            gravida varius. Massa mauris, cursus orci magna non enim fames et sed.</text>
                    </div>
                    <div class="blogs_text3">
                        <text>Let’s Go.....</text>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style>
.blogs_text {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    align-items: center;
    max-width: 900px;
    transform: translate(-50%, -50%);
}

.blogs_text1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    text-align: center;
    color: #ffffff;
}

.blogs_text2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    text-align: center;

    margin: auto;
    color: #ffffff;
}

.blogs_text3 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #FFA902;
}

@media screen and (min-width: 481px) and (max-width: 768px) {
    .blogs_text1 {
        font-weight: 600;
        font-size: 25px;
    }

    .blogs_text2 {

        font-weight: 600;
        font-size: 15px;

    }
}

@media screen and (min-width: 320px) and (max-width: 480px) {
    .blogs_text {
        position: absolute;
        margin: auto;
        width: 100%;
        align-items: center;
        max-width: 300px;

    }

    .blogs_text1 {
        font-weight: 600;
        font-size: 20px;
    }

    .blogs_text2 {

        font-weight: 600;
        font-size: 7px;

    }

    .blogs_text3 {
        font-size: 10px;
    }
}
</style>