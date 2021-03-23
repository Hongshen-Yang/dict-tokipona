import React, { useState } from 'react';
import { StyleSheet, Text, Button, View, SafeAreaView, TextInput } from 'react-native';
import 'react-native-gesture-handler';
import { Color } from '../../styles/color.js'
import LangBtn from './LangBtn.js'
import WordList from './WordList.js'

const langs = {
    english: 'E',
    tokipona: 'T'
}

const LangContext = React.createContext(langs.english);

const Search = () => {

    const [keyword, setKeyword] = useState('');

    return (
        <LangContext.Provider value={langs.english}>
            <SafeAreaView style={styles.container}>
                <View style={styles.searchBoxContainer}>
                    {/* < LangBtn /> */}
                    < TextInput
                        style={styles.searchBox}
                        autoCorrect={false}
                        value={keyword}
                        clearButtonMode='always'
                        onChangeText={setKeyword}
                    />
                </View>
                <WordList keyword={keyword}/>
            </SafeAreaView>
        </LangContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.yellow,
    },
    searchBoxContainer: {
        flex: 1,
        flexDirection: 'row',
        //alignItems: 'stretch',
    },
    switchLanguageButton: {
        flex: 1,
        backgroundColor: 'green',
    },
    searchBox: {
        flex: 4,
        backgroundColor: Color.shallowYellow,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        borderWidth: 2,
    },
});

export default Search