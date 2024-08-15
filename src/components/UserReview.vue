<template>
    <div id="feedbacks">
        <div class="feedback">
            <img :src="userImage" class="feedback-avatar">
            <div class="feedback-content">
                <h2 class="feedback-user-name">
                    {{userName}}
                </h2>
                <h3 >
                    {{ textFeedback }}
                </h3>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        userName: {
            type: String,
            required: true,
        },
        textFeedback: {
            type: Number,
            required: true,
        },
        userImage: {
            type: String,
            required: true,
        },
    },
    name: 'UserReview',
};
</script>

<style scoped>
#feedbacks {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 40px;
    margin-top: 30px;
    margin: inherit;
    background-color: var(--color-neutral-0);
}

.feedback {
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: var(--color-neutral-0);
    padding: 12px;
    border-radius: 12px;
    box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.1);
}

.feedback-avatar {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    object-fit: cover;
}

.feedback-content p {
    display: flex;
    justify-content: space-between;
}

.feedback-content p span {
    color: var(--color-primary-6);
}

.feedback-user-name {
    text-align: left;
    margin-block: 10px;
    margin-top: -2rem;
}



</style>