<script type="es6">
    import LocationService from '../services/location';

    export default {
        name: 'Location',
        ready: function() {
            LocationService.getLocation();
        }
    }
</script>

<template>
<p>location</p>
</template>

<style lang='sass'>

</style>
