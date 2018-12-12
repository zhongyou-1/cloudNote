import React, { Component } from 'react';
import {
 Text,
 View,
 StyleSheet,
 Image,
 } from 'react-native';
import {scaleSizeH , scaleSizeW, setSpText} from '../class/initSize.js';
export default class HelloWorldApp extends Component {
    constructor (props){
        super(props)
        this.state = {
            All: true,
            collection: false,
        }
    };

    tabClick = (state)=>{
        if(state == 1){
            if(this.state.All){
                return
            }else{
                this.setState({
                    All: true,
                    collection: false,
                })
                this.contentChange("All")
            }

        }else if(state == 2){
            if(this.state.collection){
                return
            }else{
                this.setState({
                    All: false,
                    collection: true,
                })
                this.contentChange("collection")
            }
        }
    };


    // 内容视图切换
    contentChange = ()=>{

    }


  render() {
    return (
        <View style={styles.contents}>
            <View style={styles.headers}>
              <Text style={styles.red}>三星笔记</Text>
              <Image style={styles.icon} source={require('../image/seach.png')}  />
            </View>
            <View style={styles.tab}>
                <Text style={ this.state.All ? styles.check : styles.noCheck } onPress={()=>this.tabClick(1)}>全部</Text>
                <Text style={this.state.collection ? styles.check : styles.noCheck } onPress={()=>this.tabClick(2)}>收藏</Text>
            </View>
            {
                this.state.All ? (
                   <Alls/>
                ) : (
                    <Collections/>
                )
            }
        </View>
    );
  }
}

class Alls extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (

                <View style={styles.cont}>
                    <View style={styles.content}></View>
                    <View style={styles.content}></View>
                    <View style={styles.content}></View>
                    <View style={styles.content}></View>
                    <View style={styles.content}></View>
                    <View style={styles.content}></View>
                    <View style={styles.content}></View>
                    <View style={styles.content}></View>
                    <View style={styles.content}></View>
                </View>
        );
    }
}

class Collections extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View>
                <Text>123</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    cont: {
      height: calc(~'100% - scaleSizeH(140)')
    },
    content:{
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#d4d4d4",
        borderRadius: 5,
        width: "95%",
        height: scaleSizeH(358),
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: scaleSizeH(20),
        backgroundColor: "#fff",
        shadowColor: "#ddd",
        shadowOffset: {
          width: 0,
            height: 0,
        },
        elevation: 4,  //  这句代码让 Android  有灰色的阴影 但是不能改变颜色
    },
    tab: {
      height: scaleSizeH(100),
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: "#fff"
    },

    noCheck:{
        textAlign: "center",
        width: "50%",
        lineHeight: scaleSizeH(100),
        fontSize: setSpText(35),
        color: "#979797",
        borderBottomColor: "#e8e8e8",
        borderBottomWidth: 1,
        borderStyle: 'solid',
    },
    check:{
        textAlign: "center",
        width: "50%",
        lineHeight: scaleSizeH(100),
        fontSize: setSpText(35),
        color: "#f46a4e",
        borderBottomColor: "#f46a4e",
        borderBottomWidth: 1,
        borderStyle: 'solid',
    },
    contents: {
        height: "100%",
        backgroundColor : "#efefef"
    },
    headers: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: scaleSizeW(20),
        backgroundColor: "#fff"
    },
    icon: {
        width: scaleSizeW(40),
        height: scaleSizeH(40)
    },
    red: {
        color: '#3a3a3a',
        fontSize: setSpText(36),
        fontWeight: "bold",
        paddingLeft: scaleSizeW(30),
    },


})