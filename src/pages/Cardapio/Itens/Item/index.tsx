import logo from "assets/logo.svg";
import styles from "./item.module.scss";
import cardapio from '../../Itens/itens.json'
import classNames from 'classnames'


type Props = typeof cardapio[0]

export default function Item(props: Props) {
  
  const {title, description, category, size, serving, price, photo} = props

  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={photo} alt="imagem" />
      </div>

      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className={styles.item__tags}>
          <div className={classNames({
            [styles.item__tipo]: true,
            [styles[`item__tipo__${category.label.toLowerCase()}`]]: true

          })}>{category.label}</div>
          <div className={styles.item__porcao}>{size}g</div>
          <div className={styles.item__qtdPessoas}>Serve {serving} pessoa{serving === 1 ?  '' : 's'}</div>
          <div className={styles.item__valor}>{price}</div>
        </div>
      </div>
    </div>
  );
}
