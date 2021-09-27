import SectionPreview from './SectionPreview';
import SectionOptions from './SectionOptions';
const Main = () => {
  return (
    <main className="profile-cards__main">
      <div className="main-responsive">
        <SectionPreview />
        <SectionOptions />
      </div>
    </main>
  );
};
export default Main;
