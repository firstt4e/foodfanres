import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, ScrollView } from "react-native";
import ToggleSwitch from "toggle-switch-react-native";


export default class DetailsScreen extends Component<{}> {
        state = {
          isOnDefaultToggleSwitch: true,
          isOnLargeToggleSwitch: false,
          isOnBlueToggleSwitch: false
        };
      
        onToggle(isOn) {
          console.log("Changed to " + isOn);
        }
      
        render() {
          return (
            <ScrollView>
            <View style={styles.container}>
              <Text style={styles.welcome}>จัดการเมนู</Text>
              <Text style={styles.instructions}>เมนูอาหารวันนี้</Text>
              <View>
              <ToggleSwitch style={styles.preference} 
                label="ผัดซีอิ๊ว"
                isOn={this.state.isOnToggleSwitch1}
                onToggle={isOnToggleSwitch1 => {
                  this.setState({ isOnToggleSwitch1 });
                  this.onToggle(isOnToggleSwitch1);
                }}
              />

                <ToggleSwitch style={styles.preference} 
                label="ข้าวผัดเครื่องแกง"
                isOn={this.state.isOnToggleSwitch2}
                onToggle={isOnToggleSwitch2 => {
                  this.setState({ isOnToggleSwitch2 });
                  this.onToggle(isOnToggleSwitch2);
                }}
              />
              
              <ToggleSwitch style={styles.preference} 
                label="ข้าวผัด"
                isOn={this.state.isOnToggleSwitch3}
                onToggle={isOnToggleSwitch3 => {
                  this.setState({ isOnToggleSwitch3 });
                  this.onToggle(isOnToggleSwitch3);
                }}
              />

                <ToggleSwitch style={styles.preference} 
                label="สุกี้น้ำ"
                isOn={this.state.isOnToggleSwitch4}
                onToggle={isOnToggleSwitch4 => {
                  this.setState({ isOnToggleSwitch4 });
                  this.onToggle(isOnToggleSwitch4);
                }}
              />

                <ToggleSwitch style={styles.preference} 
                label="กุ้งผัดกระเทียมราดข้าว"
                isOn={this.state.isOnToggleSwitch5}
                onToggle={isOnToggleSwitch5 => {
                  this.setState({ isOnToggleSwitch5 });
                  this.onToggle(isOnToggleSwitch5);
                }}
              />
              <ToggleSwitch style={styles.preference} 
                label="ข้าวผัดพริกแกงหมู"
                isOn={this.state.isOnToggleSwitch6}
                onToggle={isOnToggleSwitch6 => {
                  this.setState({ isOnToggleSwitch6 });
                  this.onToggle(isOnToggleSwitch6);
                }}
              />
              <ToggleSwitch style={styles.preference} 
                label="ราดหน้าหมู (หมี่กรอบ)"
                isOn={this.state.isOnToggleSwitch7}
                onToggle={isOnToggleSwitch7 => {
                  this.setState({ isOnToggleSwitch7 });
                  this.onToggle(isOnToggleSwitch7);
                }}
              />
              <ToggleSwitch style={styles.preference} 
                label="ผัดกะเพรา"
                isOn={this.state.isOnToggleSwitch8}
                onToggle={isOnToggleSwitch8 => {
                  this.setState({ isOnToggleSwitch8 });
                  this.onToggle(isOnToggleSwitch8);
                }}
              />
              <ToggleSwitch style={styles.preference} 
                label="ข้าวคะน้าหมูกรอบ"
                isOn={this.state.isOnToggleSwitch9}
                onToggle={isOnToggleSwitch9 => {
                  this.setState({ isOnToggleSwitch9 });
                  this.onToggle(isOnToggleSwitch9);
                }}
              />
              <ToggleSwitch style={styles.preference} 
                label="มาม่าผัดขี้เมาหมูกรอบ"
                isOn={this.state.isOnToggleSwitch10}
                onToggle={isOnToggleSwitch10 => {
                  this.setState({ isOnToggleSwitch10 });
                  this.onToggle(isOnToggleSwitch10);
                }}
              />
        <ToggleSwitch style={styles.preference} 
                label="ข้าวไข่เจียว"
                isOn={this.state.isOnToggleSwitch11}
                onToggle={isOnToggleSwitch11 => {
                  this.setState({ isOnToggleSwitch11 });
                  this.onToggle(isOnToggleSwitch11);
                }}
              />
               
               <ToggleSwitch style={styles.preference} 
                label="หมี่กรอบราดหน้าหมูหมัก"
                isOn={this.state.isOnToggleSwitch12}
                onToggle={isOnToggleSwitch12 => {
                  this.setState({ isOnToggleSwitch12 });
                  this.onToggle(isOnToggleSwitch12);
                }}
              />
              
              </View>
              
               
        


        

              
            </View>
            </ScrollView>
          );
        }
      }
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: "flex-start",
          backgroundColor: "white",
          paddingHorizontal: 20,
          paddingVertical: 20,
          fontWeight: 'bold',
          borderTopWidth: 1
          

          
        },
        welcome: {
          fontSize: 35,
          textAlign: "center",
          margin: 10
        },
        instructions: {
          fontSize: 20,
          textAlign: "center",
          color: "#333333",
          marginBottom: 5
        },
        preference: {
          flex: 1,
          padding: 60,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 12,
          paddingHorizontal: 30,
          fontSize: 30,
        }
      });