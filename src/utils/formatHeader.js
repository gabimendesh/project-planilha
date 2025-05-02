function formatHeader(key) {
  return (
    key
      // substitui todos os underscores ('_') por espaços (' ')
      .replace(/_/g, ' ')

      // converte a primeira letra de cada palavra (começando por uma letra ou número) para maiúscula.
      // \b: limite de palavra (espaço, pontuação, início ou fim de string)
      // \w: qualquer caractere alfanumérico (letra ou número)
      // (l) => l.toUpperCase() converte o caractere encontrado para maiúsculo
      .replace(/\b\w/g, (l) => l.toUpperCase())
  );
}

module.exports = formatHeader;
