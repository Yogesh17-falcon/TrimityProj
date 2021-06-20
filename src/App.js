import "./App.css";

function App() {
  return (
    <div className="App">
      <header class="header">
        <h1>
          tra<span class="blue">X.</span>
        </h1>
      </header>

      <nav class="sticky navbar">
        <div class="brand  display__logo">
          <h1>
            <span class="white">tra</span>
            <span class="blue">X.</span>
          </h1>
          {/* <a href="#top" class="nav__link">
            {" "}
            <span class="logo">YP17</span>
          </a> */}
        </div>

        <input type="checkbox" id="nav" class="hidden" />
        <label for="nav" class="nav__open">
          <i></i>
          <i></i>
          <i></i>
        </label>
        <div class="nav">
          <ul class="nav__items">
            <li class="nav__item">
              <a href="#home" class="nav__link btn4">
                Home
              </a>
            </li>
            <li class="nav__item">
              <a href="#about" class="nav__link btn4">
                About Us
              </a>
            </li>
            <li class="nav__item">
              <a href="#price" class="nav__link btn4">
                Our Pricing
              </a>
            </li>
            <li class="nav__item">
              <a href="#portfolio" class="nav__link btn4">
                Portfolio
              </a>
            </li>
            <li class="nav__item">
              <a href="#blog" class="nav__link btn4">
                Our Blog
              </a>
            </li>
            <li class="nav__item">
              <a href="#contact" class="nav__link btn4">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <section class="home">
          <div id="home">
            {/* <h1>Home</h1> */}
            <header class="headerOne">
              <div class="title">
                <h2 class="headerTwo">Let's Create</h2>
                <h1 class="headerH">Deep Creativity</h1>
                <h2 class="headerTwo">In Market</h2>
                <p class="headerPara">
                  Responsive and Retina Ready for All Devices
                </p>

                {/* <p class="headerPara">Scroll for more!</p> */}
              </div>
            </header>
          </div>
        </section>
        {/* Card */}
        <div class="container">
          <div class="card">
            <img
              src="https://img-premium.flaticon.com/png/512/3316/premium/3316459.png?token=exp=1624073897~hmac=41403676dd2722b90e6ce0c887c25273"
              alt=""
              class="card__img"
            />

            <div class="card__data">
              <h1 class="card__title">SEO Optimized</h1>
              <span class="card__preci">⇣</span>
              <p class="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a href="#" class="card__button">
                Know More
              </a>
            </div>
          </div>

          <div class="card">
            <img
              src="https://image.flaticon.com/icons/png/512/888/888108.png"
              alt=""
              class="card__img"
            />

            <div class="card__data">
              <h1 class="card__title">Well Documented</h1>
              <span class="card__preci">⇣</span>
              <p class="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a href="#" class="card__button">
                Know More
              </a>
            </div>
          </div>

          <div class="card">
            <img
              src="https://image.flaticon.com/icons/png/512/975/975657.png"
              alt=""
              class="card__img"
            />

            <div class="card__data">
              <h1 class="card__title">Fully Responsive</h1>
              <span class="card__preci">⇣</span>
              <p class="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a href="#" class="card__button">
                Know More
              </a>
            </div>
          </div>
        </div>

        {/*  */}
        <section class="about">
          <div id="about">
            {/* <h1>About Us</h1> */}
            <nav class="lr">
              <div class="learn">
                <p class="learnPara">
                  Let's take Your <span class="blue">Business</span> Next Level{" "}
                </p>
                <p class="ler">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
                  sit amet, consectetur adipiscing elit.
                </p>
                <button class="btn-hover color-9">Learn More</button>
              </div>
              <div class="learn">
                <img
                  src="https://freepngimg.com/thumb/coffee/29894-9-coffee-cup-photos.png"
                  width="700"
                />
              </div>
            </nav>
          </div>
        </section>
        <section class="workSec">
          <div id="price">
            <h1 class="specTitle priceH">
              Our Work <span class="blue">Process</span>
            </h1>
            <p class="ler">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </section>
        <div class="timeline">
          <div class="timeline_card">
            <input
              class="timeline_input"
              name="timeline"
              type="radio"
              id="btn1"
              checked=""
            />
            <label class="timeline_label" for="btn1">
              Start
            </label>
            <div class="timeline_info">Start</div>
            <input
              class="timeline_input"
              name="timeline"
              type="radio"
              id="btn2"
            />
            <label class="timeline_label" for="btn2">
              step 1
            </label>
            <div class="timeline_info">Concept</div>
            <input
              class="timeline_input"
              name="timeline"
              type="radio"
              id="btn3"
            />
            <label class="timeline_label" for="btn3">
              step 2
            </label>
            <div class="timeline_info">Plan</div>
            <div class="timeline_line"></div>

            <input
              class="timeline_input"
              name="timeline"
              type="radio"
              id="btn4"
            />
            <label class="timeline_label" for="btn4">
              step 3
            </label>
            <div class="timeline_info">Design</div>
            <div class="timeline_line"></div>

            <input
              class="timeline_input"
              name="timeline"
              type="radio"
              id="btn5"
            />
            <label class="timeline_label" for="btn5">
              step 4
            </label>
            <div class="timeline_info">Development</div>
            <div class="timeline_line"></div>

            <input
              class="timeline_input"
              name="timeline"
              type="radio"
              id="btn6"
            />
            <label class="timeline_label" for="btn6">
              step 5
            </label>
            <div class="timeline_info">Quality Check</div>
            <div class="timeline_line"></div>
          </div>
        </div>

        <section class="portfolio">
          <div id="portfolio">
            <nav class="spec">
              <div class="spe">
                <p class="specTitle">
                  Mobile App <span class="blue">Design</span>
                </p>
                <p class="ler">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <img src="https://image.freepik.com/free-vector/smartphone-blank-screen-phone-mockup_172533-421.jpg" />
              </div>
              <div class="specFlex">
                <div class="spe">
                  <a href="#" class="buttonOne">
                    <span class="icon">⛭</span>
                    <span class="text">Theme Options</span>
                  </a>
                </div>
                <div class="spe">
                  <a href="#" class="buttonOne">
                    <span class="icon">🖆</span>
                    <span class="text">Customization</span>
                  </a>
                </div>
                <div class="spe">
                  <a href="#" class="buttonOne">
                    <span class="icon"> ᛡ</span>
                    <span class="text">Powerful Code</span>
                  </a>
                </div>
                <div class="spe">
                  <a href="#" class="buttonOne">
                    <span class="icon">🗍</span>
                    <span class="text">Documentation</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </section>

        <section class="pricing">
          <div>
            <h1 class="specTitle priceH">
              Pricing <span class="blue">Offerers</span>
            </h1>
          </div>
          <div id="pricing">
            <div class="wrapper">
              <div class="pricing-table gprice-single">
                <div class="head">
                  <h4 class="title">Basic</h4>
                </div>
                <div class="content">
                  <div class="price">
                    <h1>$19</h1>
                  </div>
                  <ul>
                    <li>5 GB Ram</li>
                    <li>40GB SSD Cloud Storage</li>
                    <li>Month Subscription</li>
                    <li>Responsive Framework</li>
                    <li>
                      {" "}
                      <del>Monthly Billing Software</del>{" "}
                    </li>
                    <li>
                      {" "}
                      <del>1 Free Website</del>
                    </li>
                  </ul>
                  <div class="sign-up">
                    <a href="#" class="btn bordered radius">
                      Signup Now
                    </a>
                  </div>
                </div>
              </div>
              <div class="pricing-table gprice-single">
                <div class="head">
                  <h4 class="title">Standard</h4>
                </div>
                <div class="content">
                  <div class="price">
                    <h1>$29</h1>
                  </div>
                  <ul>
                    <li>5 GB Ram</li>
                    <li>40GB SSD Cloud Storage</li>
                    <li>Month Subscription</li>
                    <li>Responsive Framework</li>
                    <li>Monthly Billing Software</li>
                    <li>
                      <del>1 Free Website</del>
                    </li>
                  </ul>
                  <div class="sign-up">
                    <a href="#" class="btn bordered radius">
                      Signup Now
                    </a>
                  </div>
                </div>
              </div>
              <div class="pricing-table gprice-single">
                <div class="head">
                  <h4 class="title">Premium</h4>
                </div>
                <div class="content">
                  <div class="price">
                    <h1>$39</h1>
                  </div>
                  <ul>
                    <li>5 GB Ram</li>
                    <li>40GB SSD Cloud Storage</li>
                    <li>Month Subscription</li>
                    <li>Responsive Framework</li>
                    <li>Monthly Billing Software</li>
                    <li>1 Free Website</li>
                  </ul>
                  <div class="sign-up">
                    <a href="#" class="btn bordered radius">
                      Signup Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="blog">
          <div id="blog">
            <p class="specTitle priceH">
              Our <span class="blue">Blog</span>
            </p>
          </div>
          <div class="bodyBlog">
            <div class="cardBlog">
              <img
                src="https://source.unsplash.com/user/diegyms/300x200"
                alt="vitateach"
              />
              <div class="card-body">
                <h6>Vitateach</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  sit? Nesciunt porro.adipisicing elit. Sed, sit? Nesciunt
                  porro.
                </p>
                <div>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div class="cardBlog">
              <img
                src="https://source.unsplash.com/user/frantic/300x200"
                alt="vitateach"
              />
              <div class="card-body">
                <h6>Vitateach</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  sit? Nesciunt porro.adipisicing elit. Sed, sit? Nesciunt
                  porro.
                </p>
                <div>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div class="cardBlog">
              <img src="https://source.unsplash.com/user/5tep5/300x200" />
              <div class="card-body">
                <h6>Vitateach</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  sit? Nesciunt porro.adipisicing elit. Sed, sit? Nesciunt
                  porro.
                </p>
                <div>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="contact">
          <div id="contact">
            <p class="specTitle priceH">
              Contact <span class="blue">Us</span>
            </p>
            <div class="bodyContact">
              <form id="form" class="topBefore">
                <input id="name" type="text" placeholder="NAME" />
                <input id="email" type="text" placeholder="E-MAIL" />
                <textarea
                  id="message"
                  type="text"
                  placeholder="MESSAGE"
                ></textarea>
                <input id="submit" type="submit" value="GO!" />
              </form>
            </div>
          </div>
        </section>
      </main>

      {/*  */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />

      <div class="hero">
        {/* <h1>Social Icons Hover Effect</h1> */}
 <p class="specTitle priceH paddingSocial">
             Follow <span class="blue">Us</span>
            </p>
        <div class="social-links">
          <a href="">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="">
            <i class="fab fa-github"></i>
          </a>
          <a href="">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      {/*  */}

      {/* <footer class="footer">
        <h1>Footer</h1>
      </footer> */}

      {/* ************************ */}
      <footer>
        <div class="bodyFoot">
          <div class="contentFoot">
            <div class="top">
            <h1>
            <span class="white">tra</span>
            <span class="blue">X.</span>
          </h1>
              {/* <div class="logo-details">
                <i class="fab fa-slack"></i>
                <span class="logo_name">Logo</span>
              </div> */}
              {/* <div class="media-icons">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
              </div> */}
            </div>
            <div class="link-boxes">
              <ul class="box">
                <li class="link_name">Company</li>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Get started</a>
                </li>
              </ul>
              <ul class="box">
                <li class="link_name">Services</li>
                <li>
                  <a href="#">App design</a>
                </li>
                <li>
                  <a href="#">Web design</a>
                </li>
                <li>
                  <a href="#">Logo design</a>
                </li>
                <li>
                  <a href="#">Banner design</a>
                </li>
              </ul>
              <ul class="box">
                <li class="link_name">Account</li>
                <li>
                  <a href="#">Profile</a>
                </li>
                <li>
                  <a href="#">My account</a>
                </li>
                <li>
                  <a href="#">Prefrences</a>
                </li>
                <li>
                  <a href="#">Purchase</a>
                </li>
              </ul>
              <ul class="box">
                <li class="link_name">Courses</li>
                <li>
                  <a href="#">HTML & CSS</a>
                </li>
                <li>
                  <a href="#">JavaScript</a>
                </li>
                <li>
                  <a href="#">Photography</a>
                </li>
                <li>
                  <a href="#">Photoshop</a>
                </li>
              </ul>
              <ul class="box input-box">
                <li class="link_name">Subscribe</li>
                <li>
                  <input type="text" placeholder="Enter your email" />
                </li>
                <li>
                  <input type="button" value="Subscribe" />
                </li>
              </ul>
            </div>
          </div>
          <div class="bottom-details">
            <div class="bottom_text">
              <span class="copyright_text">
                Copyright © 2021 <a href="#">Logo.</a>All rights reserved
              </span>
              <span class="policy_terms">
                <a href="#">Privacy policy</a>
                <a href="#">Terms & condition</a>
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/*  */}

      {/*  */}
    </div>
  );
}

export default App;
