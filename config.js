// configuração do banco de dados.
// firebase (recomendado, o plano grátis nunca pausa): cole em "firebase" o bloco firebaseConfig que o
// console do firebase mostra (configurações do projeto > seus apps > web). essas chaves podem ficar públicas:
// quem protege os dados são as regras do firestore, que só deixam entrar os emails de vocês dois.
// com firebase preenchido, o supabase abaixo deixa de ser usado (fica só de referência do projeto antigo).
// com tudo vazio, o site funciona em modo local (salva só no aparelho).
// dadosIniciais: histórico criptografado; entra sozinho no primeiro acesso com a chave do link de configuração.
window.FIN_CONFIG = {
  firebase: {
    apiKey: 'AIzaSyBZ0r3C3lIwKHxoM0Qwv7fdx8lWbJrti3E',
    authDomain: 'financeiro-a20a0.firebaseapp.com',
    projectId: 'financeiro-a20a0',
    storageBucket: 'financeiro-a20a0.firebasestorage.app',
    messagingSenderId: '880478945890',
    appId: '1:880478945890:web:e40c8762a95f63e78d073b',
  },
  supabaseUrl: 'https://aqoegpdvwtnjakaxuvfm.supabase.co',
  supabaseKey: 'sb_publishable_AGNRGlwFY4V21hXDJ4wy0Q_y6PYlBsK',
  dadosIniciais: 'base.enc.json',
};
