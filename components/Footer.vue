<script setup>
    const link = "https://rakan.dev";
</script>

<template>
    <div id="footer-text">
        <el-text>صُنع بإتقان من قِبل <a :href="link">Shelf Team</a></el-text>
    </div>
</template>

<style scoped>
    #footer-text {
        direction: rtl;
        text-align: center;
        
        padding-top: 5px;
        position: relative;
        
        left: 50%;
        transform: translate(-50%);
    }

    @media screen and (min-height: 700px) {
        #footer-text {
            padding-top: 50px;
        }

        .el-text {
            font-size: 20px;
        }
    }

    .el-text {
        color: #191A1A;
    }

    a {
        font-family: 'Cairo', sans-serif;
        
        background: linear-gradient(45deg, #AE8941, #C5A250);
    }

    a:hover {
        background: linear-gradient(45deg, #c59b46, #eabf59);
    }

    a, a:hover {
        background-clip: text;
        -webkit-background-clip: text; /* Compatibility CSS */ 
        -webkit-text-fill-color: transparent; /* Compatibility CSS */ 
    }

    @media screen and (min-width: 500px) {
        .el-text {
            font-size: 20px;
        }
    }
</style>