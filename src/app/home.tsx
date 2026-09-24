import { Categories } from "@/components/home/categories";
import { GameListItem } from "@/components/home/game-list-item";
import { GAMES } from "@/data/games-data";
import { PlusIcon } from "@/components/icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export function Home() {
    return (
        <LinearGradient colors={["#0E1647", "#0A1033"]} style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.header}>
                    <View style={styles.headerInfo}>
                        <Image
                            source={require('@/assets/images/home/avatar.png')}
                            style={styles.avatar}
                        />
                        <View>
                            <Text style={styles.greeting}>
                                <Text style={styles.greetingLight}>Olá, </Text>
                                Tiago
                            </Text>
                            <Text style={styles.subtitle}>Hoje é dia de vitória</Text>
                        </View>
                    </View>
                    <Pressable style={styles.addButton} onPress={() => router.push('/schedule')}>
                        <PlusIcon />
                    </Pressable>
                </View>

                <View style={styles.categories}>
                    <Categories />
                </View>

                <View style={styles.listHeader}>
                    <Text style={styles.listTitle}>Partidas agendadas</Text>
                    <Text style={styles.listTotal}>Total 6</Text>
                </View>

                <View style={styles.list}>
  {GAMES.map((game) => (
    <GameListItem
      key={game.id}
      title={game.title}
      category={game.category}
      role={game.role}
      date={game.date}
      cover={game.cover}
      onPress={() => router.push(`/game/${game.id}`)}
    />
  ))}
</View>
            </ScrollView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingTop: 56,
        paddingBottom: 40,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },
    headerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: '#243189',
    },
    greeting: {
        fontFamily: 'Rajdhani_700Bold',
        fontSize: 24,
        color: '#DDE3F0',
    },
    greetingLight: {
        fontFamily: 'Rajdhani_500Medium',
    },
    subtitle: {
        marginTop: 4,
        fontFamily: 'Inter_400Regular',
        fontSize: 13,
        color: '#ABB1CC',
    },
    addButton: {
        width: 48,
        height: 48,
        borderRadius: 8,
        backgroundColor: '#E51C44',
        alignItems: 'center',
        justifyContent: 'center',
    },
    categories: {
        marginTop: 40,
    },
    listHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        marginTop: 40,
        marginBottom: 20,
    },
    listTitle: {
        fontFamily: 'Rajdhani_700Bold',
        fontSize: 18,
        color: '#DDE3F0',
    },
    listTotal: {
        fontFamily: 'Inter_400Regular',
        fontSize: 13,
        color: '#ABB1CC',
    },
    list: {
        paddingHorizontal: 24,
    },
})

export default Home;