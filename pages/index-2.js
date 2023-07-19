import Title from "@/components/Title";
import Head from "next/head";

//sama kayak const HomePage = () =>{}
//sama kayak const HomePage: React.FC = () =>{}
// Client sude
const products = [
  {
    id: 1,
    title: "First Product",
  },
  {
    id: 2,
    title: "Second Product",
  },
];
function HomePage2() {
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title>Next Shop</Title>
        {/* <p>[TODO LIST: DISPLAY PRODUCT DUCT DUCT DUCT]</p> */}
        <ul>
          {products.map((product)=>(
            <li key={product.id}>
              {product.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage2;
