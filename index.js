document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');

    const App = () => {
        return `
            <div>
            
            </div>
        `;
    };

    rootElement.innerHTML = App();
});




  // Banner component
  function renderBanner() {
    const bannerElement = document.getElementById("banner");
    bannerElement.innerHTML = `
<nav class="navbar-brand">
  <div class="navbar-container">
    <span class="navbar-text">
      <img href="" src="assets/img/logo.png" alt="Logo" style="width: 30%; width="40px"; height="40px"; class="d-inline-block align-top">
     
    <div class="ms-auto social-icon">
      <a href="https://www.linkedin.com/in/ebru-kemikkiran-90b86ab2" target="blank"><img src="assets/img/linkedin.png" alt="LinkedIn"></a>
      <a href="https://twitter.com/EKemikkirann" target="blank"><img src="assets/img/twitter.png" alt="Twitter"></a>
      <a href="https://github.com/EbruKemikkiran" target="blank"><img src="assets/img/github.png" alt="GitHub"></a>
    </div>
      
    <button class="btn btn-secondary dropdown-toggle vvd" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
      <span>Let's Connect</span></button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a class="dropdown-item" href="#projects">Projects</a></li>
          <li><a class="dropdown-item" href="#footer">Contacts</a></li>
        </ul>
      </span>
  </div>
</nav>
    
<section class="banner" id="home">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-xs-12 col-md-6 col-xl-7 animate__animated animate__fadeIn">
        <span class="tagline">Welcome to my Portfolio</span>
          <h1>Hi! I'm Ebru</h1>
            <p>I am the founder of Pepper Tech Studio, a software development company based in London. With an MSc degree in Software Engineering and specialization in backend development with .NET, I am dedicated to bringing your business ideas to life through creative development solutions.</p>
            
            <button class="button"><a href="#footer" style="display: block;"><span>Get a Quote</a></span></button>
      </div>
      
      <div class="col-xs-12 col-md-6 col-xl-5 animate__animated animate__zoomIn">
        <img src="assets/img/header-img.png" alt="Header Img">
      </div>
      </div>
</section>
              
<section class="project" id="projects">
  <div class="container">
    <div class="row">
      <div class="col">
        <h2>Projects</h2>
          <p>I have experience in backend module projects developed with .NET. Additionally, I have worked on full-stack .NET API and Blazor projects, some of which were built using HTML5, CSS, and JavaScript. You can find prototypes of these projects on my GitHub repositories. Currently, I am also involved in developing hybrid web and mobile applications with .NET MAUI. Feel free to stay updated with my latest projects by checking out my private repositories on GitHub.</p>
          
          <ul class="link-list">
            <li><a href="http://www.ebrukemikkiranprojects.rf.gd/index.php?i=1#homep" target="_blank"><p>- NHS Covid-19.</p></a></li>
            <li><a href="https://www.sglettings.com" target="_blank"><p>- SG Lettings</p></a></li>
            <li><a href="https://github.com/EbruKemikkiran/EEcommerce" target="_blank"><p>- Blazor ecommerce</p></a></li>
          </ul>

        <div id="projects-tabs">
          <ul class="nav nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
            
            <li class="nav-item"><a class="nav-link active" id="first-tab" data-bs-toggle="pill" href="#first" role="tab" aria-controls="first" aria-selected="true"><img src="assets/img/softwarecode.png" alt="Img" style="width: 40%; filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%);"></a></li>
            
            <li class="nav-item"><a class="nav-link" id="second-tab" data-bs-toggle="pill" href="#second" role="tab" aria-controls="second" aria-selected="false"><img src="assets/img/webdevelopment.png" alt="Img" style="width: 40%; filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%);"></a></li>
            <li class="nav-item"><a class="nav-link" id="third-tab" data-bs-toggle="pill" href="#third" role="tab" aria-controls="third" aria-selected="false"><img src="assets/img/consultant.png" alt="Img" style="width: 40%; filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%);"></a></li>
          </ul>
        
          <div class="tab-content" id="pills-tabContent">
            
            <div class="tab-pane fade" id="first" role="tabpanel" aria-labelledby="first-tab">
              <div class="proj-imgbx">
                <a href="https://github.com/EbruKemikkiran" target="_blank"><img src="assets/img/project-img5.jpg" alt="title" /></a>
              </div>
              
              <h2>Software Development</h2>
                <p>I have experience in developing backend modules with .NET, as well as projects involving .NET API. You can explore some prototypes of these projects on my GitHub repositories. Moreover, I am currently engaged in the development of hybrid web and mobile applications using .NET MAUI.</p>
            </div>
                              
            <div class="tab-pane fade" id="second" role="tabpanel" aria-labelledby="second-tab">
              <div class="proj-imgbx">
                <a href="https://github.com/EbruKemikkiran" target="_blank"><img src="assets/img/project-img1.jpg" alt="title" /><a/>
              </div>
              
              <h2>Web Development</h2>
                <p>I have experience in developing full-stack projects using HTML5, CSS, JavaScript, PHP, and .NET Blazor. You can also explore prototypes of these projects on my GitHub repositories.</p>
            </div>
                      
            <div class="tab-pane fade" id="third" role="tabpanel" aria-labelledby="third-tab">
              <div class="proj-imgbx">
                <img src="assets/img/project-img6.jpg" alt="title" />
              </div>

              <h2>Technology Consulting</h2>
                <p>I provide coaching services where I create and continually develop solutions to offer technology consulting, support, and updates, guiding you successfully through your digital journey.</p>
                <ul class="link-list">
                  <li><a href="https://github.com/EbruKemikkiran/product_analysis_ifood_chi_square" target="_blank"><p>- Python Data Science 'Product Purchasing Behaivour Analysis' </p>.</a></li>
                  <li><a href="https://github.com/EbruKemikkiran/IFOOD-CAMPAIGN-ANALYSIS" target="_blank"><p>- Python Data Science 'Campaign Analysis'</p></a></li>

                </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="skill" id="skills">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="skill-bx wow zoomIn">
          <h2>Skills</h2>
            <p>As a backend software engineer, I specialize in working with the .NET Framework and .NET API. I develop modern and user-friendly websites, as well as full-stack web applications, using .NET Blazor, HTML, CSS, and JavaScript. I tailor these solutions to meet my clients' specific requirements and consult them on their technology needs. Additionally, I have a strong proficiency in SQL and database management.</p>
          
          <div id="skill-slider" class="owl-carousel owl-theme skill-slider">
            <div class="item">
              <h5>Software Engineering</h5>
                <img src="assets/img/meter1.png" alt="Image" />  
            </div>

            <div class="item">
              <h5>Web Development</h5>
                <img src="assets/img/meter2.png" alt="Image" />
            </div>

            <div class="item">
              <h5>Technology Consultant</h5>
                <img src="assets/img/meter3.png" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</section>

<section>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="footer-social-icon ms-auto">
            <span>
              <img href="" src="assets/img/logo.png" alt="Logo" style="width: 30%; width="30" height="30" ">
            </span>
            <div class="image">
              <a href="mailto:kemikkiranebru@hotmail.com">
                <img src="assets/img/email.png" alt="Email">
              </a>
              <a href="https://wa.me/+447379952444" target="blank">
                <img src="assets/img/whatsapp.png" alt="Whatsapp">
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <p class="text-center text-sm-end">Copyright 2022. All Rights Reserved by Ebru Kemikkiran</p>
        </div>
      </div>
    </div>
  </footer>
</section>

`;


const customContainerStyle = `
.container {
    margin-top: 5px; /* İstediğiniz margin değerini buradan ayarlayabilirsiniz */
}
`;

// Stili ekleyerek özelleştirilmiş container'ın margin değerini ayarlayın
    const styleElement = document.createElement("style");
    styleElement.innerHTML = customContainerStyle;
    bannerElement.appendChild(styleElement);

  }




  
  // Contact component
  function renderContact() {
    const contactElement = document.getElementById("contact");
    contactElement.innerHTML = `
      <div>
        <!-- Your contact form or information here -->
      </div>`;
  }
  
  // Footer component
  function renderFooter() {
    const footerElement = document.getElementById("footer");
    footerElement.innerHTML = `
      <footer>
        <!-- Your footer content here -->
      </footer>`;
  }
  
  // Render all components
  function renderApp() {
    //renderNavBar();
    renderBanner();
    renderSkills();
    renderProjects();
    renderContact();
    renderFooter();
  }
  
  // Call renderApp function to render all components
  renderApp();
  
