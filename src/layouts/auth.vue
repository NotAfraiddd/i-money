<template>
    <NavigatationBrand />
    <slot />
</template>

<script>
import NavigatationBrand from '@/components/NavigatationBrand.vue';

export default {
    name: 'AuthLayout',
    components: { NavigatationBrand },
};
</script>
