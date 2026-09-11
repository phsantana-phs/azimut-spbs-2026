# Revisão visual do MVP

Referências: `references/azimut-22.jpg` (conjunto), `references/plan-27.jpg`, `references/plan-28.jpg`, `references/plan-29.jpg` e demais páginas 1–34 examinadas. O PDF substituiu conceito gerado externamente, respeitando a proibição de transmitir identidade, imagens e medidas privadas.

Método: Playwright/Chromium porque não havia navegador interativo disponível. Capturas reais desktop 1440 × 960 e celular 390 × 844, abertura local `file://`. `view_image` foi tentado, mas falhou por erro de sandbox (`bwrap: loopback`). Imagens foram visualizadas pelo canal de imagem da ferramenta a partir de leitura local, sem upload a serviço externo. A resolução 3D é reduzida automaticamente no WebGL por software; os controles permanecem na resolução nativa.

| Ponto inspecionado | Evidência / resultado |
|---|---|
| Implantação | Mantida relação ortogonal entre os dois volumes navais, piazza intermediária, chegada e jardim. Contornos são estimados, não decalque executivo. |
| Níveis / circulação | Mezanino e escadaria legíveis. Interferência da divisória estimada sob a escada corrigida para 1,90 m; teste de subida/descida passou. |
| Materiais | Madeira, pedra clara, tecido bege, casco claro, vidro escuro e montantes vermelhos. Mapas locais esquemáticos, sem correspondência fotométrica certificada. |
| Interface | Canvas como primeira tela; comandos de órbita/caminhada, referências, PNG e GLB. Sem hero de marketing ou conteúdo comercial inventado. |
| Celular | Zoom geral adaptado à largura; limite máximo de órbita aumentado para não recortar a implantação. Exportação acessível no painel. Controles táteis testados. |
| Corte | Oculta camadas superiores e barcos; mantém térreo para leitura. Exportação GLB contém menos malhas e bytes, conforme visibilidade. |
| Desempenho | Agrupamento por material reduziu chamadas gráficas de aproximadamente 1687 a 48 na visão geral. Sombras recalculadas somente quando necessário; não há renderização contínua da cena parada. |
| Chisel | Quatro vistas de mesa inspecionadas: base/tampo centrados e união contínua. Original, substituição procedural e remoção testados. Aprovação humana continua pendente. |

Diferenças intencionais: embarcações e paisagismo esquemáticos, piso/curvas e divisórias aproximados, acesso AZ58 simplificado, sem vídeos de marca ou pavilhão detalhado. Não se afirma fidelidade fotográfica ou 10/10 ao render; trata-se do MVP proporcional e honesto solicitado. Conteúdo acima da dobra limitado a identificação, controles, dimensões documentadas e estado da leitura.

Artefatos finais: `desktop.png`, `mobile.png`, `mobile-walk.png`, `cutaway.png`, `capture.png`, `project.glb`, `cutaway.glb` e `report.json` nesta pasta. Limitações e confirmações no README.
