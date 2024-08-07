"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Modal from './components/modal';

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    let timer;
    if (modalIsOpen) {
      timer = setTimeout(() => {
        window.location.href = 'https://livepix.gg/devaneioshow';
      }, 2200);
      return () => clearTimeout(timer);
    }
  }, [modalIsOpen]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [latestVideoUrl, setLatestVideoUrl] = useState('');

  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        const response = await fetch('/api/latest-video');
        const data = await response.json();
        setLatestVideoUrl(data.videoUrl);
      } catch (error) {
        console.error('Failed to fetch latest video', error);
      }
    };
    fetchLatestVideo();
  }, []);

  return (
    <main>
      <div className="bg-yellow-500 w-full text-center p-4">
        <h3 className="mb-3 font-bold text-2xl">MANDA UM PIX PARA MANTER ESSA PARADA</h3>
        <p>precisamos pagar o Karatê da vó da cris 😭</p>
        <button 
          onClick={openModal} 
          className="text-white p-2 bg-red-600 rounded-md text-xl font-semibold hover:bg-gray-600 mt-4 px-10"
        >
          Clique aqui
        </button>
      </div> 
      <div className="flex justify-center mt-6">
        <Image
          src="/devaneio.png"
          alt="Descrição da imagem"
          width={320}
          height={320}
          className="block"
        />
      </div>
      <div className="flex justify-center items-center text-center mt-6 p-3">
        <div className="space-y-4">
          <a href="https://www.youtube.com/watch?v=83SyyaLQdNo" className="block bg-gray-900 text-white p-2 rounded-md text-xl font-semibold hover:bg-gray-600">Último episódio</a>
          <a href="https://www.instagram.com/devaneioshow" className="block bg-gray-900 text-white p-2 rounded-md text-xl font-semibold hover:bg-gray-600">Instagram</a>
          <a href="https://livepix.gg/devaneioshow" className="block bg-gray-900 text-white p-2 rounded-md text-xl font-semibold hover:bg-gray-600">Pix do ❤️</a>
          <a href="mailto:caixa@devaneioshow.com" className="block bg-gray-900 text-white p-2 rounded-md text-xl font-semibold hover:bg-gray-600">Mande Um Depoimento</a>
          <span className="text-xl">ou manda um email para <b>📦 caixa@devaneioshow.com</b></span>
          <span className="block font-light">Obrigado 🤝🌻</span>
        </div>
      </div>

      <Modal isOpen={modalIsOpen} onClose={closeModal}>
        <Image
          src="/zepilintra.jpg"
          alt="Descrição da imagem"
          width={500}
          height={300}
          className="rounded-md shadow-lg"
        />
      </Modal>
    </main>
  );
};

export default Home;
