import Title from "@/components/Title";
import { getProducts } from "@/lib/products";
import Head from "next/head";

//sama kayak const HomePage = () =>{}
//sama kayak const HomePage: React.FC = () =>{}
//Server sude
// const products = [
//   {
//     id: 1,
//     title: "First Product",
//   },
//   {
//     id: 2,
//     title: "Second Product",
//   },
// ];

export async function getStaticProps() {
  console.log("Tes HomePage1 getStaticProps");
  const products = await getProducts();
//   const products = await response.json();
  return { props: { products } };
}
function HomePage1({products}) {
    console.log("Tes HomePage1 render ",products);
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title>Next Shop</Title>
        {/* <p>[TODO LIST: DISPLAY PRODUCT DUCT DUCT DUCT]</p> */}
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage1;
