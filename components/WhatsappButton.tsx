
import Image from "next/image";
import Link from "next/link";

const WHATSAPP_NUMBER = "9908727027"; 

export default function WhatsappButton() {
  return (
    <Link
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce hover:scale-110 transition-transform duration-300">
        <Image
          src="/whatsapp.webp"
          alt="WhatsApp"
          width={32}
          height={32}
        />
      </div>
    </Link>
  );
}
