import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTabNameCate } from "../../redux/GlobalSlice";

interface ITabCategoryProps {
  dataCategory: { id: number; text: string; categoryText: string }[];
}

export default function TabCategory({ dataCategory }: ITabCategoryProps) {
  const dispatch = useDispatch();
  const { tabNameCategory } = useSelector((state: any) => state.global);
  const handleCategoryName = (categoryText: string) => {
    dispatch(setTabNameCate(`${categoryText}`));
  };

  useEffect(() => {
    dispatch(setTabNameCate("nhac-viet"));
  }, [dispatch]);
  return (
    <div className="flex items-center justify-center gap-x-[26px]">
      {dataCategory &&
        dataCategory.length > 0 &&
        dataCategory.map((item) => (
          <span
            key={item?.id}
            className={`text-[13px] font-medium capitalize cursor-pointer ${
              tabNameCategory === item?.categoryText
                ? "text-primary"
                : "text-text1"
            }`}
            onClick={() => handleCategoryName(item?.categoryText)}
          >
            {item?.text}
          </span>
        ))}
    </div>
  );
}
