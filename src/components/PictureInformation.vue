<template>
    <div class="picture">

        <img :src="img" class="picture-image" alt="">

        <h3 class="picture-title">
            {{ title }}
        </h3>

        <span class="picture-description">
            {{ description }}
        </span>

    </div>
</template>

<script>

export default {
    name: 'PictureInformation',
    props: {
        img: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
#picturees {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 24px;
    margin-top: 32px;
}

.picture {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    gap: 18px;
    padding: 20px;
    background-color: var(--color-neutral-0);
    box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.1);
    position: relative;
}

.picture-image {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 18rem;
    border-radius: 15px;
}

.picture-description {
    color: #434343;
    text-align: center;
}
/* 
@media screen and (max-width: 1170px) {
    #picturees {
        flex-wrap: wrap;
        justify-content: center;
    }

    .picture {
        width: calc(50% - 12px);
    }
}

@media screen and (max-width: 600px) {
    .picture {
        width: 100%;
    }

    #menu .section-subtitle {
        text-align: center;
    }
} */
</style>