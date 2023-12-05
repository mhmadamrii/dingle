import { DialogPage } from '~/components/shared/zahir-dialog';

const getData = async () => {
  try {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=10',
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Root() {
  const data = await getData();
  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <center>
        <h1>Hello world</h1>
        <DialogPage isHasHeader headerTitle="lorem ipsum dolor sit amet">
          <div>Testing</div>
        </DialogPage>
      </center>
    </main>
  );
}
