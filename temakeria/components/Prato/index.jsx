import {Image} from 'react-native'
import fotoPrato from '../../assets/temaki-salmao.png'
import {styles} from './style'

export function Prato(){
    return(
        <Image
                style={styles.prato}
                source={fotoPrato}
                resizeMode='contain'
        />
    )
}