import Cart from "../Cart/Cart";
import { useQuery } from "@tanstack/react-query";
import { useSearch } from "../Hooks/SearchContext";
import { NavLink } from "react-router-dom";
import slugify from "slugify";

interface Card {
  id: string;
  title: string;
  price: string;
  address: string;
  image: string;
  addressimage: string;
}

const fetchCards = async (query: string): Promise<Card[]> => {
  const response = await fetch(`/db.json`);
  const data = await response.json();
  if (!query.trim()) {
    return data.cards;
  }

  return data.cards.filter((card: Card) =>
    card.title.toLowerCase().includes(query.toLowerCase())
  );
};
const handleClick = () => {
  <Cart />;
};
const Page2 = () => {
  const { searchQuery } = useSearch();
  const {
    data: cards,
    data,
    isLoading,
    error,
    isError,
    refetch,
    isFetching,
  } = useQuery<Card[]>({
    queryKey: ["cards", searchQuery],
    queryFn: () => fetchCards(searchQuery),
    retry: 2,
    staleTime: 10000,
  });

  const limitedCards = cards?.slice(0, 12);
  const handleRetry = () => {
    refetch();
  };
  return (
    <section className="w-full min-h-screen bg-gray-50 py-8 overflow-x-hidden">
      <div className="w-full px-4 lg:px-4">
        {(isLoading || isFetching) && (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
          </div>
        )}
        {isError && (
          <div className="flex flex-col items-center justify-center min-h-[200px] gap-4">
            <p className="text-center text-red-600 font-semibold">
              Error: {error instanceof Error ? error.message : "Unknown error"}
            </p>
            <button
              className="bg-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-800 transition"
              onClick={handleRetry}
            >
              Retry
            </button>
          </div>
        )}
        {!isLoading && !isError && data && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {limitedCards?.map((card) => (
              <NavLink
                key={card.id}
                to={`/product/${slugify(card.title, { lower: true })}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  className="bg-white rounded-2xl shadow border-2 border-[#E7E7E7] hover:shadow-lg hover:border-[#303B97] transition flex flex-col h-full cursor-pointer"
                  onClick={handleClick}
                >
                  <img
                    src={card.image}
                    className="w-full h-64 object-cover rounded-t-2xl"
                    alt={card.title}
                  />
                  <div className="flex-1 flex flex-col p-4 gap-2">
                    <h5 className="text-lg font-bold text-black truncate">
                      {card.title}
                    </h5>
                    <p className="text-xl font-semibold text-[#303B97]">
                      &#8364;{card.price}
                    </p>
                    <p className="flex items-center gap-2 text-black text-sm">
                      <img
                        src={card.addressimage}
                        alt=""
                        className="h-5 w-5 inline-block"
                      />
                      {card.address}
                    </p>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Page2;
