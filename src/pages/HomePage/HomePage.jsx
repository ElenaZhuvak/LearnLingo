import css from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={css.homeContainer}>

      <div className={css.heroPage}>
        <div className={css.heroSection}>
          <h1 className={css.heroTitle}>Unlock your potential with the best <em className={css.highlight}>language</em> tutors</h1>
          <p className={css.heroDescription}>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
          <button className={css.heroButton}>Get started</button>
        </div>
  
        <div>
          <img className={css.heroImage}
          src='/src/assets/heroImg.jpg' 
          srcSet='/src/assets/heroImg.jpg 1x, /src/assets/heroImg@2x.jpg 2x'
          alt='Language learning' />
        </div>
      </div>



    </div>
  );
};

export default HomePage;