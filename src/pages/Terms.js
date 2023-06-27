import styles from "../pagesCSS/Terms.module.css";

const Terms = () => {
  return (
    <>
      <div className={styles.termsBack}>
        <div className={styles.termsContainer}>
          <h2 className={styles.termsTitle}>Terms of Service</h2>
          <p className={styles.termsText}>
            By using this website, you agree to be bound by these terms of
            service. If you do not agree to these terms, please do not use this
            website.
          </p>
          <h4>1. Definitions</h4>
          <ul className={styles.termsText}>
            <li className={styles.termsText}>
              "Account" means an account that you create on this website.
            </li>
            <li className={styles.termsText}>
              "Content" means any information, data, text, software,
              photographs, graphics, videos, music, sounds, or other material
              that is displayed on, transmitted through, or otherwise made
              available on this website
            </li>
            <li className={styles.termsText}>
              "User" means any person who accesses or uses this website.
            </li>
          </ul>
          <h4>2. Eligibility</h4>
          <p className={styles.termsText}>
            You must be at least 18 years old to use this website. If you are
            under the age of 18, you must have the permission of your parent or
            guardian to use this website.
          </p>
          <h4>3. Account</h4>
          <p className={styles.termsText}>
            You may create an account on this website by providing us with your
            name, email address, and password. You are responsible for
            maintaining the confidentiality of your account information and for
            all activities that occur under your account. You agree to notify us
            immediately of any unauthorized use of your account.
          </p>
          <h4>4. Content</h4>
          <p className={styles.termsText}>
            You are solely responsible for the Content that you submit, post, or
            display on this website. We do not endorse or guarantee the
            accuracy, completeness, or quality of any Content. You understand
            that by using this website, you may be exposed to Content that is
            offensive, indecent, or otherwise objectionable.
          </p>
          <p className={styles.termsText}>
            You agree not to submit, post, or display any Content that:
          </p>
          <ul className={styles.termsText}>
            <li className={styles.termsText}>
              is unlawful, harmful, threatening, abusive, harassing, defamatory,
              libelous, obscene, vulgar, pornographic, profane, indecent, or
              otherwise objectionable;
            </li>
            <li className={styles.termsText}>
              infringes on any intellectual property rights, including but not
              limited to copyright, trademark, patent, or trade secret;
            </li>
            <li className={styles.termsText}>
              violates the privacy or publicity rights of any third party
            </li>
            <li className={styles.termsText}>is false or misleading;</li>
            <li className={styles.termsText}>
              is used to impersonate any person or entity, or to misrepresent
              your affiliation with any person or entity;
            </li>
            <li className={styles.termsText}>
              promotes illegal activities; or
            </li>
            <li className={styles.termsText}>
              solicits personal information from minors.
            </li>
          </ul>
          <p className={styles.termsText}>
            We have the right to remove any Content from this website at any
            time, for any reason, without notice.
          </p>
          <h4>5. Conduct</h4>
          <p className={styles.termsText}>
            You agree to use this website in a manner that is consistent with
            these terms of service and all applicable laws and regulations. You
            agree not to:
          </p>
          <ul className={styles.termsText}>
            <li className={styles.termsText}>
              disrupt or interfere with the operation of this website;
            </li>
            <li className={styles.termsText}>
              violate the security of this website;
            </li>
            <li className={styles.termsText}>
              use this website for any unlawful or unauthorized purpose;
            </li>
            <li className={styles.termsText}>
              use this website to harm or attempt to harm any person or
              property; or
            </li>
            <li className={styles.termsText}>
              violate the rights of any person or entity.
            </li>
          </ul>
          <h4>6. Indemnification</h4>
          <p className={styles.termsText}>
            You agree to indemnify and hold us harmless from any and all claims,
            damages, losses, liabilities, costs, and expenses (including
            reasonable attorneys' fees) arising out of or in connection with
            your use of this website.
          </p>
          <h4>7. Disclaimer of Warranties</h4>
          <p className={styles.termsText}>
            THIS WEBSITE IS PROVIDED "AS IS" AND "AS AVAILABLE". WE EXPRESSLY
            DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT
            LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES THAT THIS
            WEBSITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR
            OTHER HARMFUL COMPONENTS. WE ASSUME NO LIABILITY FOR ANY DAMAGES IN
            CONNECTION WITH YOUR USE OF THIS WEBSITE, INCLUDING BUT NOT LIMITED
            TO DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
            DAMAGES.
          </p>
          <h4>8. Governing Law</h4>
          <p className={styles.termsText}>
            These terms of service will be governed by and construed in
            accordance with the laws of the State of California, without regard
            to its conflict of laws provisions. Any dispute arising out of or
            relating to these terms of service will be subject to the exclusive
            jurisdiction of the courts located in the State of California.
          </p>
          <h4>9. Entire Agreement</h4>
          <p className={styles.termsText}>
            These terms of service constitute the entire agreement between you
            and us with respect to your use of this website. These terms of
            service may be modified only by a writing signed by both parties.
          </p>
          <h4>10. Severability</h4>
          <p className={styles.termsText}>
            If any provision of these terms of service is held to be invalid or
            unenforceable, such provision will be struck from these terms of
            service and the remaining provisions will remain in full force and
            effect.
          </p>
        </div>
      </div>
    </>
  );
};

export default Terms;
