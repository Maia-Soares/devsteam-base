import styles from './subtitle.module.css'

export default function Subtitle(props) {
  // usar props para identificar o texto que queremos mostrar no site e, neste caso, dentro do subtitle. Props é uma propriedade, sendo o primeiro parâmetro de uma função que está sendo usada como componente react. Se usar console.log para idenficar oq retorna de props, vai identificar os filhos(children) que estão dentro das tag subtitle na pagina de index. Então podemos dizer aqui embaixo que queremos que eles identifiquei os filhos da tag subtitulo e mostrem eles. Também pode ser feito diretamente no lugar de "props" usar "children" como parametro e children aqui abaixo dizendo onde deve passar esse parametro.
  return <h2 className={styles.subtitle}>{props.children}</h2>
}
