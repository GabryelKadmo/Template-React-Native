# 🚀 Como usar este template

## 1. Configuração inicial

1. **Clone ou copie este template**
2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   ```bash
   cp .env.example .env.local
   ```
   Edite o arquivo `.env.local` com suas configurações.

## 2. Personalizando o projeto

### Alterar nome do app
- Edite `package.json` → `name`
- Edite `app.json` → `name` e `displayName`

### Configurar ícone e splash screen
- Substitua os arquivos em `assets/images/`
- Execute `npx expo install` para regenerar

### Personalizar cores
- Edite `constants/theme.ts`
- Ajuste as cores light/dark conforme sua marca

### Estrutura de pastas sugerida
```
app/                    # Telas do app (Expo Router)
components/            # Componentes reutilizáveis
constants/             # Constantes (cores, temas, etc)
hooks/                 # Custom hooks
services/              # APIs e serviços externos
types/                 # Definições TypeScript
utils/                 # Funções utilitárias
```

## 3. Desenvolvimento

### Comandos úteis
```bash
npm run start          # Inicia o servidor de desenvolvimento
npm run android        # Executa no Android
npm run ios            # Executa no iOS
npm run web            # Executa no navegador
npm run lint           # Verifica código
```

### Próximos passos
1. Configure navegação adicional em `app/`
2. Crie seus componentes em `components/`
3. Configure APIs em `services/`
4. Adicione tipos em `types/`

## 4. Deploy

### Desenvolvimento
```bash
expo publish
```

### Build de produção
```bash
expo build:android
expo build:ios
```

---

**Template limpo e pronto para usar! 🎉**