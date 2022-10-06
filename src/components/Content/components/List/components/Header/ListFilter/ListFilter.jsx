import React, { useState } from "react";
import styles from "./ListFilter.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import ListFilterModal from "./ListFilterModal/ListFilterModal";
import Transition from "../../../../../../TransitionContainers/Transition/Transition";

const ListFilter = () => {
  const [isListFilterModalShow, setIsListFilterModalShow] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <FontAwesomeIcon
          icon={faSliders}
          onClick={() => setIsListFilterModalShow(true)}
        />
      </div>
      <Transition isShow={isListFilterModalShow} className="fade">
        <ListFilterModal setIsListFilterModalShow={setIsListFilterModalShow} />
      </Transition>
    </div>
  );
};

export default ListFilter;
