import { Suspense } from "react";
import Heading  from "./components/Heading"
import Navbar from "./components/Navbar"
import Ordercontainer from "./components/Ordercontainer";
import State from "./components/State"
import { ToastContainer } from "react-toastify";

const loadOrders = () => fetch('/public/orders.json').then((res)=> res.json());

function App() {

   const orderPromise = loadOrders();
  //  console.log(orderPromise);

  return (
    <>
      <div>
        <header className="w-11/12 mx-auto py-3">
          <Navbar></Navbar>
        </header>
        <section>
          <Heading title = {'Kitchen Home'}></Heading>
        </section>
        <section>
          <Suspense fallback={<h2>Data Will Be Loading....</h2>}>
            <Ordercontainer orderPromise={orderPromise}></Ordercontainer>
          </Suspense>

          <ToastContainer></ToastContainer>
        </section>
      </div>
    </>
  )
}

export default App
