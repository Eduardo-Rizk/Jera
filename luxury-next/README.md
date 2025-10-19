# Heritage Capital Advisory — Experiências Next.js

Frontend em Next.js com biblioteca de componentes Shadcn para apresentar quatro direções visuais destinadas a um family office de alto padrão. Cada variação mantém o mesmo fluxo de formulário e pré-visualizações de resultados, permitindo validar a estética com clientes de patrimônio elevado.

## Como executar

```bash
pnpm install
pnpm dev
```

ou utilizando `npm`/`yarn` conforme preferência.

## Estrutura

- `app/`: páginas da aplicação com roteamento App Router
  - `variant-aurum`, `variant-onyx`, `variant-ivory`, `variant-emerald`: quatro propostas visuais
- `components/`: componentes reutilizáveis, incluindo UI baseada no Shadcn
- `components/forms/wealth-assessment-form.tsx`: fluxo do formulário com visual configurável
- `components/results/`: placeholders elegantes para gráficos e métricas projetadas

## Próximos passos

- Conectar aos cálculos existentes no projeto Streamlit
- Substituir dados mockados pelos resultados reais
- Ajustar identidades visuais com branding final do cliente
