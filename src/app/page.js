async function getData() {
    const res = await fetch('https://bilmervipapi.pythonanywhere.com/next_api/all-news/')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Page() {
    const data = await getData()
    console.log(data);

    return <main></main>
}