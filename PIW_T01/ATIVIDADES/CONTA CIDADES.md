# 🧠 Atividade: Sistema de Votação de Cidades com React

## 🎯 Objetivo
Desenvolver uma aplicação em **React (JavaScript)** que permita aos usuários votar em cidades do interior do Ceará, exibindo os resultados em tempo real.

---

## 📋 Requisitos Funcionais

Sua aplicação deve atender aos seguintes requisitos:

### 🏙️ Exibição das Cidades
- Exibir **4 cidades**:
  - Quixadá  
  - Quixeramobim  
  - Banabuiú  
  - Iguatu  

- Para **cada cidade**, deve existir um **card** contendo:
  - Nome da cidade
  - Uma **imagem representativa** (o aluno deve pesquisar imagens na internet)
  - Um contador no formato:  
    ```
    VOTOS: <número de votos>
    ```

---

### 🧩 Componente React
- Cada cidade deve ser implementada como um **componente React reutilizável** (ex: `CityCard`).
- Esse componente deve receber via `props`:
  - Nome da cidade
  - URL da imagem
  - Quantidade de votos

---

### 📐 Layout com Flexbox
- Os **cards devem ser exibidos lado a lado**, utilizando **CSS Flexbox**.
- Abaixo dos cards, deve haver outra linha com os botões de votação.

---

### 🗳️ Sistema de Votação
- Criar **4 botões**, cada um com o nome de uma cidade.
- Ao clicar em um botão:
  - A cidade correspondente deve receber **+1 voto**
  - A interface deve ser atualizada automaticamente

---

### ⛔ Encerramento da Votação
- Quando **qualquer cidade atingir 10 votos**:
  - A votação deve ser encerrada
  - Exibir um `alert` informando:
    - 🥇 Cidade mais votada
    - 🥉 Cidade menos votada

---

## ⚙️ Requisitos Técnicos

- Utilizar:
  - `useState` → para armazenar os votos
  - `useEffect` → para detectar quando a votação termina

- Utilizar:
  - **React com JavaScript**
  - **CSS com Flexbox** (não usar frameworks como Bootstrap)

---

## 💡 Dicas

- Armazene os votos em um objeto ou array no estado:
  ```js
  {
    quixada: 0,
    quixeramobim: 0,
    banabuiu: 0,
    iguatu: 0
  }