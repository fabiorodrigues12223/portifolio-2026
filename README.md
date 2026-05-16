# Portfólio 2026 — Fábio Rodrigues Costa

Site pessoal de portfólio para apresentação profissional como desenvolvedor front-end. O projeto reúne uma página única com navegação por seções, destaque de projetos e canais de contato, pensada para ser leve, responsiva e fácil de publicar.

## Sobre o projeto

O portfólio apresenta o perfil de **Fábio Rodrigues Costa**, desenvolvedor front-end com foco em interfaces responsivas e experiências interativas. A página serve como vitrine central para recrutadores, clientes e parceiros, direcionando visitantes para repositórios no GitHub, demos publicadas e redes profissionais.

## Funcionalidades

| Recurso | Descrição |
|--------|-----------|
| **Navegação fixa** | Cabeçalho com links âncora para Sobre, Projetos e Contato |
| **Scroll suave** | Deslocamento animado entre seções, com compensação da altura do header |
| **Seção hero** | Apresentação do perfil e proposta de valor |
| **Galeria de projetos** | Cards com preview, descrição, tecnologias e links para código e demo |
| **Copiar e-mail** | Botão que copia o endereço de e-mail para a área de transferência com feedback visual |
| **Redes sociais** | Links para LinkedIn e GitHub |
| **Layout responsivo** | Adaptação para mobile, tablet e desktop com Tailwind CSS |
| **Tema escuro** | Paleta em tons de slate com destaque em roxo (primary) |
| **Animações** | Fade-in na hero, hover nos cards de projeto e gradientes no texto |

## Projetos em destaque

O portfólio lista três trabalhos com links diretos:

1. **Alura Books JS** — JavaScript, API REST, Fetch e filtros dinâmicos  
2. **Alura Books: Mobile First** — CSS responsivo, Flexbox, Grid e media queries  
3. **Enem Decodificado** — Tailwind CSS, Chart.js e visualização de dados  

Cada card oferece acesso ao repositório no GitHub e à versão publicada no GitHub Pages.

## Tecnologias

- **HTML5** — estrutura semântica e acessibilidade básica  
- **Tailwind CSS** (CDN) — utilitários, grid, tipografia e tema customizado  
- **CSS customizado** (`styles.css`) — animações, gradiente de fundo e efeitos nos cards  
- **JavaScript vanilla** (`app.js`) — cópia de e-mail e scroll suave  
- **Google Fonts** — família Inter  

Não há dependências de build nem gerenciador de pacotes: o site roda como arquivos estáticos.

## Estrutura do repositório

```
portifolio-2026/
├── index.html      # Página principal
├── styles.css      # Estilos complementares ao Tailwind
├── app.js          # Interatividade (e-mail, navegação)
├── img/            # Capturas de tela dos projetos
└── README.md
```

## Como executar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/fabiorodrigues12223/portifolio-2026.git
   cd portifolio-2026
   ```

2. Abra o `index.html` no navegador (duplo clique ou servidor local opcional).

Para um servidor local simples, por exemplo com Python:

```bash
python -m http.server 8000
```

Acesse `http://localhost:8000` no navegador.

## Publicação

O projeto é compatível com **GitHub Pages** e qualquer hospedagem de arquivos estáticos (Netlify, Vercel, etc.). Basta apontar o domínio para a raiz do repositório ou fazer upload dos arquivos.

## Contato

- **LinkedIn:** [Fábio Rodrigues](https://www.linkedin.com/in/f%C3%A1bio-rodrigues1203/)  
- **GitHub:** [@fabiorodrigues12223](https://github.com/fabiorodrigues12223)  
- **E-mail:** disponível no botão da seção Contato na página  

---

© 2026 Fábio Rodrigues Costa
