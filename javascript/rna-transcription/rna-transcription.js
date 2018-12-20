export const toRna = (dna) => {
  if (!dna) return '';
  if (dna.match(/[^GCTA]/g)) throw new Error('Invalid input DNA.');

  const rnaTranscription = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
  };

  return dna
    .split('')
    .map(n => rnaTranscription[n])
    .join('');
};
