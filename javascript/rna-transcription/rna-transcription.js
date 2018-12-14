export const toRna = (dna) => {
  if (!dna) return '';

  const rnaTranscription = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
  };

  let rna = '';

  for (let i = 0; i < dna.length; i++) {
    if (!Object.keys(rnaTranscription).includes(dna[i])) {
      throw new Error('Invalid input DNA.');
    }

    rna += rnaTranscription[dna[i]];
  }

  return rna;
};
