// This is a static page for catching 404 errors
import styles from '../styles/404.module.scss';
import { useRouter } from "next/router";
import Link from "next/link";


const CatchAll = () => {

    const router = useRouter();
    const slug = router.asPath;

    return (
        <main className={styles.container}>
            <div>
                <h1>Ops...</h1>
                <p>
                    It seems that I didn't plan ahead for a
                     "<strong>{slug}</strong>" page
                </p>
                <Link href="/">Go back home</Link><br />
                <Link href="/blog">Check my blog</Link>

            </div>

        </main>
    )
}

export default CatchAll;