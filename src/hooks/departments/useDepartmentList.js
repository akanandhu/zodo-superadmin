import { useQuery } from "@tanstack/react-query";
import { getDepartmentList } from "../../apis/departments";

export const useDepartmentList = (id) => {
  return useQuery({
    queryKey: ["departments"], // Unique query key
    queryFn: () => getDepartmentList(id),
  });
};
