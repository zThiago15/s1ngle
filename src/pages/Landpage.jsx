import React from 'react';
import { BsArrowDown, BsArrowRight } from 'react-icons/bs';
import { Avatar } from '@nextui-org/react';
import ArtistArt from '../components/landpage/ArtistArt';
import Footer from '../components/landpage/Footer';
import Gallery from '../components/landpage/Gallery';
import Header from '../components/landpage/Header';
import Artist1 from '../assets/imgs/artist1.jpeg';
import Artist2 from '../assets/imgs/artist2.jpeg';
import Artist3 from '../assets/imgs/artist3.jpeg';
import GridLayout from '../assets/imgs/bg-grid-layout.svg';
import Art from '../assets/imgs/art.svg';
import Blob from '../assets/imgs/symbols/blob.svg';
import Sparkle from '../assets/imgs/symbols/sparkle.svg';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="overflow-hidden">
        <article>
          <img className="absolute top-0 right-0 w-[30rem] -z-10" src={GridLayout} alt="grid layout" />
          <section className="w-[450px] mt-16 ml-4 w-full flex justify-around">
            <div>
              <img src={Blob} alt="blob" className="absolute -z-10 w-36 mb-5" />
              <h1 className="w-[500px] text-3xl mt-10 ml-10">
                Descubra
                <strong> Artistas Underground </strong>
                e
                <strong> Artes exclusivas</strong>
              </h1>
              <span className="flex items-center mt-24">
                <Avatar.Group className="ml-10">
                  <Avatar src={Artist1} alt="artist name 1" size="xl" />
                  <Avatar src={Artist2} alt="artist name 2" size="xl" />
                  <Avatar src={Artist3} alt="artist name 3" size="xl" />
                </Avatar.Group>
                <div>
                  <strong className="text-2xl">100+</strong>
                  <p className="text-lg text-[#858585]">Os melhores artistas</p>
                </div>
              </span>
              <BsArrowDown className="text-[50px] mt-5 ml-10" />
            </div>
            <div className="flex mr-56 items-end">
              <img src={Art} alt="Abstract art" className="w-80" />
              <div className="ml-2 flex flex-col">
                <span>
                  <h2 className="text-white text-lg font-bold">52.1K+</h2>
                  <p className="text-darkgrey">Artes</p>
                </span>
                <span>
                  <h2 className="text-white text-lg font-bold">1.3M+</h2>
                  <p className="text-darkgrey">Artistas</p>
                </span>
                <span>
                  <h2 className="text-white text-lg font-bold">40K+</h2>
                  <p className="text-darkgrey">Vendas</p>
                </span>
              </div>
            </div>
          </section>
        </article>

        <section className="mt-24">
          <div className="w-full bg-[#D9D9D9] h-[150px] flex justify-between items-center p-5 relative -z-10">
            <span className="flex items-center">
              <img src={Sparkle} alt="sparkles" className="mr-5 w-8" />
              <h2 className="text-2xl">
                Escolha do
                <strong> Editor</strong>
              </h2>
              <img src={Blob} alt="blob" className="relative right-8 bottom-2 -z-[1]" />
            </span>
            <button type="button" className="flex items-center w-28 justify-between hover:bg-red-700">
              Ver tudo
              <BsArrowRight className="bg-black text-white w-10 h-10 p-2 rounded-[50%]" />
            </button>
          </div>
          <div className="flex justify-evenly relative bottom-5">
            <ArtistArt />
            <ArtistArt />
            <ArtistArt />
          </div>
        </section>

        <section className="mt-24">
          <div className="w-full bg-[#D9D9D9] h-[150px] flex justify-between items-center p-5 relative -z-10">
            <span className="flex items-center">
              <img src={Sparkle} alt="sparkles" className="mr-5 w-8" />
              <h2 className="text-2xl">
                Nossas
                <strong> Galerias</strong>
              </h2>
              <img src={Blob} alt="blob" className="relative right-8 bottom-2 -z-[1]" />
            </span>
            <button type="button" className="flex items-center w-28 justify-between hover:bg-red-700">
              Ver tudo
              <BsArrowRight className="bg-black text-white w-10 h-10 p-2 rounded-[50%]" />
            </button>
          </div>
          <div className="flex justify-evenly relative bottom-5">
            <Gallery />
            <Gallery />
            <Gallery />
          </div>
        </section>

        <section>
          <div className="flex items-center w-[28em] m-auto mt-16">
            <img src={Sparkle} alt="sparkle" className="w-10 mr-5" />
            <h2 className="text-3xl">
              Os melhores
              <strong> artistas</strong>
            </h2>
            <img src={Blob} alt="Blob" className="w-14 relative -z-10 right-4" />
          </div>

          <span className="flex w-[750px] m-auto">
            <div className="border-2 border-black w-64 rounded-2xl p-3 m-5">
              <p className="text-xl">Punk Doddled Apes</p>
              <small className="text-sm text-darkgrey">20.600+ item</small>
            </div>
            <div className="border-2 border-black w-64 rounded-2xl p-3 m-5">
              <p className="text-xl">Punk Doddled Apes</p>
              <small className="text-sm text-darkgrey">20.600+ item</small>
            </div>
            <div className="border-2 border-black w-64 rounded-2xl p-3 m-5">
              <p className="text-xl">Punk Doddled Apes</p>
              <small className="text-sm text-darkgrey">20.600+ item</small>
            </div>
          </span>
        </section>

        <section>
          <div className="flex items-center w-[28em] m-auto mt-16">
            <img src={Sparkle} alt="sparkle" className="w-10 mr-5" />
            <h2 className="text-3xl">
              Como ser um
              <strong> Criador</strong>
            </h2>
            <img src={Blob} alt="Blob" className="w-14 relative -z-10 right-4" />
          </div>

          <ol className="flex justify-between m-8">
            <li className="w-[30%] bg-[#E0E0E0] h-[15em] flex flex-col justify-between text-center">
              <h3 className="text-xl mt-2">Passo 1</h3>
              <strong>Crie uma conta</strong>
              <p className="text-darkgrey">
                Adicione todos os dado solicitados no cadastro e envie as documentações necessárias
              </p>
            </li>
            <li className="w-[30%] bg-[#E0E0E0] h-[15em] flex flex-col justify-between text-center">
              <h3 className="text-xl">Passo 2</h3>
              <strong>Aguarde aprovação</strong>
              <p className="text-darkgrey">
                Nossa equipe irá analisar seus dados em até 24 horas, e caso aprovado,
                receberá instruções por e-mail.
              </p>
            </li>
            <li className="w-[30%] bg-[#E0E0E0] h-[15em] flex flex-col justify-between text-center">
              <h3 className="text-xl">Passo 3</h3>
              <strong>Publique e venda seu trabalho!</strong>
              <p className="text-darkgrey">
                Complete seu perfil, cadastre produtos, galerias
                e colabs e pronto, nós fazemos todo o resto.
              </p>
            </li>
          </ol>
        </section>

        <span className="bg-black h-[10em] flex items-center justify-evenly my-16">
          <p className="text-white text-2xl">
            Junte-se a nossa
            <strong className="text-white"> Comunidade</strong>
          </p>
          <div>
            <input className="p-2 rounded mr-5" type="email" placeholder="Seu e-mail" />
            <button type="button" className="text-white border-2 border-white p-2 rounded-3xl">Juntar-se</button>
          </div>
        </span>
      </main>

      <Footer />
    </div>
  );
}
