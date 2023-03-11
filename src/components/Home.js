import styles from './style.css';

function Home() {
  return (
    <div
    className='homesection'
    >
      <p className='home'>
        Welcome to the unofficial website dedicated to Shark Tank India, a
        Hindi-language business reality television series that airs on Sony
        Entertainment Television. This site displays pitch details, shark
        information, and other interesting data about the show. It is created by
        <a
          style={{ color: "cyan", textDecoration: "none" }}
          href="https://www.belohith.com"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Lohith Bollineni{" "}
        </a>{" "}
        and collects information from various sources, such as Shark Tank
        India's official Wikipedia page, the sharks' public profiles, and the
        official websites of the companies that pitched on the show. Please note
        that the rights to this data belong to the respective owners. While some
        data is fetched from official sources, a lot of it has been analyzed
        through various data analysis techniques and spreadsheet manipulation.
      </p>


      <p className='home'>
        <a
          style={{ color: "cyan", textDecoration: "none", fontWeight: "bold" }}
          href="https://sharktankindia.streamlit.app"
          target="_blank"
          rel="noreferrer"
        >
          Click here for more.
        </a>
      </p>
      <p className='home'>
        Data can be beautiful, and this website aims to bring you the best
        visualizations and analysis of the data. If you're a fan of Shark Tank
        India, please feel free to share this site with your friends. Note that
        some details are yet to be updated, such as the social media sites of a
        few companies from both seasons. We apologize for any inconvenience and
        will update the site soon.
      </p>
    </div>
  );
}

export default Home;
