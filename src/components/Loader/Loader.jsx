import { MagnifyingGlass } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loader}>
      <b className={css.loaderText}>Loading...</b>
      <MagnifyingGlass visible={true} height="90" width="90" ariaLabel="magnifying-glass-loading" wrapperStyle={{}} wrapperClass="magnifying-glass-wrapper" glassColor="#ebe9e1" color="#ca0065" />
    </div>
  );
}
