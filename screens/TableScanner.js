import React from 'react';
import { version } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, FlatList, Button, SafeAreaView } from 'react-native';
import { Provider as PaperProvider, Appbar, Card, Portal, FAB, Title } from 'react-native-paper';

const colors = {
    primary: '#546e7a',
    pDark: '#29434e',
    buttonColor: "#424242"
}

const demoData = [
    {
        id: '0001',
        title: 'Table 1',
        date: '1 January 2020',
        image: 'https://picsum.photos/seed/go/500/300',
    },
    {
        id: '0002',
        title: 'Table 2',
        date: '2 February 2021',
        image: 'https://picsum.photos/seed/frick/500/300',
    },
    {
        id: '0003',
        title: 'Table 3',
        date: '3 March 2022',
        image: 'https://picsum.photos/seed/yourself/500/300',
    },
    {
        id: '0004',
        title: 'Table 4',
        date: '4 April 2023',
        image: 'https://picsum.photos/seed/dumbass/500/300',
    },
]





const TableScanner = () => {

    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;


    const cardRender = ({item}) => (
            <Card>
                <Card.Title
                title={item.title}
                subtitle={item.date}/>
                <Card.Cover source={{ uri: item.image }} />
                <Card.Actions>
                    <TouchableOpacity style={style.imgButton}>
                        <Text style={style.buttonText}>View</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.imgButton}>
                        <Text style={style.buttonText}>Delete</Text>
                    </TouchableOpacity>
                    
                </Card.Actions>
            </Card>
        )



    return (
    <View >

        <Appbar.Header style={{
            backgroundColor: colors.pDark
        }}>
            <Appbar.Content title="Scanned Tables" />
        </Appbar.Header>


        <View>
            <SafeAreaView>

            <FlatList
                data = {demoData}
                renderItem = {cardRender}
                keyExtractor = {demoData => demoData.id}
            />

            </SafeAreaView>
            

        </View>

        <View style={style.floatingView}>

            <PaperProvider >
                <Portal>
                    <FAB.Group
                    open={open}
                    fabStyle={{
                        backgroundColor: colors.buttonColor
                    }}
                    icon={open ? 'table' : 'plus'}
                    actions={[
                        {
                        icon: 'image-album',
                        label: 'Album',
                        onPress: () => console.log('Choose album'),
                        },
                        {
                        icon: 'camera',
                        label: 'Take Photo',
                        onPress: () => console.log('Take Photo'),
                        small: false,
                        },
                    ]}
                    onStateChange={onStateChange}
                    onPress={() => {
                        if (open) {
                        // do something if the speed dial is open
                        }
                    }}
                    />
                </Portal>
            </PaperProvider>

        </View>
        

        
        

    </View>
    );
        
}




const style = StyleSheet.create({
    mainView: {
        flexDirection: 'column',
        paddingVertical: 16,
    },
    
    title: {
        // alignSelf: 'flex-start',
        fontSize: 16
    },
    floatingView: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: Dimensions.get('window').height,
        width: '100%',
        // borderWidth: 2,
        // borderColor: "red"
    },

    imgButton: {
        flex: 1,
        alignItems: "center",
        margin: 4,
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderWidth: 4,
        borderColor: colors.buttonColor,
        borderRadius: 6,
        backgroundColor: colors.buttonColor,
    },
    buttonText: {
        color: 'white',
    }

})


export default TableScanner;