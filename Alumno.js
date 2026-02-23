import React from 'react-native-web';
import { View,Text,StyleSheet } from 'react-native';
 
export default function Alumno(props){

return(
<View style={estilos.contenedor}>
   <Text style={estilos.texto}>{props.nombre}</Text>
   <Text style={estilos.texto}>{props.matricula}</Text>
</View>
)
}

const estilos = StyleSheet.create({
    contenedor: {
        backgroundColor: '#c1121f',
        padding: 12,
        
    },
    texto: { color: '#fff0f3' }
})