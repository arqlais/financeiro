# financeiro · laís & igor

site para controlar entradas, contas e gastos do dia a dia, no lugar da planilha. funciona no celular, no tablet e no computador (um único `index.html`, sem instalar nada).

- **início**: resumo do mês, contas para pagar com "marcar pago", próximos 14 dias, gráfico dos últimos meses, quem gastou e para onde foi o dinheiro.
- **contas**: tabela com banco / cartão de cada conta, parcela, vencimento e situação. painel "por banco" ao lado com o total de cada fatura.
- **parcelas automáticas**: uma conta "notebook 7/10" vira "notebook 8/10" no mês seguinte sozinha; depois da última parcela ela para.
- **repetir fixas**: copia claro, mrv, mensalidade etc. para o mês seguinte com um toque.
- **gastos**: lista por dia, categorias automáticas, busca e filtro por pessoa.
- **entradas** e **ano** (balanço anual com 2025 e 2026).
- exportar csv do mês.

os dados reais não ficam neste repositório (ele é público). no modo local, o site lê `dados.json` e `dados-2025.json` ao lado do `index.html` (ignorados pelo git) e salva no navegador.

formato de cada lançamento:

```json
{"id":"s1","tipo":"conta","mes":"2026-10","quem":"juntos","desc":"cama 6/12","data":"2026-10-13","valor":122,"pago":false,"banco":"nubank"}
```

`tipo`: `entrada`, `conta` ou `gasto`. `banco` é opcional (detectado pela descrição quando falta).
