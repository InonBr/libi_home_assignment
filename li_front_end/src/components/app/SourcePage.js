import SideBar from './SideBar';
import AddMovieCard from './AddMovieCard';
import CategoryPage from './CategoryPage';

const SourcePage = () => {
  return (
    <>
      <SideBar />
      {window.location.href.includes('add_movie') && <AddMovieCard />}
      {!window.location.href.includes('add_movie') && <CategoryPage />}
    </>
  );
};

export default SourcePage;
