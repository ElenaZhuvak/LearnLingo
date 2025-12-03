import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.homeContainer}>
      <div className={css.heroPage}>
        <div className={css.heroSection}>
          <h1 className={css.heroTitle}>
            Unlock your potential with the best{' '}
            <em className={css.highlight}>language</em> tutors
          </h1>
          <p className={css.heroDescription}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <button className={css.heroButton}>Get started</button>
        </div>

        <div>
          <img
            className={css.heroImage}
            src="/src/assets/heroImg.jpg"
            srcSet="/src/assets/heroImg.jpg 1x, /src/assets/heroImg@2x.jpg 2x"
            alt="Language learning"
          />
        </div>
      </div>

      <div className={css.statisticsSection}>
        <div className={css.statisticsBox}>
          <svg
            className={css.statsBorder}
            viewBox="0 0 1312 116"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <rect x="1" y="1" width="1310" height="114" rx="30" ry="30" />
          </svg>
          <ul className={css.statisticsList}>
            <li className={css.statisticItem}>
              <p className={css.statisticNumber}>32,000 +</p>
              <p className={css.statisticText}>
                Experienced <br />
                tutors
              </p>
            </li>
            <li className={css.statisticItem}>
              <p className={css.statisticNumber}>300,000 +</p>
              <p className={css.statisticText}>
                5-star tutor <br />
                reviews
              </p>
            </li>
            <li className={css.statisticItem}>
              <p className={css.statisticNumber}>120 +</p>
              <p className={css.statisticText}>
                Subjects <br />
                taught
              </p>
            </li>
            <li className={css.statisticItem}>
              <p className={css.statisticNumber}>200 +</p>
              <p className={css.statisticText}>
                Tutor <br />
                nationalities
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
