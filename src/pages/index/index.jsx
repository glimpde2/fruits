import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem } from '@tarojs/components';
import {AtTabBar,AtDivider} from 'taro-ui';
import "taro-ui/dist/style/components/icon.scss";
import "taro-ui/dist/style/components/tag.scss";
import "taro-ui/dist/style/components/divider.scss";
// import { connect } from '@tarojs/redux'

import './index.less'
import "taro-ui/dist/style/components/tab-bar.scss";
import "taro-ui/dist/style/components/badge.scss";
import Header from '../../components/header'
import ProductList from '../../components/productList/'
import fruits1 from '../../stitics/img/2.png'
import fruits2 from '../../stitics/img/1.png'

class Index extends Component {
  constructor(){
    super();
    this.state = {
      current: 0
    }
  }

    config = {
    navigationBarTitleText: '鲜果屋'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
////touristappid
  render () {
    return (
      <View className={'index-wapper'}>
        <Header/>
        <View className={'swiper-wapper'}>
        <Swiper
        className='test-h'
        indicatorColor='rgba(0, 0, 0, .0)'
        indicatorActiveColor='rgba(0, 0, 0, .0)'
        interval='2000'
        circular
        indicatorDots='false'
        autoplay='true'
        >
        <SwiperItem>
          <View className='demo-text-1'>
            <Image style={{width:'100%'}}  src={fruits1}></Image>
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-2'>
          <Image style={{width:'100%'}}  src={fruits2}></Image>
          </View>
        </SwiperItem>
       
      </Swiper>
        </View>
        {/* <AtDivider content='' fontColor='#6190E8'  lineColor='#CCC' /> */}
        <Text style={{marginLeft:'20PX',fontSize:'14PX',marginBottom:'10PX',fontWeight:'bold'}}>热销水果</Text>
      <ProductList/>
     
      <AtTabBar 
          fixed
          iconSize='18'
          fontSize='18'
          color='#eb2f96'
          selectedColor='#f00'

          tabList={[
            { title: '' },
            { title: '鲜果屋', iconPrefixClass:'iconfruit iconfont',iconType:'iconfruit'},
            { title: '' },
            { title: '我', iconPrefixClass:'iconusername iconfont',iconType:'iconusername'},
            { title: '' }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    )
  }
  handleClick(value){
    this.setState({
      current: value
    })
  }


}

export default Index
