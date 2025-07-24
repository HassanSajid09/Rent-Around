import NavBar from "../Layout/NavBar";
import Page6 from "../Pages/Page6";
import toast, { Toaster } from "react-hot-toast";
import { SearchProvider } from "../Hooks/SearchContext";
import { useCart } from "../Hooks/UseCart";

const notify = () => toast.success("Deleted from Cart!");
const notify2 = () => {
  toast.success("You Will Recieve your Item within 2 days");
};

const Cart = () => {
  const { getCart, removeItemFromCart } = useCart();
  const cartItems = getCart();

  const handleRemoveItem = (itemId: string) => {
    removeItemFromCart.mutate(itemId);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + Number(item.price) * item.quantity,
      0
    );
  };

  return (
    <SearchProvider>
      <NavBar />
      <div className="px-4 md:px-0">
        <div className="max-w-6xl mx-auto my-5 bg-white p-6 rounded-lg shadow-md">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-semibold text-[#2c3e50]">My Cart</h2>
          </div>

          <div className="p-4">
            {cartItems.length === 0 ? (
              <p className="text-center text-lg text-gray-500">
                cart is empty.
              </p>
            ) : (
              <>
                <ul className="space-y-4">
                  {cartItems.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center justify-between border-b border-gray-200 pb-4"
                    >
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded mr-5"
                        />
                        <div>
                          <h4 className="text-lg font-medium">{item.title}</h4>
                          <p className="text-sm text-gray-500">
                            €{item.price} x {item.quantity}
                          </p>
                        </div>
                      </div>

                      <button
                        className="bg-red-500 hover:bg-red-600 text-white rounded-full px-3 py-1 text-xl transition-colors"
                        onClick={() => {
                          handleRemoveItem(item.id);
                          notify();
                        }}
                      >
                        &#10005;
                      </button>

                      <Toaster position="bottom-center" />
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between items-center mt-6">
                  <p className="text-xl font-semibold">
                    Total: €{getTotalPrice()}
                  </p>
                  <button
                    className="bg-[#303B97] hover:bg-[#1f2d6f] text-white font-semibold py-3 px-6 rounded transition-colors"
                    onClick={notify2}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Page6 />
    </SearchProvider>
  );
};

export default Cart;
