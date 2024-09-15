<script setup>
    import SubCategoryTile from '../components/AppSubCategoryTile.vue'

    const tileOneData = {
        image: '"../assets/media/SSFryingPan.jpg"',
        title: 'Stainless Steel Frying Pan',
    }
</script>

<template>
    <div class="content-container">
        <div class="content">
            <div class="sub-category-sections-container">
                <SubCategoryTile v-bind="tileOneData"/>
                <SubCategoryTile v-bind="tileOneData"/>
                <SubCategoryTile v-bind="tileOneData"/>
            </div>
            <div class="most-upvoted-container">
                <h1 class="sub-title">Most Upvoted</h1>
            </div>
            <div class="most-upvoted-container">
                <h1 class="sub-title">Most Favourites</h1>
            </div>
        </div>
    </div>
</template>

<style scoped>
.sub-category-sections-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
}

.most-upvoted-container {
    padding: 18px;
    margin-top: 20px;
    width: 100%;
    background-color: var(--secondary-color);
    border: none;
    border-radius: 16px;
    min-height: 400px;
}

.sub-title {
    font-size: 30px;
    font-weight: 600;
    text-align: center;
}
</style>