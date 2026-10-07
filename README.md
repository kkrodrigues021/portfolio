# Kaiky Rodrigues | Dossiê Executivo & Portfolio

> **Tech Brutalism, Engenharia de Software e Infraestrutura B2B.**
> Dossiê técnico de conversão para consultoria, infraestrutura crítica e desenvolvimento de sistemas.

![HTML5](https://img.shields.io/badge/HTML5-000000?style=flat-square&logo=html5&logoColor=E34F26)
![CSS3](https://img.shields.io/badge/CSS3-000000?style=flat-square&logo=css3&logoColor=1572B6)
![JavaScript](https://img.shields.io/badge/JavaScript-000000?style=flat-square&logo=javascript&logoColor=F7DF1E)
![PHP](https://img.shields.io/badge/PHP-000000?style=flat-square&logo=php&logoColor=777BB4)
![License MIT](https://img.shields.io/badge/License-MIT-000000?style=flat-square)

**Autor:** Kaiky Rodrigues, CEO & Engenharia de TI
**Repositório:** [github.com/kkrodrigues021/portfolio](https://github.com/kkrodrigues021/portfolio)
**Acesso:** [kkrodrigues021.github.io/portfolio](https://kkrodrigues021.github.io/portfolio)

---

## 01 // Arquitetura e Performance

O projeto rejeita frameworks genéricos. Toda a camada de apresentação e interação é implementada em **HTML5 semântico, CSS3 e Vanilla JavaScript**, sem bundlers, sem dependências de runtime e sem etapa de build. O resultado é um payload mínimo, renderização imediata e pontuação **Lighthouse 95+**.

| Camada | Tecnologia | Decisão técnica |
| :--- | :--- | :--- |
| Marcação | HTML5 semântico | Hierarquia de seções clara, legibilidade para SEO e leitores de tela |
| Estilo | CSS3 + CSS Variables + Grid/Flexbox | Design tokens centralizados, layout sem biblioteca de componentes |
| Interação | Vanilla JavaScript | Zero dependências, execução sob demanda |
| Backend | PHP | Processamento e validação do formulário de contato |

**Design:** UI minimalista, alto contraste e modo escuro puro. Hierarquia definida por tipografia (Manrope, Syne, Orbitron) e grid, sem ornamentação.

### Microinterações implementadas do zero

- **Botão Magnético:** o elemento acompanha o cursor via `mousemove` e retorna à posição de origem no `mouseout`.
- **Scroll Progress Indicator:** barra de progresso calculada a partir de `scrollTop` e da altura útil do documento.
- **Ticker Infinito:** faixa contínua de tecnologias, sem bibliotecas de carrossel.
- **Scroll Reveal:** `IntersectionObserver` revela cada seção uma única vez e interrompe a observação após a ativação, sem listeners de scroll por elemento.

> **Princípio de projeto:** cada byte entregue ao cliente precisa justificar sua presença.

---

## 02 // Histórico e Expertise

Histórico corporativo em **TIVIT**, **Atos** e **Grupo MV3**.

| Domínio | Escopo |
| :--- | :--- |
| **Infraestrutura Crítica** | Active Directory, SCCM, LAPS UI |
| **Desenvolvimento e Sistemas** | Python, JavaScript, PHP, bancos de dados (MySQL) |

O dossiê consolida o histórico, a stack e os projetos de software e infraestrutura em uma única página, estruturada para decisão B2B.

---

## 03 // Estrutura de Diretórios

```text
portfolio/
├── index.html        # Dossiê principal
├── obrigado.html     # Confirmação de contato recebido
├── styles.css        # Estilização Tech Brutalism
├── script.js         # Scroll progress, reveal e botão magnético
├── enviar.php        # Processamento do formulário de contato
├── curriculo.pdf     # Currículo para download
├── LICENSE           # Licença MIT
├── README.md         # Documentação
└── imagens/          # Logotipos de tecnologias e assets
```

## 04 // Execução Local

**Requisitos:** navegador moderno. PHP 8+ apenas para testar o formulário.

**Somente front-end (Live Server):**

```bash
git clone https://github.com/kkrodrigues021/portfolio.git
cd portfolio
```

Abra `index.html` com a extensão **Live Server** no VS Code.

**Com backend PHP (formulário de contato):**

```bash
php -S localhost:8000
```

Acesse `http://localhost:8000`.

> **Nota:** a função `mail()` depende de um servidor SMTP configurado no ambiente. Sem ele, o envio retornará `status=error` em `obrigado.html`.

---

## 05 // Contato e Licença

| Canal | Endereço |
| :--- | :--- |
| E-mail | [kaiky.rodrigues039@gmail.com](mailto:kaiky.rodrigues039@gmail.com) |
| LinkedIn | [linkedin.com/in/kaikyrodrigues39](https://www.linkedin.com/in/kaikyrodrigues39) |
| GitHub | [github.com/kkrodrigues021](https://github.com/kkrodrigues021) |

Distribuído sob a **Licença MIT**. Consulte o arquivo [LICENSE](LICENSE).

© 2026 Kaiky Rodrigues
