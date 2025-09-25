import { StyleSheet, Text, View } from 'react-native';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>✨</Text>
        <Text style={styles.title}>
          Explore & Descubra
        </Text>
        <Text style={styles.message}>
          Bem-vindo à sua jornada de desenvolvimento!
        </Text>
        <Text style={styles.subtitle}>
          Esta é uma tela simples e elegante, pronta para suas ideias brilhantes.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F8FAFC',
  },
  content: {
    alignItems: 'center',
    gap: 16,
    maxWidth: 300,
  },
  emoji: {
    fontSize: 64,
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    color: '#1E293B',
    letterSpacing: -0.5,
    marginBottom: 8,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '700',
    color: '#334155',
    opacity: 0.9,
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '500',
    color: '#64748B',
    lineHeight: 22,
    opacity: 0.8,
  },
});
