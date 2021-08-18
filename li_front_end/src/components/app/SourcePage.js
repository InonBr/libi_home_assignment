import SideBar from './SideBar';
import AddMovieCard from './AddMovieCard';

const SourcePage = () => {
  return (
    <>
      <SideBar />
      {window.location.href.includes('add_movie') && <AddMovieCard />}
      {!window.location.href.includes('add_movie') && <h1>hjabsdhsadj</h1>}
    </>
  );
};

export default SourcePage;
