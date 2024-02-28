import { useContext, useState } from "react";
import DiscountIcon from "../assets/icons/DiscountIcon";
import HandGrabIcon from "../assets/icons/HandGrabIcon";
import HighlightOffIcon from "../assets/icons/HighlightOffIcon";
import PaymentIcon from "../assets/icons/PaymentIcon";
import CustomerInfo from "../components/CustomerInfo";
import ItemsSummary from "../components/ItemSummary.jsx";
import ItemTable from "../components/ItemTable";
import PaymentButton from "../components/PaymentButton";
import SearchBar from "../components/SearchBar";
import style from "../styles/pages/pos.module.css";
import categories from "../data/categories.json";
import CategoryModal from "../components/CategoryModal";
import ItemCart from "../components/ItemCart";
import { dummyItems } from "../data/items.js";
import { isItemExist } from "../utility/itemExistCheck";
import OrderInfoTopBar from "../components/OrderinfoTopBar.jsx";
import PayNow from "./pos/PayNow";
import { Context } from "../context/store";
import CategoryBar from "../components/CategoryBar";
function POS() {
  const { state, actions } = useContext(Context);
  const [items, setItems] = useState(dummyItems);
  const [selectItems, setSelectItems] = useState([
    {
      id: 1,
      name: "Pure White & Black Sleeve",
      unitPrice: "91.00",
      quantity: 1,
    },
    {
      id: 2,
      name: "Levi's Red Tab Florence",
      unitPrice: "45.00",
      quantity: 2,
    },
    {
      id: 3,
      name: "Black & Curve Cooler",
      unitPrice: "115.00",
      quantity: 3,
    },
    { id: 4, name: "Navi Blue", unitPrice: "91.00", quantity: 2 },
  ]);
  const [activeCategory, setActiveCategory] = useState("/");
  const [categoryModalShow, setCategoryModalShow] = useState(false);
  const subTotal = selectItems.reduce(
    (prev, curr) => prev + curr.unitPrice * curr.quantity,
    0
  );
  const othersPrice = {
    tax: 25.5,
    shipping: 5.5,
    discount: 10,
  };
  const itemAddHandler = (item) => {
    if (isItemExist(item, selectItems)) {
      alert("Item Already Added");
      return;
    }
    item.quantity = 1;
    setSelectItems((prev) => {
      return [...prev, ...[item]];
    });
  };
  const categoryFilterHandler = (categoryName) => {
    setActiveCategory(categoryName);
    categoryModalShow && setCategoryModalShow(false);
    if (categoryName === "/") {
      setItems(dummyItems);
    } else {
      setItems(dummyItems.filter(({ category }) => category === categoryName));
    }
  };
  return (
    <section>
      <div className="">
        <div className={style.wrapper}>
          <div className={style.items__cart__wrapper}>
            <OrderInfoTopBar />
            <CustomerInfo />
            <ItemTable items={selectItems} setItems={setSelectItems} />
            <ItemsSummary
              othersPrice={othersPrice}
              subTotal={subTotal}
              productCount={selectItems.length}
            />
            <div className={style.payment__btn__wrapper}>
              <PaymentButton title="Cancel" bgColor="#F9D9D8" color="#E0514F">
                <HighlightOffIcon color="#E0514F" />
              </PaymentButton>
              <PaymentButton title="Hold" bgColor="#D9DDF0" color="#5162B9">
                <HandGrabIcon color="#5162B9" />
              </PaymentButton>
              <PaymentButton title="Discount" bgColor="#D9DDF0" color="#5162B9">
                <DiscountIcon color="#2F6CCF" />
              </PaymentButton>
              <PaymentButton
                title="Pay Now"
                bgColor="#D1DFF5"
                color="#2F6CCF"
                clickHandler={() => actions.setPayNowShow(true)}
              >
                <PaymentIcon color="#2F6CCF" />
              </PaymentButton>
            </div>
          </div>
          <div className={style.items__gallery__wrapper}>
            {state.isPayNowShow ? (
              <PayNow subTotal={subTotal} othersPrice={othersPrice} />
            ) : (
              <>
                <SearchBar />
                <div className={style.item__inner__wrapper}>
                  <CategoryBar
                    activeCategory={activeCategory}
                    categoryFilterHandler={categoryFilterHandler}
                    setCategoryModalShow={setCategoryModalShow}
                  />
                  <CategoryModal
                    activeCategory={activeCategory}
                    categories={categories}
                    categoryModalShow={categoryModalShow}
                    setCategoryModalShow={setCategoryModalShow}
                    filterHandler={categoryFilterHandler}
                  />
                  <div className={style.item__wrapper}>
                    {items.map((item) => (
                      <ItemCart
                        key={Math.random()}
                        item={item}
                        clickHandler={itemAddHandler.bind(null, item)}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default POS;
