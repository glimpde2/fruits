import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import {AtIcon} from 'taro-ui';
import './header.less';

import "taro-ui/dist/style/components/flex.scss";
class Header extends Component {
    render() {
        return (
            <View className='at-row header-wrapper at-row__justify--between'>
                <View className='at-col at-col-3 center vip-code'>
                    <AtIcon prefixClass='iconfont iconhuiyuanma' value='iconhuiyuanma' size='30' color='#FFF'></AtIcon>
                    <Text>会员码</Text>
                </View>
                <View className='at-col at-col-3 center discount-coupon'>
                <AtIcon prefixClass='iconfont iconyouhuiquan' value='iconyouhuiquan' size='30' color='#FFF'></AtIcon>
                    <Text>优惠券</Text>
                </View>
                <View className='at-col at-col-3 center money'>
                <AtIcon prefixClass='iconfont iconqianbao' value='iconqianbao' size='30' color='#FFF'></AtIcon>
                    <Text>钱包</Text>
                </View>
            </View>
        )
    }
}
export default Header;