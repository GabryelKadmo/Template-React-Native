import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.container}>
        {/* Header com ícone */}
        <View style={styles.headerContainer}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🚀</Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              React Native Template
            </Text>
            <Text style={styles.subtitle}>
              Template moderno com Expo e TypeScript
            </Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>⚡ Pronto para usar</Text>
            </View>
          </View>
        </View>

        {/* Card principal com recursos */}
        <View style={styles.featuresCard}>
          <View style={styles.featuresHeader}>
            <Text style={styles.featuresIcon}>⚡</Text>
            <Text style={styles.featuresTitle}>Recursos Incluídos</Text>
          </View>

          <View style={styles.featuresList}>
            <View style={styles.featureItem}>
              <View style={styles.featureIconContainer}>
                <Text style={styles.featureIcon}>📱</Text>
              </View>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Expo SDK 51</Text>
                <Text style={styles.featureDescription}>
                  Framework React Native com ferramentas modernas
                </Text>
              </View>
            </View>

            <View style={styles.featureItem}>
              <View style={styles.featureIconContainer}>
                <Text style={styles.featureIcon}>🎨</Text>
              </View>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Componentes Temáticos</Text>
                <Text style={styles.featureDescription}>
                  Sistema de temas dark/light integrado
                </Text>
              </View>
            </View>

            <View style={styles.featureItem}>
              <View style={styles.featureIconContainer}>
                <Text style={styles.featureIcon}>🔧</Text>
              </View>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>TypeScript</Text>
                <Text style={styles.featureDescription}>
                  Tipagem estática para maior segurança
                </Text>
              </View>
            </View>

            <View style={styles.featureItem}>
              <View style={styles.featureIconContainer}>
                <Text style={styles.featureIcon}>📐</Text>
              </View>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>ESLint</Text>
                <Text style={styles.featureDescription}>
                  Qualidade de código com linting configurado
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Comece desenvolvendo editando
          </Text>
          <Text style={styles.footerCode}>app/(tabs)/index.tsx</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
    paddingTop: 20,
    backgroundColor: '#F8FAFC',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#3B82F6',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 12,
  },
  icon: {
    fontSize: 28,
  },
  titleContainer: {
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    color: '#1E293B',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#64748B',
    marginBottom: 12,
    fontWeight: '500',
    paddingHorizontal: 8,
  },
  badge: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#C7D2FE',
  },
  badgeText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#4338CA',
  },
  featuresCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    width: width - 32,
    maxWidth: 400,
    shadowColor: '#1E293B',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 15,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  featuresHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 8,
  },
  featuresIcon: {
    fontSize: 24,
  },
  featuresTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1E293B',
    letterSpacing: -0.3,
  },
  featuresList: {
    gap: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    padding: 16,
    borderRadius: 14,
    gap: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  featureIconContainer: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#3B82F6',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  featureIcon: {
    fontSize: 18,
  },
  featureContent: {
    flex: 1,
    gap: 4,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E293B',
    letterSpacing: -0.2,
  },
  featureDescription: {
    fontSize: 13,
    color: '#64748B',
    lineHeight: 18,
    fontWeight: '500',
  },
  footer: {
    alignItems: 'center',
    gap: 8,
    marginTop: 16,
    paddingBottom: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    fontWeight: '500',
  },
  footerCode: {
    fontSize: 12,
    fontFamily: 'Courier New',
    backgroundColor: '#1E293B',
    color: '#F1F5F9',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
});
