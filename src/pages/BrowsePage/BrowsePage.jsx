import { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";

import PopularGenre from "../../components/BrowsePageComponents/PopularGenre";
import styles from "./browse-page.module.css";
import Data from "../../Data.json";
import GameCard from "../../components/BrowsePageComponents/GameCard";
import FilterModal from "../../components/BrowsePageComponents/Filters/FilterModal";

const BrowsePage = () => {
  const [sortingModal, setSortingModalState] = useState(false);

  const [filterModal, setFilterModal] = useState(false);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.containter}>
          <PopularGenre />
          <div className={styles.main_container}>
            <div className={styles.data_wrapper}>
              <div className={styles.filters_sorting_container}>
                <div className={styles.sorting}>
                  <p className={styles.sorting_para}>
                    Sort By: <span>New release</span>
                  </p>
                </div>
                <div
                  onClick={() => setFilterModal(true)}
                  className={styles.filters}
                >
                  <p>Filters</p>
                  <IoFilterSharp style={{ width: "18px", height: "18px" }} />
                </div>
              </div>
              <div className={styles.data_container}>
                {Data.map((el) => (
                  <div className={styles.card_container}>
                    <GameCard
                      image={el.cardImage}
                      title={el.title}
                      tagline={el.cardTagline}
                      price={el.price.mainPrice}
                      discount={el.price.discount}
                    />
                  </div>
                ))}
              </div>
              <div className={styles.filters_desktop}>
                <FilterModal />
              </div>
            </div>
          </div>
        </div>
      </div>

      {filterModal ? (
        <div className={styles.modal_overlay}>
          <div className={styles.modal_container}>
            <FilterModal handleClose={setFilterModal} />
          </div>
          <div className={styles.bottom_navbar}>
            <div className={styles.clear}>CLEAR</div>
            <button
              onClick={() => setFilterModal(false)}
              className={styles.done}
            >
              DONE
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default BrowsePage;
