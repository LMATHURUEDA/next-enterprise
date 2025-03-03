import { Metadata } from "next"
import Image from 'next/image';

export const metadata: Metadata = {
  title: "SupportNinja-Clone",
  description: "Recreation of Support Ninja Website",
}

export default function Web() {
  return (
    <div className="font-sans">
      
      <header className="header">
    <div className="container">
      <div className="complete-logo">
        <img
          className="logo"
          src="@/styles/app/assetssupportninja-logo.svg"
          alt="supportninja logo"
        />
        <img className="text-logo" src="@/styles/app/assetstext-logo.svg" alt="text logo" />
      </div>
      <nav className="nav">
        <svg
          className="burger-menu"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
            fill="currentColor"
          />
          <path
            d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
            fill="currentColor"
          />
          <path
            d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
            fill="currentColor"
          />
        </svg>
        <div className="nav-links">
          <a href="">Solutions</a>
          <a href="">Industries</a>
          <a href="">How it works</a>
          <a href="">About</a>
          <a href="">Resources</a>
        </div>
      </nav>
      <button className="green-button">Get Started</button>
    </div>
  </header>
  <main className="main">
    <section className="hero , container">
      <h1 className="hero-title">Outsourcing worth talking about</h1>
      <h2 className="hero-text">
        Quickly and seamlessly scale your team with agile, highly customizable
        outsourcing solutions that power your growth.
      </h2>
    </section>
    <div className="container">
      <div className="horizontal-line"></div>
    </div>
    <section className="choose-solution , container">
      <div className="choose-solution-text">
        <h3> Which outsourcing solutions are you looking for? </h3>
        <p> Choose as many as you need. </p>
      </div>
      <div className="solutions , container">
        <label className="label-for-solution-item">
          <div className="solutions-item">
            <img
              src="@/styles/app/assetscustomer-succes.webp"
              alt="customer succes illustration"
            />
            <label className="label-for-checkbox">
              <input type="checkbox" name="select" />
            </label>
            <p> Customer Success </p>
          </div>
        </label>
        <label>
          <div className="solutions-item">
            <img
              src="@/styles/app/assetstechnical-support.webp"
              alt="technical support illustration"
            />
            <label>
              <input type="checkbox" name="select" />
            </label>
            <p> Technical Support </p>
          </div>
        </label>
        <label>
          <div className="solutions-item">
            <img
              src="@styles/app/assets/content-moderator.png"
              alt="content moderator illustration"
            />
            <p> Content Moderation </p>
            <label>
              <input type="checkbox" name="select" />
            </label>
          </div>
        </label>
        <label>
          <div className="solutions-item">
            <img
              src="@/styles/app/assetsdata-analyst.webp"
              alt="date analyst illustration"
            />
            <p> Data Processing </p>
            <label>
              <input type="checkbox" name="select" />
            </label>
          </div>
        </label>
        <label>
          <div className="solutions-item">
            <img
              src="@/styles/app/assetsprofessional-services.webp"
              alt="Professional services illustration"
            />
            <p> Professional Services </p>
            <label>
              <input type="checkbox" name="select" />
            </label>
          </div>
        </label>
      </div>
      <button className="button">
        {" "}
        Get started
        <div className="button-arrow">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
              fill="#ee4b4a"
            />
          </svg>
        </div>
      </button>
    </section>
    <section className="logo-cloud , container">
      <h2> Driving better business results for 200+ companies. </h2>
      <div className="companies">
        <img src="@/styles/app/assetsgates-foundation.svg" alt="gates fondation logo" />
        <img src="@/styles/app/assetsmidjourney.svg" alt="midjourney logo" />
        <img src="@/styles/app/assetshappy-socks.svg" alt="happy socks logo" />
        <img src="@/styles/app/assetsvidyard.svg" alt="vidyard logo" />
        <img src="@/styles/app/assetsred-week.svg" alt="red week logo" />
        <img src="@/styles/app/assetsproduct-madness.svg" alt="product madness logo" />
      </div>
    </section>
  </main>
  <section className="article , container">
    <div className="article-item">
      <img src="@/styles/app/assetsgardening.webp" alt="woman watering flowers" />
      <div className="article-text">
        <h1> Free up resources, accelerate growth, and solve for scale. </h1>
        <p>
          {" "}
          At SupportNinja, we combine cutting-edge technology with
          value-centricity to foster high-performing, reliable teams that turn
          growing pains into efficient pathways to profitability.
        </p>
        <p>
          Our customized, agile, AI-enabled solutions don’t just deliver cost
          savings — they also help you achieve key business outcomes.
        </p>
        <p>
          We work closely with you to continually adjust strategies, realize
          efficiencies, and drive scale according to your unique needs. Plus,
          flexibility is baked in from day one, so you’re never locked into
          rigid, long-term contracts.
        </p>
        <p>Now that’s outsourcing worth talking about.</p>
      </div>
    </div>
    <div className="article-item">
      <img className="plant" src="@/styles/app/assetsplant.svg" alt="cartoon flower" />
      <div className="article-text">
        <h1> Don’t grow it alone </h1>
        <p>
          {" "}
          Don't let headcount become a headache. We’ll connect you with talent
          that meets your needs.
        </p>
        <p>
          Your dedicated new team members will become experts in your world —
          your customers, your tech, your data, your systems — so they can
          expand on what you’ve built.
        </p>
      </div>
    </div>
  </section>
  <div className="container">
    <div className="horizontal-line"></div>
  </div>
  <section className="features , container">
    <div className="features-item">
      <a href="https://example.com/">
        <div className="features-symbol">
          <img src="@/styles/app/assetscheck.svg" alt="check icon" />
        </div>
      </a>
      <div className="features-text">
        <a href="https://example.com/">
          <h1> Customer Success </h1>
          <p>
            {" "}
            Provide excellent service at every step of the customer journey.{" "}
          </p>
        </a>
        <div className="features-item-link">
          <a href="https://example.com/"></a>
          <a href="https://example.com/"> Explore Customer Success </a>
          <div>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className="horizontal-line"></div>
    <div className="features-item">
      <a href="https://example.com/">
        <div className="features-symbol">
          <img src="@/styles/app/assetscomputer.svg" alt="computer icon" />
        </div>
      </a>
      <div className="features-text">
        <a href="https://example.com/">
          <h1> Technical Support </h1>
          <p>
            {" "}
            Outsource dedicated experts on your business to answer customer
            questions.{" "}
          </p>
        </a>
        <div className="features-item-link">
          <a href="https://example.com/"></a>
          <a href="https://example.com/"> Explore Technical Support </a>
          <div>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className="horizontal-line"></div>
    <div className="features-item">
      <a href="https://example.com/">
        <div className="features-symbol">
          <img src="@/styles/app/assetspen.svg" alt="pen icon" />
        </div>
      </a>
      <div className="features-text">
        <a href="https://example.com/">
          <h1> Content Moderation </h1>
          <p>
            {" "}
            Build a thriving online presence with a team specially trained to
            uphold your community standards.{" "}
          </p>
        </a>
        <div className="features-item-link">
          <a href="https://example.com/"></a>
          <a href="https://example.com/"> Explore Content Moderation </a>
          <div>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className="horizontal-line"></div>
    <div className="features-item">
      <a href="https://example.com/">
        <div className="features-symbol">
          <img
            src="@/styles/app/assetsmachanical-circle.svg"
            alt="mechanical circle icon"
          />
        </div>
      </a>
      <div className="features-text">
        <a href="https://example.com/">
          <h1> Data Processing </h1>
          <p>
            {" "}
            Receive analyzed data, specific to how you need it interpreted and
            presented.{" "}
          </p>
        </a>
        <div className="features-item-link">
          <a href="https://example.com/"></a>
          <a href="https://example.com/"> Explore Data Processing </a>
          <div>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className="horizontal-line"></div>
    <div className="features-item">
      <a href="https://example.com/">
        <div className="features-symbol">
          <img src="@/styles/app/assetstube.svg" alt="tube icon" />
        </div>
      </a>
      <div className="features-text">
        <a href="https://example.com/">
          <h1> Professional Services </h1>
          <p>
            {" "}
            Leave various professional back-office tasks to us, so you can focus
            on your specialized work.{" "}
          </p>
        </a>
        <div className="features-item-link">
          <a href="https://example.com/"></a>
          <a href="https://example.com/"> Explore Professional Services </a>
          <div>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="testimonials , container">
    <h1>Why our clients stick with us</h1>
    <div className="testimonials-item">
      <p className="testimony">
        {" "}
        "SupportNinja is really responsive and flexible based on our needs. But
        what we’re really, really happy about is the Ninjas and their commitment
        to the brand. They’re like an extension of our team!"
      </p>
      <p className="testimony-name">Sudip Dasgupta</p>
      <p className="testimony-title">
        Head of Customer Experience, Product Madness
      </p>
      <button>
        <div>
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div>
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </button>
    </div>
  </section>
  <section className="steps">
    <div className="background">
      <div className="steps-intro , container">
        <h1> Spanning a wider world of talent </h1>
        <p>
          {" "}
          What are the odds that the most qualified people in the world live in
          your zip code? We’ll help you see further.
        </p>
        ‍
        <p>
          A global team extends your presence across time zones and
          languages—which means longer reach, constant uptime, and happier
          customers.
        </p>
        ‍
        <p>
          <strong>It’s time to go international. No passport required.</strong>
        </p>
        <button> Get started </button>
      </div>
    </div>
    <div className="steps-points , container">
      <div className="approach">
        <h1> Our customized approach </h1>
        <p>
          {" "}
          We tailor our strategies and services based on your roadblocks and
          needs, delivering a strategic outsourcing playbook — inclusive of
          technology, talent, and timing — that drives your business forward.
        </p>
      </div>
      <div className="easy-steps">
        <h2> Get set up in 5 easy steps </h2>
        <div className="white-buttons">
          <label>
            <button className="management-button">
              Management-as-a-Service
            </button>
          </label>
          <button type="button" className="talent-button">
            {" "}
            Talent-as-a-Service{" "}
          </button>
        </div>
        <div className="management">
          <div>
            <span>1</span>{" "}
            <p>Deep dive with us into your goals and hiring needs.</p>
          </div>
          <div>
            <span>2</span> We’ll work with you to design a customized solution
            for your business.
          </div>
          <div>
            <span>3</span> Once you're on board, we’ll source the best talent
            for you.
          </div>
          <div>
            <span>4</span> We’ll create a customized training program that
            aligns with your goals.
          </div>
          <div>
            <span>5</span> Sit back and enjoy the efficiencies ahead — it's grow
            time.
          </div>
        </div>
        <div className="talent">
          <div className="vertical-line" />
          <div className="talent-item">
            <div className="list-number">1</div>
            <p> Deep dive with us into your goals and hiring needs.</p>
          </div>
          <div className="talent-item">
            <div className="list-number">2</div>
            <p>
              {" "}
              Access a private portal with hand-picked talent to browse and
              shortlist candidates.
            </p>
          </div>
          <div className="talent-item">
            <div className="list-number">3</div>
            <p>Start interviewing.</p>
          </div>
          <div className="talent-item">
            <div className="list-number">4</div>
            <p>Refine your list until you have the right team.</p>
          </div>
          <div className="talent-item">
            <div className="list-number">5</div>
            <p>
              With us beside you, welcome your new team aboard and prepare for
              scale!
            </p>
          </div>
        </div>
        <button id="details-button"> View details </button>
      </div>
    </div>
  </section>
  <section className="story , container">
    <div className="story-item">
      <div className="story-item-text">
        <h1>
          {" "}
          We’re passionate about our <i>people.</i>{" "}
        </h1>
        <strong>
          <p> Our people-first culture attracts and retains top talent. </p>
        </strong>
        <p>
          {" "}
          For nearly a decade, we’ve fostered the growth, wellbeing, and career
          development of our team members — and that’s earned us industry-high
          talent retention rates.{" "}
        </p>
        <button> Read our story </button>
      </div>
      <div className="story-photos">
        <div className="photo item1">
          <img src="@/styles/app/assetsprofil-photo-1.webp" alt="profile photo" />
        </div>
        <div className="photo item2">
          <img src="@/styles/app/assetscamebert.webp" alt="camembert graphic" />
        </div>
        <div className="photo item3">
          <img src="@/styles/app/assetsprofil-photo-2.webp" alt="profile photo" />
        </div>
        <div className="photo item2">
          <img src="@/styles/app/assetsred-computer.webp" alt="red computer" />
        </div>
        <div className="photo item5">
          <img src="@/styles/app/assetsprofil-photo-3.webp" alt="profile photo" />
        </div>
        <div className="photo item2">
          <img src="@/styles/app/assetsgraphic.webp" alt="yellow graphic sketch" />
        </div>
      </div>
    </div>
    <div className="story-item" id="story-item2">
      <div className="story-item-text">
        <h1> Grow your career and unleash your potential. </h1>
        <strong>
          <p> Ready to expand your horizons at a truly global company? </p>
        </strong>
        <p>
          {" "}
          At SupportNinja, we prioritize your progress, celebrate your wins, and
          provide a supportive environment where you can thrive. Check out our
          openings today.{" "}
        </p>
        <button> View open roles </button>
      </div>
      <div className="meeting">
        <img src="@/styles/app/assetsreunion-photo.webp" alt="office meeting" />
        <img className="red-note" src="@/styles/app/assetsred-notes.webp" alt="red notes" />
      </div>
    </div>
  </section>
  <section className="last">
    <div className="wave"></div>
    <div className="pink-section">
      <div className="container">
        <div className="last-item">
          <img
            src="@/styles/app/assetswork-together.webp"
            alt="cartoon people working together"
          />
          <div className="last-item-text">
            <h1>
              {" "}
              We’re better <i> together</i>. Start building your dream team.{" "}
            </h1>
            <p> Design a custom outsourcing solution that drives results. </p>
            <button className="button">
              {" "}
              Get started
              <div className="button-arrow">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                    fill=" #ee4b4a"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer>
    <div className="container">
      <div>
        <img src="@styles/app/assets/supportninja-logo.svg" />
        <img src="@/styles/app/assetstext-logo.svg" />
      </div>
      <div className="horizontal-line"></div>
      <div className="two-columns-layout">
        <div className="first-column">
          <div className="list">
            <p> Solutions </p>
            <a href="https://example.com/"> Customer Success </a>
            <a href="https://example.com/"> Technical Support </a>
            <a href="https://example.com/"> Content Moderation </a>
            <a href="https://example.com/"> Data Processing </a>
            <a href="https://example.com/"> Professional Services </a>
          </div>
          <div className="list">
            <p> Resources </p>
            <a href="https://example.com/"> Resources</a>
            <a href="https://example.com/"> FAQs </a>
            <a href="https://example.com/"> Glossary </a>
          </div>
          <div className="list">
            <p> Company </p>
            <a href=""> How it Works</a>
            <a href=""> About </a>
            <a href=""> Careers </a>
            <a href=""> Contact </a>
          </div>
        </div>
        <div className="second-column">
          <div className="list">
            <p> Industries </p>
            <a href=""> SaaS</a>
            <a href=""> AI </a>
            <a href=""> eCommerce </a>
          </div>
          <div className="list">
            <p> Follow </p>
            <a href=""> LinkedIn </a>
            <a href=""> YouTube </a>
            <a href=""> Twitter </a>
            <a href=""> Facebook </a>
          </div>
        </div>
      </div>
      <button className="button start">
        {" "}
        Get started
        <div className="button-arrow">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
              fill="#ee4b4a"
            />
          </svg>
        </div>
      </button>
    </div>
  </footer>
    </div>
  );
};

