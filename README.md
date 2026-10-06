# Finanças do casal — Laís & Igor

Site simples (um único `index.html`, sem instalar nada) para controlar entradas, contas e gastos do dia a dia, no lugar da planilha.

- **Resumo do mês**: quanto entrou, quanto saiu em contas e em gastos, e quanto sobrou.
- **Contas a pagar**: marcar como paga com um toque, alerta de atrasada / vence hoje, e botão para copiar as contas do mês para o próximo (parcelas avançam sozinhas: 6/12 → 7/12).
- **Quem gastou**: Laís, Igor e Juntos.
- **Categorias automáticas** para os gastos do dia a dia (mercado, comida fora, transporte…).
- **Parcelas em andamento**: quanto ainda falta pagar de cada compra parcelada.
- **Visão do ano**: gráfico e tabela mês a mês.

## Como usar

Abra o `index.html` no navegador (ou ative o GitHub Pages). Fora do Claude, os lançamentos ficam salvos no próprio navegador (`localStorage`).

Os dados reais **não** ficam neste repositório, porque ele é público. Para carregar dados no modo local, coloque um arquivo `dados.json` (lista de lançamentos) ao lado do `index.html`; ele está no `.gitignore`.

Formato de cada lançamento:

```json
{"id":"s1","tipo":"gasto","mes":"2026-01","quem":"juntos","desc":"mercado","data":"2026-01-15","valor":27.26}
```

`tipo` é `entrada`, `conta` ou `gasto`; contas têm também `"pago": true|false`.
