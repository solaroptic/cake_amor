import styles from "../pagesCSS/About.module.css";

const About = () => {
  return (
    <div className={styles.aboutBack}>
      <div className={styles.aboutContainer}>
        <h2 className={styles.aboutTitle}>About us!</h2>
        <p className={styles.aboutText}>
          We are a bakery that specializes in creative and unique designs for
          Birthday cakes and baking delicious desserts.
        </p>
        <p className={styles.aboutText}>
          Select from our variety of sweets including cupcakes, cheesecakes,
          cookies and more! We even offer Keto treats, Vegan cakes, and Gluten
          free cupcakes! Dairy free options you ask? of course!{" "}
        </p>
        <p className={styles.aboutText}>
          Order your Graduation cakes or Gender reveal goodies today for your
          personalized themes. We also make custom decorated cookies ans
          cupcakes for any celebration!
        </p>
        <p className={styles.aboutText}>
          We pride ourselves in the work we do for our customers and strive to
          be the best bakery we can. If you're stopping by from Robinson,
          Lorena, or Waco come in and get a cupcake or tasty pastry!
        </p>
        <p className={styles.aboutText}>
          Once you find our little cakeshop and taste what desserts you've been
          missing out on, we know you'll fall in amor with CakeAmor Bakery!
        </p>
        <h4>History</h4>
        <p className={styles.aboutText}>
          Established in 2017 by husband and wife duo Misty & Bo, we started
          making custom cakes online over a year ago. Then one day we decided to
          open a full service bakery. We didn't want just a cupcake shop. We
          make 95% of everything from scratch. Misty has a culinary degree and
          is a self taught custom cake decorator with over 10 years experience!
        </p>
      </div>
    </div>
  );
};

export default About;
