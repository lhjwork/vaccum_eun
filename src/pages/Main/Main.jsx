import React from "react";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.flex_wrapper}>
      <a href="" className={styles.one}>
        <div className={styles.overlay}>
          <div className={styles.overlay_inner}>
            <h2>소식</h2>
            <p>ECOSAFESA의 최식 소식을 확인해보세요.</p>
          </div>
        </div>
      </a>
      <a href="" className={styles.two}>
        <div className={styles.overlay}>
          <div className={styles.overlay_inner}>
            <h2>Products</h2>
            <p>
              ECOSAFE는 리튬 이온 배터리 보관용 캐비닛,리튬 이온 배터리 보관용
              캐비닛 등의 보관 및 유출 통제를 위한 안전 장비 관련 제품을
              제공하며, ECOSAFE의 더 많은 제품군과 서비스를 확인 하실 수
              있습니다.
            </p>
          </div>
        </div>
      </a>
      <a href="" className={styles.three}>
        <div className={styles.overlay}>
          <div className={styles.overlay_inner}>
            <h2>회사소개</h2>
            <p>
              ECOSAFE는 보관(안전 보관 캐비닛 포함)부터 화학 물질 조작(덕트 없는
              흄 후드 포함)에 이르기까지 이 분야에서 전 세계적으로 가장 광범위한
              안전 제품을 제공하는 스위스 최초의 안전 제품 공급업체입니다
            </p>
            <p>
              산업, 실험실, 대학의 화학 물질 조작 및 보관 분야에서 40년 이상
              전문적으로 활동해 온 ECOSAFE는 전체 제품 범위를 제공하는 완전히
              새로운 카탈로그를 선보이게 되어 기쁘게 생각합니다
            </p>
          </div>
        </div>
      </a>
      <a href="" className={styles.four}>
        <div className={styles.overlay}>
          <div className={styles.overlay_inner}>
            <h2>카탈로그</h2>
            <p>ECOSAFE의 상품 및 회사소개 카탈로그를 보실 수 있습니다.</p>
          </div>
        </div>
      </a>
      <a href="" className={styles.five}>
        <div className={styles.overlay}>
          <div className={styles.overlay_inner}>
            <h2>게시판&Contact</h2>
            <p>
              ECOSAFE에 언제든 연락 주세요. 최고의 서비스로 안내해 드리겠습니다.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Main;
