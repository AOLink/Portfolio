import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
export default {
    name: "Debo Oduwole",
    title: "Software Engineeer",

    // birthday: 'August 42th 1952',
    email: 'aolink101@gmail.com',

    socials: {
        Facebook: {
            link: 'https://www.facebook.com',
            text: 'Add on Facebook',
            icon: <FacebookIcon/>
         },

         Twitter: {
            link: 'https://www.twitter.com',
            text: 'Follow on Twitter',
            icon: <TwitterIcon/>

         },

         LinkdIn: {
            link: 'https://www.linkedin.com',
            text: 'Connect on LinkedIn',
            icon: <LinkedInIcon/>
         },

         GitHub: {
            link: 'https://www.github.com',
            text: 'Watch on Github',
            icon: <GitHubIcon/>
         },

    }
}

