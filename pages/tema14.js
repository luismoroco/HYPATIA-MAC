// Tema 14

//For next imports
import Head from 'next/head'

//For katex imports
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next';

//Own imports
import Layout  from '../components/layout';
import styles from './tema14.module.css';


//Vars, functions and consts
let expr1 = "$\\gamma_{1}^2 + x = y^2$" // Example


const tema14 = () => {
    return (
        <Layout>
            <Head>
                <title>Hypatia - Tema 14</title>
            </Head>
            <div className="container mx-auto m-6 rounded-md shadow-xl">

                {/* AQUI VA SU CONTENIDO */}
                Hola mundo

            </div>
        </Layout>        
    );
}

export default tema14;