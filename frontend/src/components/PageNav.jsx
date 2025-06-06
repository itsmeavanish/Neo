import Logo from './Logo'
import styles from "./PageNav.module.css"
import { Navbar } from '../stylings/Navbar'
import Button from './Button'
import { StyledNavLink } from '../stylings/StyledNavLink'
import { DIV } from '../stylings/DIV'

export default function PageNav() {
  const a=false;
  return (
    <DIV>
      <Navbar className={styles.nav}>
          <Logo />
    <span></span>
    <ul>
        <li>
            <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
            <StyledNavLink to="/news">News</StyledNavLink>
        </li>
        <li>
            <StyledNavLink to="/products">Feedback</StyledNavLink>
        </li>
        {a ?<li>
          <StyledNavLink to="/login"><Button type="primary" >Login / SignUp</Button></StyledNavLink>
        </li>:<Button type="primary">NEO</Button>}
    </ul>

 </Navbar>
    </DIV>
  )
}
