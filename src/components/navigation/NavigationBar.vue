<template>
    <div>
        <div class="left-element">
            <NavigationElement
                linkName="About"
                linkPath="/about"
            />
        </div>
        
        <div class="right-element">
            <NavigationElement
                linkName="Contacts"
                linkPath="/contacts"
            />
        </div>
        <div style="clear:both"></div>
    </div>
</template>

<script>
    import NavigationElement from '@/components/navigation/NavigationElement';

    export default {
        name: 'NavigationBar',
        components: {
            NavigationElement,
        }
    }
</script>

<style scoped>
    .left-element {
        float:left;
    }
    .right-element {
        float:right;
    }
</style>