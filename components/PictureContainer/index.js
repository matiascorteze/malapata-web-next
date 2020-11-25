import { useState } from "react"
import Image from 'next/image'
import styles from "./PictureContainer.module.css"

export default function PictureContainer({ props }) {

  const { main_img, alt_img } = props;
  const [currentPic, setCurrentPic] = useState(main_img);

  function handleClick(img) {
    setCurrentPic(img)
    console.log(img, currentPic);
  }

  return (
    <div className={styles.pictureContainer}>
      <Image
        className={styles.bigPicture}
        src={currentPic}
        alt="Main"
        width={500}
        height={500}
      />
      <div className={styles.smallPictureList}>
        {alt_img.map((img, key) => {
          return (
            <Image
              className={styles.smallPicture}
              src={img}
              alt="Picture of the author"
              width={500}
              height={500}
              key={key}
              onClick={() => handleClick(img)}
            />
          )
        })}
      </div>
    </div>
  )
}