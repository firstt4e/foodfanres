import React from 'react';
    import {
      FlatList,
      SafeAreaView,
      ScrollView,
      StatusBar,
      StyleSheet,
      View
    } from 'react-native';

    import FlatListMenu from 'react-native-flatlist-text-menu';

        const ReportScreen= () => {
          const data=[
        { 
            title:'ผัดซีอิ๊ว',
            languages:[
            {title:'เปิดรับออเดอร์',url:''},
            {title:'ปิดรับออเดอร์',url:''}
            ]
          },
          {
            title:'ข้าวผัดเครื่องแกง',
            languages:[
              {title:'เปิดรับออเดอร์',url:''},
              {title:'ปิดรับออเดอร์',url:''}
          ]
        },
      { 
          title:'ข้าวผัด',
          languages:[
          {title:'เปิดรับออเดอร์',url:''},
          {title:'ปิดรับออเดอร์',url:''}
        ]
        },
      { 
          title:'สุกี้น้ำ',
          languages:[
          {title:'เปิดรับออเดอร์',url:''},
          {title:'ปิดรับออเดอร์',url:''}
        ]
        },
      { 
        title:'กุ้งผัดกระเทียมราดข้าว',
        languages:[
        {title:'เปิดรับออเดอร์',url:''},
        {title:'ปิดรับออเดอร์',url:''}
        ]
        },
        {
          title:'ข้าวผัดพริกแกงหมู',
          languages:[
            {title:'เปิดรับออเดอร์',url:''},
              {title:'ปิดรับออเดอร์',url:''}
        ]
        },
        { 
          title:'ราดหน้าหมู (หมี่กรอบ)',
          languages:[
          {title:'เปิดรับออเดอร์',url:''},
          {title:'ปิดรับออเดอร์',url:''}
        ]
        },
        { 
          title:'ผัดกะเพรา',
          languages:[
          {title:'เปิดรับออเดอร์',url:''},
          {title:'ปิดรับออเดอร์',url:''}
        ]
        },
        { 
          title:'ข้าวคะน้าหมูกรอบ',
          languages:[
          {title:'เปิดรับออเดอร์',url:''},
          {title:'ปิดรับออเดอร์',url:''}
        ]
        },
        { 
          title:'มาม่าผัดขี้เมาหมูกรอบ',
          languages:[
          {title:'เปิดรับออเดอร์',url:''},
          {title:'ปิดรับออเดอร์',url:''}
        ]
        },
        { 
          title:'ข้าวไข่เจียว',
          languages:[
          {title:'เปิดรับออเดอร์',url:''},
          {title:'ปิดรับออเดอร์',url:''}
        ]
        },
        { 
          title:'หมี่กรอบราดหน้าหมูหมัก',
          languages:[
          {title:'เปิดรับออเดอร์',url:''},
          {title:'ปิดรับออเดอร์',url:''}
        ]
        }
        ]
          return (
            <>
              <StatusBar barStyle="dark-content" />
              <SafeAreaView>
                <FlatList style={{paddingHorizontal:10}} data={data} key={(item,i)=>i} renderItem={({item,index})=>{
                  return( 
                <View style={styles.card} >
                <FlatListMenu
                    key={index} 
                    title={item.title} 
                    items={item.languages}
                    defaultItem={item.title}
                    selectedColor="red"
                    unselectedColor="black"
                    property='title'
                    fontSize={16}
                    />
                  </View>) 
                }}
              />
              
              </SafeAreaView>
            </>
          );
        };

        const styles=StyleSheet.create({
            container:{
              display:'flex',
              alignItems:'center',
              justifyContent:'center'
            },
            card:{
              backgroundColor:"#FFFFFF",
              marginHorizontal:5,
              padding:15,
              shadowColor:'rgba(0,0,0,0.2)',
              shadowOffset: { width: 2, height: 2 },
              shadowOpacity: 1,
              shadowRadius: 5,  
              minHeight:60,
              elevation:2,
              borderRadius:5,
              display:'flex',
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'space-between',
              marginVertical:10,
              overflow:"hidden",
              position:'relative'

          },
        })

        export default ReportScreen;