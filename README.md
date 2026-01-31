# Saber Botânico 🌿

> Uma plataforma digital dedicada à curadoria, estudo e preservação de conhecimentos botânicos.

Este projeto é uma Single Page Application (SPA) desenvolvida com foco em **design biofílico** e performance. O objetivo é fornecer um "Santuário Digital" para jardineiros e entusiastas, oferecendo guias detalhados e um glossário interativo de espécimes raros e domésticos.

## 📋 Sobre o Projeto

O **Saber Botânico** foge da estética tradicional de e-commerce para abraçar um visual editorial e contemplativo. O projeto foi estruturado para ser escalável, modular e performático, priorizando a experiência do usuário (UX) e a acessibilidade.

A aplicação funciona inteiramente **Client-Side**, sem dependência de back-ends complexos para a navegação ou consulta de dados, garantindo velocidade instantânea e facilidade de hospedagem.

## ✨ Funcionalidades Principais

*   **Arquitetura SPA:** Navegação fluida sem recarregamento de página utilizando `react-router-dom` (HashRouter).
*   **Glossário Interativo:** Sistema de busca em tempo real com filtragem de dados locais, permitindo acesso instantâneo às informações das plantas.
*   **Design Responsivo (Mobile-First):** Layouts adaptativos que utilizam Grid e Flexbox para garantir legibilidade em qualquer dispositivo.
*   **Modais de Detalhes:** Interface de "Lightbox" acessível para visualização profunda dos rituais de cuidado de cada espécime.
*   **Guias Educativos:** Páginas dedicadas (Vasos, Solo, Rega) com tipografia otimizada para leitura prolongada.

## 🛠️ Tecnologias e Técnicas

Este projeto foi construído utilizando uma stack moderna e robusta:

*   **React 18:** Biblioteca principal para construção da interface baseada em componentes.
*   **TypeScript:** Garantia de tipagem estática, interfaces robustas (`PlantSpecimen`, `RitualStep`) e segurança no desenvolvimento.
*   **Tailwind CSS:** Framework utilitário para estilização rápida, manutenção de design system (cores `gold`, `forest`, `sage`) e responsividade.
*   **React Router DOM v6:** Gerenciamento de rotas e estado de navegação.
*   **Hooks Customizados:** Ex: `useScrollVisibility` para otimização de performance da header e eventos de scroll.

### Decisões de Arquitetura

1.  **Dados Locais (Mock API):** Para eliminar latência e dependências externas, os dados das plantas e rituais residem em `constants.ts`. Isso simula uma API, mas com tempo de resposta zero.
2.  **Componentização Atômica:** Componentes como `PlantCard` e `PlantModal` foram isolados para reuso e facilidade de teste.
3.  **Sanitização:** O código segue padrões estritos de "Clean Code", com variáveis semânticas em inglês e separação clara de responsabilidades (SOLID).

## 🚀 Como Rodar o Projeto

Pré-requisitos: Node.js (v16 ou superior) e npm/yarn.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/saber-botanico.git
    cd saber-botanico
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

4.  Acesse `http://localhost:5173` (ou a porta indicada no terminal).

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

---
*Desenvolvido com foco em excelência técnica e paixão pela botânica.*