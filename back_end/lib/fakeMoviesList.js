const fakeList = {
  movies: [
    {
      _id: 1,
      name: 'Spider-Man: Homecoming',
      category: 'action',
      imdb: 'https://www.imdb.com/title/tt2250912/?ref_=nv_sr_srsg_6',
    },
    {
      _id: 2,
      name: 'Inside Out',
      category: 'comedy',
      imdb: 'https://www.imdb.com/title/tt2096673/?ref_=nv_sr_srsg_4',
    },
    {
      _id: 3,
      name: 'Pokémon Detective Pikachu',
      category: 'comedy',
      imdb: 'https://www.imdb.com/title/tt5884052/?ref_=nv_sr_srsg_5',
    },
    {
      _id: 4,
      name: 'The Matrix',
      category: 'action',
      imdb: 'https://www.imdb.com/title/tt0133093/?ref_=nv_sr_srsg_0',
    },
  ],
  categorys: [
    { _id: 1, category: 'action', count: 2 },
    { _id: 2, category: 'comedy', count: 2 },
  ],
};

module.exports = { fakeList };
