## <a href="https://git.io/typing-svg">
<img src="https://readme-typing-svg.herokuapp.com?font=Bitcount+Grid+Single&size=30&pause=1000&color=7B2CBF&width=500&lines=%F0%9F%A7%AE+IMC+Calculator+React+%F0%9F%A7%AE" alt="Typing SVG" />
</a>

A **IMC Calculator** é uma aplicação desenvolvida com **React** com foco em **Gerenciamento de Estado, Componentização e UI Dinâmica baseada em Estado**.

O projeto foi construído para reforçar conceitos fundamentais do React como:

- Componentes funcionais
- useState
- Props
- Renderização condicional
- Arquitetura escalável baseada em objetos de configuração
- Interface reativa (UI como consequência do estado)

---

## <a href="https://git.io/typing-svg">
<img src="https://readme-typing-svg.herokuapp.com?font=Bitcount+Grid+Single&size=30&pause=1000&color=7B2CBF&width=500&lines=%F0%9F%93%8C+Funcionalidades+%F0%9F%93%8C" alt="Typing SVG" />
</a>

| Sistema | Detalhes Técnicos |
| :--- | :--- |
| **Inputs Controlados** | Altura e Peso são controlados via useState, garantindo sincronização total entre estado e interface. |
| **Cálculo Dinâmico** | Conversão automática de centímetros para metros e cálculo da fórmula IMC (peso / altura²). |
| **Renderização Condicional** | O componente de classificação só é renderizado quando existe um valor válido de IMC. |
| **Sistema de Classificação Escalável** | Uso de objeto estruturado contendo label, color e animation para cada categoria de IMC. |
| **Feedback Visual Dinâmico** | A interface muda cor e animação conforme o estado do IMC. |
| **Reset Automático** | Após o cálculo, os inputs são limpos automaticamente. |

---

## <a href="https://git.io/typing-svg">
<img src="https://readme-typing-svg.herokuapp.com?font=Bitcount+Grid+Single&size=30&pause=1000&color=7B2CBF&width=500&lines=%F0%9F%93%82+Estrutura+Do+Projeto+%F0%9F%93%82" alt="Typing SVG" />
</a>

```
src/
 ├── App.jsx
 ├── Components/
 │     ├── MyImcForm.jsx
 │     └── ClassifyImc.jsx
 ├── App.css
 └── ImcForm.css
```

### Responsabilidades

| Componente | Responsabilidade |
| :--- | :--- |
| **App** | Componente raiz que injeta o formulário principal. |
| **MyImcForm** | Gerencia estados (height, weight, imc) e lógica de cálculo. |
| **ClassifyImc** | Recebe o IMC via props e retorna classificação, cor e animação dinamicamente. |

---

## <a href="https://git.io/typing-svg">
<img src="https://readme-typing-svg.herokuapp.com?font=Bitcount+Grid+Single&size=30&pause=1000&color=7B2CBF&width=500&lines=%F0%9F%94%8C+Tecnologias+Utilizadas+%F0%9F%94%8C" alt="Typing SVG" />
</a>

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo" />
  <img width="19" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo" />
  <img width="19" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" alt="css3 logo" />
  <img width="19" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" alt="git logo" />
</div>

---

## <a href="https://git.io/typing-svg">
<img src="https://readme-typing-svg.herokuapp.com?font=Bitcount+Grid+Single&size=30&pause=1000&color=7B2CBF&width=500&lines=%F0%9F%A7%A0+L%C3%B3gica+De+Funcionamento+%F0%9F%A7%A0" alt="Typing SVG" />
</a>

1. **Entrada de Dados**  
   O usuário insere altura (cm) e peso (kg).  
   Os valores são armazenados via useState.

2. **Evento onChange**  
   Cada input é controlado, atualizando seu estado.

3. **Cálculo do IMC**  
   - Conversão de centímetros para metros  
   - Aplicação da fórmula IMC  
   - Uso de toFixed(2)  
   - Atualização do estado imc  

4. **Renderização Condicional**  
   O componente de classificação aparece somente quando há valor válido.

5. **Classificação Baseada em Objeto**  
   Um objeto central define:
   - Texto
   - Cor
   - Animação  

   Isso permite escalabilidade sem alterar estrutura JSX.

---

## <a href="https://git.io/typing-svg">
<img src="https://readme-typing-svg.herokuapp.com?font=Bitcount+Grid+Single&size=30&pause=1000&color=7B2CBF&width=500&lines=%F0%9F%92%A1+Conceitos+Aplicados+%F0%9F%92%A1" alt="Typing SVG" />
</a>

- UI como consequência do Estado  
- Componentização  
- Props e Desestruturação  
- Renderização Condicional  
- Conversão de Tipos (String → Number)  
- Arquitetura baseada em Objeto Configurável  
- Animações condicionais via classes dinâmicas  
- Separação de responsabilidades  

---

## <a href="https://git.io/typing-svg">
<img src="https://readme-typing-svg.herokuapp.com?font=Bitcount+Grid+Single&size=30&pause=1000&color=7B2CBF&width=500&lines=%F0%9F%93%88+Aprendizado+%F0%9F%93%88" alt="Typing SVG" />
</a>

> “A interface é sempre consequência do estado.”

Principais aprendizados:

- Controle total de inputs com useState  
- Estruturar lógica fora do JSX  
- Criar sistemas escaláveis baseados em objetos  
- Entender como o React re-renderiza componentes  
- Organizar responsabilidades entre componentes
