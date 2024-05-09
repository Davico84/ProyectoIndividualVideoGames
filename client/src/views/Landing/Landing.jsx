import React from "react";
import styles from "./Landing.module.css";
import { Link } from "react-router-dom";
import Pie from "../../components/Pie/Pie";
const Landing = () => {
  return (
    // <div>Landing</div>.
    <>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.main_parte1}>
            <div className={styles.main_foto1} />

            <div className={styles.main_fonfo_titu}></div>
            <div className={styles.main_titulo}>TODO VIDEO GAMES</div>
            <div className={styles.main_parte1_fin}></div>
            <div className={styles.main_parte1_boton}>
              <Link to="/home">
                <div className={styles.ov_btn_slide_right}>Ver más...</div>
              </Link>
            </div>
          </div>

          <div className={styles.parte2}>
            <div className={styles.parte2_subtitulo}>Caracteristicas</div>
            <div className={styles.parte2_contenido}>
              Este es un sitio web en el que puedes encontrar información
              relacionada a todos los juegos que te puedas imaginar, sin
              importar la plataforma de creación, año, versiones, etc. Acceder a
              contenido exclusivo, información detallada, inclusive puedes
              registrar nuevos juegos, hacer búsquedas de videojuegos por
              nombres, por géneros entre otros.
            </div>
            <div className={styles.parte2_raya_1} />
            <div className={styles.parte2_raya_2} />
          </div>

          <div className={styles.parte3}>
            <div className={styles.parte3_fondo} />
            <div className={styles.parte3_cabecera} />
            <div className={styles.parte3_cards}>
              <div className={styles.parte3_cabecera1}>
                <div className={styles.parte3_cabecera_text}>
                  Injustice: Gods Among Us Ultimate Edition
                </div>
                <div className={styles.parte3_caja}>
                  <div className={styles.parte3_caja1}></div>
                </div>
              </div>
              <div className={styles.parte3_cabecera2}>
                <div className={styles.parte3_cabecera_text}>
                  The Witcher 3: Wild Hunt
                </div>
                <div className={styles.parte3_caja}>
                  <div className={styles.parte3_caja2}></div>
                </div>
              </div>
              <div className={styles.parte3_cabecera3}>
                <div className={styles.parte3_cabecera_text}>
                  Tomb Raider (2013)
                </div>
                <div className={styles.parte3_caja}>
                  <div className={styles.parte3_caja3}></div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.parte4}>
            <Pie />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
