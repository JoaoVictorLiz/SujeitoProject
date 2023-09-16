import styles from './styles.module.scss';
import Image from 'next/image';
import Logo from '../../../public/images/logo.svg'
import { ActiveLink } from '../ActiveLink';

export function Header() {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
            <ActiveLink href="/" activeClassName={styles.active}>
                <a><Image src={Logo} alt='sujeito programador'/></a>
            </ActiveLink>
    
            <nav>
                <ActiveLink href="/" activeClassName={styles.active}>
                    <a>Home</a>
                </ActiveLink>
                <ActiveLink href="/posts" activeClassName={styles.active}>
                    <a>Conteúdos</a>
                </ActiveLink>
                <ActiveLink href="/sobre" activeClassName={styles.active}>
                    <a>Quem somos?</a>
                </ActiveLink>
            </nav>
    
            <a type='button' className={styles.readyButton} href="https://github.com/JoaoVictorLiz">COMEÇAR</a>
            </div>
      </header>
    )
}