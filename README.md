# Salão da Yolanda — Protótipo Comercial (ēloSites)

Este projeto é um protótipo visual e comercial de alto padrão desenvolvido pela **ēloSites** para apresentação ao **Salão da Yolanda**, localizado em Jundiaí - SP.

## 📁 Onde editar as informações

Todos os textos, serviços, fotos e dados do salão foram intencionalmente separados em um único arquivo de configuração para facilitar alterações sem mexer no código dos componentes:

- **Dados e Textos do Salão:** Abra `/src/data/salonData.ts`
  - Nome, slogan e textos da abertura
  - **WhatsApp Oficial:** configure `SALON_INFO.whatsapp.phoneNumber` (ex: `"5511999999999"`) para ativar o direcionamento automático com mensagem pré-preenchida
  - Endereço oficial e links do Google Maps
  - Categorias de serviços (`Cabelos`, `Manicure & Pedicure`, `Beleza`)
  - Itens da Galeria com legendas
  - Perguntas frequentes do FAQ

## 📸 Como trocar as fotografias

1. Coloque as fotos reais do salão ou da equipe na pasta `/src/assets/images/`
2. No arquivo `/src/data/salonData.ts`, atualize os caminhos no objeto `SALON_IMAGES`:
   ```ts
   export const SALON_IMAGES = {
     hero: "/src/assets/images/sua-foto-fachada.jpg",
     hair: "/src/assets/images/sua-foto-cabelo.jpg",
     nails: "/src/assets/images/sua-foto-unha.jpg",
     ambiance: "/src/assets/images/sua-foto-salao.jpg",
     ritual: "/src/assets/images/sua-foto-atendimento.jpg",
   };
   ```

## 🚀 Tecnologias utilizadas

- **React 19 + TypeScript + Vite**
- **Tailwind CSS v4** com paleta personalizada (Champagne, Nude, Off-white, Bege Sofisticado e Dourado Suave)
- **Motion (`motion/react`)** para scrollytelling suave e transições
- **Lucide React** para ícones funcionais
- **Schema.org JSON-LD** configurado para SEO Local no Google
