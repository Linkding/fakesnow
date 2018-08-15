<template>
    <div class="side-nav">
        <div class="user-area">
            <div class="user-icon">
                <img src="https://xavatar.imedao.com/community/20153/1428029125170-1428029138036.jpg!180x180.png" alt="">
            </div>
            <div class="username">Linkding</div>
            <div class="user-data">
                <div class="col-lg-6">
                    <div class="num">336</div>
                    <div>关注</div>
                </div>
                <div class="col-lg-6">
                    <div class="num">18</div>
                    <div>粉丝</div>
                </div>
            </div>
        </div>
        <div class="user-panel">
            <div class="p1">
                <div><span><i class="fa fa-home" aria-hidden="true"></i></span>首页</div>
                <div><span><i class="fa fa-comment" aria-hidden="true"></i></span>讨论</div>
                <div><span><i class="fa fa-list" aria-hidden="true"></i></span>持仓亏损</div>
                <div><span><i class="fa fa-star" aria-hidden="true"></i></span>收藏</div>
            </div>
            <div class="p1">
                <div><span><i class="fa fa-home" aria-hidden="true"></i></span>首页</div>
                <div><span><i class="fa fa-comment" aria-hidden="true"></i></span>讨论</div>
                <div><span><i class="fa fa-list" aria-hidden="true"></i></span>持仓亏损</div>
                <div><span><i class="fa fa-star" aria-hidden="true"></i></span>收藏</div>
            </div>
            <div class="p1">
                <div><span><i class="fa fa-home" aria-hidden="true"></i></span>首页</div>
                <div><span><i class="fa fa-comment" aria-hidden="true"></i></span>讨论</div>
                <div><span><i class="fa fa-list" aria-hidden="true"></i></span>持仓亏损</div>
                <div><span><i class="fa fa-star" aria-hidden="true"></i></span>收藏</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
    }
</script>
<style scoped>
.user-area,
.user-panel
{
    border: 1px solid rgba(0, 0, 0, .09)
}
.user-panel {
    border-top: 0;
}
.user-icon img{
    border-radius: 50%;
    height: 48px;
    width: 48px;
}
.user-icon{
    margin-top: 19px;
}
.username{
    padding: 7px 0;
    font-size: 1.2rem;
}
.user-data{
    text-align: center;
    margin: 10px 0;
}
.user-data .num{
    font-weight: 600;
}
.user-data>*:first-child{
    border-right: 1px solid rgba(0, 0, 0, .08)
}
.user-icon,
.username {
    padding-left: 45px;
}
.user-panel{
    padding: 5px 12px;
}
.user-panel .p1 {
    border-bottom: 1px solid rgba(0, 0, 0, .08);
    font-size: 1.1rem;
    padding: 10px;
    line-height: 2.3rem;
}
.user-panel .p1 span{
    padding-right: 5px;
}
</style>