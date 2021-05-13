import React from 'react';
import { version } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, FlatList, Button } from 'react-native';
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
        image: 'https://picsum.photos/seed/fuck/500/300',
    },
    {
        id: '0003',
        title: 'Table 3',
        date: '3 March 2022',
        image: 'https://picsum.photos/seed/yourself/500/300',
    },
]


const cardRender = () => {
    return (
        <Card>
            <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"/>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
            </Card.Actions>
        </Card>
    )
}


const TableScanner = () => {

    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;


    return (
    <View >

        <Appbar.Header style={{
            backgroundColor: colors.pDark
        }}>
            <Appbar.Content title="Scanned Tables" />
        </Appbar.Header>


        <View>
            <FlatList>
                <Title>hellow</Title>
                

            </FlatList>

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

})


export default TableScanner;