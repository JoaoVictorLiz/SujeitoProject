import { GetStaticProps } from 'next'
import style from './style.module.scss'
import Head from 'next/head'
import {getPrismicClient} from '../../services/prismic'
import {RichText} from 'prismic-dom'
import Prismic from '@prismicio/client'

import {FaInstagram, FaLinkedin, FaFacebook, FaGithub} from 'react-icons/fa'

type Content = {
    title: string; 
    description: string;
    banner: string; 
    facebook: string;
    instagram: string; 
    github: string; 
    linkedin: string;
}

interface ContentProps {
    content: Content;
}

export default function Sobre({content}: ContentProps) {
    return (
       <>
        <Head>
            <title>Quem somos?</title>
        </Head>

        <main className={style.container}>
            <div className={style.containerHeader}>
                <section className={style.ctaText}>
                    <h1>{content.title}</h1>
                    <p>{content.description}</p>

                    <a href={content.facebook} target='_blank'>
                        <FaFacebook size={40}/>
                    </a>

                    <a href={content.instagram} target='_blank'>
                        <FaInstagram size={40}/>
                    </a>

                    <a href={content.github} target='_blank'>
                        <FaGithub size={40}/>
                    </a>

                    <a href={content.linkedin} target='_blank'>
                        <FaLinkedin size={40}/>
                    </a>
                </section>

                <img src={content.banner} alt="Sobre nos" />

            </div>
        </main>
       </>
    )
}

export const getStaticProps: GetStaticProps = async () => {

     const prismic = getPrismicClient();

     const response = await prismic.query([
        Prismic.Predicates.at('document.type', 'about')
     ])

     const {title, description, banner, facebook, instagram, github, linkedin} = response.results[0].data;

     const content = {
        title: RichText.asText(title),
        description: RichText.asText(description),
        banner: banner.url,
        facebook: facebook.url,
        instagram: instagram.url,
        github: github.url,
        linkedin: linkedin.url
     }

    return {
        props: {
            content
        },
        revalidate: 60 * 15
    }
}