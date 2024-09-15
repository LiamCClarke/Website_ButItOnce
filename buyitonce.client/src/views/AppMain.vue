<script setup>
import AppHero from '../components/AppHero.vue'
import AppFeatures from '../components/AppFeatures.vue'

const heroTop = {
    name: 'Buy It Once.',
    text: 'Make Smarter, Quicker, and More Affordable Choices.',
    tagline: 'Buy It Once helps you compare and find the most durable and cost-effective products, using community-driven insights to ensure every purchase is a smart one.',
    reversed: false
}
</script>

<template>
    <div class="content-container">
        <div class="main-side-panel">

        </div>
        <div class="content">
            <AppHero v-bind="heroTop"/>
            <AppFeatures />
        </div>
        <div class="main-side-panel">

        </div>
    </div>
</template>