// configuração do banco de dados (supabase).
// cole aqui a "project url" e a "anon public key" do seu projeto (supabase > project settings > api).
// essa chave pode ficar pública: quem protege os dados são as regras do arquivo supabase/setup.sql,
// que só deixam entrar os emails cadastrados na tabela "membros".
// com os dois campos vazios, o site funciona em modo local (salva só no aparelho).
window.FIN_CONFIG = {
  supabaseUrl: '',
  supabaseKey: '',
};
