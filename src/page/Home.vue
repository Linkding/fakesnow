<template>
    <div>
        <Nav/>
        <div class="container">
            <el-col :span="3">
                <SideNav/>
            </el-col>
        </div>
    </div>
</template>
<script>
    import Nav from  '../components/Nav';
    import SideNav from  '../components/SideNav';
    export default {
        components:{Nav,SideNav},
    }
</script>
<style scoped>
</style>