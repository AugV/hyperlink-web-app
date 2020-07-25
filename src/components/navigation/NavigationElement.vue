<template>
    <router-link :to="linkPath" tag='div' >
        <div>
            {{linkName}}
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'NavigationElement',
    props: {
        linkName: String,
        linkPath: String,
    }
}
</script>

<style scoped>
    div {
        color: white;
        font-family: 'Roboto';
        font-size: 18pt;
    }
    div :hover {
        cursor: pointer;
    }
</style>