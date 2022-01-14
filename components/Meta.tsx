import Head from 'next/head'

const Meta = ({title, keywords, description}: {title: string, keywords: string, description: string}) => {
    return (
        <Head>
          <title>{title}</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name="keywords" content={keywords} />
          <meta name='description' content={description} />
          <meta charSet='utf-8' />
          <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,400;0,600;0,700;1,500&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;500;600&family=Libre+Franklin:ital,wght@0,400;0,600;0,700;1,500&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,400;0,600;0,700;1,500&family=VT323&display=swap" rel="stylesheet" />
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Welcome to Dirt Hand.',
    keywords: 'Dirt, Hand, Arun, jazz, scum jazz, improv',
    description: 'A music devoid of purity'
}

export default Meta