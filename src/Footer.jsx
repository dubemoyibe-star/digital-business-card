import twitter from './assets/images/Twitter.png'
import facebook from './assets/images/Facebook.png'
import instagram from './assets/images/Instagram.png'
import linkedin from './assets/images/linkedln2.png'

export default function Footer(){
    return(
       <footer>
           <img src={twitter} alt="twitter icon" /> 
           <img src={facebook} alt="facebook icon" /> 
           <img src={instagram} alt="instagram icon" />
           <img src={linkedin} alt="linkedln icon" /> 
       </footer>
    )
}