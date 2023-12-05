interface Item {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const getData = async () => {
  try {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=10',
    );
    // await new Promise((resolve) => setTimeout(resolve, 2500));
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function ListExample() {
  const data = await getData();
  return (
    <div>
      {data.map((item: Item, idx: number) => (
        <div key={idx}>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}
