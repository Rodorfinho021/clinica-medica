import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import styles from "./page.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MedCenter",
  description: "Sistema de Gestão Médica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.corpo}>
        <div className={styles.page}>
          
         

          
          <div className={styles.header}>
          <div className={styles.logo}>
            Med<span className={styles.color_logo}>Center</span>
          </div>
            <div className={styles.conteudo}>
              <ul className={styles.divisao}>
              
              
              <li>
             
              <Link className={styles.home} href="/">HOME</Link>
                </li>
             

                <li>
                  MÉDICO
                  <div className={styles.element}>
                    <ul>
                      <li>
                        <Link className={styles.home} href="/componentes/medico/">Listar</Link>
                      </li>
                      <li>Adicionar</li>
                      <li>Editar</li>
                      <li>Excluir</li>
                    </ul>
                  </div>
                </li>
                <li>
                  PACIENTE
                  <div className={styles.element}>
                    <ul>
                      <li>
                        <Link className={styles.home}  href="/componentes/paciente/">Listar</Link>
                      </li>
                      <li>Adicionar</li>
                      <li>Editar</li>
                      <li>Excluir</li>
                    </ul>
                  </div>
                </li>
                <li>
                  CONSULTA
                  <div className={styles.element}>
                    <ul>
                      <li>
                        <Link className={styles.home}  href="/componentes/consul/">Listar</Link>
                      </li>
                      <li>Adicionar</li>
                      <li>Editar</li>
                      <li>Excluir</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <main>{children}</main>
        </div>
        </div>
      </body>
    </html>
  );
}
