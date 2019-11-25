<template>
    <div id="main">
        <Header title="猫眼影院"/>
        <div id="content">
            <div class="cinema_menu">
				<router-link tag="li"  to="/cinema/citySwitch" class="city_switch">
					全城 <i class="iconfont icon-lower-triangle"></i>
				</router-link>
				<router-link tag="li" to="/cinema/brandSwitch" class="brand_swtich">
					品牌 <i class="iconfont icon-lower-triangle"></i>
				</router-link>
				<router-link tag="li" to="/cinema/featureSwitch" class="feature_switch">
					特色 <i class="iconfont icon-lower-triangle"></i>
				</router-link>
                <keep-alive>
                    <router-view />
                </keep-alive>
			</div>
            <CinemaList />
        </div>
        <TabBar />
    </div>
</template>

<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import CinemaList from '@/components/CinemaList';

export default {
    name: 'mine',
    components: {
        Header,
        TabBar,
        CinemaList
    }
}
</script>

<style>
#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
#content .cinema_menu.router-link-active{  color: #ef4238; border-bottom: 2px #ef4238 solid; }

</style>
