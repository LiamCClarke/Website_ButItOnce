<script setup>
const props = defineProps({
    image: String,
    title: String,
})
</script>

<template>
    <div class="tile-container">
        <div class="tile-background">
            <article class="tile-content">
                <img class="sub-category-image" src="../assets/media/SSFryingPan.jpg">
                <h2 class="sub-category-text">{{props.title}}</h2>
            </article>
        </div>
    </div>
</template>

<style scoped>
    .tile-container {
        padding: 8px;
        width: 225px;
        height: 275px;
    }

    .tile-background {
        display: block;
        border: none;
        border-radius: 12px;
        height: 100%;
        background-color: var(--secondary-color);
    }

    .tile-content {
        display: flex;
        flex-direction: column;
        padding: 18px;
        height: 100%;
    }

    .sub-category-image {
        border-radius: 10px;
    }

    .sub-category-text {
        padding-top: 8px;
    }
</style>