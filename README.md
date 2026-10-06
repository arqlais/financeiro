# financeiro · laís & igor

site para controlar entradas, contas e gastos do dia a dia, no lugar da planilha. funciona no celular, no tablet e no computador, e pode ser instalado na tela inicial como app.

- **início**: entrou, saiu e sobrou, contas da semana, gráfico, para onde foi e quem gastou.
- **lançamentos**: contas, gastos e entradas na mesma aba. lançar é como na planilha (tipo, quem, o que foi, valor, data); conta mostra parcelas e cartão, gasto sugere a categoria.
- **parcelas automáticas**: "notebook 7/10" vira "notebook 8/10" no mês seguinte e para na última.
- **ano**: balanço de 2025 e 2026. **ajustes**: cor, ícone, bancos e backup.
- **sem internet**: o que for lançado fica salvo no celular e sobe sozinho quando a conexão volta. ao reabrir o app, ele busca o que o outro mudou.
- **excluiu sem querer**: o aviso de excluído tem *desfazer* por alguns segundos.
- **metas**: em ajustes, um limite por mês para cada categoria (ou para todos os gastos). o início mostra quanto já foi, quanto sobra e avisa quando passa de 80% ou da meta.
- **planilha**: em ajustes, *baixar planilha* gera um .csv com tudo, para abrir no excel ou no google planilhas.

## publicar no github pages

1. no github: **settings → pages → build and deployment → deploy from a branch**.
2. escolha a branch deste projeto e a pasta **/ (root)** e salve.
3. em alguns minutos o site fica em `https://arqlais.github.io/financeiro/`.

## sincronizar os dois celulares (supabase, grátis)

o repositório é público, então os dados **não** ficam aqui. eles ficam num banco supabase protegido por login.

1. crie uma conta em supabase.com e um projeto novo (região: south america - são paulo).
2. abra **sql editor → new query**, cole o arquivo `supabase/setup.sql`, troque os dois emails do final pelos de vocês e clique em **run**.
3. em **authentication → sign in / providers → email**, desligue **confirm email**.
4. coloque a **project url** e a **publishable key** em `config.js`.
5. abra o site e entre com o seu email: na primeira vez, a senha digitada vira a sua senha. o histórico entra sozinho.

com `config.js` vazio, o site funciona em modo local (salva só no aparelho).

formato de cada lançamento:

```json
{"id":"s1","tipo":"conta","mes":"2026-10","quem":"juntos","desc":"cama 6/12","data":"2026-10-13","valor":122,"pago":false,"banco":"nubank"}
```
