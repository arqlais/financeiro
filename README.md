# financeiro · laís & igor

site para controlar entradas, contas e gastos do dia a dia, no lugar da planilha. funciona no celular, no tablet e no computador, e pode ser instalado na tela inicial como app.

- **início**: resumo do mês, contas para pagar com "marcar pago", próximos 14 dias, gráfico e categorias.
- **contas**: banco ou cartão de cada conta, parcela, vencimento e situação, com o painel "por banco" ao lado.
- **parcelas automáticas**: "notebook 7/10" vira "notebook 8/10" no mês seguinte sozinha e para na última.
- **gastos**, **entradas**, **ano** (balanço de 2025 e 2026) e **ajustes** (backup e login).

## publicar no github pages

1. no github: **settings → pages → build and deployment → deploy from a branch**.
2. escolha a branch deste projeto e a pasta **/ (root)** e salve.
3. em alguns minutos o site fica em `https://arqlais.github.io/financeiro/`.

## sincronizar os dois celulares (supabase, grátis)

o repositório é público, então os dados **não** ficam aqui. eles ficam num banco supabase protegido por login.

1. crie uma conta em supabase.com e um projeto novo (região: south america - são paulo).
2. abra **sql editor → new query**, cole o arquivo `supabase/setup.sql`, troque os dois emails do final pelos de vocês e clique em **run**.
3. em **authentication → sign in / providers → email**, desligue **confirm email** (assim a senha funciona na hora).
4. em **project settings → api**, copie a **project url** e a **anon public key** e cole em `config.js`.
5. abra o site, toque em **primeira vez aqui? criar senha**, e depois em **ajustes → importar backup** escolha o arquivo de backup.

com `config.js` vazio, o site funciona em modo local (salva só no aparelho).

formato de cada lançamento:

```json
{"id":"s1","tipo":"conta","mes":"2026-10","quem":"juntos","desc":"cama 6/12","data":"2026-10-13","valor":122,"pago":false,"banco":"nubank"}
```
