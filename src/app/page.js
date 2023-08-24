async function getData() {
    const res = await fetch('https://bilmervipapi.pythonanywhere.com/next_api/all-news/', { next: { revalidate: 3 } }, { cache: 'no-store' })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
    
}

export default async function Home() {
    const data = await getData()
    console.log(data);
    
    
    

    return <main>
        {data.map((item) => {
            return (
                <>
                <h2>{item.news_title}</h2>
            </>
            )
        })}
    </main>
}