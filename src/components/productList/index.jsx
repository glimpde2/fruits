import Taro, { Component } from '@tarojs/taro';
import { View, Text, ScrollView } from '@tarojs/components';
import {AtTag,AtIcon} from 'taro-ui';

import { connect } from '@tarojs/redux';
import './index.less'
// import 'taro-ui/dist/style/index.scss'

import fruits1 from '../../stitics/img/2.png'
import fruits2 from '../../stitics/img/1.png'
class ProductList extends Component {

    render() {
        return ( 
            <ScrollView scrollY style={{height:'45%'}}>
                <View className={'product-wapper'}>
                    <View className={'product-card-wapper'}>
                        <View className={'product-card'}>
                            <Image className={'imgs'} src={fruits1}></Image>
                            <View className={'content'}>
                                <View style={{display:'flex',justifyContent:'space-between'}}>
                                <Text className={'name'}>果盘套装</Text>
                                <Text className={'price'}>￥100</Text>
                                </View>
                                <View style={{display:'flex',justifyContent:'space-between'}}>
                                <AtTag  className={'tag'}  type='primary'  size='small'>可用券</AtTag>
                                <AtIcon value='add-circle' size='20' color='#eb2f96'></AtIcon>
                                </View>
                            </View>
                        </View>
                        <View className={'product-card'}>
                            <Image className={'imgs'} src={fruits2}></Image>
                            <View className={'content'}>
                                <View style={{display:'flex',justifyContent:'space-between'}}>
                                <Text className={'name'}>果盘套装</Text>
                                <Text className={'price'}>￥100</Text>
                                </View>
                                <View style={{display:'flex',justifyContent:'space-between'}}>
                                <AtTag  className={'tag'}  type='primary'  size='small'>可用券</AtTag>
                                <AtIcon value='add-circle' size='20' color='#eb2f96'></AtIcon>
                                </View>
                            </View>
                        </View>
                    </View>


                    <View className={'product-card-wapper'}>
                        <View className={'product-card'}>
                            <Image className={'imgs'} src={fruits2}></Image>
                            <View className={'content'}>
                                <View style={{display:'flex',justifyContent:'space-between'}}>
                                <Text className={'name'}>果盘套装</Text>
                                <Text className={'price'}>￥100</Text>
                                </View>
                                <View style={{display:'flex',justifyContent:'space-between'}}>
                                <AtTag  className={'tag'}  type='primary'  size='small'>可用券</AtTag>
                                <AtIcon value='add-circle' size='20' color='#eb2f96'></AtIcon>
                                </View>
                            </View>
                        </View>
                        <View className={'product-card'}>
                            <Image className={'imgs'} src={fruits1}></Image>
                            <View className={'content'}>
                                <View style={{display:'flex',justifyContent:'space-between'}}>
                                <Text className={'name'}>果盘套装</Text>
                                <Text className={'price'}>￥100</Text>
                                </View>
                                <View style={{display:'flex',justifyContent:'space-between'}}>
                                <AtTag  className={'tag'}  type='primary'  size='small'>可用券</AtTag>
                                <AtIcon value='add-circle' size='20' color='#eb2f96'></AtIcon>
                                </View>
                            </View>
                        </View>
                    </View>


                    <View className={'product-card-wapper'}>
                        <View className={'product-card'}>
                            <Image className={'imgs'} src={fruits1}></Image>
                            <View className={'content'}>
                                <View style={{display:'flex',justifyContent:'space-between'}}>
                                <Text className={'name'}>果盘套装</Text>
                                <Text className={'price'}>￥100</Text>
                                </View>
                                <View style={{display:'flex',justifyContent:'space-between'}}>
                                <AtTag  className={'tag'}  type='primary'  size='small'>可用券</AtTag>
                                <AtIcon value='add-circle' size='20' color='#eb2f96'></AtIcon>
                                </View>
                            </View>
                        </View>
                        <View className={'product-card'}>
                            <Image className={'imgs'} src={fruits1}></Image>
                            <View className={'content'}>
                                <View style={{display:'flex',justifyContent:'space-between'}}>
                                <Text className={'name'}>果盘套装</Text>
                                <Text className={'price'}>￥100</Text>
                                </View>
                                <View style={{display:'flex',justifyContent:'space-between'}}>
                                <AtTag  className={'tag'}  type='primary'  size='small'>可用券</AtTag>
                                <AtIcon value='add-circle' size='20' color='#eb2f96'></AtIcon>
                                </View>
                            </View>
                        </View>
                    </View>


                    <View className={'product-card-wapper'}>
                        <View className={'product-card'}>
                            <Image className={'imgs'} src={fruits1}></Image>
                            <View className={'content'}>
                                <View style={{display:'flex',justifyContent:'space-between'}}>
                                <Text className={'name'}>果盘套装</Text>
                                <Text className={'price'}>￥100</Text>
                                </View>
                                <View style={{display:'flex',justifyContent:'space-between'}}>
                                <AtTag  className={'tag'}  type='primary'  size='small'>可用券</AtTag>
                                <AtIcon value='add-circle' size='20' color='#eb2f96'></AtIcon>
                                </View>
                            </View>
                        </View>
                        <View className={'product-card'}>
                            <Image className={'imgs'} src={fruits1}></Image>
                            <View className={'content'}>
                                <View style={{display:'flex',justifyContent:'space-between'}}>
                                <Text className={'name'}>果盘套装</Text>
                                <Text className={'price'}>￥100</Text>
                                </View>
                                <View style={{display:'flex',justifyContent:'space-between'}}>
                                <AtTag  className={'tag'}  type='primary'  size='small'>可用券</AtTag>
                                <AtIcon value='add-circle' size='20' color='#eb2f96'></AtIcon>
                                </View>
                            </View>
                        </View>
                    </View>


                    <View className={'product-card-wapper'}>
                        <View className={'product-card'}>
                            <Image className={'imgs'} src={fruits2}></Image>
                            <View className={'content'}>
                                <View style={{display:'flex',justifyContent:'space-between'}}>
                                <Text className={'name'}>果盘套装</Text>
                                <Text className={'price'}>￥100</Text>
                                </View>
                                <View style={{display:'flex',justifyContent:'space-between'}}>
                                <AtTag  className={'tag'}  type='primary'  size='small'>可用券</AtTag>
                                <AtIcon value='add-circle' size='20' color='#eb2f96'></AtIcon>
                                </View>
                            </View>
                        </View>
                        <View className={'product-card'}>
                            <Image className={'imgs'} src={fruits1}></Image>
                            <View className={'content'}>
                                <View style={{display:'flex',justifyContent:'space-between'}}>
                                <Text className={'name'}>果盘套装</Text>
                                <Text className={'price'}>￥100</Text>
                                </View>
                                <View style={{display:'flex',justifyContent:'space-between'}}>
                                <AtTag  className={'tag'}  type='primary'  size='small'>可用券</AtTag>
                                <AtIcon value='add-circle' size='20' color='#eb2f96'></AtIcon>
                                </View>
                            </View>
                        </View>
                    </View>


                    <View className={'product-card-wapper'}>
                        <View className={'product-card'}>
                            <Image className={'imgs'} src={fruits2}></Image>
                            <View className={'content'}>
                                <View style={{display:'flex',justifyContent:'space-between'}}>
                                <Text className={'name'}>果盘套装</Text>
                                <Text className={'price'}>￥100</Text>
                                </View>
                                <View style={{display:'flex',justifyContent:'space-between'}}>
                                <AtTag  className={'tag'}  type='primary'  size='small'>可用券</AtTag>
                                <AtIcon value='add-circle' size='20' color='#eb2f96'></AtIcon>
                                </View>
                            </View>
                        </View>
                        <View className={'product-card'}>
                            <Image className={'imgs'} src={fruits2}></Image>
                            <View className={'content'}>
                                <View style={{display:'flex',justifyContent:'space-between'}}>
                                <Text className={'name'}>果盘套装</Text>
                                <Text className={'price'}>￥100</Text>
                                </View>
                                <View style={{display:'flex',justifyContent:'space-between'}}>
                                <AtTag  className={'tag'}  type='primary'  size='small'>可用券</AtTag>
                                <AtIcon value='add-circle' size='20' color='#eb2f96'></AtIcon>
                                </View>
                            </View>
                        </View>
                    </View>


                    <View className={'product-card-wapper'}>
                        <View className={'product-card'}>
                            <Image className={'imgs'} src={fruits1}></Image>
                            <View className={'content'}>
                                <View style={{display:'flex',justifyContent:'space-between'}}>
                                <Text className={'name'}>果盘套装</Text>
                                <Text className={'price'}>￥100</Text>
                                </View>
                                <View style={{display:'flex',justifyContent:'space-between'}}>
                                <AtTag  className={'tag'}  type='primary'  size='small'>可用券</AtTag>
                                <AtIcon value='add-circle' size='20' color='#eb2f96'></AtIcon>
                                </View>
                            </View>
                        </View>
                        <View className={'product-card'}>
                            <Image className={'imgs'} src={fruits2}></Image>
                            <View className={'content'}>
                                <View style={{display:'flex',justifyContent:'space-between'}}>
                                <Text className={'name'}>果盘套装</Text>
                                <Text className={'price'}>￥100</Text>
                                </View>
                                <View style={{display:'flex',justifyContent:'space-between'}}>
                                <AtTag  className={'tag'}  type='primary'  size='small'>可用券</AtTag>
                                <AtIcon value='add-circle' size='20' color='#eb2f96'></AtIcon>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default ProductList;