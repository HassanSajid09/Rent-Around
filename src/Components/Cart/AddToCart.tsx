import slugify from "slugify";
import NavBar from "../Layout/NavBar";
import Page6 from "../Pages/Page6";
import { useCart } from "../Hooks/UseCart";
import toast, { Toaster } from "react-hot-toast";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { SearchProvider } from "../Hooks/SearchContext";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
interface Cards {
  id: string;
  title: string;
  image: string;
  price: number;
}

const fetchCards = async (): Promise<Cards[]> => {
  const response = await fetch("/db.json");
  const data = await response.json();
  return data.cards;
};
const notify = () => toast.success("Added To Cart!");

const AddToCart = () => {
  const { title } = useParams<{ title: string }>();
  const { addItemToCart } = useCart();
  const {
    data: cards,
    isLoading,
    error,
  } = useQuery<Cards[]>({
    queryKey: ["cards"],
    queryFn: fetchCards,
  });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: Something went wrong!</p>;

  const card = cards?.find((c) => slugify(c.title, { lower: true }) === title);
  if (!card) return <p>Product not found!</p>;
  const handleAddToCart = () => {
    addItemToCart.mutate({
      id: card.id,
      title: card.title,
      price: card.price,
      image: card.image,
      quantity: 1,
    });
  };

  return (
    <SearchProvider>
      <NavBar />
      <div className="w-full mx-auto px-4 md:px-6 py-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Image and Description */}
          <div className="w-full flex flex-col max-w-4xl">
            <h2 className="text-3xl font-bold mb-4">{card.title}</h2>
            <img
              src={card.image}
              alt={card.title}
              className="rounded-lg object-cover mb-6"
            />
            <div className="bg-[#f6f6f7] rounded-xl p-5 mb-4 border border-gray-200">
              <h3 className="text-xl font-semibold mb-2">
                Product Description
              </h3>
            </div>
            <div className="bg-white rounded-lg p-4 text-base border border-gray-200">
              <p>Product Description</p>
            </div>
          </div>
          {/* Right: Price, Date, Total, Button, Map */}
          <div className="md:w-2/3 py-4 w-full flex flex-col gap-6">
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex justify-between items-center pb-4">
                <h3 className="text-lg font-semibold">Price</h3>
                <span className="text-xl font-bold">
                  &#8364;{Number(card.price).toFixed(2)}
                </span>
              </div>
              <div className="pb-8">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker", "DatePicker"]}>
                    <div className="grid grid-cols-2 gap-4">
                      <DemoItem label="Check In">
                        <DatePicker />
                      </DemoItem>
                      <DemoItem label="Check Out">
                        <DatePicker maxDate={dayjs("2022-04-17")} />
                      </DemoItem>
                    </div>
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <hr className="py-4" />
              <div className="flex justify-between items-center pb-14">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-xl font-bold">
                  &#8364;{Number(card.price).toFixed(2)}
                </span>
              </div>
              <button
                className="bg-[#303B97] hover:bg-[#1f2d6f] text-white font-semibold py-3 px-10 sm:px-32 rounded transition-colors mb-6 mx-auto block"
                style={{ marginLeft: undefined }}
                onClick={() => {
                  handleAddToCart();
                  notify();
                }}
              >
                Add to cart
              </button>
              <Toaster position="bottom-center" />
            </div>
            <div className="bg-white rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.9481664299196!2d71.71211367498562!3d29.40107234876753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b91b06dcbcb9b%3A0xb4d44444d2e8acdd!2sCommercial%20area!5e0!3m2!1sen!2s!4v1738063213152!5m2!1sen!2s"
                style={{ border: "0" }}
                className="w-full"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Page6 />
    </SearchProvider>
  );
};

export default AddToCart;
