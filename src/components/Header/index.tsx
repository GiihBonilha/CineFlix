import { View, Text, TouchableOpacity, Modal } from "react-native";
import { styles } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";
import { router, useRouter } from "expo-router";


export default function Header() {

    const [ menuVisible, setMenuVisible ] = useState<boolean>(false);

    const handleMenuVisible = () => {
        setMenuVisible(!menuVisible);
    }
    
    return (
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            <Text style={styles.mainTitle}>Cine</Text>
            <Text style={styles.fyTitle}>Flix</Text>
          </Text>
    
          <TouchableOpacity onPress={handleMenuVisible} style={styles.menuButton}>
            <Ionicons name="menu" size={24} color="#ffffff" />
          </TouchableOpacity>
    
        {/* Aqui começa o nosso Modal, que é como uma janelinha mágica que aparece na tela */}
          <Modal
            transparent={true} // Deixa o fundo transparente pra gente ver a tela por trás, tipo um vidro escuro
            visible={menuVisible} // Só aparece quando o menuVisible é true, controlado pelo botão de menu
            animationType="fade"  // Faz o modal surgir e sumir com um efeito suave de fade, como se estivesse surgindo do nada.
            onRequestClose={handleMenuVisible} // Aqui é para quando o usuário apertar o botão "voltar" no Android feche o modal.
          >
            <TouchableOpacity
              style={styles.modalOverlay}
              activeOpacity={1} // Evita que o botão "piscar" ao clicar
              onPress={handleMenuVisible} // Fecha o modal ao clicar fora
            >
                {/* Aqui é o nosso menu dropdown, onde as opções aparecem bonitinhas feitas em aula */}
              <View style={styles.menuDropdown}>

                <TouchableOpacity style={styles.menuItem} onPress={() => router.push("/screens/Movies")}>   

                  <Text style={styles.menuItemText}>Filmes</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => router.push("/screens/Series")} >

                  <Text style={styles.menuItemText}>Séries</Text>

                </TouchableOpacity>

              </View>
            </TouchableOpacity>
          </Modal>
        </View>
      );

}