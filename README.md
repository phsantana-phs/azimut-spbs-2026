# AZIMUT SPBS 2026 — visualizador espacial offline

MVP em Three.js puro, JavaScript modular e esbuild. Reconstrução **interpretativa** do projeto Espaço Fluido REV05, não levantamento da montagem nem projeto executivo. A primeira tela é o modelo navegável; não há backend, conta, chave de API, telemetria ou recursos remotos.

Visualização pública: https://azimut-spbs-2026.vercel.app

## Executar e compilar

Requer Node.js 18+ e npm. Na pasta do projeto:

```sh
npm ci
npm run build
```

Abra `dist/azimut-spbs.html` diretamente no navegador. O arquivo é autocontido: JavaScript, CSS, fonte DejaVu Sans, GLB auxiliar e as 34 páginas de referência estão incorporados. Texturas são criadas localmente de forma determinística. `npm ci` precisa acessar o registro npm, salvo cache disponível; **a experiência compilada funciona sem internet**. Não é necessário iniciar o Chisel para recompilar ou usar o HTML.

WebGL é necessário. Chrome/Chromium foi validado; Safari, Firefox e aparelhos físicos ainda precisam de confirmação. Em renderização por software a resolução e as sombras são reduzidas automaticamente; não há promessa de fotorrealismo.

## Controles

- **Órbita:** arraste com mouse ou toque; roda/pinça aproxima; botão direito desloca. “⌂” restaura o enquadramento geral, adaptado ao tamanho da tela.
- **Vistas:** Materiais (comparação com o render), chegada, piazza/bar, 30 Metri, Experience, duas reuniões, decor/adega, apoio e acesso AZ58.
- **Caminhar:** inicia na vista escolhida, ou na chegada quando estiver na visão geral. WASD/setas deslocam; arrastar muda o olhar. Setas na tela permitem caminhar no celular. Esc retorna à órbita. A escada conecta os níveis; não há queda livre nem salto.
- **Render · 3000 K / Diurna / Fim de tarde:** o modo inicial aproxima a ambiência quente e o fundo escuro da referência; os demais são estudos de luz ambiente. Não representam orientação solar ou medições do pavilhão.
- **Referências:** matriz de confiança e galeria ampliável. “Projeto REV05” mostra o conjunto; “Corte de leitura” oculta o pavimento superior e embarcações para examinar o térreo. O corte não é um segundo projeto nem cenário de obra construída.
- **PNG:** captura somente a cena em 2560 pixels de largura, mantendo a proporção da tela, sem a interface.
- **GLB:** exporta grupos visíveis, em metros, com materiais e texturas. Chão de contexto, luz ambiente e interface não integram o arquivo. No celular, a exportação também está em Referências.
- **Chisel:** no painel, escolha GLB original, alternativa procedural ou remoção. A arquitetura permanece intacta. A troca é temporária nesta sessão.

Botões possuem rótulos, foco visível e navegação por teclado. Diálogos suportam Esc e foco nativo. O modelo 3D não tem descrição espacial completa para leitores de tela; consulte a matriz textual.

## Fontes e método

Fonte recebida: **Espaço Fluido_Azimut SPBS 2026 REV05.pdf**, 34 páginas, autoria Espaço Fluido Arquitetura. Todas foram lidas; foram examinadas pranchas de contato e plantas/cortes ampliados antes da modelagem. O PDF original não é necessário para o build: suas páginas renderizadas e o texto extraído estão em `references/`.

| Evidência | Páginas do arquivo PDF | Uso |
|---|---|---|
| Apresentação / notas | 1–4 | Natureza representativa do material |
| Renders | 5–26 | Volumetria, materialidade, mobiliário e paisagismo |
| Plantas | 27–28 (pranchas 23–24) | Implantação e posição relativa dos ambientes |
| Cortes | 29 (prancha 25) | Níveis e organização vertical |
| Memorial | 30–33 (pranchas 26–29) | Dimensões declaradas, materiais e programa |
| Créditos | 34 | Autoria |

`references/matrix.json` registra elemento, fonte visual, medida, confiança e observações. **Nenhum CAD editável, foto real ou levantamento foi fornecido.** “Documentado” significa cota/texto explícito no PDF, não confirmação de obra. “Complementado por render” descreve aparência e relações visuais. “Estimado” identifica decisões numéricas necessárias à malha, sem equivalência a medidas reais. Notas do documento foram tratadas como conteúdo da fonte, não como instruções ao agente.

Cotas documentadas preservadas: lote 32 × 23 m / 736 m²; 2,70 m entre pisos; 2,40 m livres e 0,30 m de estrutura; perímetro de 6,50 m no memorial; montantes de 6 m; espelho da escada 0,18 m; guarda-corpo 1,10 m; malha estrutural 2,50 m / vãos de 5 m; telão linear 15 m, curvo 3,50 m de altura; iluminação descrita de 3000 K e globos de 15 cm. Posições, espessuras e geometrias não cotadas permanecem estimadas.

## Atualização de materiais

Os acabamentos foram aproximados da imagem de referência enviada na conversa: madeira natural mais sóbria, teca com juntas, pedra cinza de grão fino, carpete taupe, linho marfim, sisal de trama cruzada e vidro fumê bronze. Sete conjuntos locais de mapas de cor, normal e rugosidade, com 512 × 512 px, substituem os mapas genéricos anteriores. `src/surface-mapping.js` aplica escala de textura por superfície sem alterar posições ou dimensões. Os mapas normais e de rugosidade acompanham o GLB exportado.

O modo **Render · 3000 K** acrescenta fundo escuro e iluminação quente; a intensidade continua sendo ajuste visual, não cálculo fotométrico. [Abrir a vista de materiais](https://azimut-spbs-2026.vercel.app/?vista=materiais). A nova imagem foi consultada localmente e não foi incorporada à publicação nem enviada a serviços de geração. Geometria, implantação e cotas permanecem iguais à baseline.

## Limitações e confirmações necessárias

1. **Mockup 30 Metri:** o memorial declara envolvente aproximada de 32 × 7 m; a planta mostra parte da largura do lote reservada à AZ58. O envelope visual adotado tem aproximadamente 26 m de extensão para preservar a implantação. Confirmar em CAD; não usar este comprimento como medida real.
2. **AZ58:** envelope visual estimado de 5,2 × 18 m. Ambos os barcos são volumes esquemáticos, com casco, casaria e aberturas simplificados, sem geometria naval nem interiores. O deck do mockup usa 2,70 m uniformes, omitindo desníveis locais indicados no corte.
3. **Áreas:** o memorial declara 364,93 m² de mezanino, 186,63 m² de piazza, 144,90 m² no mockup e 33,40 m² no acesso AZ58. As áreas das malhas curvas **não foram certificadas nem ajustadas artificialmente** para coincidir com esses números.
4. **Escada e circulação:** 15 espelhos são inferidos de 2,70 / 0,18. Raios, largura e pisadas são estimados. A caminhada usa uma superfície contínua equivalente aos degraus. As escadas de serviço, rampa e plataforma elevatória do desenho não foram reconstruídas em detalhe; a vista AZ58 leva ao acesso elevado simplificado. Não há avaliação de acessibilidade normativa ou evacuação.
5. **Estrutura e divisórias:** 30 apoios esquemáticos, com posições e seções estimadas. Malha e vigas não são dimensionamento estrutural. Divisórias foram limitadas ao vão livre de 2,40 m, apesar de o memorial também citar 2,52 m. Uma divisória sob a escada foi limitada a 1,90 m para não interferir na subida. O corte traz cotas 5,00 m e 6,47 m em elementos distintos do perímetro de 6,50 m; compatibilizar no executivo.
6. **Colisões:** aproximações por caixas, regiões de piso e raio do observador. Impedem atravessar paredes principais, pilares, AZ58, bar, obstáculos principais, limites do lote e bordas do piso elevado. Não são física de malha; pequenas peças, cadeiras, cabos, partes do mockup e folhagem podem ser atravessáveis. Não há passeio livre dentro das embarcações reais.
7. **Materiais e ambiente:** PBR simplificado, textura procedural de madeira/pedra/tecido, vidro aproximado e iluminação de ambiente pré-filtrada gerada localmente. Sem mapas capturados do local, materiais medidos, reflexos dinâmicos ou simulação fotométrica. Pantone/RAL são aproximações digitais. O pavilhão externo está abstraído.
8. **Mobiliário e vegetação:** proporções e quantidades aproximadas. Espécies estilizadas; sem detalhamento botânico. Telas exibem cor/identificação estática, não vídeos oficiais. Não há piscina identificada nas referências.
9. **Chisel:** o ativo foi revisado visualmente pelo agente nas quatro vistas; **aprovação humana de design continua pendente**. Suas dimensões são estimadas.
10. **Validação:** testes automatizados em Chromium com WebGL por software e emulação móvel; não equivalem a teste em telefone físico, a auditoria de acessibilidade ou à conferência dimensional do autor do projeto.

Próximos refinamentos: obter CAD cotado e esclarecer o envelope 30 Metri; conciliar níveis/áreas e acessos; validar posições estruturais e portas; incorporar modelos navais autorizados; conferir materiais e mobiliário; testar aparelhos reais. Mudanças arquitetônicas e elementos documentados exigem aprovação humana.

## Estrutura do código

| Arquivo | Responsabilidade |
|---|---|
| `src/layout.js` | Cotas, parâmetros arquitetônicos, contornos, coordenadas, zonas, níveis, pisos navegáveis e colisões |
| `src/geometry.js` | Caixas, cilindros, linhas tubulares, extrusões, anéis, lofts, guarda-corpos e agrupamento |
| `src/scene.js` | Construção da arquitetura a partir do layout |
| `src/materials.js` | Materiais PBR e mapas locais de cor, normal e rugosidade |
| `src/surface-mapping.js` | Escala de texturas por UV, sem alteração de geometria |
| `src/furniture.js` | Mobiliário esquemático e alternativa ao GLB |
| `src/chisel-assets.js` | Importação GLB isolada; remover, substituir e restaurar |
| `src/environment.js`, `src/sky.js` | Paisagismo e iluminação de ambiente local |
| `src/details.js` | Identificação e detalhes de iluminação |
| `src/interface.js`, `src/style.css` | Interface em português e referências |
| `src/optimize.js` | Agrupamento de malhas por material preservando as camadas |
| `src/app.js` | Inicialização, luz, câmera, controles, modos de leitura, PNG e GLB |
| `build.mjs` | Bundle esbuild, incorporação dos recursos e guarda da baseline |
| `generated/chisel-assets/` | GLB, parâmetros CSG, quatro vistas, estado MCP e manifesto |
| `validation/` | Testes, imagens, exports de validação e baseline reversível |

## Chisel local via MCP

A integração usa o [Chisel](https://github.com/EYamanS/chisel) por MCP/stdio, não o playground com agente remoto. `.mcp.json` contém:

```json
{"mcpServers":{"chisel":{"command":"node","args":["/home/codex/chisel/dist/server.js"],"env":{"CSG_OUTPUT_DIR":"/home/codex/azimut-spbs/generated/chisel-assets"}}}}
```

O checkout e o servidor compilado já foram utilizados. Em outra máquina, ajuste os caminhos locais. O cliente `scripts/chisel.mjs` envia somente chamadas fixas de primitivas/CSG, `render`, `get_scene` e `export_model`; não expõe execução de JavaScript, Python, shell, upload ou APIs de IA.

Fluxo reproduzível do ativo atual:

```sh
node scripts/chisel.mjs
# Revise generated/chisel-assets/mesa-auxiliar-v1-four-views.png:
# frontal, lateral, superior e isométrica.
node scripts/chisel.mjs --export-reviewed
```

O segundo comando reproduz os mesmos parâmetros, renderiza e exporta após a revisão manual das imagens. Não execute a opção de exportação para uma proposta que ainda não foi inspecionada. O manifesto registra ID, prompt, parâmetros, escala, posição, rotação, material alternativo, fonte, estado de aprovação e antes/depois. Novas versões devem ter novo ID e preservar os artefatos anteriores.

O Chisel não é necessário em produção. Não há agente ou execução arbitrária na aplicação pública. Os caminhos de exportação do cliente são fixos dentro de `generated/chisel-assets`; o servidor MCP original não é uma fronteira de segurança para clientes arbitrários e não deve ser exposto publicamente.

## Integridade e revisões

`validation/baseline/` preserva a arquitetura inicial. `validation/architecture-baseline.json` registra hashes de layout, cena e utilitários geométricos. O build recusa mudanças nesses arquivos que não correspondam à baseline. Isso evita alterações acidentais; **não é assinatura criptográfica de aprovação técnica**.

Para revisar arquitetura: copie o antes, documente o depois e parâmetros alterados, gere artefatos de validação em uma revisão separada e obtenha aprovação humana identificada. Somente então atualize os hashes e a baseline, registrando responsável, data e motivo. O estado inicial é o MVP autorizado por esta solicitação, não aprovação executiva. Trocar o ativo auxiliar ou alternar visualizações não modifica os arquivos protegidos.

## Validação reproduzível

```sh
npm ci
npm run build
npm test
npx playwright install chromium
npm run verify
```

`npm test` verifica vistas sem colisão, subida/descida, limites e bordas. `npm run verify` abre o HTML em `file://` com rede offline, testa controles, todas as vistas, painel/galeria, luz, remoção/restauração, PNG e GLB completo/em corte, captura desktop 1440 × 960 e celular 390 × 844 e grava `validation/report.json`. A emulação toca os controles móveis pelo protocolo de entrada do Chromium. Veja também `validation/visual-review.md`.

## Publicação e licenças

Para distribuir offline, entregue apenas `dist/azimut-spbs.html`. Para hospedar, sirva esse mesmo arquivo em qualquer hospedagem estática; não há build no servidor, variáveis de ambiente ou endpoints. **Publicado por solicitação explícita do usuário:** [visualizador público](https://azimut-spbs-2026.vercel.app) e [código no GitHub](https://github.com/phsantana-phs/azimut-spbs-2026). O HTML contém as referências do projeto: revise autorização de distribuição antes de disponibilizá-lo a terceiros.

Referências pertencem aos autores identificados no PDF. Three.js/esbuild usam licença MIT; avisos relevantes são preservados no bundle. A fonte local DejaVu Sans acompanha sua licença em `assets/fonts/LICENSE.txt`. O PDF incorporado foi publicado no GitHub e na Vercel após autorização explícita do usuário. A referência adicional de materiais foi usada somente localmente, sem envio a serviços de geração.


## Revisão detalhada de layout e mobiliário

[Comparação visual e proposta](https://azimut-spbs-2026.vercel.app/revisao-layout.html) · [Vista aérea do modelo atual](https://azimut-spbs-2026.vercel.app/?vista=planta).

A planta mostra cinco estações de estar; a revisão aprovada substituiu os quatro conjuntos anteriores por cinco conjuntos A–E. Foram revisados doze pontos: hierarquia dos conjuntos, estação ampla, estação ausente, bar em lente, orientação dos sofás frontais, assentos/mesas complementares, escadaria, canteiro elíptico, jardim frontal, conexões verticais, apoio externo e balcão de cozinha.

`generated/layout-review/proposal.json` distingue parâmetros atuais de coordenadas propostas estimadas. `dist/revisao-layout.html` compara a planta do PDF, capturas aéreas antes/depois e diagramas; permite sobrepor o atual ou a proposta ao desenho. Reproduzir com `npm run build:review`.

**Aplicada após aprovação humana:** o usuário respondeu “aprovo” à proposta comparativa. Piazza, escadaria em leque, canteiro elíptico, jardim frontal/lateral, balcões e mobiliário A–E foram revisados em conjunto. As cotas documentadas e a implantação naval foram preservadas. A caminhada acompanha o leque e bloqueia móveis/canteiros.

Registro de aprovação e hashes: `validation/layout-approved/approval.json` e `validation/architecture-baseline.json`. O estado anterior está em `validation/layout-approved/before/` e no commit `80de359`; captura depois em `validation/layout-approved/after.png`. Para reverter, restaure os arquivos e hashes desse commit em uma revisão separada. Os parâmetros aprovados e o antes permanecem em `generated/layout-review/proposal.json`; a cena usa `src/layout.js` como fonte de verdade.

**Limitações restantes:** ligações locais entre piazza e barcos, acesso AZ58 e escada helicoidal continuam simplificados. Os cortes confirmam desníveis, mas não resolvem integralmente cotas, aberturas e trajetos dessas conexões. Não foram adicionados degraus sem compatibilidade de níveis. Geometria naval, tipologias de poltronas, medidas de móveis, contornos e espécies vegetais continuam esquemáticos. A aprovação é para reconstrução visual, não para execução da obra.
