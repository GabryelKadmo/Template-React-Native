# Template React Native com Expo �

Este é um template limpo para projetos React Native usando [Expo](https://expo.dev) e [Expo Router](https://expo.dev/router).

## 🚀 Começando

1. **Instale as dependências**
   ```bash
   npm install
   ```

2. **Inicie o projeto**
   ```bash
   npm run start
   ```

3. **Execute em diferentes plataformas**
   - Android: `npm run android`
   - iOS: `npm run ios` 
   - Web: `npm run web`

## 📁 Estrutura do Projeto

```
app/
├── (tabs)/
│   ├── _layout.tsx     # Layout das abas
│   ├── index.tsx       # Tela inicial
│   └── explore.tsx     # Segunda aba
├── _layout.tsx         # Layout principal
└── modal.tsx           # Exemplo de modal

components/
├── themed-text.tsx     # Componente de texto com tema
├── themed-view.tsx     # Componente de view com tema
└── ui/                 # Componentes de UI

constants/
└── theme.ts           # Configurações de tema

hooks/
├── use-color-scheme.ts # Hook para tema claro/escuro
└── use-theme-color.ts  # Hook para cores do tema
```

## 🎨 Funcionalidades Incluídas

- ✅ **Expo Router** - Navegação baseada em arquivos
- ✅ **TypeScript** - Tipagem estática
- ✅ **Tema Claro/Escuro** - Suporte automático
- ✅ **Componentes Temáticos** - ThemedText e ThemedView
- ✅ **ESLint** - Linting configurado
- ✅ **Estrutura Organizada** - Pastas bem definidas

## 🛠️ Tecnologias

- [Expo SDK ~54.0](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [Expo Router](https://expo.dev/router)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)

## 📚 Recursos Úteis

- [Documentação do Expo](https://docs.expo.dev/)
- [Expo Router Docs](https://expo.dev/router)
- [React Native Docs](https://reactnative.dev/docs/getting-started)

## 📝 Scripts Disponíveis

- `npm run start` - Inicia o servidor de desenvolvimento
- `npm run android` - Executa no Android
- `npm run ios` - Executa no iOS
- `npm run web` - Executa no navegador
- `npm run lint` - Executa o linting
