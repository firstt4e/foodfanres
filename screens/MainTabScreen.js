import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import ReportScreen from './ReportScreen';
import {MenuScreen} from './MenuScreen';
import {MainOrderListDetailScreen} from './MainOrderListDetailScreen';
import CardListScreen from './CardListScreen';


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ReportStack = createStackNavigator();
const MenuStack = createStackNavigator();


const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="New Order"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'New Order',
          tabBarColor: '#FF6347',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
      name="Waiting Order"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Orders',
        tabBarColor: '#FF6347',
        tabBarIcon: ({color}) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
      
      
      {/* <Tab.Screen
        name="Waiting Order"
        component={MenuScreen}
        options={{
          tabBarLabel: 'Waiting Order',
          tabBarColor: '#FF6347',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-timer" color={color} size={26} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Report"
        component={ReportStackScreen}
        options={{
          tabBarLabel: 'Report',
          tabBarColor: '#FF6347',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-book" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Manage Menu"
        component={MenuStackScreen}
        options={{
          tabBarLabel: 'Manage Menu',
          tabBarColor: '#FF6347',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-menu" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#FF6347',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen 
        name="CardListScreen"
        component={CardListScreen}
        options={({route}) => ({
          // title: route.params.title,
          headerBackTitleVisible: false
        })}
      />
</HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
<DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#FF6347',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DetailsStack.Screen
      name="Order"
      component={MenuScreen}/>
      <DetailsStack.Screen
        name="OrderDetail"
        component={MainOrderListDetailScreen}
      />
  </DetailsStack.Navigator>
);


// const DetailsStackScreen = ({navigation}) => (
// <DetailsStack.Navigator screenOptions={{
//         headerStyle: {
//         backgroundColor: '#FF6347',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//         fontWeight: 'bold'
//         }
//     }}>
//         <DetailsStack.Screen name="Details" component={MenuScreen} options={{
//           title:'Details',
//         headerLeft: () => (
//             <Icon.Button name="ios-menu" size={25} backgroundColor="#FF6347" onPress={() => navigation.openDrawer()}></Icon.Button>
//         )
//         }} />
// </DetailsStack.Navigator>
// );

const ReportStackScreen = ({navigation}) => (
<ReportStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#FF6347',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <ReportStack.Screen name="Report" component={ReportScreen} options={{
          title:'Report',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#FF6347" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</ReportStack.Navigator>
);

const MenuStackScreen = ({navigation}) => (
  <MenuStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#FF6347',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <MenuStack.Screen name="Menu" component={DetailsScreen} options={{
            title:'Manage Menu',
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#FF6347" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </MenuStack.Navigator>
  );
  