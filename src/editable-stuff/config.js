import splashAnimation from "../assets/img/loading";
// Navigation Bar SECTION
const navBar = {
    show: true,
};

// Splash Screen
const splashScreen = {
    enabled: true, // set false to disable splash screen
    animation: splashAnimation,
    duration: 3000 // Set animation duration as per your animation
};

// Main Body SECTION
const mainBody = {
    gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
    firstName: "Juhyun",
    middleName: "",
    lastName: "Kim",
    message: " Passionate about analzing the performance marketing. ",
    icons: [{
            image: "fa-github",
            url: "https://github.com/hashirshoaeb",
        },
        {
            image: "fa-facebook",
            url: "https://www.facebook.com/hashirshoaeb",
        },
        {
            image: "fa-instagram",
            url: "https://www.instagram.com/hashirshoaeb/",
        },
        {
            image: "fa-linkedin",
            url: "https://www.linkedin.com/in/hashirshoaeb/",
        },
        {
            image: "fa-twitter",
            url: "https://www.twitter.com/hashirshoaeb/",
        },
    ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
    show: true,
    heading: "About Me",
    imageLink: require("../editable-stuff/hashirshoaeb.png"),
    imageSize: 375,
    message: "My name is Juhyun Kim. A passionate Performance Marketer. 🚀 having an experiencein marketing services and managing marketing strategies to maximize performance marketing . see my resume below ",
    resume: "https://drive.google.com/file/d/1qZUgT2hhbCvL8HBS30qf6mByRRxNFDpj/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
    show: false,
    heading: "Recent Projects",
    gitHubUsername: "hashirshoaeb", //i.e."johnDoe12Gh"
    reposLength: 4,
    specificRepos: [],
};

// Leadership SECTION
const leadership = {
    show: false,
    heading: "Leadership",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
    images: [{
            img: require("../editable-stuff/hashirshoaeb.png"),
            label: "First slide label",
            paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
            img: require("../editable-stuff/hashirshoaeb.png"),
            label: "Second slide label",
            paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
    ],
    imageSize: {
        width: "615",
        height: "450"
    }
};

// SKILLS SECTION
const skills = {
    show: false,
    heading: "Skills",
    hardSkills: [
        { name: "Python", value: 90 },
        { name: "SQL", value: 75 },
        { name: "Data Structures", value: 85 },
        { name: "C/C++", value: 65 },
        { name: "JavaScript", value: 90 },
        { name: "React", value: 65 },
        { name: "HTML/CSS", value: 55 },
        { name: "C#", value: 80 },
    ],
    softSkills: [
        { name: "Goal-Oriented", value: 80 },
        { name: "Collaboration", value: 90 },
        { name: "Positivity", value: 75 },
        { name: "Adaptability", value: 85 },
        { name: "Problem Solving", value: 75 },
        { name: "Empathy", value: 90 },
        { name: "Organization", value: 70 },
        { name: "Creativity", value: 90 },
    ],
};

// GET IN TOUCH SECTION
const getInTouch = {
    show: true,
    heading: "Get In Touch",
    message: "I'm currently looking for digital planning marketer opportunities! If you know of any positions available, or if you have any questions, or if you just want to say hi, please feel free to email me at",
    email: "rlawngus474@naver.com",
};

const experiences = {
    show: true,
    heading: "Work Experience",
    data: [{
            company_name: 'Lee & Mock Patents',
            role: 'Assistant of Overseas management', // Here Add Company Name
            companylogo: require('../assets/img/leemock.jpeg'),
            date: 'March 2019 – June 2019',
            mainwork: 'Preparing examination reference data and IDS(Information disclosure statement) reports',
            content: {
                one: 'Digitized supporting documentation associated with Notice of Examination and input to SIMPS',
                two: 'Research USPTO(U.S. Patent and Trademark Office) data reports',
                three: 'Processed invoices and purchase orders related to projects under development',
            },
            tag: {
                one: 'SIMPS',
                two: 'Assistant intern',
                three: 'managing reports',
                four: 'DDD data',
            }
        },
        {
            company_name: 'GSK',
            role: 'Administrative assistant performing in Sales Excellence',
            companylogo: require('../assets/img/gsk.png'),
            date: 'August 2020 – Feburary 2021',
            mainwork: 'Administrative assistant performing in Sales Excellence',
            content: {
                one: 'Target analyst for 2021 with several scenarios',
                two: 'Analysis for sales figures on a weekly/monthly basis and management for Sales Performance',
                three: 'MCM support, management Webinar attendee data, management for Sunshine Repor',
            },
            tag: {
                one: 'Sales Excellence',
                two: 'DDD data',
                three: 'HIRA data',
                four: 'IMD data analysis',
            }
        },
        {
            company_name: 'Omnicom',
            role: 'Performance Marketer', // Here Add Company Name
            companylogo: require('../assets/img/omnicom.jpg'),
            date: 'April 2021 – Present',
            mainwork: 'Advertising and brand marketing on Bentz, Audi, Sanofi etc..',
            content: {
                one: 'most valuable KPIs are credited and paid out based on defined performance metrics.',
                two: 'control new customer acquisitions, market expansion, customer segmentation targeting, and high ROI campaigns.',
                three: 'trigger measurable user reactions and/or transactions.',
            },
            tag: {
                one: 'CPC',
                two: 'CPM',
                three: 'LTV',
                four: 'CTR control',
            }
        },
    ]
}

const bigProjects = {
    title: "Big Projects",
    subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
    projects: [
      {
        image: require("../assets/img/benz_renew.png"),
        projectName: "Mercedes Benz",
        projectDesc: "To strategically enhance customer's perception of brand mercedes-Benz as the strongest luxury brand,​ working on efficiency analysis of performance advertisements.",
        projectDetailed: "Mercedes-Benz, commonly referred to as just Mercedes, is a German luxury automotive brand. Both Mercedes-Benz and Mercedes-Benz AG are headquartered in Stuttgart, Baden-Württemberg, Germany. Mercedes-Benz produces consumer luxury vehicles and commercial vehicles.",
        footerLink:
          {
            name: "Visit Website",
            url: "https://www.mercedes-benz.co.kr/"
          },
        detailedImage:{
            one: require("../assets/img/benz_0.jpg"),
            two: require("../assets/img/benz_1.jpg"),
            three: require("../assets/img/benz_2.jpg"),
            four: require("../assets/img/benz_3.jpg")
        }
          //  you can add extra buttons here.
      },
      {
        image: require("../assets/img/audi.png"),
        projectName: "Audi",
        projectDesc: "In order to successfully operate the 2021 Audi new car campaign and achieve KPI, I have experience in establishing media mix and serving professional marketing strategies.",
        projectDetailed: "Audi AG is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany. As a subsidiary of its parent company, the Volkswagen Group, Audi produces vehicles in nine production facilities worldwide.",
        footerLink:
          {
            name: "Visit Website",
            url: "https://www.audi.co.kr/kr/web/ko.html"
          },
        detailedImage:{
            one: require("../assets/img/audi_0.png"),
            two: require("../assets/img/audi_1.jpg"),
            three: require("../assets/img/audi_2.jpg"),
            four: require("../assets/img/audi_3.jpg")
        }
      },
      {
        image: require("../assets/img/sanofi.png"),
        projectName: "Sanofi",
        projectDesc: "Based on the exact number, CTR decreased by media and CPC and CPUV increased. Acheiving superior CVR on branding campaign. using Naver, Kakao, OCB, Youtube platforms. ",
        projectDetailed: "Sanofi S.A. is a French multinational healthcare company headquartered in Paris, \n France. Originally, the corporation was established in 1973 and merged with Synthélabo in 1999 to form Sanofi-Synthélabo.",
        footerLink:
          {
            name: "Visit Website",
            url: "https://www.sanofi.com/"
          },
        detailedImage:{
            one: require("../assets/img/sanopy_0.jpg"),
            two: require("../assets/img/sanopy_1.jpg"),
            three: require("../assets/img/sanopy_2.jpg"),
            four: require("../assets/img/sanopy_3.jpg")
        }
      }
    ],
    show: true // Set false to hide this section, defaults to true
  };

const achievementSection = {
    show: true, // Set false to hide this section, defaults to true
    title: "Achievements And Certifications",
    subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

    achievementsCards: [{
            title: "Google Analytics",
            subtitle: "certified to track and report website traffic, currently as a platform inside the Google Marketing Platform brand.",
            image: require("../assets/img/googleanalytics.png"),
            footerLink: [{
                    name: "Google Ads Search",
                    url: "https://skillshop.exceedlms.com/student/catalog/list?category_ids=313-google-ads-search"
                },
                {
                    name: "Google Ads Video",
                    url: "https://skillshop.exceedlms.com/student/catalog/list?category_ids=315-google-ads-video"
                },
                {
                    name: "Google Ads Display",
                    url: "https://skillshop.exceedlms.com/student/path/18061-google-ads-display-certification"
                }
            ]
        },
        {
            title: "Google Ads",
            subtitle: "certified the ability to deliver effective advertising to meet specific marketing objectives in google platform.",
            image: require("../assets/img/googleads.png"),
            footerLink: [{
                name: "View Google Ads Certificatoin",
                url: "https://skillshop.exceedlms.com/student/catalog/list?category_ids=2844-google-ads-certifications"
            }]
        },
        {
            title: "Sql developer Certification",
            subtitle: "Certificated in applying SQL creatively to analyze data, demonstrating efficiency in writing queries, and creating data analysis datasets",
            image: require("../assets/img/sqldeveloper.png"),
            footerLink: [
                { name: "Certification", url: "" }
            ]
        },
        {
            title: "HSK Certification",
            subtitle: "Completed Certifcation from Chinese Proficient Test",
            image: require("../assets/img/hsklogo.png"),
            footerLink: [
                { name: "Certification", url: "" }
            ]
        },
        {
            title: "TOEIC Certification",
            subtitle: "Completed Certifcation from TOEIC for proficiency and standardization",
            image: require("../assets/img/toeiclogo.png"),
            footerLink: [
                { name: "Certification", url: "" }
            ]
        }
    ]
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, splashScreen, mainBody, about, repos, skills, leadership, bigProjects ,getInTouch, experiences, achievementSection };