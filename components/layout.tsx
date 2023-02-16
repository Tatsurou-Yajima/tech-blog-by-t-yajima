import Link from 'next/link';
import Script from 'next/script'

import styles from '../styles/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Profile from './Profile';
import Logo from './Logo';
import SiteHead from './Head';

export const siteTitle = 'YajiMaga-TECH'
export const description = 'サーバーサイドエンジニアの技術ブログです。バグ解消法や最近学んだことなどを発信していきます。'
export const defaultImagePath = 'https://images-for-yajima-tech-blog.s3.ap-northeast-1.amazonaws.com/top-image-20230214.jpg'

export default function Layout({
    children,
    home
}: {
    children: React.ReactNode
    home?: boolean
}) {
    return (
        <div>
            <SiteHead />
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
            />
            <header className={styles.header}>
                <Logo />
                {home && (
                    <div className={styles.width100}>
                        <img className={utilStyles.topImage} src='https://images-for-yajima-tech-blog.s3.ap-northeast-1.amazonaws.com/20221216085448.jpg' />
                    </div>
                )}
            </header>
            <div className={`${styles.content}`}>
                <main className={styles.main}>
                    <div className={styles.contentInner}>
                        <div className={`${styles.container} ${styles.boxShadow}`}>
                            {children}
                            {!home && (
                                <div className={styles.backToHome}>
                                    <Link href="/">← TOP</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </main>
                <div id='side' className={styles.side}>
                    <Profile />
                </div>
            </div>
        </div>
    );
}
