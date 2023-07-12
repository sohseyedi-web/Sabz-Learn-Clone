import "./Sidebar.scss";
import Select from "react-select";

const options = [
  { value: "highest", label: "گران ترین" },
  { value: "lowest", label: "ارزان ترین" },
  { value: "free", label: "رایگان" },
];
const course = [
  { value: "highest", label: "گران ترین" },
  { value: "lowest", label: "ارزان ترین" },
  { value: "free", label: "رایگان" },
];
const love = [
  { value: "highest", label: "گران ترین" },
  { value: "lowest", label: "ارزان ترین" },
  { value: "free", label: "رایگان" },
];

const Sidebar = () => {
  return (
    <aside className="side">
        <h5 className="side-title">دسته بندی :</h5>
        <Select options={options} placeholder="بر اساس قیمت" className="side-select"/>
        <Select options={course} placeholder="بر اساس نام" className="side-select"/>
        <Select options={course} placeholder="بر اساس تاریخ" className="side-select"/>
    </aside>
  );
};

export default Sidebar;
