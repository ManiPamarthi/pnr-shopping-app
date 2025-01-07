import { useQuery } from "react-query";
import { DetailsData } from "../types";
import { DETAILSDATA } from "../data";

export const useGetDetailsData = (
  initialData: DetailsData[] = DETAILSDATA,
) => {
  return useQuery({
		queryKey: ["detailsData"],
		queryFn: () => Promise.resolve(initialData),
	});
};
