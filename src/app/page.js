import styles from "./teste.module.css";
import Link from 'next/link';

export default function Home() {
  return (<>
    <div className={styles.page}>
      <h1 className={styles.titulo}>Bem-vindo à Clínica Vida Saudável!!</h1>
      <p className={styles.subtitulo}>Nossa equipe de profissionais altamente qualificados está pronta para cuidar da sua saúde com dedicação e excelência.</p>
      <p className={styles.subtitulo}>Oferecemos um atendimento humanizado, tecnologia de ponta e uma ampla gama de especialidades médicas para garantir seu bem-estar.</p>
      <div className={styles.botao_alinhamento}>
      <button className={styles.botao}>
      <Link className={styles.linka} href='/componentes/agendamento/'>Agendar Consultações</Link>
        </button>
    </div>

    </div>

    </>
  );
}