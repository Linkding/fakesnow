<template>
    <el-row class="nav-area">
        <div class="container">
            <el-col :span="3" class="logo">雪崩</el-col>
            <el-col :span="8">
                <el-menu 
                    :default-active="activeIndex" 
                    class="el-menu-demo" 
                    mode="horizontal" 
                    @select="handleSelect"
                    background-color="#1369bf"
                    text-color="#fff"
                    active-text-color="#fff"
                >
                    <el-menu-item index="1">首页</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">精华</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="3">问答</el-menu-item>
                    <el-menu-item index="4">行情</el-menu-item>
                    <el-submenu index="5">
                        <template slot="title">
                            交易
                        </template>
                        <el-menu-item index="5-1">A股交易</el-menu-item>
                        <el-menu-item index="5-2">港美股交易</el-menu-item>
                        <el-menu-item index="5-3">蛋卷基金</el-menu-item>
                        <el-menu-item index="5-4">私募中心</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-col :span="5" class="search-area">
                <el-input palaceholder="搜索">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
            <el-col :span="2" class="right">
                <i class="fa fa-bell" aria-hidden="true"></i>
            </el-col>
            <el-col :span="6" class="user-area">
                <i class="fa fa-user" aria-hidden="true"></i> 
                <span>Linkding</span>
            </el-col>
        </div>
    </el-row>
</template>
<script>
    export default {
        data(){
            return{
                activeIndex: '1',
            }
        },
        methods: {
            handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
    }
</script>
<style scoped>
.logo,
.fa-bell,
.fa-user,
.user-area span{
    color: #fff;
}
.logo{
    font-size: 2rem;
    padding: 8px;
    padding-left: 40px;
}
.fa-bell{
    font-size: 1.5rem;
    margin-top: 22px;
}
.fa-user{
    font-size: 1.3rem;
}
.nav-area{
    background: #1369bf;
    margin-bottom: 30px;
}
.search-area{
    padding: 13px 0;
}
.user-area{
    padding: 23px 0;
    padding-left: 129px;
}
.user-area span{
    padding-left: 15px;
    font-size: 1.3rem;
    
}
.el-menu--horizontal{
    border-bottom: none;
}
.el-menu--horizontal>.el-menu-item.is-active{
    border-bottom: 2px solid #fff;
    color: #fff;
}
.el-menu-item.is-active
{
    color: #fff;
}
.el-menu-item{
    background: #fff;
}

</style>