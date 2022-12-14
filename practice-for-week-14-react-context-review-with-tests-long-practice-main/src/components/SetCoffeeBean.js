import { useContext } from "react";
import { CoffeeContext } from "../context/CoffeeContext";

const SetCoffeeBean = ({ coffeeBeans }) => {

  const {coffeeBean, setCoffeeBeanId} = useContext(CoffeeContext);
  // console.log(coffeeBeans)

  const handleChange = (e) => {
    e.preventDefault();
    setCoffeeBeanId(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className="set-coffee-bean">
      <h2>Select a Coffee Bean</h2>
      <select
        name="coffee-bean"
        onChange={handleChange}
        value={coffeeBean.id}
      >
        {coffeeBeans.map(bean => (
          <option
            key={bean.id}
            value={bean.id}
          >
            {bean.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SetCoffeeBean;
