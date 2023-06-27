import styles from "../pagesCSS/Terms.module.css";
// CSS module shared with terms

const Privacy = () => {
  return (
    <div className={styles.termsBack}>
      <div className={styles.termsContainer}>
        <h2 className={styles.termsTitle}>Privacy Policy</h2>

        <p className={styles.termsText}>
          We are committed to protecting your privacy. This Privacy Policy
          explains how we collect, use, and share your personal information when
          you visit or make a purchase from our website.
        </p>

        <h4>What personal information do we collect?</h4>

        <ul className={styles.termsText}>
          <li className={styles.termsText}>
            When you visit our website, we collect certain information
            automatically, such as the type of browser you use, the operating
            system of your computer, the IP address of your computer, and the
            pages you visit on our website.
          </li>
          <li className={styles.termsText}>
            If you make a purchase from our website, we collect additional
            information from you, such as your name, billing address, shipping
            address, payment information, and email address.
          </li>
        </ul>

        <h4>How do we use your personal information?</h4>

        <ul className={styles.termsText}>
          <li className={styles.termsText}>
            We use the information we collect from you to:
            <ul className={styles.termsText}>
              <li className={styles.termsText}>
                Process your orders and fulfill your requests.
              </li>
              <li className={styles.termsText}>
                Communicate with you about your orders, products, and services.
              </li>
              <li className={styles.termsText}>
                Improve our website and our products and services.
              </li>
              <li className={styles.termsText}>
                Send you marketing and promotional materials, if you have opted
                in to receive them.
              </li>
            </ul>
          </li>
        </ul>

        <h4>Who has access to your personal information?</h4>

        <ul className={styles.termsText}>
          <li className={styles.termsText}>
            We may share your personal information with our third-party service
            providers who help us operate our website, process payments, and
            provide customer service.
          </li>
          <li className={styles.termsText}>
            We may also share your personal information with law enforcement or
            other government agencies if we are required to do so by law.
          </li>
        </ul>

        <h4>How do we protect your personal information?</h4>

        <ul className={styles.termsText}>
          <li className={styles.termsText}>
            We take steps to protect your personal information from unauthorized
            access, use, and disclosure.
          </li>
          <li className={styles.termsText}>
            We use encryption technology to protect your personal information
            when it is transmitted over the internet.
          </li>
          <li className={styles.termsText}>
            We store your personal information on secure servers.
          </li>
        </ul>

        <h4>How long do we keep your personal information?</h4>

        <ul>
          <li className={styles.termsText}>
            We keep your personal information for as long as necessary to
            provide you with our services and to comply with applicable laws and
            regulations.
          </li>
        </ul>

        <h4>Your rights</h4>

        <ul>
          <li className={styles.termsText}>
            You have the right to access, correct, delete, or restrict the use
            of your personal information.
          </li>
          <li className={styles.termsText}>
            You also have the right to object to the processing of your personal
            information and to have your personal information transferred to
            another company.
          </li>
          <li className={styles.termsText}>
            To exercise these rights, please contact us at [email protected] or
            [phone number].
          </li>
        </ul>

        <h4>Cookies</h4>

        <ul className={styles.termsText}>
          <li className={styles.termsText}>
            We use cookies to collect information about your use of our website.
          </li>
          <li className={styles.termsText}>
            You can choose to disable cookies in your browser settings. However,
            disabling cookies may affect your ability to use some features of
            our website.
          </li>
        </ul>

        <h4>Changes to this Privacy Policy</h4>

        <ul className={styles.termsText}>
          <li className={styles.termsText}>
            We may update this Privacy Policy from time to time.
          </li>
          <li className={styles.termsText}>
            If we make any material changes to this Privacy Policy, we will
            notify you by email or through a prominent notice on our website.
          </li>
        </ul>

        <h4>Contact Us</h4>

        <ul className={styles.termsText}>
          <li className={styles.termsText}>
            If you have any questions about this Privacy Policy, please contact
            us at [email protected] or [phone number].
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Privacy;
