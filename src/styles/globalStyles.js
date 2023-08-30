import { StyleSheet } from "react-native"
import { COLORS } from "../constants"

export default StyleSheet.create({
    container: {
        flex: 1,
         alignItems: 'center',
        backgroundColor: COLORS.bgColor,
    },
    tabScrollView:{
        maxHeight:690,
        width: 335
    }
})