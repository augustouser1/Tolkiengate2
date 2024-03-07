import {ImageBackground,Text,Image,View} from 'react-native'
import {styles} from './styles'
import {Botao} from '../../../components/botao'
import { IPage } from '../../../App'
 
export function Slide1(){
     const Imagem1 = require('../../assets/Moria.png')
     const titulo ='Tolkien Gate'
     const foto = require('../../assets/Tolkien Gate.png')
     return (
        
         <ImageBackground style={styles.container} source={Imagem1}>
            <View style={styles.back}>
              <Image style={styles.image} source={foto}/>
              </View>
              <View style={styles.back2}>
                <Botao/>
                </View>
                   
         </ImageBackground>
         

     )
}