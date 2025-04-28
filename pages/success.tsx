import Link from "next/link";

export default function Success() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-violetGradientStart to-violetGradientEnd">
      <h1 className="text-4xl font-heading text-white mb-6">
        Bravo ! Tu as repoussé tes limites.
      </h1>
      <Link href="/">
        <a className="mt-4 bg-white text-purple-700 px-6 py-3 rounded-full font-semibold text-lg hover:bg-purple-100 transition">
          Retourner à la boutique
        </a>
      </Link>
    </div>
  );
}
