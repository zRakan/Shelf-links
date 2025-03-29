<template>
    <div class="container">
        <img src="/logo.webp" />

        <span>أهم الروابط في مكان واحد</span>
    </div>
</template>

<style scoped>
    .container {
        position: relative;

        display: flex;

        align-items: center;
        flex-direction: column;

        flex-wrap: wrap;
        
        gap: 10px;
        margin-bottom: 10px;
    }

    img {
        border: 2px solid transparent;
        background-image: linear-gradient(45deg, #AE8941, #C5A250);

        width: 146px;
        height: 146px;

        border-radius: 50%;
        object-fit: cover;
    }

    span {
        font-size: 16px;

        background: linear-gradient(45deg, #AE8941, #C5A250);

        /* Compatibility CSS */ 
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style> 