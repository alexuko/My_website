console.log('WELCOME');
var welcomeHTML,academicHTML,portfolioHTML,skillsHTML,contactHTML, footerHTML;


loadFiles();
hideAllDisplays();


function collapseElement(){
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle('showing');
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;        
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
      });
    }
};

function hideAllDisplays(){
    document.getElementById('display-1').style.display = 'none';
    document.getElementById('display-2').style.display = 'none';
    document.getElementById('display-3').style.display = 'none';
    document.getElementById('display-4').style.display = 'none';
    document.getElementById('display-5').style.display = 'none';
};

function loadFiles(){
    $.get('./snippets/welcome.html', function(data) {
        welcomeHTML = data;
    }, "text");
    $.get('snippets/academic.html', function(data) {
        academicHTML = data;
    }, "text");
    $.get('snippets/portfolio.html', function(data) {
        portfolioHTML = data;
    }, "text");
    $.get('snippets/skills.html', function(data) {
        skillsHTML = data;
    }, "text");
    $.get('snippets/contact.html', function(data) {
        contactHTML = data;
    }, "text");
}

function showContent(where,what){
    document.getElementById('display-0').style.display = 'none';    
    hideAllDisplays();
        document.getElementById(where).style.display = 'flex';
        console.log(where);
        console.log(what);
        switch(what){
            case "welcome":
                    document.getElementById(where).innerHTML = welcomeHTML;
                    break;
            case "academic":
                    document.getElementById(where).innerHTML = academicHTML;
                    getStudies();
                    getCourses();
                    getCert();
                    collapseElement();
                    break;
            case "portfolio":
                    document.getElementById(where).innerHTML = portfolioHTML;
                    getPortfolio();
                    collapseElement();
                    break;
            case "skills":
                    document.getElementById(where).innerHTML = skillsHTML;
                    getProSkills();
                    break;
            case "contact":
                    document.getElementById(where).innerHTML = contactHTML;
                    break;
            default:
                console.log('Nothing to show! ')
        }
}

var alex = {
    name:'Alejandro',
    surname:'Rivera',
    dateOfBirth:'01/08/1985',
    address:'Apt 56 Alexandra Place, East Road, East Wall, Dublin 3',
    number:'+353 894841490',
    email:'alejandro.rivera.m18@gmail.com',
    education:[{area:'I.T.',
                institution:'College of Computing Technology, CCT College Dublin',
                logo:'https://www.cct.ie/wp-content/themes/hdcct/img/atoms/logo.jpg',
                course:'BSc in Information Technology',
                address:'Westmoreland St, Dublin 2 ',
                period:'September 2015 - November 2018',
                mark:'NFQ Level 7 - 3.25 GPA, Distinction',
                website:'https://www.cct.ie'},

                {area:'Accountancy',
                institution:' National Autonomous University of Mexico, Faculty of Accounting and Administration. ',
                logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWWGXA9uLiXm43O80l4-5YHjtoUktutFOB3b_zmRxhnlc_NwJrGQ',
                course:'BA of Accountancy',
                address:'UNAM- Mexico City ',
                period:' August 2005 - December 2010',
                mark:'8.37',
                website:'http://www.fca.unam.mx/'}
            ],

    projects:[{project:'BUDGET APP',
               photo:'https://github.githubassets.com/images/modules/open_graph/github-mark.png',
               link: 'https://github.com/alexuko/Budgety',
               description:' Application based mainly in JavaScript using the Module pattern. It takes incomes and expenses for certain month and the app calculates how much the user have earned and spent in relation to the month. It also allows you to delete items from the list if a mistake occurs, updating the list of items, their percentages and the global bugdet display.'},
              
               {project:'KQR-Tags',
               photo:'./img/kqrtags.jpg',
               link: 'https://kqrtags.000webhostapp.com',
               description:'Management website for the, kqr tags application that reads and stores data from the QR codes embedded in the keys. Created in PHP, SQL, JavaScript, HTML and CSS. Developed under the CRUD functions.'},
              
               {project:'News Feed App',
               photo:'https://github.githubassets.com/images/modules/open_graph/github-mark.png',
               link: 'https://github.com/alexuko/My_App_FB_News',
               description:'Application created in JavaScript, HTML, CSS and Framework7 API. It displays relevant news from the website https://newsapi.org/, adds customized school news and uses Facebook-login API as the access security method.'},
              
               {project:'DIY Shop',
               photo:'https://github.githubassets.com/images/modules/open_graph/github-mark.png',
               link: 'https://github.com/alexuko/DIYshop',
               description:'Web application based in PHP, SQL, CSS, HTML, JavaScript and Jquery mobile. It’s a DIY online shop application where customers sign up and log in, then after they can add items to their cart and buy them. Moreover, the app counts with customized interfaces depending on the user\'s type, giving them different privileges or restrictions within the app.'},
            ],
    professionalSkills:[{skill:'Html',level:'95'},
                        {skill:'CSS',level:'85'},
                        {skill:'SASS/SCSS',level:'50'},
                        {skill:'JavaScript',level:'75'},
                        {skill:'Jquery',level:'45'},
                        {skill:'java',level:'60'},
                        {skill:'php',level:'55'},
                        {skill:'node.js',level:'40'},
                        {skill:'typescript',level:'15'},
                        {skill:'linux',level:'80'},
                        {skill:'windows/server',level:'75'},
                        {skill:'sql',level:'63'},
                        {skill:'Routing',level:'68'},
                        {skill:'Switching',level:'65'},
                        {skill:'github',level:'48'},
                        {skill:'uml',level:'45'},
                        {skill:'docker',level:'15'},
                        {skill:'r',level:'10'},                       
                    ],
   
    courses:[{course:'Java',
                name:'Complete Java Masterclass',
                description:'Provides you with the Java skills to perform as a developer, understanding the concepts of the language. Being able to build your own Java apps and be productive as a software developer',
                image:'https://udemy-images.udemy.com/course/480x270/533682_c10c_4.jpg',
                link:'https://www.udemy.com/java-the-complete-java-developer-course/'},

            {course:'JavaScript',
                name:'Complete JavaScript Course',
                description:'JavaScript and programming fundamentals, Asynchronous JavaScript, patterns,arrow functions, classes, default and rest parameters and construction of modern web applications',
                image:'https://udemy-images.udemy.com/course/480x270/851712_fc61_5.jpg',
                link:'https://www.udemy.com/the-complete-javascript-course/'},
                
            {course:'Python',
                name:'Learn Python Programming Masterclass',
                description:'Foundation in Python programming.',
                image:'https://udemy-images.udemy.com/course/480x270/629302_8a2d_2.jpg',
                link:'https://www.udemy.com/python-the-complete-python-developer-course'},

            {course:'AWS',
                name:'AWS Essentials',
                description:'Learn AWS the core services, features, and benefits, while also gaining valuable hands-on experience',
                image:'https://udemy-images.udemy.com/course/480x270/1036550_76f9.jpg',
                link:'https://www.udemy.com/aws-essentials/'},
            
            {course:'AWS',
                name:'AWS Certified Cloud Practitioner',
                description:'Prepares you to pass the AWS Certified Cloud Practitioner exam, learn the foundations of cloud computing and AWS, including its primary services, benefits, and use cases. ',
                image:'https://res.cloudinary.com/acloud-guru/image/fetch/w_200,h_200,q_auto,q_auto/https%3A%2F%2Facloudguru-content-assets-production.s3-accelerate.amazonaws.com%2Faws-certified-cloud-practitioner-2-square.png',
                link:'https://acloud.guru/learn/aws-certified-cloud-practitioner'},    

            {course:'Git',
                name:'Command Line Essentials: Git Bash for Windows',
                description:'Designed to cut academic theory to just the key concepts and focus on basics tasks in the Bash command line in order to be productive quickly',
                image:'https://udemy-images.udemy.com/course/480x270/470424_5521.jpg',
                link:'https://www.udemy.com/git-bash/'},

            {course:'GitHub',
                name:'Git Started with GitHub',
                description:'This course is designed to jump right into showing how Git and GitHub work together, focusing on the Git basic workflow.',
                image:'https://udemy-images.udemy.com/course/480x270/500632_e820.jpg',
                link:'https://www.udemy.com/git-started-with-github'}
            ],            
    
    certifications:[{institution:'Amazon Web Services',
                        icon:'./img/AWSBadge.png',
                        certification:'AWS Certified Cloud Practitioner',
                        certNumber:'9SG85JPKKMVEQ7GV',
                        valid:'From Jan 24, 2019 to Jan 24, 2022',
                        PDF:'./img/AWScertificate.pdf'}
                    ],
};

function getPortfolio(){
    var projects = document.querySelector('.projects');
    for(var i = 0; i < alex.projects.length; i++){
        projects.innerHTML +=
        '<div class="wrap">'+
        '<button class="collapsible">'+alex.projects[i].project +'</button>'+
        '<div class="collapsible-content ">'+
                '<img class="small-image" src="'+alex.projects[i].photo +'" alt="Institution-image"></a><br>'+
                '<article>'+
                    '<h5><strong>Description:</strong></h5>'+
                    '<p>'+alex.projects[i].description +'</p>'+
                    '<h5><strong>Link: </strong></h5> <p><a class="site" href="'+alex.projects[i].link +'" target="_blank">'+alex.projects[i].link +'</a></p>'+
                '</article>'+ 
        '</div>'+
        '</div>';
    };
}

function getProSkills(){
    var skills_set = document.querySelector('.skillBox');
    for(var i = 0; i < alex.professionalSkills.length; i++){
        skills_set.innerHTML +=
        '<p>'+alex.professionalSkills[i].skill+'</p>'+
            '<p class="percent">'+alex.professionalSkills[i].level+'%</p>'+
            '<div class="skill">'+
               '<div class="skill_level" style="width:'+alex.professionalSkills[i].level+'%"></div>'+
            '</div>';
    };
};

function getCourses(){
    var crs =document.querySelector('.third');
        for(var i = 0; i < alex.courses.length; i++){
            crs.innerHTML +=
            '<button class="collapsible">'+alex.courses[i].course+'</button>'+
            '<div class="collapsible-content">'+
                    '<img class="small-image" src="'+alex.courses[i].image +'" alt="Institution-image"></a><br>'+
                    '<article>'+
                        '<h5><strong>Name:</strong></h5>'+
                        '<p>'+alex.courses[i].name+'</p>'+
                        '<h5><strong>Description:</strong></h5>'+
                        '<p>'+alex.courses[i].description+'</p>'+
                        '<h5><strong>Link: </strong></h5><p><a class="site" href="'+ alex.courses[i].link+ '" target="_blank">'+ alex.courses[i].link+ '</a></p>'+
                    '</article>'+ 
            '</div>';
        };
}   


function getStudies(){
    var edu =document.querySelector('.first');
        for(var i = 0; i < alex.education.length; i++){
            edu.innerHTML +=
            '<button class="collapsible">'+ alex.education[i].area +'</button>'+
            '<div class="collapsible-content">'+
                    '<img class="small-image" src="'+ alex.education[i].logo +'" alt="Institution-image"></a><br>'+
                    '<article>'+
                        '<h5><strong>Institution:</strong></h5>'+
                        '<p>'+ alex.education[i].institution+'</p>'+
                        '<h5><strong>Course:</strong></h5>'+
                        '<p>'+ alex.education[i].course+'</p>'+
                        '<h5><strong>Period:</strong></h5>'+
                        '<p>'+ alex.education[i].period+'</p>'+
                        '<h5><strong>Address:</strong></h5>'+
                        '<p>'+ alex.education[i].address+'</p>'+
                        '<h5><strong>Mark:</strong></h5>'+
                        '<p>'+ alex.education[i].mark+'</p>'+
                        '<h5><strong>Site: </strong></h5><p><a class="site" href="'+ alex.education[i].website+ '" target="_blank">'+ alex.education[i].website+ '</a></p>'+
                    '</article>'+ 
            '</div>';
          
        };
}

function getCert(){
    var cert =document.querySelector('.second');
        for(var i = 0; i < alex.certifications.length; i++){
            cert.innerHTML +=
            '<button class="collapsible">'+alex.certifications[i].institution +'</button>'+
                '<div class="collapsible-content">'+
                    '<img class="small-image" src="'+alex.certifications[i].icon +'" alt="Institution-image"></a><br>'+
                    '<article>'+
                        '<h5><strong>Type:</strong></h5>'+
                        '<p>'+ alex.certifications[i].certification + '</p>'+
                        '<h5><strong>Certificate No:</strong></h5>'+
                        '<p>'+ alex.certifications[i].certNumber + '</p>'+
                        '<h5><strong>Validity :</strong></h5>'+
                        '<p>'+ alex.certifications[i].valid + '</p>'+
                        '<h5><strong>View: </strong></h5><p><a class="site" href="'+ alex.certifications[i].PDF+ '" target="_blank" download>Certificate_PDF</a></p>'+
                    '</article>'+
                '</div>';
        };
}   


function getLanguages(){
    var lang =document.querySelector('.fourth');
            for(var i = 0; i < alex.languages.length; i++){
            lang.innerHTML +=
            '<div class="wrap">'
                +'<div class="collapse slide">'
                    +'<h5>'+alex.languages[i].language+'</h5>'
                    +'<p class="text">Level: '+ alex.languages[i].level
                    +'</p>'
                +'</div>'
            +'</div>'; 
        };
    
}
