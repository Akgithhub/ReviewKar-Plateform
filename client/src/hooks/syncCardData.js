import { useEffect, useState } from "react";
import { setCards } from "@/redux/slices/cardSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const syncCardData = () => {
  const dispatch = useDispatch();
  const [isSyncing, setIsSyncing] = useState(false);
  const [error, setError] = useState(null);
  const getAllCardsApi = `${import.meta.env.VITE_API_URL}/api/card/cards`;

  useEffect(() => {
    const sync = async () => {
      setIsSyncing(true);
      setError(null);

      try {
        const res = await axios.get(getAllCardsApi);
        const resData = res.data.cards || [];
        // console.log("Response from server:", resData);
        if (res.status !== 200) {
          throw new Error("Failed to fetch cards");
        }
        dispatch(setCards(res.data.cards));

        setIsSyncing(false);
      } catch (error) {
        console.error("Error during syncCard Hook:", error);
        setError(error.message);
        setIsSyncing(false);
      }
    };

    sync();
  }, [dispatch]);

  return { isSyncing, error };
};

export default syncCardData;
