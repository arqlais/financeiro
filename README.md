# financeiro · laís & igor

site para controlar entradas, contas e gastos do dia a dia, no lugar da planilha. funciona no celular, no tablet e no computador, e pode ser instalado na tela inicial como app.

- **mês**: resumo (entrou, saiu, sobrou), uma linha para lançar gasto, conta ou entrada, e as listas do mês, como na planilha.
- **contas**: marcar como paga com um toque; parcelas (como 3/10) passam sozinhas para o mês seguinte e param na última.
- **ano**: balanço de 2025 e 2026.
- **ajustes**: cor de cada um, bancos, backup.

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
