// configuração do banco de dados (supabase).
// cole aqui a "project url" e a "publishable key" (ou a antiga "anon public key") do seu projeto (supabase > project settings > api).
// essa chave pode ficar pública: quem protege os dados são as regras do arquivo supabase/setup.sql,
// que só deixam entrar os emails cadastrados na tabela "membros".
// com os dois campos vazios, o site funciona em modo local (salva só no aparelho).
// dadosIniciais: histórico criptografado; a chave fica na tabela segredos do supabase. entra sozinho no primeiro acesso.
window.FIN_CONFIG = {
  supabaseUrl: 'https://aqoegpdvwtnjakaxuvfm.supabase.co',
  supabaseKey: 'sb_publishable_AGNRGlwFY4V21hXDJ4wy0Q_y6PYlBsK',
  dadosIniciais: 'dados.enc.json',
};
