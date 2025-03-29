<script setup>
  const links = [
    { name: "CollegeShelf #1", link: "https://chat.whatsapp.com/K8ZAT2ERiR8DWddZZRhV69", img: "/logo.webp" },
    { name: "CollegeShelf #2", link: "https://chat.whatsapp.com/E1QvxQghG568VXxo7PdINE", img: "/logo.webp" },
    { name: "CollegeShelf #3", link: "https://chat.whatsapp.com/G3eXbdL7mXYHHzYBBLSs6q", img: "/logo.webp" },

    { name: "QuestionShelf", link: "https://t.me/+sxCiRknMxW8zNGU8", img: "/links/shelf-book.webp" },
    { name: "SectionShelf", link: "https://t.me/+XT2m4V_GqyVjOTM0", img: "/links/shelf-book.webp" },

    { name: "Shelf Internships #1", link: "https://chat.whatsapp.com/FVZNWAsEUs89QB3qUwnkiy", img: "/logo.webp" },
    { name: "Shelf Internships #2", link: "https://chat.whatsapp.com/IKz46xwjR8cKme0QSiutBi", img: "/logo.webp" },

    //{ name: "ShelfCode", link: "https://chat.whatsapp.com/C4GAqsM7eKHE3ltSJYSZ85", img: "/links/shelf-code.webp" },

    // Others
    { name: "تقويم الفصل الدراسي 1446هـ", link: "https://drive.google.com/file/d/1n-3rYVv2qR_2VWbyVpObgN2wjwXR6BQC/view", img: "/links/calendar.webp" },
    { name: "الخطط الدراسية عام 1445هـ", link: "https://docdro.id/MBm62zW", img: "/links/courses.webp" },
    { name: "ترتيبة | رتّب موادك بضغطة زر", link: "https://trtebh.com/", img: "/links/trtebh.webp" },
    { name: "Box", link: "https://app.box.com/s/wlrcpuv7bm0qqvxjwx67dj9taaadfhl2", img: "/links/box.jpeg" },
    { name: "تقييم", link: "https://unirate.xyz/", img: "/links/unirate.png" }

  ]

</script>

<template>
    <div style="display: flex; flex-direction: column; align-items: center;">
        <a v-for="link in links" :href="link.link" >
            <img :src="link.img">
            <span>{{ link.name }}</span>
        </a>
    </div>
</template>

<style scoped>
    a {
        display: flex;

        align-items: center;

        height: 40px;
        width: 100%;
        max-width: 350px;

        border: 0px;
        
        margin-bottom: 15px;
        border-radius: 5px;

        background: linear-gradient(90deg, #AE8941, #C5A250);
    }

    a:last-child {
        margin-bottom: 0px;
    }

    a:hover {
        background: linear-gradient(90deg, #c59b46, #eabf59);
    }

    a > img {
        width: 35px;
        height: 35px;

        margin-left: 5px;

        border-radius: 50%;
    }

    a > span {
        margin: 0 auto;
    }

    @media screen and (min-width: 500px) and (min-height: 768px) {
        a {
            height: 50px;
            max-width: 500px;
        }

        a > img {
            width: 45px;
            height: 45px;
        }
    }
</style>