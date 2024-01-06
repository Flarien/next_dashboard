import { montserrat } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        {/* children es el contenido de la pagina */}
        <footer className='py-10 flex justify-center items-center'>
          Esto es el footer
        </footer>
      </body>
    </html>
  );
}
